import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";
import { Link } from "react-router-dom";
const public_stripe_key = "pk_test_51QMcn82NPQsjFaoTZ90xF9ORG1Gj4EdmGPiQAmSGbvVomOdnWBrwJV3BR9mCFbmQPFZPEsOZgqOglMvKR1Bff5ju00HjRNjRhp";

const HandlePayment = () => {
  const { items, getProductQuantity, getTotalCost } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("handle payment page : ", items);

  const cartItems = items.map(item => {
    const registrationFee = parseFloat(
      item.description.match(/\$\d+(\.\d{2})?/)?.[0].replace("$", "") || "0"
    );
    return {
    id: item.id,  
    name: item.name,
    description: item.description || "No description available",
    quantity: item.quantity || 1,
    price: (item.price) + registrationFee, 
    }
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
  
      const response = await fetch("http://localhost:9090/create-stripe-session", {
        // const response = await fetch("https://lmclub-backend.onrender.com/create-stripe-session", {
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

  const handleNavigateToSelectPaymentMethod = ()=>{
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

    navigate('/select-payment-method')
  }
  
  // extracting registration fee from description 

  const registrationFee = items.length > 0 ? 
  (items[0].description.match(/\$\d+(\.\d{2})?/)?.[0] || "$0") 
  : "$0";


  return (
    <div className="flex items-center justify-center min-h-screen px-4">
    <div className="w-full max-w-3xl md:w-[50%] h-auto flex flex-col items-center justify-center shadow-xl text-center gap-4 bg-gray-300 p-6 rounded-lg">
      <h1 className="lg:text-4xl text-3xl font-semibold">Your Payment Details</h1>

      <div className="w-full overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-3 text-left">Plan</th>
              {/* <th className="p-3 text-left">Price</th> */}
              <th className="p-3 text-left">Payable Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping Through Plan Items */}
            {items.map((item) => (
              <tr key={item.id} className="border border-gray-300 text-center bg-blue-200">
                <td className="p-3 text-left">{item.name} Membership</td>
                {/* <td className="p-3 text-left">${item.price}</td> */}
                <td className="p-3 text-left">${(item.price).toFixed(2)}</td>
              </tr>
            ))}

            {/* Registration Fee Row */}
            <tr className="border border-gray-300 text-center bg-gray-200">
              <td className="p-3 text-left ">Registration Fee</td>
              {/* <td className="p-3"></td> */}
           
              <td className="p-3 text-left font-semibold text-red-600 font-semibold">${items[0].description.match(/\$\d+(\.\d{2})?/)[0].replace("$", "")}</td>
            </tr>

            {/* Net Amount Row */}
            <tr className="border border-gray-300 text-center bg-blue-200 ">
              <td className="p-3 text-left">Total Amount</td>
              {/* <td className="p-3"></td> */}
           
              <td className="p-3 text-left text-green-700 font-bold">${(
                                getTotalCost() +
                                parseFloat(items[0].description.match(/\$\d+(\.\d{2})?/)[0].replace("$", ""))
                              ).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

      </div>

      {items.length > 0 && (
        <div className="cart-summary mt-4 text-center">
          <div className="flex items-start items-center mb-3">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  cursor-pointer"
                  required
                ></input>
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 text-lg"
                >
                  I accept the payment{" "} 
                  <a
                    className="font-medium text-gray-600 hover:underline hover:text-green-600 dark:text-primary-500"
                    href="/terms-and-conditions"
                  >
                    Terms and Conditions
                  </a>
                  {" "} and {" "}
                  <a
                    className="font-medium text-gray-600 hover:underline hover:text-green-600 dark:text-primary-500"
                    href="/refund-and-return-policy"
                  >
                   Refund and Returns Policy
                  </a>

                </label>
              </div>
            </div>

          <p className="text-2xl  font-semibold text-gray-800">
            Total Payable Amount: ${(
                        getTotalCost() +
                        parseFloat(items[0].description.match(/\$\d+(\.\d{2})?/)[0].replace("$", ""))
                      ).toFixed(2)}
          </p>
        </div>
      )}

<div className="flex justify-between w-full mt-6">
          <button
            onClick={() => navigate(-1)} 
            className="px-6 py-3 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition"
          >
            Back
          </button>
          
          <button
            onClick={() => handleNavigateToSelectPaymentMethod()}
            
            className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition"
          >
           {/* <Link to='/select-payment-method'>Pay</Link>  */}
           Pay
          </button>
        </div>
    </div>
  </div>
  );
};

export default HandlePayment;