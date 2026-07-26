import React from 'react';
import styles from './PlayerQueue.module.scss';
import { useAudio } from '../../context/AudioPlayerContext';

const PlayerQueue: React.FC = () => {
  const { queue, queueIndex, playFromQueueIndex, moveInQueue, removeFromQueue } = useAudio();

  if (!queue || queue.length === 0) return null;

  return (
    <aside className={styles.queue} aria-label="Player queue">
      <div className={styles.heading}>Up Next</div>
      <ul className={styles.list}>
        {queue.map((t, i) => (
          <li key={t.id} className={`${styles.item} ${queueIndex === i ? styles.current : ''}`}>
            <div className={styles.meta}>
              <div className={styles.title}>{t.title}</div>
              <div className={styles.artist}>{t.artist}</div>
            </div>
            <div className={styles.controls}>
              <button className={styles.btn} onClick={() => playFromQueueIndex(i)}>Play</button>
              {i > 0 && <button className={styles.btn} onClick={() => moveInQueue(i, i - 1)}>↑</button>}
              {i < queue.length - 1 && <button className={styles.btn} onClick={() => moveInQueue(i, i + 1)}>↓</button>}
              <button className={styles.btn} onClick={() => removeFromQueue(i)}>✕</button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PlayerQueue;
