import Container from '../common/Container';
import styles from './CTASection.module.scss';

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.pretitle}>Future-ready AI software</p>
          <h2 className={styles.heading}>Build the Future with AI.</h2>
          <p className={styles.subtitle}>
            We design intelligent software, AI agents, enterprise applications, and scalable cloud solutions.
          </p>
          <a className={styles.button} href="#" aria-label="Get Started with Snehi Technologies">
            Get Started
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
