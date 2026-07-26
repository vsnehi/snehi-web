import { motion } from 'framer-motion';
import styles from './ReleaseCard.module.scss';

interface ReleaseCardProps {
  release: {
    id: number;
    title: string;
    artist: string;
    image: string;
  };
}

const ReleaseCard = ({ release }: ReleaseCardProps) => {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className={styles.imageWrap}>
        <img src={release.image} alt={release.title} />
        <div className={styles.gradientOverlay} />
        <button className={styles.playButton} type="button" aria-label={`Play ${release.title}`}>
          <span className={styles.playIcon} />
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
