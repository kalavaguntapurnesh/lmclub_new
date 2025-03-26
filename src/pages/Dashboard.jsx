import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./../context/AppContext";
import { useNavigate } from "react-router-dom";
import beehive from "../assets/beehive.webp";
import broadcast from "../assets/broadcast.webp";
import enroll from "../assets/enroll.webp";
import estore from "../assets/estore.webp";
import network from "../assets/network.webp";
import { MdArrowRightAlt } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
import axios from "axios";
import Logo from "../assets/LMDarkLogo.webp";
import { IoIosClose } from "react-icons/io";
import Lottie from "lottie-react";
import SadLottie from "../assets/SadLottie.json";
import Swal from "sweetalert2";
import WhatsApp from "../components/WhatsApp";
import ScrollToTop from "../components/ScrollToTop";
// const public_stripe_key =

const Dashboard = () => {
  const { userData, token, backendUrl } = useContext(AppContext);

  const navigate = useNavigate();

  // const [categoryOpen, setCategoryOpen] = useState(false);
  // const [statusOpen, setStatusOpen] = useState(false);
  // const [locationOpen, setLocationOpen] = useState(false);
  // const [filterOpen, setFilterOpen] = useState(false);

  const [subscription, setSubscription] = useState(null);

  const [loading, setLoading] = useState(false);

  const [showPlanModal, setShowPlanModal] = useState(false);

  const [showWidgetModal, setShowWidgetModal] = useState(false);

  const [showWidgetModalTwo, setShowWidgetModalTwo] = useState(false);
  const [showWidgetModalThree, setShowWidgetModalThree] = useState(false);
  const [showWidgetModalFour, setShowWidgetModalFour] = useState(false);
  const [showWidgetModalFive, setShowWidgetModalFive] = useState(false);

  const [selectedWidget, setSelectedWidget] = useState(null);

  const openPlanModal = (plan) => {
    setShowPlanModal(true);
  };

  const closePlanModal = (user) => {
    setShowPlanModal(false);
  };

  const openWidgetModal = (plan) => {
    setSelectedWidget(plan);
    setShowWidgetModal(true);
  };

  const closeWidgetModal = (user) => {
    setSelectedWidget(null);
    setShowWidgetModal(false);
  };

  const openWidgetModalTwo = (plan) => {
    setSelectedWidget(plan);
    setShowWidgetModal(true);
  };

  const closeWidgetModalTwo = (user) => {
    setSelectedWidget(null);
    setShowWidgetModalTwo(false);
  };

  const openWidgetModalThree = (plan) => {
    setShowWidgetModalThree(plan);
    setShowWidgetModal(true);
  };

  const closeWidgetModalThree = (user) => {
    setShowWidgetModalThree(null);
    setShowWidgetModal(false);
  };

  const openWidgetModalFour = (plan) => {
    setShowWidgetModalFour(plan);
    setShowWidgetModal(true);
  };

  const closeWidgetModalFour = (user) => {
    setShowWidgetModalFour(null);
    setShowWidgetModal(false);
  };

  const openWidgetModalFive = (plan) => {
    setShowWidgetModalFive(plan);
    setShowWidgetModal(true);
  };

  const closeWidgetModalFive = (user) => {
    setShowWidgetModalFive(null);
    setShowWidgetModal(false);
  };

  useEffect(() => {
    const fetchMySubscriptions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          backendUrl + "/api/user/get-user-subscription-plan",
          {
            headers: { token },
          }
        );

        if (response.data.combinedData) {
          setSubscription(response.data.combinedData);
          // console.log(
          //   "The subscription of user is : ",
          //   response.data.combinedData
          // );
        } else {
          setSubscription(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMySubscriptions();
  }, []);
   
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


      
    const [isChecked, setIsChecked] = useState(false);
    const [hasAccepted, setHasAccepted] = useState(false);
    const userId = userData._id; 

   
    useEffect(() => {
      const fetchTCStatus = async () => {
        try {
          const response = await axios.get(backendUrl + `/api/user/get-terms-accepted/${userId}`);
         
          if (response.data.isAcceptedTCsForBeehive) {
            setHasAccepted(true);
          }
        } catch (error) {
          console.error("Error fetching terms status:", error);
        }
      };
    
      fetchTCStatus();
    }, [userId, hasAccepted]);

  const handleContinueClick = async ()=>{
    // if (isChecked) {
        await axios.post(backendUrl + "/api/user/post-terms-accepted", {
          userId,
          isAcceptedTCsForBeehive: true,
        });
        setHasAccepted(true);
        navigate("/beehive-workflow");
    // }
    // else{
    //   Swal.fire({
    //           html: `
    //                <div style="display: flex; flex-direction: column; align-items: center;">
    //                     <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
    //                         <img src="${Logo}" alt="Logo" 
    //                              style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                               
    //                               <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
    //                                   <span style="color: black;">LM</span>
    //                                   <span style="color: rgb(37, 218, 73);">Club</span>
    //                               </h4>
    //                     </div>
                  
    //                    <div style="text-align: center; font-size: 22px; font-weight: bold; color: #333; margin: 20px;">
    //                     <p>Please accept the terms before proceeding.</p>
    //                   </div> 
    //                </div>
    //             `,
    //           customClass: {
    //             confirmButton: "swal-custom-ok-button",
    //           },
    //           footer: `
    //               <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
    //           `,
    //         });
    // }
  }

  // const handleEnrollClick = () => {
  //   if (isChecked) {
  //     navigate("/grow-workflow");
  //   } else {
  //     showTermsAlert();
  //   }
  // };

  const [remainingDays, setRemainingDays] = useState(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const fetchRemainingDays = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(backendUrl + "/api/user/remaining-days", {
          headers: { Authorization: `Bearer ${token}` }
        });
  
        console.log("Remaining Days Response:", response.data); // Debugging
        setRemainingDays(response.data.remainingDays);
        setIsExpired(response.data.isExpired);
      } catch (error) {
        console.error("Error fetching countdown data", error);
      }
    };
  
    fetchRemainingDays();
  }, []);
  
  return (
    userData && (
      <div className="w-[100%]">
        <ScrollToTop />
        <WhatsApp />
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="w-[100%] flex flex-col pt-6 gap-2 text-sm">
                  <div className="flex flex-row justify-between">
                    <div className="space-y-2 px-4">
                      <p className="lg:text-3xl text-lg font-bold">
                        <span className="text-green-500">Hello, </span>{" "}
                        {userData.firstName}
                      </p>
                    </div>
                  </div>
                </div>

                {subscription ? (
                  <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 pt-4">

<div
                      onClick={() => setShowWidgetModalFive(true)}
                      className="flex justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-4  cursor-pointer">
                        <div className="space-y-2">
                          <div className="flex justify-center items-center">
                            <img
                              src={network}
                              alt="about_one"
                              className="w-[72px] h-[72px]"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h1 className="text-lg text-trumpTwo font-semibold    text-center">
                              Network
                            </h1>
                          </div>

                          {/* <div className=" flex justify-center">
                            <a
                              // href={value.link}
                              className="flex flex-row items-center text-green-500 "
                            >
                              <span className="relative text-sm">
                                Know More
                              </span>
                              <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => setShowWidgetModal(true)}
                      className="flex justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-4  cursor-pointer">
                        <div className="space-y-2">
                          <div className="flex justify-center items-center">
                            <img
                              src={beehive}
                              alt="about_one"
                              className="w-[72px] h-[72px]"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h1 className="text-lg text-trumpTwo font-semibold    text-center">
                              Beehive
                            </h1>
                          </div>

                          {/* <div className="flex justify-center">
                            <a
                              // href={value.link}
                              className="flex flex-row items-center text-green-500 "
                            >
                              <span className="relative text-sm">
                                Know More
                              </span>
                              <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => setShowWidgetModalThree(true)}
                      className="flex justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-4  cursor-pointer">
                        <div className="space-y-2">
                          <div className="flex justify-center items-center">
                            <img
                              src={broadcast}
                              alt="about_one"
                              className="w-[72px] h-[72px]"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h1 className="text-lg text-trumpTwo font-semibold   text-center">
                              Broadcast
                            </h1>
                          </div>

                          {/* <div className=" flex justify-center">
                            <a
                              // href={value.link}
                              className="flex flex-row items-center text-green-500 "
                            >
                              <span className="relative text-sm">
                                Know More
                              </span>
                              <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => setShowWidgetModalFour(true)}
                      className="flex justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-4  cursor-pointer">
                        <div className="space-y-2">
                          <div className="flex justify-center items-center">
                            <img
                              src={estore}
                              alt="about_one"
                              className="w-[72px] h-[72px]"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h1 className="text-lg text-trumpTwo font-semibold    text-center">
                              E-Store
                            </h1>
                          </div>

                          {/* <div className=" flex justify-center">
                            <a
                              // href={value.link}
                              className="flex flex-row items-center text-green-500 "
                            >
                              <span className="relative text-sm">
                                Know More
                              </span>
                              <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => setShowWidgetModalTwo(true)}
                      className="flex justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-4  cursor-pointer">
                        <div className="space-y-2">
                          <div className="flex justify-center items-center">
                            <img
                              src={enroll}
                              alt="about_one"
                              className="w-[72px] h-[72px]"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h1 className="text-lg text-trumpTwo font-semibold    text-center">
                              Grow
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    

                   
                  </div>
                ) : (
                  <div>
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-gray-600 px-4 text-base mt-2 mb-4">
            {isExpired ? (
              <span className="text-red-500 font-bold">
                Hello, your free tier has expired. Please subscribe to any one of the membership package.
              </span>
            ) : (
              <span>
                Hello, your free tier subscription ends in{" "}
                <span className="text-green-500 font-bold">{remainingDays} days</span>.
              </span>
            )}
          </p>
        </div>

        <div
          onClick={() => {
            navigate("/my-membership");
            window.scrollTo(0, 0);
          }}
          className="group border-[1px] cursor-pointer relative px-6 py-2 text-white text-sm rounded-full border-green-400 bg-green-400 font-semibold overflow-hidden flex items-center gap-2 w-[180px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
        >
          <span className="relative flex-[8] text-center">Go to Plans</span>
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-black group-hover:text-green-400">
            <TiArrowRight className=" text-lg" />
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 pt-8">
        {[
          { title: "Network", src: network },
          { title: "Beehive", src: beehive },
          { title: "Broadcast", src: broadcast },
          { title: "E-Store", src: estore },
          { title: "Grow", src: enroll },
        ].map(({ title, src }) => (
          <div key={title} className="flex justify-center">
            <div
              className={`w-full border rounded p-4 ${
                isExpired ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 cursor-pointer"
              }`}
              onClick={() => !isExpired && setShowPlanModal(true)}
            >
              <div className="space-y-2 text-center">
                <div className="flex justify-center items-center">
                  <img src={src} alt={title} className="w-[72px] h-[72px]" />
                </div>
                <h1 className="text-lg font-semibold">{title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {showPlanModal && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center lg:mx-0 mx-8">
            <div className="bg-white p-6 rounded shadow w-[600px] z-20">
              <div className="flex flex-row justify-between items-center">
                <img src={Logo} alt="logo" className="w-[52px] h-auto" />

                <h2 className="md:text-lg text-lg font-bold text-center">
                  Widget Access
                </h2>

                <IoIosClose
                  onClick={closePlanModal}
                  className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                />
              </div>

              <div className="border-b border-gray-200 pt-2"></div>

              <div className="flex flex-col items-center justify-center mt-6 ">
                <div className="w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center">
                  <Lottie
                    animationData={SadLottie}
                    loop={true}
                    className="w-full h-[140px]"
                  />
                </div>

                <p className="text-gray-600 text-lg">
                  Please subscribe to any of our plans to access the widgets.
                </p>
                <button
                  onClick={() => navigate("/my-membership")}
                  className="bg-green-400 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] rounded hover:bg-green-600 my-8"
                >
                  Go to Membership Plans
                </button>
              </div>
            </div>
          </div>
        )}

        {showWidgetModal && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center lg:mx-0 mx-8">
            <div className="bg-white p-6 rounded shadow w-[600px] z-20">
              <div className="flex flex-row justify-between items-center">
                <img src={Logo} alt="logo" className="w-[52px] h-auto" />

                <h2 className="md:text-lg text-lg font-bold text-center">
                Beehive Widget Access
                </h2>

                <IoIosClose
                  onClick={closeWidgetModal}
                  className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                />
              </div>

              <div className="border-b border-gray-200 pt-2"></div>

              <div className="flex flex-col items-center justify-center mt-6 ">
                <div className="w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center">
                  <img src={beehive} alt="" />
                </div>

                <p className="text-gray-600 text-lg text-center">
                  Unlock the Beehive, it will allow us to text/mail great deals,
                  coupons, information and opportunities from local restaurants,
                  hotels and more.
                </p>

                {/* <div className="flex flex-row gap-2 items-center text-sm mt-4">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    checked={isChecked}
                    required
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  cursor-pointer"
                  ></input>
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the {" "}
                    <a
                      className="font-medium text-gray-500 hover:underline hover:text-green-600 dark:text-primary-500"
                      href="/terms-and-conditions"
                    >
                      Terms and Conditions
                    </a>{" "}
                    of Beehive
                  </label>
                </div> */}

                {hasAccepted ? (
                  <p className="text-green-600 text-sm mt-4">
                    ✅ You have already accepted the Terms and Conditions.
                  </p>
                ) : (
                  <div className="flex flex-row gap-2 items-center text-sm mt-4">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      checked={isChecked}
                      required
                      onChange={() => setIsChecked(!isChecked)}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 cursor-pointer"
                    />
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the{" "}
                      <a
                        className="font-medium text-gray-500 hover:underline hover:text-green-600"
                        href="/terms-and-conditions"
                      >
                        Terms and Conditions
                      </a>{" "}
                      of Beehive
                    </label>
                  </div>
                )}

                <button
                  onClick={handleContinueClick}
                  className="bg-green-400 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] rounded hover:bg-green-600 my-8"
                >
                  Continue Beehive
                </button>
                <div className="text-center text-xs mt-1 mb-4">
                    <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showWidgetModalTwo && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center lg:mx-0 mx-8">
            <div className="bg-white p-6 rounded shadow w-[600px] z-20">
              <div className="flex flex-row justify-between items-center">
                <img src={Logo} alt="logo" className="w-[52px] h-auto" />

                <h2 className="md:text-lg text-lg font-bold text-center">
                Enroll Widget Access
                </h2>

                <IoIosClose
                  onClick={closeWidgetModalTwo}
                  className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                />
              </div>

              <div className="border-b border-gray-200 pt-2"></div>

              <div className="flex flex-col items-center justify-center mt-6 ">
                <div className="w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center">
                  <img src={enroll} alt="" />
                </div>

                <p className="text-gray-600 text-lg text-center">
                  Unlock the Refer & Earn widget, allow us to reward you for
                  enrolling other members.
                </p>

                <div className="flex flex-row gap-2 items-center text-sm mt-4">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    checked={isChecked}
                    required
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  cursor-pointer"
                  ></input>
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the {" "}
                    <a
                      className="font-medium text-gray-500 hover:underline hover:text-green-600 dark:text-primary-500"
                      href="/terms-and-conditions"
                    >
                      Terms and Conditions
                    </a>{" "}
                    of Enroll
                  </label>
                </div>
                <button
                  onClick={handleEnrollClick}
                  className="bg-green-400 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] rounded hover:bg-green-600 my-8"
                >
                  Continue Enroll
                </button>
                <div className="text-center text-xs mt-1 mb-4">
                    <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showWidgetModalThree && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center lg:mx-0 mx-8">
            <div className="bg-white p-6 rounded shadow w-[600px] z-20">
              <div className="flex flex-row justify-between items-center">
                <img src={Logo} alt="logo" className="w-[52px] h-auto" />

                <h2 className="md:text-lg text-lg font-bold text-center">
                Broadcast Widget Access
                </h2>

                <IoIosClose
                  onClick={closeWidgetModalThree}
                  className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                />
              </div>

              <div className="border-b border-gray-200 pt-2"></div>

              <div className="flex flex-col items-center justify-center mt-6 ">
                <div className="w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center">
                  <img src={broadcast} alt="" />
                </div>

                <p className="text-gray-600 text-lg text-center">
                  Unlock the Broadcast, share the local business advertisements
                  on your social media and we will give you reward points for
                  it.
                </p>

                <div className="flex flex-row gap-2 items-center text-sm mt-4">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    checked={isChecked}
                    required
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  cursor-pointer"
                  ></input>
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the {" "}
                    <a
                      className="font-medium text-gray-500 hover:underline hover:text-green-600 dark:text-primary-500"
                      href="/terms-and-conditions"
                    >
                      Terms and Conditions
                    </a>{" "}
                    of Broadcast
                  </label>
                </div>

                <button
                  onClick={handleContinueClick}
                  className="bg-green-400 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] rounded hover:bg-green-600 my-8"
                >
                  Continue Broadcast
                </button>
                <div className="text-center text-xs mt-1 mb-4">
                    <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showWidgetModalFour && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center lg:mx-0 mx-8">
            <div className="bg-white p-6 rounded shadow w-[600px] z-20">
              <div className="flex flex-row justify-between items-center">
                <img src={Logo} alt="logo" className="w-[52px] h-auto" />

                <h2 className="md:text-lg text-lg font-bold text-center">
                E-Store Widget Access
                </h2>

                <IoIosClose
                  onClick={closeWidgetModalFour}
                  className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                />
              </div>

              <div className="border-b border-gray-200 pt-2"></div>

              <div className="flex flex-col items-center justify-center mt-6 ">
                <div className="w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center">
                  <img src={estore} alt="" className="w-28 h-28" />
                </div>

                <p className="text-gray-600 text-lg text-center">
                  Unlock the Beehive, it will allow us to text/mail great deals,
                  coupons, information and opportunities from local restaurants,
                  hotels and more.
                </p>

                <div className="flex flex-row gap-2 items-center text-sm mt-4">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    checked={isChecked}
                    required
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  cursor-pointer"
                  ></input>
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the {" "}
                    <a
                      className="font-medium text-gray-500 hover:underline hover:text-green-600 dark:text-primary-500"
                      href="/terms-and-conditions"
                    >
                      Terms and Conditions
                    </a>{" "}
                    of E-Store
                  </label>
                </div>

                <button
                  onClick={handleContinueClick}
                  className="bg-green-400 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] rounded hover:bg-green-600 my-8"
                >
                  Continue E-Store
                </button>
                <div className="text-center text-xs mt-1 mb-4">
                    <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showWidgetModalFive && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center lg:mx-0 mx-8">
            <div className="bg-white p-6 rounded shadow w-[600px] z-20">
              <div className="flex flex-row justify-between items-center">
                <img src={Logo} alt="logo" className="w-[52px] h-auto" />

                <h2 className="md:text-lg text-lg font-bold text-center">
                Network Widget Access
                </h2>

                <IoIosClose
                  onClick={closeWidgetModalFive}
                  className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                />
              </div>

              <div className="border-b border-gray-200 pt-2"></div>

              <div className="flex flex-col items-center justify-center mt-6 ">
                <div className="w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center">
                  <img src={network} alt="" />
                </div>

                <div className="flex flex-row gap-2 items-center text-sm mt-4">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    checked={isChecked}
                    required
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  cursor-pointer"
                  ></input>
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the {" "}
                    <a
                      className="font-medium text-gray-500 hover:underline hover:text-green-600 dark:text-primary-500"
                      href="/terms-and-conditions"
                    >
                      Terms and Conditions
                    </a>{" "}
                    of Network
                  </label>
                </div>

                <p className="text-gray-600 text-lg text-center">
                  Unlock the Beehive, it will allow us to text/mail great deals,
                  coupons, information and opportunities from local restaurants,
                  hotels and more.
                </p>
                <button
                  onClick={handleContinueClick}
                  className="bg-green-400 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] rounded hover:bg-green-600 my-8"
                >
                  Continue Network
                </button>
                <div className="text-center text-xs mt-1 mb-4">
                    <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow "></div> 
          <div className="text-center text-xs mb-[370px]"> {/* Adjust mb-2 for some bottom margin */}
            <p>© 2025, Laoe Maom. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    )
  );
};

export default Dashboard;
