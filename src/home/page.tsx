import Hero from "../components/hero";
import FAQ from "../components/faqhome";
import ProductHome from "../components/services";
import HomeReviewsSection from "../components/reviewshome";
import HomeYouTubeSection from "../components/galleryhome";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeReviewsSection />
      <HomeYouTubeSection />
      <ProductHome />
      <FAQ />
    </>
  );
};

export default Home;
