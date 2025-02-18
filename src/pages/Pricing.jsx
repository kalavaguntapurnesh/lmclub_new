import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Accordion from "../components/Accordion";
import beehive from "../assets/beehive.webp";
import broadcast from "../assets/broadcast.webp";
import estore from "../assets/estore.webp";
import network from "../assets/network.webp";
import enroll from "../assets/enroll.webp";
import WhatsApp from "../components/WhatsApp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const location = useLocation();
  const [isYearly, setYearly] = useState(false);

  const navigate = useNavigate();
  const handleToggle = () => {
    setYearly((prev) => !prev);
  };

  const handleSelectedPlan = (plan) => {
    navigate("/selected-plan", { state: { plan } });
  };

  const monthlyPlans = [
    {
      name: "Bronze",
      description: "Registration fee is $20.00 / Yearly",
      renewalFee: "Yearly renewal fee $20.00 / Yearly",
      price: 5.99,
      points: [
        "Make a post get 25 likes and earn 5 points",
        "Promote a business earn 5 points",
        "Complete (TFS) tasks for success earn 25 points",
        "Shares Its Online Store Profits With You! - Post our store on your social media get 20% percent of stores profit.",
        "Enroll 35 Members get a $500.00 Gift Certificate",
      ],
    },
    {
      name: "Silver",
      description: "Registration fee is $25.00 / Yearly",
      renewalFee: "Yearly renewal fee $25.00 / Yearly",
      price: 8.99,
      points: [
        "Make a post get 25 likes earn 10 points",
        "Promote a business earn 10 points",
        "Complete (TFS) tasks for success earn 50 points",
        "Shares Its Online Store Profits With You! - Post our store on your social media get 30% percent of stores profit.",
        "Enroll 30 Members get a $500.00 Gift Certificate",
      ],
    },
    {
      name: "Gold",
      description: "Registration fee is $30.00 / Yearly",
      renewalFee: "Yearly renewal fee $30.00 / Yearly",
      price: 11.99,
      points: [
        "Make a post get 25 likes earn 15 points",
        "Promote a business earn 15 points",
        "Complete (TFS) tasks for success earn 75 points",
        "Shares Its Online Store Profits With You! - Post our store on your social media get 40% percent of stores profit.",
        "Enroll 25 Members get a $500.00 Gift Certificate",
      ],
    },
    {
      name: "Platinum",
      description: "Registration fee is $35.00 / Yearly",
      renewalFee: "Yearly renewal fee $35.00 / Yearly",
      price: 14.99,
      points: [
        "Make a post get 25 likes earn 20 points",
        "Promote a business earn 20 points",
        "Complete (TFS) tasks for success earn 50 points",
        "Shares Its Online Store Profits With You! - Post our store on your social media get 70% percent of stores profit.",
        "Enroll 20 Members get a $500.00 Gift Certificate",
      ],
    },
  ];

  const getButtonColor = (planName) => {
    switch (planName) {
      case "Bronze":
        return "text-[#CD7F32]";
      case "Silver":
        return "text-[#696969]";
      case "Gold":
        return "text-[#ffc020]";
      case "Platinum":
        return "text-[#1A1A1A]";
      default:
        return "text-red-500";
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
                      our pricing
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                    <h1>Find your perfect membership plan.</h1>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      No matter which level you choose, you’re instantly
                      connected to a powerful network group and the rewards are
                      AMAZING!. Following are the pricing plans we offer
                      exclusively for you.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-center my-6"
                >
                  <div className="flex items-center justify-center gap-4">
                    <span
                      className={`font-semibold ${
                        !isYearly ? "text-mainColor" : "text-gray-500"
                      }`}
                    >
                      Monthly
                    </span>

                    <div
                      className={`relative w-16 h-8 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center ${
                        isYearly ? "bg-green-500" : "bg-gray-300"
                      }`}
                      onClick={handleToggle}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
                          isYearly ? "translate-x-8" : "translate-x-0"
                        }`}
                      ></div>
                    </div>

                    <span
                      className={`font-semibold ${
                        isYearly ? "text-mainColor" : "text-gray-500"
                      }`}
                    >
                      Yearly
                    </span>
                  </div>
                </motion.div>

                <motion.section
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-white"
                >
                  <div className="py-2">
                    <div className=" grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                      {monthlyPlans.map((plan) => (
                        <div
                          id="pricing_bronze"
                          key={plan.name}
                          className="flex flex-col text-center p-4 text-gray-900 bg-white rounded border border-gray-300 shadow"
                        >
                          <h3
                            className={`mb-4 text-2xl font-extrabold ${getButtonColor(
                              plan.name
                            )}`}
                          >
                            {plan.name}
                          </h3>
                          <p className="text-gray-600">{plan.description}</p>
                          <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-4xl font-bold">
                              ${isYearly ? plan.price * 12 : plan.price}
                            </span>
                            <span className="text-gray-500 ">
                              /{isYearly ? "year" : "month"}
                            </span>
                          </div>

                          <ul role="list" className="mb-8 space-y-4 text-left">
                            {plan.points.map((point, index) => (
                              <li
                                key={index}
                                className="flex items-center flex-row space-x-3"
                              >
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          <a
                            onClick={() => handleSelectedPlan(plan)}
                            className="text-white bg-mainColor font-medium rounded-full text-sm px-5 py-3 my-3 text-center cursor-pointer"
                          >
                            Get started
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                <div className="overflow-x-auto lg:flex justify-center items-center hidden pt-8">
                  <table class="features" className="w-[90%]">
                    <thead>
                      <tr>
                        <th></th>
                        <th class="features__cell features__cell--bold features__cell--shaded features__cell--large">
                          Bronze
                        </th>
                        <th class="features__cell features__cell--bold features__cell--shaded features__cell--large">
                          Silver
                        </th>
                        <th class="features__cell features__cell--bold features__cell--shaded features__cell--large">
                          Gold
                        </th>
                        <th class="features__cell features__cell--bold features__cell--shaded features__cell--large">
                          Platinum
                        </th>
                      </tr>
                      <tr>
                        <th></th>
                        <th class="features__cell features__cell--bold features__cell--large">
                          $5.99/mo
                        </th>
                        <th class="features__cell features__cell--bold features__cell--large">
                          $8.99/mo
                        </th>
                        <th class="features__cell features__cell--bold features__cell--large">
                          $11.99/mo
                        </th>
                        <th class="features__cell features__cell--bold features__cell--large">
                          $14.99/mo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          class="features__cell features__cell--bold features__cell--shaded"
                          colspan="5"
                        >
                          <div className="text-sm font-medium">
                            Make a post & get 25 likes
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="features__cell">
                          <div className="widget_image">
                            <img
                              src={beehive}
                              alt="beehive"
                              className="w-16 h-16"
                            />
                          </div>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            5
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            10
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            15
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            20
                          </h1>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="features__cell features__cell--bold features__cell--shaded"
                          colspan="5"
                        >
                          <div className="text-sm font-medium">
                            Promote a business
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="features__cell">
                          <div className="widget_image">
                            <img
                              src={broadcast}
                              alt="beehive"
                              className="w-16 h-16"
                            />
                          </div>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1
                            className="text-base
 font-semibold text-gray-600"
                          >
                            5
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1
                            className="text-base
 font-semibold text-gray-600"
                          >
                            10
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1
                            className="text-base
 font-semibold text-gray-600"
                          >
                            15
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            20
                          </h1>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="features__cell features__cell--bold features__cell--shaded"
                          colspan="5"
                        >
                          <div className="text-sm font-medium">
                            Complete (TFS) tasks
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="features__cell">
                          <div className="widget_image">
                            <img
                              src={network}
                              alt="beehive"
                              className="w-16 h-16"
                            />
                          </div>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            25
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            50
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            75
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          <h1 className="text-base font-semibold text-gray-600">
                            100
                          </h1>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="features__cell features__cell--bold features__cell--shaded"
                          colspan="5"
                        >
                          <div className="text-sm font-medium">
                            Promote e-Store Online
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="features__cell">
                          <div className="widget_image">
                            <img
                              src={estore}
                              alt="beehive"
                              className="w-16 h-16"
                            />
                          </div>
                        </td>
                        <td class="features__cell features__cell--center">
                          {/* <span class="features__tick"></span> */}
                          <h1 className="text-base font-semibold text-gray-600">
                            20%
                          </h1>
                          <p></p>
                        </td>
                        <td class="features__cell features__cell--center">
                          {/* <span class="features__tick"></span> */}
                          <h1 className="text-base font-semibold text-gray-600">
                            30%
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          {/* <span class="features__tick"></span> */}
                          <h1 className="text-base font-semibold text-gray-600">
                            40%
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          {/* <span class="features__tick"></span> */}
                          <h1 className="text-base font-semibold text-gray-600">
                            70%
                          </h1>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="features__cell features__cell--bold features__cell--shaded"
                          colspan="5"
                        >
                          <div className="text-sm font-medium">
                            Enroll Members
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td class="features__cell">
                          <div className="widget_image">
                            <img
                              src={enroll}
                              alt="beehive"
                              className="w-16 h-16"
                            />
                          </div>
                        </td>
                        <td class="features__cell features__cell--center">
                          {/* <span class="features__tick"></span> */}
                          <h1 className="text-base font-semibold text-gray-600">
                            35
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          {/* <span class="features__tick"></span> */}
                          <h1 className="text-base font-semibold text-gray-600">
                            30
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          {/* <span class="features__tick"></span> */}
                          <h1 className="text-base font-semibold text-gray-600">
                            25
                          </h1>
                        </td>
                        <td class="features__cell features__cell--center">
                          {/* <span class="features__tick"></span> */}
                          <h1 className="text-base font-semibold text-gray-600">
                            20
                          </h1>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-12 pb-12" id="faq">
                  <div className="space-y-2">
                    <div className="md:text-4xl text-3xl font-bold text-headingColor text-center">
                      <h1>Frequently Asked Questions</h1>
                    </div>
                  </div>

                  <div className="max-w-[1000px] mx-auto pt-12 ">
                    <Accordion
                      title="As a new member, what are my membership options?"
                      answer="When you're logged into your LM Club account and book a pre-priced project, your 20% discount is automatically applied at checkout. If you're not logged in and are booking a fixed price project, you will be prompted to log in with your email at checkout."
                    />
                    <Accordion
                      title="How do I cancel my Silver or Gold or Platinum membership?"
                      answer="You can cancel your paid Silver or Gold membership anytime. Simply log in to your LM Club account, go to the Manage My Account page, and click Cancel Auto-Renew."
                    />
                    <Accordion
                      title="How do I know I can trust the reviews I read on LM Club?"
                      answer="We take several precautions to ensure that reviews come from real customers — including a combination of proprietary behind-the-scenes technology and good old-fashioned human investigations."
                    />
                    <Accordion
                      title="How can a customer contact us for immediate guidance?"
                      answer="You can contact us through mail on support@lmclub.com or go to the Contact page for further information. And we are always ready to help."
                    />
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

export default Pricing;
