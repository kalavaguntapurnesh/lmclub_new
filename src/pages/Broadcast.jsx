import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import LaptopBroadcast from "../assets/LaptopBroadcast.png";
import Check from "../assets/Check.svg";
import moneyTwo from "../assets/moneyTwo.svg";
import Business from "../assets/Business.svg";
import Reward from "../assets/Reward.svg";
import WhatsApp from "../components/WhatsApp";


const Broadcast = () => {
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
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-green-500"></div>
                      <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                        LM CLUB Broadcast
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                      <h1>Welcome to the LM Club Broadcast Widget!</h1>
                    </div>

                    <div className="text-gray-600 space-y-2 md:text-start text-center">
                      <p>
                        Unlock Broadcast to start earning points by sharing
                        promotions from local businesses on your social media.
                        Each time you share, you’ll earn points redeemable in
                        our rewards center. It’s a win-win: you help promote
                        local businesses, and we reward you for it!
                      </p>
                      <p>
                        Easily enroll businesses with a marketing fillable
                        template that generates a custom URL for their
                        promotions.
                      </p>
                    </div>

                    <div className="pt-4 flex lg:justify-start justify-center flex-row gap-4">
                      <a
                        href="/pricing"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                      >
                        <span className="relative flex-[8] text-center">
                          Learn More
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
                        src={LaptopBroadcast}
                        className="rounded w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-20">
                  <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                      Key Features of the LM Club
                      <br className="lg:block hidden" /> Broadcast
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Gain access to exclusive perks from participating local
                      businesses while benefiting from LM Club rewards
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={Business}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Promote a Business
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Easily enroll businesses with a marketing fillable
                            template that generates a custom URL for their
                            promotions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={Reward}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Redeeming Reward Points
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Accumulate points and redeem them for rewards such
                            as gift cards, discounts, or exclusive offers. Once
                            points have been redeemed the accumulated points
                            reset to Zero.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={moneyTwo}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Exclusive Perks from Local Businesses
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Some participating businesses offer additional perks
                            to members who help promote their brand.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-16">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="image"
                      className="rounded"
                    />
                  </div>

                  <div className="flex justify-center items-center lg:px-4">
                    <div className="space-y-2">
                      <h1 className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                        Build on trust, driven by excellence.
                      </h1>
                      <p className="text-gray-600">
                        Stay updated on new broadcasts so you don’t miss any
                        opportunities to earn points and perks.
                      </p>

                      <div className="pt-8 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Check Notifications Regularly</span>
                        </p>
                        <p className="lg:ml-10">
                          Stay updated on new broadcasts so you don’t miss any
                          opportunities to earn points and perks.
                        </p>
                      </div>

                      <div className="pt-4 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Broadcast URL with Expiration</span>
                        </p>
                        <p className="lg:ml-10">
                          Once you receive the URL, post it immediately. Be sure
                          to post within 24 hours of receiving the URL.
                        </p>
                      </div>

                      <div className="pt-4 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Engage with Businesses</span>
                        </p>
                        <p className="lg:ml-10">
                          Take advantage of special perks from local businesses
                          to get the most out of the program.
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

export default Broadcast;
