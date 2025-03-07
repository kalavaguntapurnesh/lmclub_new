import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import HandlePayment from "./HandlePayment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../assets/LMDark.webp";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import sad from "../assets/sad.svg";
import WhatsApp from "../components/WhatsApp";
const Cart = () => {
  const {
    items,
    getTotalCost,
    removeOneFromCart,
    deleteFromCart,
    addOneToCart,
  } = useContext(CartContext);
  console.log("Cart items:", items);
  console.log(items.name);
  const [flag, setFlag] = useState(false);

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
  const handlePaymentClick = () => {
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
                  
                        <div style="text-align: center; font-size: 22px;  color: #333; margin-bottom: 20px;">
                         <p>You haven't logged in. </p>
                       </div> 
                       <div style=" ;">
                          <a href="https://www.lmclub.club/login" style="display: inline-block; padding: 14px 20px; background-color: green; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; text-align: center;">Please Login</a>
                        </div>
                    </div>
                   `,
                   showConfirmButton: false,
                   
                    footer: `
                    <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
                  `,
              // customClass: { 
              //   confirmButton: "swal-custom-ok-button",
                
              // },
            });
    
    setFlag(!flag);
  };
  const location = useLocation();
  // console.log("getting year or month", items[0].isYearly);
  const CartPlan = location.state?.plan;
  console.log("cart page content", CartPlan);
  const navigate = useNavigate();

  // extracting registration fee from description

  const registrationFee =
    items.length > 0
      ? items[0].description.match(/\$\d+(\.\d{2})?/)?.[0] || "$0"
      : "0";

  const removingDollarForRegistrationFee = registrationFee.replace("$", "");
  console.log("registrationFee:", removingDollarForRegistrationFee);

  const handleGoToAgainSelectedPage = () => {
    navigate("/pricing");
  };

  return (
    <div>
      <Navbar />
      <WhatsApp />
       <div className="pt-24 lg:pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      Your Cart
                    </h1>
                  </div>
                  <h1 className="lg:text-xl  text-center font-bold text-headingColor">
                    {items.length > 0 ? (
                      "Proceed to Secure Checkout"
                    ) : (
                      <>
                        <span className="text-xl">Your LMCLUB Cart is empty.</span> <br />
                        <span className="font-bold text-md ">
                          Your Shopping Cart lives to serve. Give it purpose by
                          adding Subscription or LMCLUB Merchandise.
                        </span>
                      </>
                    )}
                  </h1>
                </div>
                {items.length > 0 ? (
                  <div className="cart-items bg-white p-4   shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-transform transform hover:translate-y-2 h-auto  mx-auto ">
                    {items.length > 0 ? (
                      items.map((item) => (
                        <div
                          key={item.id}
                          className="cart-item flex items-center justify-between border-b border-gray-300 py-4"
                        >
                          <div className="flex-1 ml-4">
                            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                              <div className="flex flex-row items-center justify-center gap-4">
                                <img
                                  src={item.image}
                                  alt="imga"
                                  className="w-[72px]"
                                />
                               <div className="flex flex-col">
                                  <p className="text-gray-800 text-xl font-bold text-center ">
                                    Plan Name
                                    </p>
                                    <h3 className="text-md font-semibold">
                                      {item.name} Membership
                                    </h3>
                                </div>
                              </div>

                            
                              <div className="flex flex-col items-center justify-center gap-1">
                                <p className="text-gray-800 text-md font-bold">
                                  Membership Details
                                </p>

                                <p className="text-gray-800 text-md">
                                  Price: ${item.price} / {item.isYearly ? "Year" : "Month"}
                                </p>
                                <p className="text-gray-800 text-md">
                                  Registration Fee: {registrationFee}
                                </p>
                              </div>

                              <div className="flex flex-col items-center lg:items-end justify-center lg:mr-4">
                                {/* <p className="text-[#1a1a1a] text-sm">
                                  Price: ${item.price}
                                </p> */}
                                <div className="text-lg font-semibold flex flex-col gap-2">
                                  <p className="text-[#1a1a1a]">
                                  Total Price: $
                                  {(
                                    getTotalCost() +
                                    parseFloat(
                                      items[0].description
                                        .match(/\$\d+(\.\d{2})?/)[0]
                                        .replace("$", "")
                                    )
                                  ).toFixed(2)}
                                  </p>
                                  <button
                                    onClick={() => deleteFromCart(item.id)}
                                    className="bg-red-400 text-center text-white py-1.5 px-3 font-medium text-sm"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600 text-center py-4"></p>
                    )}

                    {items.length > 0 && (
                      <div className="cart-summary mt-6 text-end">
                        <div className="py-4">
                          <p className="text-xl font-bold text-gray-800">
                          Total Price: $
                    {(
                      getTotalCost() +
                      parseFloat(
                        items[0].description
                          .match(/\$\d+(\.\d{2})?/)[0]
                          .replace("$", "")
                      )
                    ).toFixed(2)}
                          </p>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between w-full">
                        <button
                          onClick={handleGoToAgainSelectedPage}
                          className="pay-button mt-4 lg:w-1/3 bg-green-700 text-white py-2 rounded-md hover:bg-green-400 transition-colors"
                        >
                          Would you like to explore more Plans
                        </button>
                          <button 
                          onClick={handlePaymentClick}
                          className="pay-button mt-4 lg:w-1/3 bg-green-500 text-white py-2 font-medium transition duration-1000 ease-in-out hover:bg-green-700">
                            
                              Proceed to Checkout
                            
                          </button>
                        </div>
                        <div className="text-center text-xs mt-3 mb-4">
                          <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mt-4 space-y-2">
                      <img src={sad} alt="sad" className="w-56 h-56" />
                    </div>
                    <button className="pay-button mt-4 w-[200px] lg:w-[240px] bg-green-500 text-white py-2 font-medium transition duration-1000 ease-in-out hover:bg-green-700">
                      <Link to="/pricing">Would you like to explore more Plans</Link>
                    </button>
                    <div className="text-center text-xs mt-3 mb-4">
                      <p>© 2025, Laoe Maom. All Rights Reserved.</p>
                    </div>
                  </div>
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Cart;
