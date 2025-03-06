import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { useECommerceCart } from "../context/ECommerceCartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";
const public_stripe_key =
  "pk_test_51QMcn82NPQsjFaoTZ90xF9ORG1Gj4EdmGPiQAmSGbvVomOdnWBrwJV3BR9mCFbmQPFZPEsOZgqOglMvKR1Bff5ju00HjRNjRhp";
import { AppContext } from "../context/AppContext";

const HandlePaymentEcommerce = () => {
  const { items, getProductQuantity, getTotalCost } = useECommerceCart();

  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  console.log("handle payment page : ", items);

  const cartItems = items.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description || "No description available",
      quantity: item.quantity || 1,
      price: item.price,
    };
  });

  const [isChecked, setIsChecked] = useState(false);
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

  const handleCheckout = async () => {
    if (!isChecked) {
      // alert("Please accept the terms before proceeding to payment.");
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
                             <p>Please accept the terms before proceeding to payment.</p>
                           </div> 
                        </div>
                                   `,
        customClass: {
          confirmButton: "swal-custom-ok-button",
        },
      });
      return;
    }

    try {
      const stripe = await loadStripe(public_stripe_key);

      console.log("Sending cart items:", JSON.stringify(cartItems, null, 2));

      const response = await fetch(backendUrl + "create-stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems),
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe session");
      }

      const session = await response.json();
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error during payment:", error);
      alert("There was an issue with the payment. Please try again later.");
    }
  };

  const handleNavigateToSelectPaymentMethod = () => {
    if (!isChecked) {
      // alert("Please accept the terms before proceeding to payment.");
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
                         <p>Please accept the terms before proceeding to payment.</p>
                      </div> 
                    </div>
                 `,
        customClass: {
          confirmButton: "swal-custom-ok-button",
        },
      });
      return;
    }

    navigate("/ecommerce-select-payment-methods");
  };

  return (
    <div className="lg:pb-12 lg:pt-0 pt-8">
      <div className="relative">
        <div className="w-full">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-3xl md:w-[50%] h-auto flex flex-col items-center justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-center gap-4 p-6">
              <div className="flex flex-wrap flex-col items-center pb-3">
                <div className="text-center mt-4">
                  <h3 className="lg:text-3xl text-2xl font-bold text-headingColor">
                    Your Payment Details
                  </h3>
                </div>
                <div className="md:w-40 w-36 h-1 border-b-2 border-green-500 mt-[1px]"></div>
              </div>

              <div className="w-full overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-300 text-black text-center ">
                      <th className="p-3 text-left">Item name</th>
                      <th className="p-3 text-left">Price</th>
                      <th className="p-3 text-left">Quantity</th>
                      <th className="p-3 text-left">Payable Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Mapping Through Plan Items */}
                    {items.map((item) => (
                      <tr
                        key={item.id}
                        className="border border-gray-300 text-center font-medium "
                      >
                        <td className="p-3 text-left">{item.name} </td>
                        <td className="p-3 text-left">${item.price}</td>
                        <td className="p-3 text-left">${item.quantity}</td>
                        <td className="p-3 text-left">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}

                    <tr className="border border-gray-300 text-center font-medium ">
                      <td className="p-3 text-left"> Tax Amount</td>
                      <td className="p-3"></td>
                      <td className="p-3"></td>
                      <td className="p-3 text-left text-green-700 font-bold"></td>
                    </tr>

                    {/* Net Amount Row */}
                    <tr className="border border-gray-300 text-center font-medium ">
                      <td className="p-3 text-left">Total Amount</td>
                      <td className="p-3"></td>
                      <td className="p-3"></td>
                      <td className="p-3 text-left text-green-700 font-bold">
                        ${getTotalCost().toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {items.length > 0 && (
                <div className="cart-summary mt-4 text-center">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        checked={isChecked}
                        required
                        onChange={() => setIsChecked(!isChecked)}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  cursor-pointer"
                      ></input>
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500"
                      >
                        I accept the payment{" "}
                        <a
                          className="font-medium text-gray-500 hover:underline hover:text-green-600 dark:text-primary-500"
                          href="/terms-and-conditions"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          className="font-medium text-gray-500 hover:underline hover:text-green-600 dark:text-primary-500"
                          href="/refund-and-return-policy"
                        >
                          Refund and Returns Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  <p className="text-2xl font-bold text-gray-800">
                    Total Payable Amount: ${getTotalCost().toFixed(2)}
                  </p>
                </div>
              )}

              <div className="flex justify-between w-full mt-6 gap-4">
                <button
                  onClick={() => {
                    navigate(-1);
                    scrollTo(0, 0);
                  }}
                  className="px-12 w-[200px] py-1.5 bg-gray-500 text-white   cursor-pointer hover:bg-gray-700 duration-1000 ease-in-out  transition"
                >
                  Back
                </button>

                <button
                  onClick={() => handleNavigateToSelectPaymentMethod()}
                  className="px-12 w-[200px] py-1.5 bg-green-500 text-white   cursor-pointer hover:bg-green-700 duration-1000 ease-in-out  transition"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandlePaymentEcommerce;
