import styles from './Hero.module.scss';

const stats = [
  { icon: '♪', value: '250+', label: 'Original Tracks' },
  { icon: '🎤', value: '35+', label: 'Artists' },
  { icon: '🎧', value: '10M+', label: 'Streams' },
  { icon: '▶', value: '100+', label: 'Music Videos' },
];

const HeroStats = () => {
  return (
    <div className={styles.stats} role="list" aria-label="Snehi highlights">
      {stats.map((stat) => (
        <div className={styles.stat} key={stat.label} role="listitem">
          <span className={styles.statIcon} aria-hidden="true">
            {stat.icon}
          </span>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
