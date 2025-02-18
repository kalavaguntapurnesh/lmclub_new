import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import WhatsApp from "../components/WhatsApp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />

      <div className="pt-24 pb-8">
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
                      Privacy Policy
                    </h1>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="lg:text-4xl text-2xl text-center font-bold text-headingColor"
                  >
                    <h1>LM Club Privacy Statement</h1>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-gray-600 text-center pb-4"
                  >
                    <p>
                      Information on this site may contain technical
                      inaccuracies or typographical errors. Information,
                      including product pricing and availability, may be changed
                      or updated without notice.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative w-[100%] "
                  >
                    <img
                      src="https://images.pexels.com/photos/4152513/pexels-photo-4152513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="privacy_policy"
                      className="rounded lg:h-[400px] object-cover w-[100%] "
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded"></div>
                  </motion.div>

                  <div className="lg:text-4xl text-2xl font-bold text-center text-headingColor pt-8">
                    <h1>Discover and control your data</h1>
                  </div>

                  <div className="space-y-2 text-sideHeading mt-8 text-center">
                    <p>
                      Privacy is at the centre of how we build the products and
                      services that customers use every day. See privacy
                      resources and controls below where you can manage your
                      data and how it is used.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-2 lg:px-1 px-4">
                    <a
                      href="/privacy-statement"
                      className="flex lg:justify-start justify-center"
                    >
                      <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                        <div className="space-y-3">
                          <div className="flex lg:justify-start justify-center items-center w-full">
                            <img src={p1} alt="p1" className="w-20 h-20" />
                          </div>
                          <div className="flex lg:justify-start justify-center items-center">
                            <h1 className="text-2xl font-bold text-center">
                              Visit privacy statement
                            </h1>
                          </div>

                          <div className="flex lg:justify-start justify-center items-center text-gray-600">
                            <p>
                              The privacy statement is where you can manage your
                              privacy settings and manage your data for your LM
                              Club account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      href="/privacy-report"
                      className="flex lg:justify-start justify-center"
                    >
                      <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                        <div className="space-y-3">
                          <div className="flex lg:justify-start justify-center items-center w-full">
                            <img src={p2} alt="p2" className="w-20 h-20" />
                          </div>
                          <div className="flex lg:justify-start justify-center items-center">
                            <h1 className="text-2xl font-bold text-center">
                              Account check-up
                            </h1>
                          </div>

                          <div className="flex lg:justify-start justify-center items-center text-gray-600">
                            <p>
                              The account check-up wizard is a tool where you
                              can review your account safety settings to
                              strengthen your online security. Do an account
                              check-up
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/enroll-rewards"
                      className="flex lg:justify-start justify-center"
                    >
                      <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                        <div className="space-y-3">
                          <div className="flex lg:justify-start justify-center items-center w-full">
                            <img src={p3} alt="p3" className="w-20 h-20" />
                          </div>
                          <div className="flex lg:justify-start justify-center items-center">
                            <h1 className="text-2xl font-bold text-center">
                              Find your privacy controls
                            </h1>
                          </div>

                          <div className="flex lg:justify-start justify-center items-center text-gray-600">
                            <p>
                              Learn how to find your privacy settings and other
                              related information in LM Club products and
                              services to modify it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="font-bold text-2xl pt-12">
                    <h1>Legal Notice</h1>
                  </div>

                  <div className=" text-sideHeading mt-4">
                    <p>
                      All notices from Laoe Maom to You may be posted on our Web
                      site and will be deemed delivered within thirty (30) days
                      after posting. Notices from You to Laoe Maom shall be made
                      either by regular mail, sent to the address we provide on
                      our Web site, or first class mail to our address at:
                    </p>
                    <p>
                      {" "}
                      Delivery shall be deemed to have been made by You to Laoe
                      Maom five (5) days after the date sent.
                    </p>
                  </div>

                  <div className="font-bold text-2xl pt-4">
                    <h1>Copyright Notice</h1>
                  </div>

                  <div className=" text-sideHeading mt-4">
                    <p>
                      All content appearing on this Web site is the property of
                      Laoe Maom.
                    </p>
                    <p>
                      {" "}
                      Copyright © 2025, Laoe Maom. All rights reserved. As a
                      user, you are authorized only to view, copy, print, and
                      distribute documents on this Web site so long as (1) the
                      document is used for informational purposes only, and (2)
                      any copy of the document (or portion thereof) includes the
                      following copyright notice: Copyright © 2025, Laoe Maom.
                      All rights reserved.
                    </p>
                  </div>

                  <div className="font-bold text-2xl pt-4">
                    <h1>Trademarks</h1>
                  </div>

                  <div className=" text-sideHeading mt-4">
                    <p>
                      {" "}
                      All brand, product, service, and process names appearing
                      on this Web site are trademarks of their respective
                      holders. Reference to or use of a product, service, or
                      process does not imply recommendation, approval,
                      affiliation, or sponsorship of that product, service, or
                      process by Laoe Maom. Nothing contained herein shall be
                      construed as conferring by implication, estoppel, or
                      otherwise any license or right under any patent,
                      copyright, trademark, or other intellectual property right
                      of Laoe Maom or any third party, except as expressly
                      granted herein.
                    </p>
                  </div>

                  <div
                    id="terms_and_conditions"
                    className="font-bold text-2xl pt-4"
                  >
                    <h1>Terms of Use</h1>
                  </div>

                  <div className=" text-sideHeading mt-4">
                    <p>
                      {" "}
                      This site may contain other proprietary notices and
                      copyright information, the terms of which must be observed
                      and followed. Information on this site may contain
                      technical inaccuracies or typographical errors.
                      Information, including product pricing and availability,
                      may be changed or updated without notice. Laoe Maom and
                      its subsidiaries reserve the right to refuse service,
                      terminate accounts, and/or cancel orders in its
                      discretion, including, without limitation, if Laoe Maom
                      believes that customer conduct violates applicable law or
                      is harmful to the interests of Laoe Maom and its
                      subsidiaries.
                    </p>
                  </div>

                  <div className="font-bold text-2xl pt-4">
                    <h1>Privacy Policy</h1>
                  </div>

                  <div className=" text-sideHeading mt-4 space-y-2">
                    <p>
                      {" "}
                      This site may contain other proprietary notices and
                      copyright information, the terms of which must be observed
                      and followed. Information on this site may contain
                      technical inaccuracies or typographical errors.
                      Information, including product pricing and availability,
                      may be changed or updated without notice. Laoe Maom and
                      its subsidiaries reserve the right to refuse service,
                      terminate accounts, and/or cancel orders in its
                      discretion, including, without limitation, if Laoe Maom
                      believes that customer conduct violates applicable law or
                      is harmful to the interests of Laoe Maom and its
                      subsidiaries.
                    </p>
                    <p>APP / WEBSITE TERMS OF USE</p>
                    <p>(END USERS)</p>
                    <p>Effective Date: January 24, 2023</p>
                    <p>
                      The following APP / Website terms of use (“Terms of Use”)
                      govern access to and use of the APP / Website of Laoe Maom
                      Group (“LM CLUB”) located at lmclub.club/contact/,
                      materials and content on or provided through the APP /
                      Website (the “Content”), and services available on or
                      provided through the APP / Website (the “Services”). The
                      purchase of any products offered on the APP / Website (the
                      “Products”) are subject to LM CLUB’s terms and conditions
                      of sale.
                    </p>
                  </div>

                  <div className="font-bold text-2xl pt-4">
                    <h1>1. Legally Binding Terms</h1>
                  </div>

                  <div className=" text-sideHeading mt-4 space-y-2">
                    <p>
                      {" "}
                      By accessing the APP / Website, you agree to be bound by
                      and comply with these Terms of Use (and all documents
                      incorporated by reference in these Terms of Use), which is
                      a legally binding agreement between you and LM CLUB.
                      Further, by accessing and using the APP / Website, you
                      agree to comply with all laws and regulations that may
                      apply regarding your access and use of the APP / Website,
                      the Content, and the Services.
                    </p>

                    <p>
                      You acknowledge and understand that certain Content and/or
                      Services may be subject to additional terms and conditions
                      which will be available for viewing prior to access to or
                      receipt of such Content or Services.
                    </p>
                    <p>
                      Please take the time to carefully review these Terms of
                      Use before proceeding. If you do not understand or agree
                      to be bound by any of these terms, do not use the APP /
                      Website. By accessing and using the APP / Website, you
                      accept and consent to (i) these Terms of Use, (ii) the
                      entering of contracts through electronic means or media,
                      and (iii) the exchange of information and/or documents
                      between you and The Laoe Maom Group / LM CLUB
                      electronically. By using the APP / Website, you represent
                      and warrant that you are of legal age in the jurisdiction
                      in which you reside and otherwise have capacity to form a
                      binding contract, and that you are not a person barred by
                      any laws from accessing or using the APP / Website.
                      <p>
                        These Terms of Use contain provisions that may limit
                        your rights and remedies and also include provisions
                        that exclude or limit LM CLUB’s liability. Please review
                        these Terms of Use in their entirety. You are encouraged
                        to save a copy of these Terms of Use for your records
                        and for future reference by using your web browser’s
                        print or save features.
                      </p>
                    </p>
                  </div>

                  <div className="font-bold text-2xl pt-4">
                    <h1>2. Amendments</h1>
                  </div>

                  <div className=" text-sideHeading mt-4 space-y-2">
                    <p>
                      {" "}
                      The Laoe Maom Group / LM CLUB may amend these Terms of Use
                      from time to time in its sole discretion and may do so
                      without notice to you. Any such amendments will take
                      effect upon being posted on the APP / Website. Your access
                      to or continued use of the APP / Website following any
                      such change constitutes your unconditional agreement to
                      comply with and be bound by these Terms of Use as amended.
                      For this reason, you should review the effective date of
                      these Terms of Use (which appears at the very top of this
                      document) each time you access the APP / Website and, if
                      these Terms of Use have been revised since your last
                      visit, you should review the revised Terms of Use which
                      will apply to your visit and use of the APP / Website,
                      your access to and use of any Content and/or Services.
                    </p>
                  </div>

                  <div className="lg:text-4xl text-2xl font-bold text-center pt-12">
                    <h1>What's new?</h1>
                  </div>

                  <div className=" text-sideHeading mt-4 text-center">
                    <p>
                      Check out the latest articles, blog posts, and news from
                      LM Club about protecting your privacy at home and at work.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8 ">
                    <a
                      href="mailto:info@laoemaom.com"
                      className="flex lg:justify-start justify-center"
                    >
                      <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                        <div className="space-y-3">
                          <div className="flex justify-center items-center w-full">
                            <img
                              src="
                          https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Protecting_the_data_of_our_commercial_and_public_sector_customers_in_the_AI_era?wid=380&hei=213&fit=crop"
                              alt=""
                              className="md:h-52 w-[100%] rounded"
                            />
                          </div>
                          <div className="flex lg:justify-start justify-center items-center">
                            <h1 className="text-2xl lg:text-start font-bold text-headingColor text-center">
                              Protecting the data of our commercial
                            </h1>
                          </div>

                          <div className="flex lg:justify-start justify-center items-center text-gray-600 lg:text-start text-center">
                            <p>
                              Learn more about LM Club commitment to protecting
                              the data of our commercial and public sector
                              customers and how our approach to AI is built on a
                              foundation of privacy across all our AI products
                              and solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@laoemaom.com"
                      className="flex lg:justify-start justify-center"
                    >
                      <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                        <div className="space-y-3">
                          <div className="flex justify-center items-center w-full">
                            <img
                              src="
                           https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Enhancing_trust_and_protecting_privacy_in_the_AI_era?wid=380&hei=213&fit=crop"
                              alt=""
                              //   className="md:h-52 md:w-[70%] w-[80%]"
                              className="md:h-52 w-[100%] rounded"
                            />
                          </div>
                          <div className="flex lg:justify-start justify-center items-center">
                            <h1 className="text-2xl lg:text-start font-bold text-headingColor text-center">
                              Enhancing trust and protecting privacy
                            </h1>
                          </div>

                          <div className="flex lg:justify-start justify-center items-center text-gray-600 lg:text-start text-center">
                            <p>
                              Discover how LM Club privacy commitments apply to
                              AI and how LM Club empowers customers to use new
                              AI technologies while advancing trust and
                              protecting privacy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/enroll-rewards"
                      className="flex lg:justify-start justify-center"
                    >
                      <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                        <div className="space-y-3">
                          <div className="flex justify-center items-center w-full">
                            <img
                              src="
                        https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/EU-Data-Boundary-Blog-image-1-small?wid=380&hei=213&fit=crop"
                              alt=""
                              className="md:h-52 w-[100%] rounded"
                            />
                          </div>
                          <div className="flex lg:justify-start justify-center items-center">
                            <h1 className="text-2xl lg:text-start font-bold text-headingColor text-center">
                              Enabling customers to keep personal data
                            </h1>
                          </div>

                          <div className="flex lg:justify-start justify-center items-center text-gray-600 lg:text-start text-center">
                            <p>
                              LM Club EU Data Boundary enables customers to
                              store and process their data within the EU. Read
                              about the latest enhancements and new features
                              building on prior progress.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
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

export default Privacy;
