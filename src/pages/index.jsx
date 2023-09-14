import Layout from "./layout";
import Carousel from "./components/carousel";
import About from "./components/about";
import Facts from "./components/facts";
import Services from "./components/services";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Quote from "./components/quote";
import Team from "./components/team";
import Testimonial from "./components/testimonial";

const HomePage = () => {
  return (
    <Layout>
      <Carousel />
      <About />
      <Facts />
      <Services />
      <Features />
      <Pricing />
      <Quote />
      <Team />
      <Testimonial />
    </Layout>
  );
};

export default HomePage;