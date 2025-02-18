import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Logo from "../assets/LMDarkLogo.webp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
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
    <div className="px-15 select-none mt-20 lg:mx-4 lg:mb-4">
      <div className="relative ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px] ">
            <div className="pb-8 mb-8 border-b border-gray-400">
              <div className="w-full p-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 mt-8">
                  <div className="mb-12 md:mb-0 col-span-2">
                    <div className="flex items-center md:justify-start justify-center w-[100%]">
                      <div className="w-[100%] flex flex-col lg:justify-start justify-center ">
                        <a
                          href="/"
                          className="flex lg:justify-start justify-center"
                        >
                          <img
                            src={Logo}
                            alt="footer"
                            className="h-auto w-[50%] lg:w-[30%]"
                          />
                        </a>

                        <div className="lg:w-[90%] w-[100%] mt-6">
                          <div className="w-[100%]">
                            <div className="grid grid-cols-1 lg:gap-4 gap-8 lg:gap-4 w-full">
                              <div className="grid grid-cols-6">
                                <a
                                  href="https://www.linkedin.com/company/laoe-maom"
                                  className="flex lg:justify-start justify-center items-center"
                                >
                                  <FaLinkedin
                                    size={22}
                                    className="cursor-pointer text-secondaryColor"
                                  />
                                </a>
                                <a
                                  href="https://x.com/RichardLMCLUB"
                                  className="flex lg:justify-start justify-center items-center"
                                >
                                  <FaXTwitter
                                    size={22}
                                    className="cursor-pointer text-secondaryColor"
                                  />
                                </a>
                                <a
                                  href="https://www.instagram.com/laoemaomclub/"
                                  className="flex lg:justify-start justify-center items-center"
                                >
                                  <FaInstagram
                                    size={22}
                                    className="cursor-pointer text-secondaryColor"
                                  />
                                </a>
                                <a
                                  href="https://www.tiktok.com/@lmclub0"
                                  className="flex lg:justify-start justify-center items-center"
                                >
                                  <FaTiktok
                                    size={22}
                                    className="cursor-pointer text-secondaryColor"
                                  />
                                </a>
                                <a
                                  href="https://www.facebook.com/people/Laoe-Maom/100063772398711/#"
                                  className="flex lg:justify-start justify-center items-center"
                                >
                                  <FaFacebook
                                    size={22}
                                    className="cursor-pointer text-secondaryColor"
                                  />
                                </a>{" "}
                                <a
                                  href="https://www.youtube.com/watch?v=g16zVRWJpxA"
                                  className="flex lg:justify-start justify-center items-center"
                                >
                                  <FaYoutube
                                    size={22}
                                    className="cursor-pointer text-secondaryColor"
                                  />
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Company
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us"
                          className="hover:text-footerHeading text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out font-[400]"
                        >
                          About LM Club
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#global_presence"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Leadership
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/pricing"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Membership Plans
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Privacy Policy
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy#terms_and_conditions"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Our Widgets
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/network"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Network Widget
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/beehive"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Beehive Widget
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/broadcast"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Broadcast Widget
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/estore"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          EStore Widget
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/grow"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Grow Widget
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Quick Links
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/estore"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Products
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/rewards"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Widget Rewards
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/events"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Upcoming Events
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://apps.apple.com/us/app/lm-club/id6469708246"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Mobile Application
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact-us"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Connect with Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Site Policies
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Our Cookie Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          User Consent & Preference
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Data Protection & Security
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://www.linkedin.com/company/laoe-maom/"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Contact for Legal Inquiries
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-footerHeading font-[400] text-secondaryColor no-underline text-[14px] leading-6 text-footerLinks text-center transition duration-300 ease-in-out"
                        >
                          Acceptable Use Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-xs mb-4">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
