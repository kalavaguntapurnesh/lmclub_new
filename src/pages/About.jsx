import AboutHero from "../components/AboutHero";
import AboutTwo from "../components/AboutTwo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";

const About = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />
      <AboutHero />
      <AboutTwo />
      <Footer />
    </>
  );
};

export default About;
