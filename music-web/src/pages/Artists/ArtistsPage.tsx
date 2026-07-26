import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/common/Container';
import ArtistCard from '../../components/cards/ArtistCard';
import styles from './ArtistsPage.module.scss';
import { artists } from '../../constants/Musics';

const ArtistsPage: FC = () => {

  return (
    <main className={styles.page}>
      <Helmet>
        <title>Snehi Music — Artists</title>
        <meta name="description" content="Meet our featured artists and top creators." />
      </Helmet>

      <section className={styles.hero}>
        <Container>
          <h1>Artists</h1>
          <p className={styles.lead}>Explore featured artists, top creators, and genre specialists.</p>
        </Container>
      </section>

      <Container>
        <section className={styles.grid}>
          <h2>Featured Artists</h2>
          <div className={styles.cards}>
            {artists.map((a) => (
              <ArtistCard key={a.id} image={a.image} name={a.name} role={a.role} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default ArtistsPage;
