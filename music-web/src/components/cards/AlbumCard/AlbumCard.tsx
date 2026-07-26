import type { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './AlbumCard.module.scss';
import { Link } from 'react-router-dom';
import { useAudio } from '../../../context/AudioPlayerContext';

export interface AlbumCardProps {
  id?: string;
  cover: string;
  title: string;
  artist: string;
  duration?: string;
  audio?: string;
}

const AlbumCard: FC<AlbumCardProps> = ({ id, cover, title, artist, duration, audio }) => {
  const { toggle, current, isPlaying } = useAudio();

  const track = id && audio ? { id, src: audio, title, artist } : undefined;

  const handlePlay = () => {
    if (track) toggle(track);
  };

  const isCurrent = current?.id === id && isPlaying;

  return (
    <motion.article
      className={styles.card}
      whileHover={{ translateY: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      onDoubleClick={handlePlay}
    >
      <div className={styles.coverWrap}>
        <img src={cover} alt={`${title} cover`} className={styles.cover} />
        <button className={styles.playButton} aria-label={`Play ${title}`} onClick={handlePlay}>
          {isCurrent ? '⏸' : '▶'}
        </button>
      </div>

      <div className={styles.meta}>
        <h3 className={styles.title}>
          {id ? (
            <Link to={`/music/${id}`} className={styles.titleLink}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className={styles.artist}>{artist}</p>
      </div>

      <div className={styles.duration}>{duration}</div>
    </motion.article>
  );
};

export default AlbumCard;
