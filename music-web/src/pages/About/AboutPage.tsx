import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/common/Container';
import styles from './AboutPage.module.scss';

const AboutPage: FC = () => {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Snehi Music — About</title>
        <meta name="description" content="About Snehi Music — our story, mission, and team." />
      </Helmet>

      <section className={styles.hero}>
        <Container>
          <h1>About</h1>
          <p className={styles.lead}>We craft music experiences that connect artists and listeners.</p>
        </Container>
      </section>

      <Container>
        <section className={styles.section}>
          <h2>Our Story</h2>
          <p>Founded to bring premium curated music to the world, Snehi Music blends design and sound.</p>
        </section>

        <section className={styles.section}>
          <h2>Mission & Vision</h2>
          <p>Our mission is to empower creators and delight listeners with beautifully designed music products.</p>
        </section>
      </Container>
    </main>
  );
};

export default AboutPage;
