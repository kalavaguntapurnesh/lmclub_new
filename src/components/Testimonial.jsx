import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Accordion from "../components/Accordion";
import connection from "../assets/connection.svg";
import MockOne from "../assets/MockOne.png";
import MockTwo from "../assets/MockTwo.png";
import MockThree from "../assets/MockThree.png";
import lity from "../assets/lity.svg";
import star from "../assets/star.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  const ServiceData = [
    {
      name: "Marcel Bordon",
      imageLink:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      designation: "Business Manager",
      review:
        "Thanks to LM Club, connecting with professionals is seamless, & I got rewarded with Amazon gift cards.",
    },
    {
      name: "Aaron Zander",
      imageLink:
        "https://screencloud.com/_next/static/media/marcel-bordon.dd451a32.webp",
      designation: "Software Architect",
      review:
        "LM Club streamlined my networking experience, and I even got rewarded along the way with amazing rewards!",
    },
    {
      name: "Michael Fasbender",
      imageLink:
        "https://screencloud.com/_next/static/media/aaron-zander.74f76098.webp",
      designation: "Restaurant Chef",
      review:
        "LM Club simplifies the process of networking and using this application really made me win rewards.",
    },
    {
      name: "Tulsa Fast",
      imageLink:
        "https://screencloud.com/_next/static/media/sharon-winning.cb6ceb06.webp",
      designation: "Garage Owner",
      review:
        "Thanks to LM Club, connecting with professionals is seamless, and I got rewarded too with Amazon gift cards.",
    },
    {
      name: "Leaney Dawson",
      imageLink:
        "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      designation: "College Professor",
      review:
        "LM Club simplifies the process of networking and using this application really made me win rewards.",
    },
    {
      name: "Myrcella Stark",
      imageLink:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
      designation: "NGO Worker",
      review:
        "LM Club streamlined my networking experience, and I even got rewarded along the way with amazing rewards!",
    },
  ];

  return (
    <>
      <div className="pt-12 lg:pb-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div>
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-wrap flex-col lg:items-start items-center pb-3"
                  >
                    <div className="lg:text-start text-center  leading-relaxed  font-bold text-black">
                      <p className="lg:text-4xl text-2xl">
                        Got Questions? We've got answers
                      </p>
                    </div>
                    <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                  </motion.div>
                  <motion.p
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-gray-600 pt-3 lg:text-start text-center "
                  >
                    Here are the questions frequently asked by our customers.
                    And we've answered to the topics related to rewards,
                    membership.
                  </motion.p>

                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8 pt-12">
                    <motion.div
                      variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="flex flex-col justify-center space-y-3"
                    >
                      <Accordion
                        title="What is included with my LM Club membership access?"
                        answer="All of our widgets, Broadcast, Grow, and Network are included! With access, you can access our e-store and a whole lot more."
                      />
                      <Accordion
                        title="What are the enroll and rewards widget and the uses of it?"
                        answer="We provide you reward points for being a member, buying products from our LM EStore, and more!"
                      />
                      <Accordion
                        title="How do I redeem my reward points and how to use them?"
                        answer="You will redeem points inside of our app!"
                      />
                      <Accordion
                        title="How can a customer contact us for immediate guidance?"
                        answer="You can contact us through mail on support@lmclub.com or go to the Contact page for further information. And we are always ready to help."
                      />
                      <Accordion
                        title="How do I cancel my Silver or Gold or Platinum membership?"
                        answer="You can cancel your paid Silver or Gold membership anytime. Simply log in to your LM Club account, go to the Manage My Account page, and click Cancel Auto-Renew."
                      />
                    </motion.div>

                    <motion.div
                      variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <img
                        src="https://lmclub.club/wp-content/uploads/2024/10/GettyImages-1490847054.webp"
                        alt="image"
                        className="rounded"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 lg:pb-16">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-16">
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <h2 className="lg:text-4xl text-2xl font-bold lg:text-start text-center ">
                      A mission rooted for collaborative
                      <br className="lg:block hidden" /> growth & earning.
                    </h2>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="space-y-3"
                  >
                    <p className="text-gray-600 lg:text-start text-center ">
                      LM Grow Rewards program allows you to earn redeemable
                      points and achieve special milestones simply by inviting
                      others to join our community. Help us grow, and in return,
                      enjoy exclusive perks and rewards!.
                    </p>
                    <p className="text-gray-600 lg:text-start text-center ">
                      Together, we can build a vibrant community, sharing
                      success and opportunities.
                    </p>
                  </motion.div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex lg:justify-start justify-center items-center">
                          <img
                            src={connection}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex lg:justify-start justify-center items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold lg:text-start text-center ">
                            Complete Your Profile
                          </h1>
                        </div>
                        <div className="flex lg:justify-start justify-center items-center text-gray-600 lg:text-start text-center ">
                          <p>
                            Add a profile picture, list your professional
                            interests to help us get to know you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex lg:justify-start justify-center items-center">
                          <img
                            src={lity}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex lg:justify-start justify-center items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Explore the Directory
                          </h1>
                        </div>
                        <div className="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 ">
                          <p>
                            Browse the member directory to find connections and
                            start building your network.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="grid grid-cols-3 gap-6 justify-center lg:col-span-2 "
                  >
                    <img
                      src={MockOne}
                      alt="mockone"
                      className="lg:h-[380px] "
                    />
                    <img
                      src={MockTwo}
                      alt="mockone"
                      className="lg:h-[380px] "
                    />
                    <img
                      src={MockThree}
                      alt="mockone"
                      className="lg:h-[380px] "
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 ">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex items-center text-center justify-center "
                >
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 font-bold text-mainColor uppercase">
                    Trust our reviews
                  </h1>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="mx-auto max-w-[1200px] text-center mt-4"
                >
                  <h1 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    Real stories, real results
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="mx-auto max-w-[1200px] text-gray-600 text-center mt-4"
                >
                  <p>
                    Laoe Maom embodies progress and adaptability, responding
                    dynamically to the evolving relationships and interests in
                    our global landscape. We are a collective of individuals and
                    businesses worldwide, committed to mutual support and shared
                    success. By joining forces, we breathe life into businesses
                    and nurture them to thrive. Let’s achieve greatness
                    together.
                  </p>
                </motion.div>

                <Swiper
                  breakpoints={{
                    340: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    1000: {
                      slidesPerView: 3,
                      spaceBetween: 18,
                    },
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, FreeMode]}
                  className="max-w-[90%] "
                >
                  {ServiceData.map((item) => (
                    <SwiperSlide key={item.title} className="pt-16 pb-12">
                      <div className="bg-white border-[1px] rounded-lg overflow-visible">
                        <div className="relative -mt-10 flex justify-center">
                          <img
                            className="rounded-full shadow-md h-20 w-20 object-cover "
                            src={item.imageLink}
                            alt="Profile"
                          />
                        </div>
                        <div className="px-6 py-4 text-center">
                          <h2 className="text-xl font-semibold text-gray-800">
                            {item.name}
                          </h2>
                          <p className="text-gray-600">{item.designation}</p>

                          <p className="mt-2 text-gray-600">{item.review}</p>

                          <div className="flex flex-row gap-2 justify-center mt-4">
                            <img src={star} alt="star" className="w-4 h-4" />

                            <img src={star} alt="star" className="w-4 h-4" />
                            <img src={star} alt="star" className="w-4 h-4" />
                            <img src={star} alt="star" className="w-4 h-4" />
                            <img src={star} alt="star" className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
