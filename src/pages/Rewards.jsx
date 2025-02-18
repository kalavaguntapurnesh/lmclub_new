import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import RedeemModal from "../components/RedeemModal";
import { useState } from "react";
import Amazon from "../assets/Amazon.jpg";
import Card500 from "../assets/500.jpg";
import ae from "../assets/ae.png";
import { TiArrowRight } from "react-icons/ti";
import WhatsApp from "../components/WhatsApp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Rewards = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRedeemClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />
      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-center ">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      Grow Rewards
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                    <h1>Earn rewards for inviting new members</h1>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Start earning rewards for enrolling other members into our
                      thriving community! This exciting feature empowers you to
                      expand your network while benefiting from your efforts.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8"
                >
                  <div className="flex justify-center items-center">
                    <div className="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border">
                      <img
                        className="w-full h-64"
                        src={Amazon}
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 pt-4">
                        <div className="font-bold lg:text-start text-center text-headingColor text-2xl mb-2">
                          Claim $500 Giftcard
                        </div>
                        <p className="text-gray-700 text-lg lg:text-start text-center ">
                          Enroll 15 Members
                        </p>
                      </div>
                      <div className="px-6 pt-4 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-us"
                          className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                        >
                          <span className="relative flex-[8] text-center">
                            Redeem Now
                          </span>
                          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                            <TiArrowRight className=" text-lg" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border">
                      <img
                        className="w-full h-64"
                        src={Card500}
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 pt-4">
                        <div className="font-bold lg:text-start text-center  text-headingColor text-2xl mb-2">
                          Claim $1000 Giftcard
                        </div>
                        <p className="text-gray-700 text-lg lg:text-start text-center ">
                          Enroll 30 Members
                        </p>
                      </div>
                      <div className="px-6 pt-4 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-us"
                          className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                        >
                          <span className="relative flex-[8] text-center">
                            Redeem Now
                          </span>
                          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                            <TiArrowRight className=" text-lg" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border">
                      <img
                        className="w-full h-64"
                        src={ae}
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 pt-4">
                        <div className="font-bold lg:text-start text-center  text-headingColor text-2xl mb-2">
                          Claim $1500 Giftcard
                        </div>
                        <p className="text-gray-700 text-lg lg:text-start text-center ">
                          Enroll 45 Members
                        </p>
                      </div>
                      <div className="px-6 pt-4 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-us"
                          className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                        >
                          <span className="relative flex-[8] text-center">
                            Redeem Now
                          </span>
                          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                            <TiArrowRight className=" text-lg" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RedeemModal showModal={showModal} onClose={closeModal} />
      <Footer />
    </div>
  );
};

export default Rewards;
