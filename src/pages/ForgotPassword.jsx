import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUnlock } from "react-icons/fa";
import Footer from "../components/Footer";
import { AppContext } from "./../context/AppContext";
import Logo from "../assets/LMDark.webp";
const ForgotPassword = () => {
  const { backendUrl } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const showPopup = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/user/forgot-password",
        { email }
      );
      showPopup(data.message);
      resetForm();
    } catch (error) {
      console.log(error);
      showPopup("Something went wrong");
    }
    setLoading(false);
  };

  const resetForm = () => {
    setEmail("");
  };
  const handleLoginRedirect = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Navbar />
      <div className="relative lg:pt-24 pt-20 pb-12 bg-gray-50 h-screen">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4">
              <div className="justify-center w-full">
                <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                  <div>
                    <section className="bg-gray-50 my-8">
                      <div className="flex flex-col items-center justify-center px-4">
                        <div className="w-full bg-white rounded shadow md:mt-0 lg:max-w-md">
                          <div className="p-6 space-y-4">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-green-500 md:text-2xl ">
                              Forgot your password
                            </h1>
                            <div className="text-center text-gray-600">
                              <p>
                                No need to fear, we’ll send you a reset link by
                                email.
                              </p>
                            </div>

                            <div className="flex justify-center items-center">
                              <FaUnlock className="text-colorFour md:w-12 md:h-12 w-[36px] h-[36px]" />
                            </div>

                            <form
                              className="space-y-4 md:space-y-6"
                              onSubmit={handleSubmit}
                            >
                              <div>
                                <label
                                  htmlFor="email"
                                  className="block mb-2 text-sm font-bold text-colorThree "
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                  placeholder="Enter your email here"
                                  required=""
                                  onChange={(e) => setEmail(e.target.value)}
                                ></input>
                              </div>

                              <button
                                type="submit"
                                disabled={loading}
                                className="w-full text-white bg-green-500 hover:bg-green-500 transition ease-in-out duration-300 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center cursor-pointer"
                              >
                                {loading ? "Sending..." : "Send Reset Link"}
                              </button>
                              {showModal && (
                                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
                                          <div className="flex items-center justify-center gap-2">
                                            <img
                                              src={Logo}
                                              alt="LM Club"
                                              className="w-12 h-12 absolute top-4 left-4"
                                            />
                                            <h2 className="text-3xl font-bold">
                                              LM <span className="text-green-600">Club</span>
                                            </h2>
                                          </div>
                                          <div className="mt-6 text-center">
                                            <p className="text-lg font-semibold text-gray-800">{modalMessage}</p>
                                          </div>
                                          <div className="mt-6 flex justify-center gap-4">
                                            <button 
                                              onClick={() => setShowModal(false)} 
                                              className="px-4 py-2 bg-gray-300 rounded text-gray-800"
                                            >
                                              Cancel
                                            </button>
                                            <button 
                                              onClick={handleLoginRedirect} 
                                              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                            >
                                              OK
                                            </button>
                                          </div>
                                          <div className="text-center text-xs mt-6 text-gray-500">
                                            <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                              <p className="text-sm text-center font-light text-gray-500 ">
                                Don’t have an account yet?{" "}
                                <a
                                  href="/login"
                                  className="font-medium hover:underline "
                                >
                                  Sign up
                                </a>
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
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

export default ForgotPassword;
