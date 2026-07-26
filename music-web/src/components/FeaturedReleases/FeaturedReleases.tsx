import { Navigation, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from '../common/Container';
import ReleaseCard from './ReleaseCard';
import { FEATUREDRELEASES } from './FeaturedReleases';
import styles from './FeaturedReleases.module.scss';

const FeaturedReleases = () => {
  return (
    <section className={styles.section} aria-labelledby="featured-releases-title">
      <Container className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <p className={styles.subtitle}>Featured Releases</p>
            <h2 id="featured-releases-title" className={styles.title}>
              Music That Speaks
              <span className={styles.titleBreak}>
                Beyond <span className={styles.highlight}>Words</span>
              </span>
            </h2>
            <div className={styles.divider} />
            <button className={styles.ctaButton} type="button">
              View All Releases
              <span className={styles.ctaIcon} aria-hidden="true">→</span>
            </button>
          </div>

          <div className={styles.sliderWrapper}>
            <Swiper
              modules={[Navigation, Mousewheel]}
              navigation
              mousewheel={{ forceToAxis: true }}
              spaceBetween={24}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
              grabCursor
              watchOverflow
            >
              {FEATUREDRELEASES.map((release) => (
                <SwiperSlide key={release.id}>
                  <ReleaseCard release={release} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedReleases;
