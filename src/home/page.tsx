import Hero from "../components/hero";
import FAQ from "../components/faqhome";
import ProductHome from "../components/services";
import HomeReviewsSection from "../components/reviewshome";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeReviewsSection />
      <ProductHome />
      <FAQ />
    </>
  );
};

export default Home;
