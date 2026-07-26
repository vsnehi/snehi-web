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
  play: (t: Track) => void;
  pause: () => void;
  toggle: (t?: Track) => void;
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

  useEffect(() => {
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current;

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, []);

  const play = useCallback((t: Track) => {
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current!;
    if (current?.id !== t.id) {
      audio.src = t.src;
      setCurrent(t);
    }
    audio.play();
    setIsPlaying(true);
  }, [current]);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback((t?: Track) => {
    if (!t && !current) return;
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current!;
    if (t && current?.id !== t.id) {
      // play new track
      audio.src = t.src;
      setCurrent(t);
      audio.play();
      setIsPlaying(true);
      return;
    }
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [current]);

  const value: AudioContextValue = {
    isPlaying,
    current,
    play,
    pause,
    toggle,
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

export default AudioContext;
