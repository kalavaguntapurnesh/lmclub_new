import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import apple from "../assets/Apple.svg";
import google from "../assets/Google.svg";
import React, { useEffect } from "react";
import star from "../assets/star.svg";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import success from "../assets/success.png";
import Logo from "../assets/LMDark.webp";
import Error from "../assets/error.png";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
// import { Country, State, City } from "country-state-city";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [referalcode, setReferalCode] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  // automatically populating city, state, zip code

  // const [states, setStates] = useState([]); // List of states
  // const [cities, setCities] = useState([]); // List of cities

  // const countryCode = "US"; // Assuming country is US
  // // Fetch states on component mount
  // useEffect(() => {
  //   const statesData = State.getStatesOfCountry(countryCode);
  //   console.log("Fetched States:", statesData); // Log the states data
  //   setStates(statesData);
  // }, []);

  // Fetch cities based on selected state
  // useEffect(() => {
  //   if (state) {
  //     console.log("Selected State:", state); // Log selected state
  //     const citiesData = City.getCitiesOfState(countryCode, state);
  //     console.log("Fetched Cities for State:", citiesData); // Log fetched cities
  //     setCities(citiesData);
  //     setCity(""); // Reset city when state changes
  //     setZipCode(""); // Reset zip code when state changes
  //   }
  // }, [state]);

  // Create select options for states
  // const stateOptions = states.map((state) => ({
  //   value: state.isoCode,
  //   label: state.name,
  // }));

  // // Create select options for cities
  // const cityOptions = cities.map((city) => ({
  //   value: city.id,
  //   label: city.name,
  // }));

  // // Handle city selection
  // const handleCityChange = (selectedOption) => {
  //   console.log("Selected City:", selectedOption); // Log the selected city
  //   setCity(selectedOption?.label || ""); // Set the selected city value
  // };

  const images = [
    {
      src: "https://images.pexels.com/photos/4484075/pexels-photo-4484075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      src: "https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?cs=srgb&dl=pexels-nappy-936043.jpg&fm=jpg",
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (verified) {
  //     // Proceed with form submission
  //     console.log("Form submitted!");
  //   } else {
  //     alert("Please complete the CAPTCHA!");
  //   }
  // };

  const sendOTP = async () => {
    try {
      const response = await axios.post("http://localhost:9090/api/send-otp", { phone: phoneNumber });
      // const response = await axios.post("https://lmclub-backend.onrender.com/api/send-otp",{ phone: phoneNumber });
      if (response.status === 200) {
        Swal.fire({
          html: `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                    <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                    <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                        <span style="color: black;">LM</span>
                        <span style="color: rgb(37, 218, 73);">Club</span>
                    </h4>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                    <h1 style="font-size: 25px;">OTP Sent!</h1>
                </div>
            </div>
        `,
          customClass: {
            confirmButton: "swal-custom-ok-button",
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "OTP Error",
          text: "Failed to send OTP, please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while sending OTP.",
      });
    }
  };

  const handleSubmit = async (event) => {
    const style = document.createElement("style");
    style.innerHTML = `
    .swal-custom-ok-button {
      background-color:rgb(27, 202, 103); /* Custom color */
      color:white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
    }

    .swal-custom-ok-button:hover {
      background-color:rgb(18, 91, 25); /* Hover color */
    }
  `;
    document.head.appendChild(style);

    event.preventDefault();
    if (verified) {
      console.log("Form submitted!");
      console.log(email);
      console.log(password);
      console.log(username);
      console.log(phoneNumber);
      console.log(street);
      console.log(referalcode);
      console.log(confirmpassword);
      console.log(state);
      console.log(city);
      console.log(zipcode);
      const response = await axios.post("http://localhost:9090/api/registerUser",{
      // const response = await axios.post(/"https://lmclub-backend.onrender.com/api/registerUser", {
          email,
          password,
          username,
          phoneNumber,
          street,
          referalcode,
          confirmpassword,
          // state,
          // city,
          zipcode,
        })
        .then((response) => {
          // dispatch(hideLoading());
          if (response.status === 201) {
            const verifyMail = response.data.newUser.email;
            const partialEmail = verifyMail.replace(
              /(\w{3})[\w.-]+@([\w.]+\w)/,
              "$1***@$2"
            );
            // Swal.fire({
            //   title: "Registration Success",
            //   text:
            //     "Check your email " +
            //     partialEmail +
            //     " and verify it to proceed further.",
            //   icon: "success",
            // });

            Swal.fire({
              html: `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    
                    <!-- Logo + Title -->
                    <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                        <img src="${Logo}" alt="Logo" 
                            style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                        
                        <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                            <span style="color: black;">LM</span>
                            <span style="color: rgb(37, 218, 73);">Club</span>
                        </h4>
                    </div>
        
                    <!-- Success Image -->
                    <div style="margin-bottom: 20px;">
                        <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                    </div>
        
                    <!-- Registration Success Message -->
                    <div style="width: 100%; text-align: center; ">
                        <h1 style="margin: 0; font-size: 25px;">Registration Successful</h1>
                        <p style="margin: 10px 0; font-size: 16px; color: #555;">
                            Check your email <b>${partialEmail}</b> and verify it to proceed further.
                        </p>
                    </div>
                </div>
            `,
              customClass: {
                confirmButton: "swal-custom-ok-button",
              },
            });

            sendOTP();
            navigate("/otp-verification", { state: { email, phoneNumber } });
          } else if (response.data.message === "User Already Exists") {
            //    Swal.fire({
            //   icon: "error",
            //   title: "Oops...",
            //   text: "User already Exits. Please Login",
            // });

            Swal.fire({
              html: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                  
                  <!-- Logo + Title -->
                  <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                      <img src="${Logo}" alt="Logo" 
                          style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                      
                      <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                          <span style="color: black;">LM</span>
                          <span style="color: rgb(37, 218, 73);">Club</span>
                      </h4>
                  </div>
      
                  <!-- Success Image -->
                  <div style="margin-bottom: 20px;">
                      <img src="${Error}" alt="Error" style="width: 50px; height: 50px; margin: 0 10px;" />
                  </div>
      
                 
                  <div style="width: 100%; text-align: center; ">
                      <h1 style="margin: 0; font-size: 25px;"> Error! While Creating Account</h1>
                      <p style="margin: 10px 0; font-size: 16px; color: #555;">
                          User already Exits. Please Login
                      </p>
                  </div>
              </div>
          `,
              customClass: {
                confirmButton: "swal-custom-ok-button",
              },
            });
          }
        })
        .catch((error) => {
          // dispatch(hideLoading());
          console.log(error);
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "Something went wrong!",
          // });

          Swal.fire({
            html: `
              <div style="display: flex; flex-direction: column; align-items: center;">
                  
                  <!-- Logo + Title -->
                  <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                      <img src="${Logo}" alt="Logo" 
                          style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                      
                      <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                          <span style="color: black;">LM</span>
                          <span style="color: rgb(37, 218, 73);">Club</span>
                      </h4>
                  </div>
      
                  <!-- Success Image -->
                  <div style="margin-bottom: 20px;">
                      <img src="${Error}" alt="Error" style="width: 50px; height: 50px; margin: 0 10px;" />
                  </div>
      
                  <!-- Registration Success Message -->
                  <div style="width: 100%; text-align: center;;">
                      <h1 style="margin: 0; font-size: 25px;"> Error! While Creating Account</h1>
                      <p style="margin: 10px 0; font-size: 16px; color: #555;">
                          Something went wrong!
                      </p>
                  </div>
              </div>
          `,
            customClass: {
              confirmButton: "swal-custom-ok-button",
            },
          });
        });

      console.log(response);
    } else {
      alert("Please complete the CAPTCHA!");
    }
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
                          Sign up to your account
                        </h1>

                        <form
                          className="space-y-4 md:space-y-6"
                          onSubmit={handleSubmit}
                        >
                          <div className="w-full">
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
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="name@domain.com"
                              required="true"
                              onChange={(e) => setEmail(e.target.value)}
                            ></input>
                          </div>

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
                                name="username"
                                id="username"
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Joe Root"
                                required="true"
                                onChange={(e) => setUsername(e.target.value)}
                              ></input>
                            </div>
                            <div className="w-full">
                              <label
                                htmlFor="phoneNumber"
                                className="block mb-2 text-sm font-bold text-colorThree "
                              >
                                PhoneNumber
                              </label>
                              <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="+910976444563"
                                required="true"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              ></input>
                            </div>
                          </div>

                          <div className="flex gap-5">
                            <div>
                              <label
                                htmlFor="street"
                                className="block mb-2 text-sm font-bold text-colorThree "
                              >
                                Street
                              </label>
                              <input
                                type="text"
                                name="street"
                                id="street"
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="street"
                                required="true"
                                onChange={(e) => setStreet(e.target.value)}
                              ></input>
                            </div>

                            <div>
                              <label
                                htmlFor="referalcode"
                                className="block mb-2 text-sm font-bold text-colorThree "
                              >
                                Referal Code
                              </label>
                              <input
                                type="text"
                                name="referalcode"
                                id="referalcode"
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Referal Code"
                                onChange={(e) => setReferalCode(e.target.value)}
                              ></input>
                            </div>
                          </div>

                          {/* <div>
                            <label
                              htmlFor="state"
                              className="block mb-2 text-sm font-bold text-colorThree"
                            >
                              State/Province/Region
                            </label>
                            <Select
                              options={stateOptions}
                              onChange={(selectedOption) =>
                                setState(selectedOption?.value || "")
                              }
                              value={stateOptions.find(
                                (option) => option.value === state
                              )}
                              placeholder="Select State"
                            />
                          </div>

                          <div className="flex gap-5">
                            <div className="w-full">
                              <label
                                htmlFor="city"
                                className="block mb-2 text-sm font-bold text-colorThree"
                              >
                                City/Town
                              </label>
                              <Select
                                options={cityOptions}
                                onChange={handleCityChange} // Log the selected city when changed
                                value={cityOptions.find(
                                  (option) => option.label === city
                                )}
                                placeholder="Select City"
                                isDisabled={!state} // Disable city dropdown until state is selected
                              />
                            </div>

                            <div className="w-full">
                              <label
                                htmlFor="zipcode"
                                className="block mb-2 text-sm font-bold text-colorThree"
                              >
                                ZIP Code
                              </label>
                              <input
                                type="text"
                                name="zipcode"
                                id="zipcode"
                                className="border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="ZIP Code"
                                value={zipcode} // Bind the value of zip code
                                onChange={(e) => setZipCode(e.target.value)}
                              />
                            </div>
                          </div> */}

                          <div className="flex gap-5">
                            <div>
                              <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-bold text-colorThree "
                              >
                                Password
                              </label>
                              <div className="flex flex-row">
                                <input
                                  // type={type}
                                  name="password"
                                  value={password}
                                  id="password"
                                  placeholder="••••••••"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                  required="true"
                                  onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                {/* <span
                                onClick={handleToggle}
                                className="cursor-pointer flex justify-center items-center"
                              >
                                <Icon
                                  className="absolute mr-10 text-black"
                                  icon={icon}
                                  size={20}
                                ></Icon>
                              </span> */}
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="confirmpassword"
                                className="block mb-2 text-sm font-bold text-colorThree "
                              >
                                Confirm Password
                              </label>
                              <div className="flex flex-row">
                                <input
                                  // type={type}
                                  name="confirmpassword"
                                  value={confirmpassword}
                                  id="confirmpassword"
                                  placeholder="••••••••"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                  required="true"
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                ></input>
                                {/* <span
                                onClick={handleToggle}
                                className="cursor-pointer flex justify-center items-center"
                              >
                                <Icon
                                  className="absolute mr-10 text-black"
                                  icon={icon}
                                  size={20}
                                ></Icon>
                              </span> */}
                              </div>
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
                                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
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
                            className="w-full text-white bg-mainColor text-base transition ease-in-out duration-1000 focus:outline-none font-medium rounded px-5 py-2.5 text-center cursor-pointer"
                          >
                            Create an account
                          </button>
                          <div className="relative flex items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-black text-sm">
                              or
                            </span>
                            <div className="flex-grow border-t border-gray-400"></div>
                          </div>

                          <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img src={google} alt="" className="w-5 h-5" />
                            Sign up with Google
                          </button>

                          <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <img src={apple} alt="" className="w-5 h-5" />
                            Sign up with Apple
                          </button>
                          <p className="text-sm text-center font-light text-gray-500  ">
                            Already have an account?{" "}
                            <a
                              href="/login"
                              className="font-medium text-primary-600 hover:underline "
                            >
                              Login Here
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="relative lg:h-[60%] w-full">
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
                        className="w-full h-[100%] object-cover"
                      />
                      <div className="absolute bottom-4 px-4 text-white rounded w-[100%] ">
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

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Register;
