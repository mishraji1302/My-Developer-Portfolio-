import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Skills />
      <Certifications />
      <About />
      <Footer />
    </>
  );
};

export default Home;
