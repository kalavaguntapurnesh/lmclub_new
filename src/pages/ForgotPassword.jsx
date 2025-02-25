import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUnlock } from "react-icons/fa";
import Footer from "../components/Footer";
import { AppContext } from "./../context/AppContext";
import { toast } from "react-toastify";
const ForgotPassword = () => {
  const { backendUrl } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/user/forgot-password",
        { email }
      );
      toast.success(data.message);
      resetForm();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  const resetForm = () => {
    setEmail("");
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
