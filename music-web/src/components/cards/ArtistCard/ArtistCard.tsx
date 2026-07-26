import type { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './ArtistCard.module.scss';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export interface ArtistCardProps {
  image: string;
  name: string;
  role?: string;
}

const ArtistCard: FC<ArtistCardProps> = ({ image, name, role }) => {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.24 }}
    >
      <img src={image} alt={name} className={styles.avatar} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <div className={styles.social}>
          <a aria-label="twitter" href="#"><FaTwitter /></a>
          <a aria-label="instagram" href="#"><FaInstagram /></a>
          <a aria-label="linkedin" href="#"><FaLinkedin /></a>
        </div>
      </div>
    </motion.article>
  );
};

export default ArtistCard;
