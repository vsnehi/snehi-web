import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.scss';
import HeroBackground from '../../assets/hero-background.png';
import Logo from '../../assets/favicon.png';

const HeroImage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <div className={styles.visual}>
      <motion.div className={styles.sceneLayer} style={{ y: backgroundY }}>
        <img src={HeroBackground} alt="" aria-hidden="true" />
        <div className={styles.overlay} aria-hidden="true" />
      </motion.div>

      <motion.div
        className={styles.logoLayer}
        style={{ y: logoY }}
        animate={{ y: [0, -10, 0], rotate: [0, 0.4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={Logo} alt="Snehi logo" />
      </motion.div>

      <div className={styles.spotlight} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <span className={styles.particle} aria-hidden="true" />
      <span className={styles.particleSecondary} aria-hidden="true" />
    </div>
  );
};

export default HeroImage;
