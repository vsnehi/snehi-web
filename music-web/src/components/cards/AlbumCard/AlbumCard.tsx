import type { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './AlbumCard.module.scss';

export interface AlbumCardProps {
  cover: string;
  title: string;
  artist: string;
  duration?: string;
}

const AlbumCard: FC<AlbumCardProps> = ({ cover, title, artist, duration }) => {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ translateY: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <div className={styles.coverWrap}>
        <img src={cover} alt={`${title} cover`} className={styles.cover} />
        <button className={styles.playButton} aria-label={`Play ${title}`}>
          ▶
        </button>
      </div>

      <div className={styles.meta}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.artist}>{artist}</p>
      </div>

      <div className={styles.duration}>{duration}</div>
    </motion.article>
  );
};

export default AlbumCard;
