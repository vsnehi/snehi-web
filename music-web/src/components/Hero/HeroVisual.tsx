import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import Logo from '../../assets/favicon.png';

const HeroVisual = () => {
  const { scrollYProgress } = useScroll();
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <div className={styles.visual}>
      <motion.div
        className={styles.logoLayer}
        style={{ y: logoY }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={Logo} alt="Snehi logo" />
      </motion.div>

      <div className={styles.smoke} aria-hidden="true" />
      <div className={styles.orangeGlow} aria-hidden="true" />
      <span className={styles.particle} aria-hidden="true" />
      <span className={styles.particleSecondary} aria-hidden="true" />
    </div>
  );
};

export default HeroVisual;