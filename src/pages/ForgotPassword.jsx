import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import Swal from "sweetalert2";
import { FaUnlock } from "react-icons/fa";
import Footer from "../components/Footer";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(showLoading());
    // axios.post("http://localhost:9090/api/forgotPassword", {
    axios.post("https://lmclub-backend.onrender.com/api/forgotPassword", {
        email,
      })
      .then((response) => {
        // dispatch(hideLoading());
        if (response.status === 200) {
          const verifyMail = response.data.email;
          // const partialEmail = verifyMail.replace(
          //   /(\w{3})[\w.-]+@([\w.]+\w)/,
          //   "$1***@$2"
          // );
          const partialEmail = verifyMail;
          Swal.fire({
            title: "Password Reset Initiated",
            text:
              "We have sent an email to " +
              partialEmail +
              " registered with us, please check the email for password reset.",
            icon: "success",
          });
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          navigate("/register");
        }
      })
      .catch((error) => {
        // dispatch(hideLoading());
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
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
                                  placeholder="name@company.com"
                                  required=""
                                  onChange={(e) => setEmail(e.target.value)}
                                ></input>
                              </div>

                              {/* <button
                                type="submit"
                                className="w-full text-white bg-colorFour hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center cursor-pointer"
                              >
                                Submit
                              </button> */}
                              <button
                                 type="submit"
                                 className="w-full text-white bg-green-500 hover:bg-green-500 transition ease-in-out duration-300 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center cursor-pointer"
                                >
                                      Submit
                              </button>
                              <p className="text-sm text-center font-light text-gray-500 ">
                                Don’t have an account yet?{" "}
                                <a
                                  href="/register"
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