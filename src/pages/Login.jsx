import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {useNavigate , useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import apple from "../assets/Apple.svg";
import google from "../assets/Google.svg";
import React from "react";
import star from "../assets/star.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { AppContext } from "./../context/AppContext";
import countriesData from "../countries.json";
import Logo from "../assets/LMDark.webp";
const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("Login");
  const [type, setType] = useState("password");
  const [captchaStatus, setCaptchaStatus] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [selectedRole, setSelectedRole] = useState("");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const showPopup = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };
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

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  const handleCaptcha = (value) => {
    setCaptchaStatus(true);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!captchaStatus) {
      showPopup("Please verify the captcha");
      return;
    }

    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(`${backendUrl}/api/user/register`, {
          firstName,
          lastName,
          email,
          country: selectedCountry,
          stateResidence: selectedState,
          cityResidence: selectedCity,
          password,
          selectedRole,
        });

        if (data.success) {
          showPopup("Registration Successful! Check your email for verification.");
          setState("Login");
          window.scrollTo(0, 0);
        } else {
          showPopup(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (data.success) {
          if (data.verified) {
            localStorage.setItem("token", data.token);
            showPopup("Login Successful!");
            setToken(data.token);

            // Redirect based on previous route
            const fromRewards = location.state?.fromRewards || false;
            navigate(fromRewards ? "/redeem-now" : "/dashboard");
          } else {
            showPopup("Please verify your email before logging in.");
          }
        } else {
          showPopup( data.message);
        }
      }
    } catch (error) {
      showPopup( error.message);
      console.log(error.message);
    }
  };

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
  const handleLoginRedirect = () => {
    console.log("OK button clicked! Redirecting...");
    setShowModal(false); // Close the modal first
  
    setTimeout(() => {
      navigate("/login"); // Navigate after closing modal
    }, 300); // Small delay to allow modal to close smoothly
  };
  return (
    <div>
     
      <Navbar />
      <div className="pt-16">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4 mt-8">
                  <div className="flex justify-center items-start">
                    <div className="w-[100%] bg-white rounded shadow max-w-md">
                      <div className="p-6 space-y-4">
                        <h1 className="text-xl text-center font-bold tracking-tight text-footerLinks md:text-2xl">
                          {state === "Sign Up" ? "Sign up to your account" : "Log in to LM Club"}
                        </h1>
                        <form className="space-y-4" onSubmit={onSubmitHandler}>
                          <div>
                            <label className="block mb-1 text-sm font-bold text-colorThree">Email</label>
                            <input type="email" className="border border-gray-300 text-gray-900 rounded block w-full p-2.5" placeholder="name@domain.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
                          </div>
  
                          {state === "Sign Up" && (
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block mb-1 text-sm font-bold text-colorThree">First Name</label>
                                <input type="text" className="border border-gray-300 text-gray-900 rounded block w-full p-2.5" placeholder="Joe" required onChange={(e) => setFirstName(e.target.value)} />
                              </div>
                              <div>
                                <label className="block mb-1 text-sm font-bold text-colorThree">Last Name</label>
                                <input type="text" className="border border-gray-300 text-gray-900 rounded block w-full p-2.5" placeholder="Root" required onChange={(e) => setLastName(e.target.value)} />
                              </div>
                            </div>
                          )}
  
                          {state === "Sign Up" && (
                            <div>
                              <label className="block mb-2 text-sm font-bold text-colorThree ">
                                User Type
                              </label>
                              <select
                                className="w-full p-[10px] border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none "
                                onChange={(e) => setSelectedRole(e.target.value)}
                                value={selectedRole}
                              >
                                <option value="Not Selected">Not Selected</option>
                                <option value="Business User">Business User</option>
                                <option value="General User">General User</option>
                              </select>
                            </div>
                          )}

                         {state === "Sign Up" && (
                            <div>
                              <label className="block mb-2 text-sm font-bold text-colorThree ">
                                Country
                              </label>
                              <select
                                className="w-full p-3 border border-gray-300 sm:text-base rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none"
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                value={selectedCountry}
                              >
                                <option value="">Select Country</option>
                                {countriesData.map((country) => (
                                  <option key={country.iso2} value={country.name}>
                                    {country.name}
                                  </option>
                                ))}
                              </select>

                              {selectedCountry && (
                                <div className="mt-2">
                                  <label className="block mb-2 text-sm font-bold text-colorThree ">
                                    State
                                  </label>
                                  <select
                                    className="w-full p-[10px] border border-gray-300 sm:text-sm rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none"
                                    onChange={(e) => setSelectedState(e.target.value)}
                                    value={selectedState}
                                  >
                                    <option value="">Select State</option>
                                    {states.length > 0 ? (
                                      states.map((state) => (
                                        <option key={state.state_code} value={state.name}>
                                          {state.name}
                                        </option>
                                      ))
                                    ) : (
                                      <option disabled>No states available</option>
                                    )}
                                  </select>
                                </div>
                              )}

                              {selectedState && cities.length > 0 && (
                                <div className="mt-2">
                                  <label className="block mb-2 text-sm font-bold text-colorThree ">
                                    City
                                  </label>
                                  <select
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                    value={selectedCity}
                                    className="w-full p-[10px] border border-gray-300 sm:text-sm rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 appearance-none"
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
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500  block w-full p-2.5 "
                                required="true"
                                onChange={(e) => setPassword(e.target.value)}
                              ></input>
                            </div>
                          </div>

                          <div className="w-[100%] flex justify-center items-center">
                            <ReCAPTCHA
                              sitekey="6Leb8OIqAAAAAGMagLTxEfJyRH1pIETbw2t_yJ9G"
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
                                onClick={() => {
                                  setState("Login");
                                  scrollTo(0, 0);
                                }}
                                className="font-medium cursor-pointer text-primary-600 hover:underline "
                              >
                                Login Here
                              </span>
                            </p>
                          ) : (
                            <p className="text-sm text-center font-light text-gray-500  ">
                              Not Registered?{" "}
                              <span
                                onClick={() => {
                                  setState("Sign Up");
                                  scrollTo(0, 0);
                                }}
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
                  <div className="relative w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] mx-auto h-[350px] md:h-[450px] lg:h-full lg:min-h-screen flex items-center"> 
                    <motion.div key={currentImage} className="relative h-full w-full rounded-lg overflow-hidden">
                      <img
                        src={images[currentImage].src}
                        alt="login"
                        className="w-full h-full object-cover"
                      />

                     {/* Gradient Background + Text Inside Image */}
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 md:p-5 lg:p-8 text-white">
                        <h1 className="text-sm md:text-lg lg:text-2xl font-medium">
                         “{images[currentImage].review}”
                        </h1>

                        <p className="font-medium text-xs md:text-base lg:text-xl mt-2">
                         {images[currentImage].name}
                        </p>
                        <p className="text-xs md:text-sm lg:text-lg">
                          {images[currentImage].role}
                        </p>

                        {/* Star Rating */}
                        <div className="mt-2 flex flex-row gap-1">
                          {[...Array(5)].map((_, index) => (
                            <img key={index} src={star} alt="star" className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  {/* Modal Component */}
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
