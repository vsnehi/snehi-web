import React from 'react';
import styles from './MusicVisualizer.module.scss';
import { useAudio } from '../../context/AudioPlayerContext';

const MusicVisualizer: React.FC = () => {
  const { isPlaying } = useAudio();

  return (
    <div aria-hidden className={styles.visualizer} data-playing={isPlaying}>
      <div className={styles.disco} />
      <div className={styles.dancer} />
    </div>
  );
};

export default MusicVisualizer;
