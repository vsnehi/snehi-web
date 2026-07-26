import Container from '../common/Container';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        Hello, I am Hero
        {/* <HeroContent />
        <HeroImage />
        <HeroStats /> */}
      </Container>
    </section>
  );
};

export default Hero;