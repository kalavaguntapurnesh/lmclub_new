import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";

const ECommerce = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />
      <div className="pt-16">
        <div className="relative ">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ECommerce;
