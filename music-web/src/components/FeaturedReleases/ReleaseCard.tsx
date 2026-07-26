import { motion } from 'framer-motion';
import styles from './ReleaseCard.module.scss';
import type { FC } from 'react';
import { useAudio } from '../../context/AudioPlayerContext';

interface ReleaseCardProps {
  release: {
    id: number;
    title: string;
    artist: string;
    image: string;
    audio?: string;
  };
}

const ReleaseCard: FC<ReleaseCardProps> = ({ release }) => {
  const { toggle, current, isPlaying } = useAudio();

  const isCurrent = current?.id === `featured-${release.id}` && isPlaying;

  const handlePlay = () => {
    if (!release.audio) return;
    toggle({ id: `featured-${release.id}`, src: release.audio, title: release.title, artist: release.artist });
  };

  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className={styles.imageWrap}>
        <img src={release.image} alt={release.title} />
        <div className={styles.gradientOverlay} />
        <button className={styles.playButton} type="button" aria-label={`Play ${release.title}`} onClick={handlePlay}>
          <span className={styles.playIcon}>{isCurrent ? '⏸' : '▶'}</span>
        </button>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{release.title}</h3>
        <p className={styles.artist}>{release.artist}</p>
      </div>
    </motion.article>
  );
};

export default ReleaseCard;
