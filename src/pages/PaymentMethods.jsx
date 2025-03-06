import React from "react";
import paypal from "../assets/paypalOne.svg";
import stripe from "../assets/stripe.svg";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
const public_stripe_key =
  "pk_test_51QMcn82NPQsjFaoTZ90xF9ORG1Gj4EdmGPiQAmSGbvVomOdnWBrwJV3BR9mCFbmQPFZPEsOZgqOglMvKR1Bff5ju00HjRNjRhp";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";
const PaymentMethods = () => {
  const location = useLocation();
  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const { userData, selectedPlan, isYearly } = location.state || {};

  console.log(userData, selectedPlan);
  // console.log(isYearly);

  const registrationFee = parseFloat(
    selectedPlan.planDescription
      .match(/\$\d+(\.\d{2})?/)?.[0]
      .replace("$", "") || "0"
  );

  const cartItem = {
    id: selectedPlan._id,
    name: selectedPlan.planName,
    description: selectedPlan.planDescription || "No description available",
    quantity: 1,
    price: (
      parseFloat(
        isYearly ? 12 * selectedPlan.planAmount : selectedPlan.planAmount
      ) + registrationFee
    ).toFixed(2),
    plan: isYearly ? "Yearly" : "Monthly",
    userMail: userData.email,
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

  const handleCheckout = async () => {
    try {
      const stripe = await loadStripe(public_stripe_key);
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
      localStorage.setItem("isYearly", JSON.stringify(isYearly));
      console.log("Sending cart items:", JSON.stringify(cartItem, null, 2));
      const response = await fetch(
        backendUrl + "/api/user/create-stripe-session",
        {
          // const response = await fetch("http://localhost:9090/create-stripe-session", {
          // const response = await fetch("https://lmclub-backend.onrender.com/create-stripe-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cartItem),
        }
      );

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

  const handlePaypalCheckout = async () => {
    try {
      console.log("Sending cartItem:", cartItem);

      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
      localStorage.setItem("isYearly", JSON.stringify(isYearly));
      const response = await fetch(backendUrl + "/api/user/create-order", {
        // const response = await fetch("http://localhost:9090/pay", {
        // const response = await fetch("https://lmclub-backend.onrender.com/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ line_items: cartItem }),
      });

      const data = await response.json();
      console.log("PayPal API Response:", data);

      if (data?.approval_url) {
        console.log("Redirecting to PayPal:", data.approval_url);
        window.location.href = data.approval_url;
      } else {
        console.error("PayPal Error: No approval URL found", data);
      }
    } catch (error) {
      console.error("Error during PayPal checkout:", error);
    }
  };

  return (
    <div className="w-full flex items-center justify-center pt-16 px-4 bg-gray-100">
      <div className="max-w-[800px] w-full mx-auto h-auto flex flex-col items-center justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-center gap-4 bg-white p-6 rounded-lg">
        <div className="flex flex-wrap flex-col items-center pb-3">
          <div className="text-center mt-4">
            <h3 className="lg:text-3xl text-2xl font-bold text-headingColor">
              Select Payment Method
            </h3>
          </div>
          <div className="md:w-40 w-36 h-1 border-b-2 border-green-500 mt-[1px]"></div>
        </div>

        {/* Payment Methods */}
        <div className="lg:flex-row flex flex-col w-full gap-4">
          {/* PayPal Option */}
          <button onClick={handlePaypalCheckout} className="p-4 w-full">
            <div className="flex flex-col items-center justify-center border border-gray-400 cursor-pointer hover:border-green-600 hover:border-2 text-center gap-4 w-full">
              <img src={paypal} alt="paypal" className="lg:w-24 lg:h-24" />
            </div>
          </button>

          {/* Credit/Debit Card Option */}
          <button onClick={handleCheckout} className="p-4 w-full">
            <div className="flex flex-col items-center justify-center border border-gray-400 cursor-pointer hover:border-green-600 hover:border-2 text-center gap-4 w-full">
              <img
                src={stripe}
                alt="cards"
                className="w-24 h-24 bg-transparent"
              />
            </div>
          </button>
        </div>

        {/* Back Button */}
        <div className="flex justify-between w-full mt-6">
          <button
            onClick={() => {
              navigate(-1);
              scrollTo(0, 0);
            }}
            className="px-12 w-[200px] py-1.5 bg-gray-500 text-white   cursor-pointer hover:bg-gray-700 duration-1000 ease-in-out  transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
