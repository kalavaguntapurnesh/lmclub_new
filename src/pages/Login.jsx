import { useContext, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import apple from "../assets/Apple.svg";
import google from "../assets/Google.svg";
import React, { useEffect } from "react";
import star from "../assets/star.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { AppContext } from "./../context/AppContext";
import { toast } from "react-toastify";
import countriesData from "../countries.json";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    if (selectedCountry) {
      const countryObj = countriesData.find((c) => c.name === selectedCountry);
      setStates(countryObj ? countryObj.states : []);
      setSelectedState("");
      setCities([]); // Resetting Cities
      setSelectedCity("");
    } else {
      setStates([]);
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      const countryObj = countriesData.find((c) => c.name === selectedCountry);
      const stateObj = countryObj?.states.find((s) => s.name === selectedState);
      setCities(stateObj ? stateObj.cities : []);
    } else {
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedState, selectedCountry]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("Sign Up");
  const [type, setType] = useState("password");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          country: selectedCountry,
          stateResidence: selectedState,
          cityResidence: selectedCity,
          password,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success("Logged In Successfully!");
          navigate("/dashboard");
          scrollTo(0, 0);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          toast.success("Registered Successfully!");
          setToken(data.token);
          navigate("/dashboard");
          scrollTo(0, 0);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/19746092/pexels-photo-19746092/free-photo-of-man-in-black-shirt-sitting-by-laptop-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Image One",
      name: "Jonathan Kite",
      role: "Business Manager",
      review:
        "LM Club simplifies the process of networking and using this application really made me win rewards.",
    },
    {
      src: "https://images.pexels.com/photos/8101727/pexels-photo-8101727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Image Three",
      name: "Hugh Jackman",
      role: "Restaurant Chef",
      review:
        "Thanks to LM Club, connecting with professionals is seamless, and I got rewarded too with Amazon gift cards.",
    },
    {
      src: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?cs=srgb&dl=pexels-hannah-nelson-390257-1065084.jpg&fm=jpg",
      label: "Image Two",
      name: "Kate Dennings",
      role: "Software Architect",
      review:
        "LM Club streamlined my networking experience, and I even got rewarded along the way!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    setVerified(true); // This will be true once reCAPTCHA is successfully completed
  };

  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="relative ">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4 mt-8">
                  <div className="flex justify-center items-start">
                    <div className="w-[100%] bg-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-w-md">
                      <div className="p-6 space-y-4 md:space-y-4">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-footerLinks md:text-2xl ">
                          {state === "Sign Up"
                            ? "Sign up to your account"
                            : "Log in to LM Club"}
                        </h1>
                        <form
                          className="space-y-4 md:space-y-6"
                          onSubmit={onSubmitHandler}
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
                              placeholder="name@domain.com"
                              required="true"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            ></input>
                          </div>

                          {state === "Sign Up" && (
                            <div className="flex gap-5">
                              <div className="w-full">
                                <label
                                  htmlFor="username"
                                  className="block mb-2 text-sm font-bold text-colorThree "
                                >
                                  FullName
                                </label>
                                <input
                                  type="text"
                                  name="fullname"
                                  id="fullname"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                  placeholder="Joe Root"
                                  required="true"
                                  onChange={(e) => setName(e.target.value)}
                                ></input>
                              </div>
                              {/* <div className="w-full">
                                <label
                                  htmlFor="phoneNumber"
                                  className="block mb-2 text-sm font-bold text-colorThree "
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  name="phoneNumber"
                                  id="phoneNumber"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                  placeholder="+910976444563"
                                  required="true"
                                  onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                  }
                                ></input>
                              </div> */}
                            </div>
                          )}

                          {state === "Sign Up" && (
                            <div>
                              <label className="block mb-2 text-sm font-bold text-colorThree ">
                                Country
                              </label>
                              <select
                                className="w-full mb-4 p-3 border border-gray-300 rounded shadow bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none pr-8"
                                onChange={(e) =>
                                  setSelectedCountry(e.target.value)
                                }
                                value={selectedCountry}
                              >
                                <option value="">Select Country</option>
                                {countriesData.map((country) => (
                                  <option
                                    key={country.iso2}
                                    value={country.name}
                                  >
                                    {country.name}
                                  </option>
                                ))}
                              </select>

                              {/* State Dropdown */}
                              {selectedCountry && (
                                <div className="mt-2">
                                  <label className="block mb-2 text-sm font-bold text-colorThree ">
                                    State
                                  </label>
                                  <select
                                    className="w-full mb-4 p-3 border border-gray-300 rounded shadow bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none pr-8"
                                    onChange={(e) =>
                                      setSelectedState(e.target.value)
                                    }
                                    value={selectedState}
                                  >
                                    <option value="">Select State</option>
                                    {states.length > 0 ? (
                                      states.map((state) => (
                                        <option
                                          key={state.state_code}
                                          value={state.name}
                                        >
                                          {state.name}
                                        </option>
                                      ))
                                    ) : (
                                      <option disabled>
                                        No states available
                                      </option>
                                    )}
                                  </select>
                                </div>
                              )}

                              {/* City Dropdown */}
                              {selectedState && cities.length > 0 && (
                                <div className="mt-2">
                                  <label className="block mb-2 text-sm font-bold text-colorThree ">
                                    City
                                  </label>
                                  <select
                                    onChange={(e) =>
                                      setSelectedCity(e.target.value)
                                    }
                                    value={selectedCity}
                                    className="w-full mb-4 p-3 border border-gray-300 rounded shadow bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none pr-8"
                                  >
                                    <option value="">Select City</option>
                                    {cities.map((city) => (
                                      <option key={city.id} value={city.name}>
                                        {city.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              )}
                            </div>
                          )}

                          <div>
                            <label
                              htmlFor="password"
                              className="block mb-2 text-sm font-bold text-colorThree "
                            >
                              Password
                            </label>
                            <div className="flex flex-row">
                              <input
                                type={type}
                                name="password"
                                value={password}
                                id="password"
                                placeholder="••••••••"
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                required="true"
                                onChange={(e) => setPassword(e.target.value)}
                              ></input>
                            </div>
                          </div>

                          <div className="w-[100%] flex justify-center items-center">
                            <ReCAPTCHA
                              sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                              onChange={handleCaptcha}
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="remember"
                                  aria-describedby="remember"
                                  type="checkbox"
                                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                  required=""
                                ></input>
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="remember"
                                  className="text-black  "
                                >
                                  Keep me signed in
                                </label>
                              </div>
                            </div>
                            <a
                              href="/forgotPassword"
                              className="text-sm hover:underline"
                            >
                              Forgot password?
                            </a>
                          </div>
                          <button
                            type="submit"
                            className="w-full text-white bg-green-500 text-base transition ease-in-out duration-1000 focus:outline-none font-semibold rounded px-5 py-2.5 text-center cursor-pointer"
                          >
                            {state === "Sign Up" ? "Create Account" : "Login"}
                          </button>
                          <div className="relative flex py-1 items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-black text-sm">
                              or
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                          </div>

                          <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img src={google} alt="image" className="w-5 h-5" />
                            Log in with Google
                          </button>

                          <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img src={apple} alt="image" className="w-5 h-5" />
                            Log in with Apple
                          </button>

                          {state === "Sign Up" ? (
                            <p className="text-sm text-center font-light text-gray-500  ">
                              Already have an account?{" "}
                              <span
                                onClick={() => setState("Login")}
                                className="font-medium cursor-pointer text-primary-600 hover:underline "
                              >
                                Login Here
                              </span>
                            </p>
                          ) : (
                            <p className="text-sm text-center font-light text-gray-500  ">
                              Not Registered?{" "}
                              <span
                                onClick={() => setState("Sign Up")}
                                className="font-medium cursor-pointer text-primary-600 hover:underline "
                              >
                                Create an Account
                              </span>
                            </p>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-full w-full">
                    <motion.div
                      key={currentImage}
                      // initial={{ opacity: 0, x: 50 }}
                      // animate={{ opacity: 1, x: 0 }}
                      // exit={{ opacity: 0, x: -50 }}
                      // transition={{ duration: 1 }}
                      className="relative h-full w-full rounded-lg overflow-hidden"
                    >
                      <img
                        src={images[currentImage].src}
                        alt="login"
                        className="w-full md:h-[100%] h-auto object-cover"
                      />
                      <div className="absolute bottom-4 px-4 text-white rounded w-[100%]">
                        <div className="border-navColor backdrop-blur-md p-4 rounded text-gray-50  bg-white/20 w-[100%] ">
                          <h1 className="md:text-xl text-sm font-semibold">
                            “{images[currentImage].review}”
                          </h1>

                          <p className="font-semibold md:text-lg text-xs mt-3">
                            {images[currentImage].name}
                          </p>
                          <p className="md:text-sm text-xs">
                            {images[currentImage].role}
                          </p>
                          <div className="mt-2 flex flex-row gap-1">
                            <img
                              src={star}
                              alt="start"
                              className="md:w-4 md:h-4 w-3 h-3"
                            />
                            <img
                              src={star}
                              alt="start"
                              className="md:w-4 md:h-4 w-3 h-3"
                            />
                            <img
                              src={star}
                              alt="start"
                              className="md:w-4 md:h-4 w-3 h-3"
                            />
                            <img
                              src={star}
                              alt="start"
                              className="md:w-4 md:h-4 w-3 h-3"
                            />
                            <img
                              src={star}
                              alt="start"
                              className="md:w-4 md:h-4 w-3 h-3"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
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

export default Login;
