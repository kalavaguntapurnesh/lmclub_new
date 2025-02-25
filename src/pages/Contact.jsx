import Footer from "../components/Footer";
import us from "../assets/us.svg";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { useContext, useState } from "react";
import { FaBlenderPhone, FaBuilding, FaHandshake } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import World from "../assets/WorldMap.svg";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import WhatsApp from "../components/WhatsApp";
import axios from "axios";
import Swal from "sweetalert2";
import success from "../assets/success.png";
import Logo from "../assets/LMDark.webp";
import Error from "../assets/error.png";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Contact = () => {
  const { backendUrl } = useContext(AppContext);

  const [isChecked, setIsChecked] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        fullName: fullName,
        email: email,
        subject: subject,
        message: message,
      };

      console.log("Submit form pay load is : ", payload);

      const { data } = await axios.post(
        backendUrl + "/api/user/user-contactForm",
        payload
      );

      if (data.success) {
        toast.success(data.message);
        resetForm();
      } else {
        toast.error(data.message);
        resetForm();
      }
    } catch (error) {
      console.log("Error response:", error.response);
      toast.error(error.mesage);
      resetForm();
    }
  };

  const resetForm = () => {
    setEmail("");
    setFullName("");
    setMessage("");
    setSubject("");
  };

  const phoneNumber = "16782004524";
  const initialMessage =
    "Hello LM Club, I need your guidance on professional technicians...";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    initialMessage
  )}`;

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
                <div className="space-y-3">
                  <div className="flex items-center justify-center ">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      Contact Us
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                    <h1>Let&apos;s Start a Conservation</h1>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      We’re here to help and answer any questions you might
                      have. We look forward to hearing from you!. You can also
                      reach out to us from the following social media links.
                    </p>
                  </div>
                </div>

                <div className="max-w-[600px] mx-auto my-6">
                  <div className="grid grid-cols-7 gap-4">
                    <a
                      href={whatsappUrl}
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaWhatsapp size={24} className="text-green-500" />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/laoe-maom/"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaLinkedin size={24} className="text-green-500" />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/people/Laoe-Maom/100063772398711/#"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaFacebook size={24} className="text-green-500" />
                      </div>
                    </a>

                    <a
                      href="https://x.com/RichardLMCLUB"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaXTwitter size={24} className="text-green-500" />
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/laoemaomclub/"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaInstagram size={24} className="text-green-500" />
                      </div>
                    </a>

                    <a
                      href="https://www.tiktok.com/@lmclub0"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaTiktok size={24} className="text-green-500" />
                      </div>
                    </a>

                    <a
                      href="https://www.youtube.com/watch?v=g16zVRWJpxA"
                      className="flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center w-12 h-12 border-2 border-green-50 bg-green-50 rounded-full">
                        <FaYoutube size={24} className="text-green-500" />
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="pt-2">
                    <div className="w-full">
                      <a
                        href="https://www.bing.com/maps?where=7778%20McGinnis%20Ferry%20Rd%2C%20PMB%20162%2C%20Suwanee%2C%20Georgia%2030024%2C%20US"
                        id="world-map"
                        className="relative"
                      >
                        <img
                          src={World}
                          alt="map"
                          className="w-[100%] h-[100%] object-contain"
                        />

                        <div class="pin china">
                          <span>Head Quarters</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-16">
                  <div className="flex flex-col space-y-4 pt-12">
                    <div className="lg:text-start text-center">
                      <p className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                        Have questions? Just fill out this form, and we&apos;ll
                        respond soon!
                      </p>
                    </div>
                    <div className="lg:text-start text-center">
                      <p className=" text-base text-gray-600 md:text-start text-center">
                        Have questions or need assistance? Share your queries
                        here, and our dedicated team will provide a prompt
                        response within 24 hours to ensure your needs are met
                        seamlessly.
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-8">
                      <div className="flex md:justify-start justify-center">
                        <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                          <div className="space-y-3">
                            <div className="flex lg:justify-start justify-center items-center">
                              <div className="flex lg:justify-start justify-center items-center">
                                <FaHandshake
                                  size={32}
                                  className="text-[#22c55e]"
                                />
                              </div>
                            </div>
                            <div className="flex lg:justify-start justify-center items-center">
                              <h1 className="text-xl text-headingColor font-bold text-center">
                                Chat to friendly team
                              </h1>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center text-sideHeading lg:text-start text-center">
                              <p>We will respond very soon.</p>
                            </div>

                            <div className="flex lg:justify-start justify-center pt-2">
                              <a
                                href="mailto:info@laoemaom.com"
                                className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[160px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                              >
                                <span className="relative flex-[8] text-center">
                                  Chat with us
                                </span>
                                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                                  <TiArrowRight className=" text-lg" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex md:justify-start justify-center">
                        <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                          <div className="space-y-3">
                            <div className="flex lg:justify-start justify-center items-center">
                              <div className="flex lg:justify-start justify-center items-center">
                                <FaBlenderPhone
                                  size={32}
                                  className="text-[#22c55e]"
                                />
                              </div>
                            </div>
                            <div className="flex lg:justify-start justify-center items-center">
                              <h1 className="text-xl text-headingColor font-bold text-center">
                                Make a call directly
                              </h1>
                            </div>

                            <div className="flex lg:justify-start justify-center items-center text-sideHeading lg:text-start text-center">
                              <p>Phone Number: (+1) 678-200-4524</p>
                            </div>

                            <div className="flex lg:justify-start justify-center pt-2">
                              <a
                                href="/contact-us"
                                className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[160px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                              >
                                <span className="relative flex-[8] text-center">
                                  Contact Us
                                </span>
                                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                                  <TiArrowRight className=" text-lg" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-2">
                    <form
                      onSubmit={handleSubmit}
                      method="POST"
                      className="lg:mt-8 mt-2"
                    >
                      <div className="w-full flex justify-center items-center">
                        <div className="mb-5 md:w-11/12 w-full">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-black"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(e) => {
                              setFullName(e.target.value);
                            }}
                            value={fullName}
                            placeholder="Your Full Name"
                            required
                            className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none  focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <div className="mb-5 md:w-11/12 w-full">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-black"
                          >
                            Email Address
                          </label>
                          <input
                            value={email}
                            type="email"
                            name="email"
                            id="email"
                            required
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            placeholder="example@domain.com"
                            className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none  focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="w-full flex justify-center items-center">
                        <div className="mb-5 md:w-11/12 w-full">
                          <label
                            htmlFor="subject"
                            className="mb-3 block text-base font-medium text-black"
                          >
                            Subject
                          </label>
                          <input
                            value={subject}
                            type="text"
                            name="subject"
                            id="subject"
                            required
                            onChange={(e) => {
                              setSubject(e.target.value);
                            }}
                            placeholder="Enter your subject"
                            className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="w-full flex justify-center items-center">
                        <div className="mb-5 md:w-11/12 w-full">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-base font-medium text-black"
                          >
                            Message
                          </label>
                          <textarea
                            rows="4"
                            value={message}
                            name="message"
                            id="message"
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                            placeholder="Type your message"
                            className="w-full resize-none rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none  focus:shadow-md"
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex items-center justify-center pt-2 md:mx-0">
                        <div className="mb-5 md:w-11/12 w-full">
                          <button
                            type="submit"
                            className="rounded bg-green-500 transition duration-1000 py-3 ease-in-out w-full text-base  text-white outline-none"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Contact;
