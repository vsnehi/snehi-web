import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/common/Container';
import styles from './AlbumDetails.module.scss';
import { albums } from '../../constants/Musics';
import { useAudio } from '../../context/AudioPlayerContext';

const AlbumDetails: React.FC = () => {
  const { id } = useParams();
  const album = albums.find((a) => a.id === id);
  const { toggle, current, isPlaying } = useAudio();
  const navigate = useNavigate();

  const goBack = () => {
    // prefer history back, fallback to /music
    if (window.history.length > 1) navigate(-1);
    else navigate('/music');
  };

  if (!album) {
    return (
      <Container>
        <h2>Album not found</h2>
        <p>
          Return to <Link to="/music">Music</Link>
        </p>
      </Container>
    );
  }

  const handlePlayTrack = (track?: { id: string; src?: string; title?: string }) => {
    if (!track) return;
    toggle({ id: `${album.id}-${track.id}`, src: track.src ?? album.audio ?? '', title: track.title, artist: album.artist });
  };

  return (
    <main className={styles.page}>
      <Helmet>
        <title>{album.title} — Snehi Music</title>
        <meta name="description" content={`Album ${album.title} by ${album.artist}`} />
      </Helmet>

      <Container>
        <button className={styles.backButton} onClick={goBack}>&larr; Back</button>
        <div className={styles.header}>
          <img src={`../${album.cover}`} alt={`${album.title} cover`} className={styles.cover} />
          <div className={styles.info}>
            <h1>{album.title}</h1>
            <p className={styles.artist}>{album.artist}</p>
            <p className={styles.meta}>Year: {album.year} • Genre: {album.genre}</p>
            <div className={styles.actions}>
              {album.audio && (
                <button onClick={() => toggle({ id: album.id, src: album.audio!, title: album.title, artist: album.artist })}>
                  {current?.id === album.id && isPlaying ? 'Pause' : 'Play'}
                </button>
              )}
            </div>
          </div>
        </div>

        <section className={styles.tracks}>
          <h2>Tracks</h2>
          <ol>
            {(album.tracks && album.tracks.length > 0 ? album.tracks : [{ id: 't1', title: album.title, duration: album.duration, src: album.audio }]).map((t) => (
              <li key={t.id} className={styles.track}>
                <div className={styles.trackInfo}>
                  <strong>{t.title}</strong>
                  <span className={styles.duration}>{t.duration}</span>
                </div>
                {t.src ? (
                  <button onClick={() => handlePlayTrack(t)} className={styles.playBtn}>
                    ▶
                  </button>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.details}>
          <h3>Details</h3>
          <p><strong>Hosted On:</strong> Snehi Music Platform</p>
          <p><strong>Created By:</strong> {album.artist}</p>
          <p><strong>Description:</strong> {album.title} is a collection of premium tracks curated by {album.artist}.</p>
        </section>
      </Container>
    </main>
  );
};

export default AlbumDetails;
