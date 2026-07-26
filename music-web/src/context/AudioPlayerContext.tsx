import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

type Track = {
  id: string;
  src: string;
  title?: string;
  artist?: string;
};

type AudioContextValue = {
  isPlaying: boolean;
  current?: Track | null;
  queue: Track[];
  queueIndex: number | null;
  play: (t: Track) => void;
  pause: () => void;
  toggle: (t?: Track) => void;
  playAlbum: (tracks: Track[]) => void;
  playFromQueueIndex: (index: number) => void;
  addToQueue: (t: Track) => void;
  setNext: (t: Track) => void;
  moveInQueue: (from: number, to: number) => void;
  skipNext: () => void;
  skipPrev: () => void;
  removeFromQueue: (index: number) => void;
};

const AudioContext = createContext<AudioContextValue | undefined>(undefined);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState<Track | null>(null);
  const [queue, setQueue] = useState<Track[]>([]);
  const [queueIndex, setQueueIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current;

    const onEnded = () => {
      // if queue available, advance
      if (queue.length > 0 && queueIndex !== null) {
        if (queueIndex < queue.length - 1) {
          const nextIndex = queueIndex + 1;
          const next = queue[nextIndex];
          if (next) {
            audio.src = next.src;
            setCurrent(next);
            setQueueIndex(nextIndex);
            audio.play().catch(() => {});
            setIsPlaying(true);
            return;
          }
        }
      }
      setIsPlaying(false);
    };
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, []);

  const play = useCallback((t: Track) => {
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current!;
    // clear queue when playing single track
    setQueue([]);
    setQueueIndex(null);
    if (current?.id !== t.id) {
      audio.src = t.src;
      setCurrent(t);
    }
    audio.play().catch(() => {});
    setIsPlaying(true);
  }, [current]);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback((t?: Track) => {
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current!;
    if (t) {
      // if different track, play it (clears the queue)
      if (current?.id !== t.id) {
        audio.src = t.src;
        setCurrent(t);
        setQueue([]);
        setQueueIndex(null);
        audio.play().catch(() => {});
        setIsPlaying(true);
        return;
      }
    }

    if (audio.paused) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [current]);

  const playAlbum = useCallback((tracks: Track[]) => {
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current!;
    if (!tracks || tracks.length === 0) return;
    setQueue(tracks);
    setQueueIndex(0);
    const first = tracks[0];
    audio.src = first.src;
    setCurrent(first);
    audio.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const playFromQueueIndex = useCallback((index: number) => {
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current!;
    if (index < 0 || index >= queue.length) return;
    const t = queue[index];
    setQueueIndex(index);
    audio.src = t.src;
    setCurrent(t);
    audio.play().catch(() => {});
    setIsPlaying(true);
  }, [queue]);

  const addToQueue = useCallback((t: Track) => {
    setQueue((q) => [...q, t]);
  }, []);

  const setNext = useCallback((t: Track) => {
    setQueue((q) => {
      const idx = queueIndex === null ? 0 : queueIndex + 1;
      const copy = [...q];
      copy.splice(idx, 0, t);
      return copy;
    });
  }, [queueIndex]);

  const skipNext = useCallback(() => {
    if (!audioRef.current) return;
    setQueueIndex((qi) => {
      if (qi === null) return null;
      const next = qi + 1;
      if (next >= queue.length) {
        audioRef.current!.pause();
        setIsPlaying(false);
        return null;
      }
      const t = queue[next];
      audioRef.current!.src = t.src;
      setCurrent(t);
      audioRef.current!.play().catch(() => {});
      setIsPlaying(true);
      return next;
    });
  }, [queue]);

  const skipPrev = useCallback(() => {
    if (!audioRef.current) return;
    setQueueIndex((qi) => {
      if (qi === null || qi <= 0) return qi;
      const prev = qi - 1;
      const t = queue[prev];
      audioRef.current!.src = t.src;
      setCurrent(t);
      audioRef.current!.play().catch(() => {});
      setIsPlaying(true);
      return prev;
    });
  }, [queue]);

  const removeFromQueue = useCallback((index: number) => {
    setQueue((q) => q.filter((_, i) => i !== index));
    setQueueIndex((qi) => {
      if (qi === null) return null;
      if (index < qi) return qi - 1;
      if (index === qi) return null;
      return qi;
    });
  }, []);

  const moveInQueue = useCallback((from: number, to: number) => {
    setQueue((q) => {
      if (from < 0 || from >= q.length || to < 0 || to >= q.length) return q;
      const copy = [...q];
      const [item] = copy.splice(from, 1);
      copy.splice(to, 0, item);
      return copy;
    });
    setQueueIndex((qi) => {
      if (qi === null) return null;
      if (qi === from) return to;
      if (from < qi && to >= qi) return qi - 1;
      if (from > qi && to <= qi) return qi + 1;
      return qi;
    });
  }, []);

  const value: AudioContextValue = {
    isPlaying,
    current,
    queue,
    queueIndex,
    play,
    pause,
    toggle,
    playAlbum,
    playFromQueueIndex,
    addToQueue,
    setNext,
    skipNext,
    skipPrev,
    removeFromQueue,
    moveInQueue,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export default AudioContext;
