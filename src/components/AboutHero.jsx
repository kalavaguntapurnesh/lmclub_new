import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import money from "../assets/money.svg";
import moneyTwo from "../assets/moneyTwo.svg";
import { FaGlobe, FaHandshake, FaMedal } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import intro from "../assets/Intro.mp4";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const AboutHero = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="lg:pt-36 pt-24">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] ">
            <div className="p-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-3 w-full"
                >
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      About LM Club
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                    <h1>Empowering Connections, Cultivating Success</h1>
                  </div>

                  <div className="text-gray-600 md:text-start text-center">
                    <p>
                      At Laoe Maom, we are dedicated to fostering a vibrant
                      culture that propels our members and businesses to
                      connect, collaborate, and create opportunities. Anchored
                      in the principle of TEAM (Together Everyone Achieves
                      More), we harness the power of human cooperation to
                      accomplish significant goals incrementally.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-row gap-4">
                    <a
                      href="/contact-us"
                      className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                    >
                      <span className="relative flex-[8] text-center">
                        Contact Us
                      </span>
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                        <TiArrowRight className=" text-lg" />
                      </span>
                    </a>
                    <a
                      href="/contact-us"
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

                  {/* <div className="grid md:grid-cols-2 pt-4 grid-cols-1 md:gap-4 gap-2">
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-sideHeading font-semibold">
                        <p>World wide Accessibility</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-sideHeading font-semibold">
                        <p>Promote Entrepreneurship</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-sideHeading font-semibold">
                        <p>Expand the Horizons</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                      <div className="text-sideHeading font-semibold">
                        <p>Engage the Members</p>
                      </div>
                    </div>
                  </div> */}
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex justify-center items-center lg:pt-0 pt-4"
                >
                  <div>
                    <video
                      src={intro}
                      // width="612"
                      // height="512"
                      className="rounded w-auto h-auto"
                      autoPlay
                      muted
                      controls
                    />
                  </div>
                </motion.div>
              </div>

              <div className="pt-16 grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="space-y-1 flex flex-col justify-center items-center text-center">
                  <div>
                    <img src={money} className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      To foster enhanced collaboration & mutual benefit{" "}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 flex flex-col justify-center items-center text-center">
                  <div>
                    <img src={moneyTwo} className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      To foster enhanced collaboration & mutual benefit{" "}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 flex flex-col justify-center items-center text-center">
                  <div>
                    <FaGlobe className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      To foster enhanced collaboration & mutual benefit{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-16">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-[#f8f9fa] rounded p-8 "
                >
                  <div className="space-y-2 md:text-start text-center md:mx-4">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 font-semibold text-mainColor">
                        Our Mission
                      </h1>
                    </div>
                    <div className="md:text-3xl text-2xl font-bold text-headingColor md:w-3/4">
                      <h1>A realm of exceptional networking</h1>
                    </div>
                    <div className="text-sideHeading">
                      <h1>
                        At Laoe Maom, we are dedicated to fostering a vibrant
                        culture that propels our members and businesses to
                        connect, collaborate, and create opportunities.
                      </h1>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-[#f8f9fa] rounded p-8 "
                >
                  <div className="space-y-2 md:text-start text-center md:mx-4">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 font-semibold text-mainColor">
                        Our Vision
                      </h1>
                    </div>
                    <div className="md:text-3xl text-2xl font-bold text-headingColor md:w-3/4">
                      <h1>Enhanced collaboration & mutual benefit</h1>
                    </div>
                    <div className="text-sideHeading">
                      <h1>
                        At Laoe Maom, we believe in the true power of networking
                        providing you with powerful widgets that will elevate
                        your networking experience.
                      </h1>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
