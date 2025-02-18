import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";


const Enroll_Rewards = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12">
              <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 lg:mx-4 gap-6">
                <div className="flex flex-col gap-4 w-full space-y-2">
                  <div className="flex items-center lg:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      Enroll Widget
                    </h1>
                  </div>
                  <div className=" flex items-center lg:justify-start justify-center ">
                    <h1 className="xl:text-5xl text-4xl font-bold text-headingColor lg:text-start text-center">
                      Activate Grow & Enroll
                    </h1>
                  </div>

                  <div className="flex items-center lg:justify-start justify-center ">
                    <p className="lg:text-lg text-[16px] text-sideHeading  lg:text-start text-center">
                      Enroll earn rewards for helping our community to expand. T
                      & C apply. And you’re instantly connected to a powerful
                      network group and the rewards are AMAZING!
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-2 lg:items-start items-center">
                      <div className="xl:text-5xl text-4xl  md:font-bold font-extrabold text-headingColor">
                        <h1 className="lg:text-start text-center">100%</h1>
                      </div>
                      <div className="text-sideHeading">
                        <p className="lg:text-start text-center">
                          Increase in connectivity
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 lg:items-start items-center">
                      <div className="xl:text-5xl text-4xl md:font-bold font-extrabold text-headingColor">
                        <h1 className="lg:text-start text-center">10X</h1>
                      </div>
                      <div className="text-sideHeading">
                        <p className="lg:text-start text-center">
                          Increase in Productivity
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:flex items-center lg:justify-start justify-center hidden">
                    <a
                      href="/products"
                      className="bg-mainColor font-medium outline-none
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                    >
                      Start your trail now
                    </a>
                  </div>

                  <div className="mx-8">
                    <a
                      href="/products"
                      className="bg-mainColor hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none md:hidden block
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                    >
                      Start your trail now
                    </a>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-center items-start ">
                  <img
                    src="https://lmclub.club/wp-content/uploads/elementor/thumbs/Picture3-e1725876734355-qtulrs9nmbuowyoblvsof0hhew4tb67qo0bx2rt3gw.png"
                    alt=""
                    height="400"
                    className="rounded md:w-[50%] w-[60%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Enroll_Rewards;
