import React from "react";
import Accordion from "../components/Accordion";
import { IoShareOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const FAQ = () => {
  const navigate = useNavigate();
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
    <div>
      <div id="faquestions" className="bg-[#f8f9fa]">
        <div className="relative md:pt-32 md:pb-32 pt-20 pb-12">
          <div className="w-full ">
            <div className="w-full px-4 mx-auto max-w-[1400px] ">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      FAQ
                    </h1>
                  </div>

                  <div className="mt-4 md:text-start text-center">
                    <h1 className="md:text-5xl text-3xl font-semibold text-[#3d454d]">
                      Frequently Asked Questions
                    </h1>
                  </div>

                  <div className="lg:mt-20 mt-8 flex md:justify-start justify-center">
                    <a
                      href="/contact-us"
                      class="bg-white flex items-center space-x-1 text-mainColor border-[1px] border-mainColor py-2 px-4 rounded"
                    >
                      <span>Learn More</span>
                      <IoShareOutline size={20} />
                    </a>
                  </div>
                </div>

                <div className="w-full">
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

      <div className="bg-white">
        <div className="relative md:pt-32 md:pb-32 pt-20 pb-20">
          <div className="w-full ">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="space-y-6 flex flex-col">
                  <div className="mt-4 md:text-start text-center">
                    <h1 className="md:text-5xl text-3xl font-semibold text-black">
                      Ready to turn your development{" "}
                      <span className="text-mainColor">innovation?</span>
                    </h1>
                  </div>
                  <div className="mt-4 md:text-start text-center text-gray-700">
                    <p>Try and see the magic of the LM Club in action.</p>
                  </div>
                  <div className="flex items-center lg:justify-start justify-center">
                    <a
                      href="/login"
                      className="bg-mainColor outline-none
                      rounded over:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                    >
                      What we offer
                    </a>
                    <a
                      href="/contact-us"
                      className="bg-white outline-none
                      rounded hover:shadow-form transition border-[1px] border-mainColor duration-1000 ease-in-out md:text-base text-sm text-mainColor px-8 md:py-3 py-2 text-center ml-2"
                    >
                      Contact With us
                    </a>
                  </div>
                </div>
                {/* <div className="flex justify-center items-center">
                  <Lottie
                    animationData={Globe}
                    loop={true}
                    className="w-full h-96"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
