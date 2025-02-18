import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { TiArrowRight } from "react-icons/ti";
import LaptopEStore from "../assets/LaptopEStore.png";
import estore from "../assets/estore.webp";
import beehive from "../assets/beehive.webp";
import enroll from "../assets/enroll.webp";
import network from "../assets/network.webp";
import broadcast from "../assets/broadcast.webp";
import { useNavigate } from "react-router-dom";
import intro from "../assets/Intro.mp4";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";
const SelectedPlan = () => {
  const location = useLocation();
  const [plan, setPlan] = useState(location.state?.plan || {});

  useEffect(() => {
    if (location.state?.plan) {
      setPlan(location.state.plan);
    }
  }, [location.state?.plan]);

  console.log("origin Plan:", plan);
  // const old_plan = localStorage.setItem('old_plan', plan.name);
  // console.log("localStorage in getting Item : ", localStorage.getItem(old_plan));

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const { addOneToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    const id = plan.id || `${plan.name}-${plan.price}`;
    console.log(id);
    addOneToCart(id, plan.name, plan.price, plan.description, quantity);
    console.log("Adding item:", plan.name);
    console.log("Adding item:", plan.price);
    console.log("Adding item:", plan.description);
    navigate("/selected-plan/cart", { state: { plan, quantity } });
  };

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

  const updatePlanDetailsInSelectedPage = (newPlan) => {
    const oldPlanName = plan.name;
    const newPlanName = newPlan.name;
    console.log("old one: ", oldPlanName);
    console.log("new one: ", newPlanName);
    setPlan(newPlan);
    console.log("Updating Plan:", newPlan);
    navigate("/selected-plan", { state: { ...plan } });
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (oldPlanName && oldPlanName !== newPlanName) {
      const SwalMessage = getPlanUpgradeMessage(oldPlanName, newPlanName);
      console.log(SwalMessage);
      if (SwalMessage) {
        Swal.fire({
          html: `
                           <div style="display: flex; flex-direction: column; align-items: center;">
                                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                                    <img src="${Logo}" alt="Logo" 
                                         style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                                       
                                          <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                              <span style="color: black;">LM</span>
                                              <span style="color: rgb(37, 218, 73);">Club</span>
                                          </h4>
                                </div>
                          
                               <div style="text-align: center; font-size: 22px; font-weight: bold; color: #333; margin: 30px;">
                                ${SwalMessage}
                              </div> 
                           </div>
                       `,
          customClass: {
            confirmButton: "swal-custom-ok-button",
          },
        });
      }
    }
  };

  const widgetImages = [enroll, beehive, broadcast, estore, network];

  // extracting registration fee from description 

  const extractRegistrationFee = plan.description;
  const priceMatch = extractRegistrationFee.match(/\$\d+(\.\d{2})?/);
  const RegistrationFee = priceMatch ? priceMatch[0] : null;

  const monthlyPlans = [
    {
      name: "Bronze",
      description: "Registration fee is $20.00 / Yearly",
      renewalFee: "Yearly renewal fee $20.00 / Yearly",
      price: 5.99,
      points: [
        "Make a post get 25 likes and earn 5 points",
        "Promote a business earn 5 points",
        "Complete (TFS) tasks for success earn 25 points",
        "Shares Its Online Store Profits With You! - Post our store on your social media get 20% percent of stores profit.",
        "Enroll 35 Members get a $500.00 Gift Certificate",
      ],
    },
    {
      name: "Silver",
      description: "Registration fee is $25.00 / Yearly",
      renewalFee: "Yearly renewal fee $25.00 / Yearly",
      price: 8.99,
      points: [
        "Make a post get 25 likes earn 10 points",
        "Promote a business earn 10 points",
        "Complete (TFS) tasks for success earn 50 points",
        "Shares Its Online Store Profits With You! - Post our store on your social media get 30% percent of stores profit.",
        "Enroll 30 Members get a $500.00 Gift Certificate",
      ],
    },
    {
      name: "Gold",
      description: "Registration fee is $30.00 / Yearly",
      renewalFee: "Yearly renewal fee $30.00 / Yearly",
      price: 11.99,
      points: [
        "Make a post get 25 likes earn 15 points",
        "Promote a business earn 15 points",
        "Complete (TFS) tasks for success earn 75 points",
        "Shares Its Online Store Profits With You! - Post our store on your social media get 40% percent of stores profit.",
        "Enroll 25 Members get a $500.00 Gift Certificate",
      ],
    },
    {
      name: "Platinum",
      description: "Registration fee is $35.00 / Yearly",
      renewalFee: "Yearly renewal fee $35.00 / Yearly",
      price: 14.99,
      points: [
        "Make a post get 25 likes earn 20 points",
        "Promote a business earn 20 points",
        "Complete (TFS) tasks for success earn 50 points",
        "Shares Its Online Store Profits With You! - Post our store on your social media get 70% percent of stores profit.",
        "Enroll 20 Members get a $500.00 Gift Certificate",
      ],
    },
  ];

  const getButtonColor = (planName) => {
    switch (planName) {
      case "Bronze":
        return "text-[#CD7F32]";
      case "Silver":
        return "text-[#696969]";
      case "Gold":
        return "text-[#ffc020]";
      case "Platinum":
        return "text-[#1A1A1A]";
      default:
        return "text-red-500";
    }
  };

  const getPlanUpgradeMessage = (oldPlan, newPlan) => {
    const messages = {
      "Bronze-Silver":
        "Congratulations! You've upgraded to Silver membership! 🎉 Now you earn more points and get 30% of the store’s profit!",
      "Bronze-Gold":
        "Great choice! You’ve upgraded to Gold membership! 🚀 Enjoy even higher points and a 40% share in store profits!",
      "Bronze-Platinum":
        "Welcome to the Platinum tier! 💎 You now earn maximum points and a 70% share in store profits!",
      "Silver-Gold":
        "Level up! You’re now a Gold member! 🌟 More rewards, higher earnings, and better benefits await you!",
      "Silver-Platinum":
        "You're now a Platinum member! 💎 Enjoy premium benefits, maximum points, and exclusive perks!",
      "Gold-Platinum":
        "Top-tier unlocked! 🏆 Platinum membership gives you the best benefits, highest points, and maximum profit sharing!",

      "Platinum-Gold":
        "You downgraded to Gold membership. Some premium benefits are now limited, but you still earn great rewards!",
      "Platinum-Silver":
        "You switched to Silver membership. You now get fewer points and a reduced profit share. Consider upgrading again!",
      "Platinum-Bronze":
        "You moved to Bronze membership. You may lose access to some features. Upgrade anytime to unlock better benefits!",
      "Gold-Silver":
        " You downgraded to Silver. Some rewards are now lower, but you can always upgrade again!",
      "Gold-Bronze":
        "You switched to Bronze membership. You may lose some rewards and earnings. Upgrade to enjoy better perks!",
      "Silver-Bronze":
        "You're now on Bronze membership. Your earning potential is lower. Upgrade anytime to get more benefits!",
    };

    return messages[`${oldPlan}-${newPlan}`] || null;
  };

  return (
    <div>
      <NavBar />

      {/* <h2 className="text-3xl font-bold">{plan.name} Plan</h2>
            <p className="text-gray-600">{plan.description}</p>
            <p className="text-gray-600">{plan.renewalFee}</p>
            <p className="mt-4 text-2xl font-bold">${plan.price} per month</p> */}

      <div className="lg:pt-36 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  {/* Left Section - Membership Details */}
                  <div className="flex flex-col gap-6 w-full">
                    <div className="flex items-center md:justify-start justify-center">
                      <h1 className="font-semibold lg:text-5xl text-3xl">
                        {plan.name} Membership – Join Now & Enjoy All 5 Widgets!
                      </h1>
                    </div>

                    {/* Image Grid */}
                    <div className="w-full grid grid-cols-5 gap-4">
                      {widgetImages.map((image, index) => (
                        <div key={index} className="flex justify-center">
                          <img
                            src={image}
                            alt={`Widget ${index + 1}`}
                            className="w-full h-auto rounded "
                          />
                        </div>
                      ))}
                    </div>

                    {/* Pricing Info */}
                    {/* <p className="text-lg font-semibold text-gray-500">
                ${plan.price} / month for 12 months with a 7-day free trial.
              </p>

              <p className="text-lg font-semibold text-gray-500">
                 ${plan.description}.
              </p> */}

                    <div className="w-[80%] lg:mx-0 mx-auto mt-10 flex lg:justify-start justify-center">
                      <table className="w-full border-collapse border border-gray-300 ">
                        <thead>
                          <tr className="bg-gray-800 text-white text-center">
                            <th className="p-3 text-left">Title</th>
                            <th className="p-3 text-left">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              title: "Monthly Price",
                              price: `$${plan.price} / month`,
                            },
                            {
                              title: "Registration Fee",
                              price: `${RegistrationFee} / year`,
                            },
                            {
                              title: "Renewal Fee",
                              price: `${RegistrationFee} / year`,
                            },
                          ].map((item, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-gray-100" : "bg-blue-100"
                              }
                            >
                              <td className="p-3">{item.title}</td>
                              <td className="p-3">{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Quantity and Cart Button */}
                    <div className="flex items-center space-x-4 lg:ml-0 ml-[50px]">
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-[10%] border border-gray-400 rounded py-1 w-20 text-center"
                      />
                      <button
                        onClick={handleAddToCart}
                        className="bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-700"
                      >
                        Go to Cart
                      </button>
                    </div>
                  </div>

                  {/* Right Section - Large Membership Image */}
                  <div className="flex justify-center items-center lg:pt-0 pt-4">
                    <div>
                      <video
                        src={intro}
                        className="rounded w-auto h-auto"
                        autoPlay
                        muted
                        controls
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // related products */}

      <div className="lg:pt-36 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="lg:text-5xl text-gray-700 flex items-center justify-center m-8">
                  Choose More Subscription Plans
                </div>
                <section className="bg-white">
                  <div className="py-2">
                    <div className=" grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                      {monthlyPlans.map((plan) => (
                        <div
                          id="pricing_bronze"
                          key={plan.name}
                          className="flex flex-col text-center p-4 text-gray-900 bg-white rounded border border-gray-300 shadow"
                        >
                          <h3
                            className={`mb-4 text-2xl font-extrabold ${getButtonColor(
                              plan.name
                            )}`}
                          >
                            {plan.name}
                          </h3>
                          <p className="text-gray-600">{plan.description}</p>
                          <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-4xl font-bold">
                              {`$${plan.price} / month`}
                            </span>
                            {/* <span className="text-gray-500 ">
                              /{isYearly ? "year" : "month"}
                            </span> */}
                          </div>

                          <ul role="list" className="mb-8 space-y-4 text-left">
                            {plan.points.map((point, index) => (
                              <li
                                key={index}
                                className="flex items-center flex-row space-x-3"
                              >
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          <a
                            onClick={() =>
                              updatePlanDetailsInSelectedPage(plan)
                            }
                            className="text-white bg-mainColor font-medium rounded-full text-sm px-5 py-3 my-3 text-center cursor-pointer"
                          >
                            Get started
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectedPlan;
