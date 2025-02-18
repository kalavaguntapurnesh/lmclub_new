import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";


const Events = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />

      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-center ">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      Upcoming Events
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                    <h1>Join us for exciting networking opportunities</h1>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Stay informed, upcoming occasions, major announcements,
                      key happenings, upcoming conferences, networking
                      opportunities, don’t miss out!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;
