import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const HeroContent = () => {
  return (
    <div className={styles.content}>
      <p className={styles.eyebrow}>FEEL IT. HEAR IT. LIVE IT.</p>

      <h1 id="hero-title">
        WHERE SOUND
        <span className={styles.lineBreak}>BECOMES</span>
        <span className={styles.highlight}>EMOTION</span>
      </h1>

      <p className={styles.description}>
        Snehi Music is more than just music. We create experiences that connect souls and stay forever.
      </p>

      <div className={styles.actions}>
        <Link className={styles.primaryButton} to="/music">
          Explore Music
        </Link>
        <Link className={styles.secondaryButton} to="/showreel">
          Watch Showreel
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
