
import Hero from '../../components/Hero';
import FeaturedReleases from '../../components/FeaturedReleases';
import CTASection from '../../components/CTASection';
import Seo from '../../components/Seo/Seo';

const Home = () => {
  return (
    <>
      <Seo title="Home" description="SNEHI — premium music studio, Snehi Music & SNEHI Studio" keywords={["snehi studio", "snehi music", "snehi"]} />
      <Hero />
      <FeaturedReleases />
      <CTASection />
    </>
  );
};

export default Home;