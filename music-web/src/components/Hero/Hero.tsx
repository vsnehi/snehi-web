import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../common/Container';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';
import HeroStats from './HeroStats';
import styles from './Hero.module.scss';
import HeroBackground from '../../assets/hero-background.png';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <motion.div
        className={styles.backgroundLayer}
        style={{
          y: backgroundY,
          backgroundImage: `url(${HeroBackground})`,
        }}
        aria-hidden="true"
      />

      <div className={styles.backgroundOverlay} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.inner}>
          <HeroContent />
          <HeroVisual />
        </div>
        <HeroStats />
      </Container>
    </section>
  );
};

export default Hero;