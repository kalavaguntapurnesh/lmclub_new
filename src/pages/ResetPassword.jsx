import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { backendUrl } = useContext(AppContext);

  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        backendUrl + `/api/user/reset-password/${token}`,
        { password }
      );
      toast.success(data.message);
      navigate("/login");
      scrollTo(0, 0);
    } catch (error) {
      console.log(error);
      toast.error("Password reset failed");
    }
    setLoading(false);
  };

  return (
    <div className="lg:pt-28 pt-16">
      <NavBar />
      <div className="relative pt-32 pb-4 bg-gray-50 h-screen">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div>
                  <section className="bg-gray-50 my-8">
                    <div className="flex flex-col items-center justify-center px-6 mx-auto">
                      <div className="w-full bg-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-colorThree md:text-2xl dark:text-white">
                            Reset Your Password
                          </h1>
                          <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                          >
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                              >
                                Password
                              </label>
                              <div className="flex flex-row">
                                <input
                                  name="password"
                                  id="password"
                                  value={password}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="••••••••"
                                  required="true"
                                  onChange={(e) => setPassword(e.target.value)}
                                ></input>
                              </div>
                            </div>

                            <button
                              type="submit"
                              disabled={loading}
                              className="w-full bg-green-500 text-white bg-colorFour hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center cursor-pointer"
                            >
                              {loading ? "Loading" : "Update Password"}
                            </button>
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
      <Footer />
    </div>
  );
};

export default ResetPassword;
