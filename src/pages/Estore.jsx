import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import LaptopEStore from "../assets/LaptopEStore.png";
import connection from "../assets/connection.svg";
import profit from "../assets/Profits.svg";
import LInk from "../assets/LInk.svg";
import Check from "../assets/Check.svg";
import WhatsApp from "../components/WhatsApp";


const Estore = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />

      <div className="lg:pt-36 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-green-500"></div>
                      <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                        LM CLUB E-STORE
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                      <h1>Unlock Your E-Store & Start Earning!</h1>
                    </div>

                    <div className="text-gray-600 space-y-2 md:text-start text-center">
                      <p>
                        Turn your network into income! Unlock the E-Store and
                        start earning between 20% and 70% of the profit on
                        purchases made through your shared link—based on your
                        membership level. Help us spread the word, and in
                        return, enjoy rewards while your friends save money on
                        high-quality products.
                      </p>
                      <p>
                        Activate E-Store and we will share a percentage of our
                        profits with you. Why? Because you are helping our brand
                        to grow. And in return we present you the profits.
                      </p>
                    </div>

                    <div className="pt-4 flex lg:justify-start justify-center flex-row gap-4">
                      <a
                        href="/pricing"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                      >
                        <span className="relative flex-[8] text-center">
                          Activate E-Store
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <TiArrowRight className=" text-lg" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center items-center lg:pt-0 pt-4">
                    <div>
                      <img
                        src={LaptopEStore}
                        className="rounded w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-20">
                  <div>
                    <h2 className="lg:text-4xl text-2xl font-bold lg:text-start text-center">
                      Key Features of the LM Club
                      <br className="lg:block hidden" /> E-Store
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 lg:text-start text-center">
                      Let your network know that shopping through your link
                      unlocks special savings and deals available only through
                      the LM Club E-Store.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex lg:justify-start justify-center items-center">
                          <img
                            src={profit}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex lg:justify-start justify-center items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Profit Sharing on Purchases
                          </h1>
                        </div>
                        <div className="flex lg:justify-start justify-center  items-center text-gray-600 lg:text-start text-center">
                          <p>
                            Earn 20% - 70% of the profit, depending on your
                            membership level, from every purchase made through
                            your shared E-Store link.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex lg:justify-start justify-center items-center">
                          <img
                            src={LInk}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex lg:justify-start justify-center items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Personalized E-Store Link
                          </h1>
                        </div>
                        <div className="flex lg:justify-start justify-center  items-center text-gray-600 lg:text-start text-center">
                          <p>
                            Provides a unique, trackable URL that allows you to
                            share the E-Store with your friends and followers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex lg:justify-start justify-center items-center">
                          <img
                            src={connection}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex lg:justify-start justify-center items-center">
                          <h1 className="text-2xl font-bold lg:text-start text-center">
                            Exclusive Savings for Followers
                          </h1>
                        </div>
                        <div className="flex lg:justify-start justify-center items-center text-gray-600 ">
                          <p className="lg:text-start text-center">
                            Shoppers who purchase through your E-Store link
                            receive exclusive discounts on premium products.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-16">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?cs=srgb&dl=pexels-olly-838413.jpg&fm=jpg"
                      alt="image"
                      className="rounded"
                    />
                  </div>

                  <div className="flex justify-center items-center lg:px-4">
                    <div className="lg:space-y-2 space-y-3">
                      <h1 className="lg:text-4xl lg:text-start text-center text-2xl font-bold text-trumpTwo">
                        Amplify Your Local Businesses
                      </h1>
                      <p className="text-gray-600 lg:text-start text-center">
                        Activate E-Store and we will share a percentage of our
                        profits with you. Why? Because you are helping us brand.
                        Terms and conditions apply.
                      </p>

                      <div className="pt-8 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Earn 20% - 70% of profit</span>
                        </p>
                        <p className="lg:ml-10">
                          Profit based on your membership level from purchases
                          made through your unique E-Store link.
                        </p>
                      </div>

                      <div className="pt-4 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Exclusive Savings for Your Network </span>
                        </p>
                        <p className="lg:ml-10">
                          Share top-quality products with your friends and
                          followers while offering them exclusive discounts.
                        </p>
                      </div>

                      <div className="pt-4 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Effortless E-Store Ownership</span>
                        </p>
                        <p className="lg:ml-10">
                          Enjoy the perks of having an online store without the
                          hassle of setup or inventory management. Plus, receive
                          additional discounts when purchasing from the Members
                          Store.
                        </p>
                      </div>
                    </div>
                  </div>
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

export default Estore;
