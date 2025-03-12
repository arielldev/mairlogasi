import Hero from "../components/hero";
import FAQ from "../components/faqhome";
import ProductHome from "../components/productshome";
import Banner from "../components/bannersection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductHome />
      <Banner />
      <FAQ />
    </>
  );
};

export default Home;
