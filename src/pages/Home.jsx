import AppDesc from "../components/AppDesc";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import MainLayout from "./../components/MainLayout";
import HomeProducts from "../components/HomeProducts";
import WhatsApp from "../components/WhatsApp";

const Home = () => {
  return (
    <>
      <MainLayout />
      <ScrollToTop />
      <WhatsApp />
      <HomeProducts />
      <AppDesc />
      {/* <Stack /> */}
      <Testimonial />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
