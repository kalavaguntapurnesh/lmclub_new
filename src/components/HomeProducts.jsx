import React from "react";
import estore from "../assets/estore.webp";
import beehive from "../assets/beehive.webp";
import enroll from "../assets/enroll.webp";
import network from "../assets/network.webp";
import broadcast from "../assets/broadcast.webp";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const HomeProducts = () => {
  const values2 = [
    {
      icon: enroll,
      Title: "Grow",
      description:
        "Grow program allows you to earn redeemable points and milestones simply by inviting others to join our community.",
      link: "/grow",
    },

    {
      icon: beehive,
      Title: "Beehive",
      description:
        "Beehive allows you to start earning redeemable points by sharing deals, coupons, and information you've discovered. ",
      link: "/beehive",
    },
    {
      icon: broadcast,
      Title: "Broadcast",
      description:
        "Unlock Broadcast to start earning points by sharing promotions from local businesses on your social media will earn points.",
      link: "/broadcast",
    },
    {
      icon: estore,
      Title: "Estore",
      description:
        "Activate E-Store and we will share a percentage of our profits with you because you are helping our brand to grow.",
      link: "/estore",
    },
    {
      icon: network,
      Title: "Network",
      description:
        "Network guides your journey and connects you to fellow club members, events, and resources right from your dashboard. ",
      link: "/network",
    },
  ];

  return (
    <div className="pt-8 lg:pb-8">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] ">
            <div className="p-4">
              <div className="flex flex-col space-y-3 w-full lg:pt-8">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex items-center justify-center "
                >
                  <div className="h-4 w-1 bg-green-500"></div>
                  <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                    Our Widgets
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="lg:text-4xl text-2xl text-center font-bold text-headingColor"
                >
                  <h1>Earn rewards for inviting new members</h1>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-gray-600 text-center"
                >
                  <p>
                    At Laoe Maom, we are dedicated to fostering a vibrant
                    culture that propels our members and businesses to connect,
                    collaborate, and create opportunities. Anchored in the
                    principle of TEAM (Together Everyone Achieves More), we
                    harness the power of human cooperation to accomplish
                    significant goals incrementally.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 pt-8"
                >
                  {values2.map((value, index) => (
                    <div
                      key={index}
                      className="flex md:justify-start justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-6">
                        <div className="space-y-2">
                          <div className="flex md:justify-start justify-center items-center">
                            <img
                              src={value.icon}
                              alt="about_one"
                              className="w-[80px] h-[80px]"
                            />
                          </div>

                          <div className="flex md:justify-start justify-center items-center">
                            <h1 className="text-2xl text-trumpTwo font-semibold text-center lg:text-start">
                              {value.Title}
                            </h1>
                          </div>
                          <div className="flex md:justify-start justify-center  items-center text-gray-600 lg:text-start text-center text-[14px] leading-[22px]">
                            <p>{value.description}</p>
                          </div>

                          <div className=" flex lg:justify-start justify-center">
                            <a
                              href={value.link}
                              className="flex flex-row items-center text-green-500 "
                            >
                              <span className="relative text-sm">
                                Know More
                              </span>
                              <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
