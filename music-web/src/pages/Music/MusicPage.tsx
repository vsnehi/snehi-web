import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/common/Container';
import AlbumCard from '../../components/cards/AlbumCard';
import styles from './MusicPage.module.scss';
import { albums } from '../../constants/Musics';

const MusicPage: FC = () => {
 
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Snehi Music — Music</title>
        <meta name="description" content="Premium music library with featured albums, trending tracks, and playlists." />
      </Helmet>

      <section className={styles.heroSection}>
        <Container>
          <h1>Music</h1>
          <p className={styles.lead}>Discover featured albums, trending songs, and curated playlists.</p>
        </Container>
      </section>

      <Container>
        <section className={styles.grid} aria-label="Featured albums">
          <h2>Featured Albums</h2>
          <div className={styles.cards}>
            {albums.slice(0, 6).map((a) => (
              <AlbumCard key={a.id} {...a} />
            ))}
          </div>
        </section>

        <section className={styles.grid} aria-label="Latest releases">
          <h2>Latest Releases</h2>
          <div className={styles.cards}>
            {albums.map((a) => (
              <AlbumCard key={a.id} {...a} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default MusicPage;
