import React from "react";
import { useNavigate } from "react-router-dom";
import globalThree from "../assets/globeThree.jpg";
import gPay from "../assets/GPlay.webp";
import appStore from "../assets/AppStore.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Banner = () => {
  return (
    <>
      <div className="lg:pt-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative inset-0 z-0 overflow-hidden rounded aspect-[16/9]"
                  >
                    {/* Image with full overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <img
                      src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-2164278820.webp"
                      alt="image"
                      className="w-full h-full object-cover rounded"
                    />

                    {/* Text at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white space-y-2">
                      <div className="flex flex-wrap flex-col lg:items-start items-start pb-3">
                        <div className="lg:text-2xl text-lg lg:text-start text-center font-bold leading-relaxed">
                          <h2>Become a part of our community</h2>
                        </div>
                        <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                      </div>
                      <p className="font-medium">
                        At LM Club, we are more than just a networking platform;
                        we are a community. Whether you’re a business owner or
                        someone looking to connect, we invite you.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative inset-0 z-0 overflow-hidden rounded aspect-[16/9]"
                  >
                    {/* Image with full overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <img
                      src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="image"
                      className="w-full h-full object-cover rounded"
                    />

                    {/* Text at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white space-y-2">
                      <div className="flex flex-wrap flex-col lg:items-start items-start pb-3">
                        <div className="lg:text-2xl text-lg lg:text-start text-center font-bold leading-relaxed">
                          <h2>Share in our success</h2>
                        </div>
                        <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                      </div>
                      <p className="font-medium">
                        Activate our E-Store and enjoy a unique opportunity to
                        share in our success! By helping us brand, you’ll
                        receive a percentage of our profits.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="relative lg:block hidden">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="flex bg-white rounded-lg my-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-[100%] ">
                  <div className="flex-1 px-10 py-24 space-y-4 ">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black ">
                      {/* <p className="">
                        Unlock the power with <br />
                        our Game-Changing Widgets!{" "}
                      </p> */}
                      <div className="flex flex-wrap flex-col lg:items-start items-start pb-3">
                        <div className=" lg:text-start text-center leading-relaxed text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                          <p>
                            {" "}
                            Unlock the power with <br />
                            our Game-Changing Widgets!{" "}
                          </p>
                        </div>
                        <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 pt-2">
                      <a href="https://play.google.com/store/apps/details?id=com.lm.lmclub&hl=en_US">
                        <img
                          src={gPay}
                          alt="gPay"
                          className="md:w-auto md:h-[56px] h-auto w-auto"
                        />
                      </a>
                      <a href="https://apps.apple.com/us/app/lm-club/id6469708246">
                        <img
                          src={appStore}
                          alt="appStore"
                          className="md:w-auto md:h-[56px] h-auto w-auto"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="w-[57%] overflow-hidden relative ">
                    <img
                      className="w-[100%] shadow absolute object-cover bottom-0 right-0"
                      src={globalThree}
                      alt="app"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
