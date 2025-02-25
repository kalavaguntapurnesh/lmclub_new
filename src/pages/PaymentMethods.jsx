import React from 'react'
import paypal from "../assets/paypal.png"
import mastercard from "../assets/mastercard.png"
import { useNavigate } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";
const public_stripe_key = "pk_test_51QMcn82NPQsjFaoTZ90xF9ORG1Gj4EdmGPiQAmSGbvVomOdnWBrwJV3BR9mCFbmQPFZPEsOZgqOglMvKR1Bff5ju00HjRNjRhp";
const PAYPAL_CLIENT_ID = "AXv6b05ECt52vidXoA8u8SLbfnHMlsZZTECoHQnPnxmb1kpHDW0GMfDIV41H-rVRgEk54irwQlbUl4so";
const PAYPAL_SECRET = "ENAnGTfQjbHwrv_QPybyvv5XtJtwy5KnVEvNKzxRgwpa9BD_pjg3ycbM2jqtcJW9cDKMGjoo2sJK5sPG";
const PAYPAL_API = "https://api-m.sandbox.paypal.com";
// https://sandbox.paypal.com
const PaymentMethods = () => {

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
      
          console.log("Sending cart items:", JSON.stringify(cartItems, null, 2)); 
      
          // const response = await fetch("http://localhost:9090/create-stripe-session", {
            const response = await fetch("https://lmclub-backend.onrender.com/create-stripe-session", {
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
      
      // extracting registration fee from description 
    
      const registrationFee = items.length > 0 ? 
      (items[0].description.match(/\$\d+(\.\d{2})?/)?.[0] || "$0") 
      : "$0";

      const handlePaypalCheckout = async () => {
        try {
          console.log("Sending cartItems:", cartItems);
      
          // const response = await fetch("http://localhost:9090/pay", {
            const response = await fetch("https://lmclub-backend.onrender.com/pay", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ line_items: cartItems }), 
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
    <div className="flex items-center justify-center min-h-screen px-4 p-6">
    <div className="w-full max-w-3xl md:w-[50%] h-auto flex flex-col items-center justify-center shadow-xl text-center gap-4 bg-gray-300 p-8 rounded-lg">
      <h1 className="lg:text-4xl text-3xl font-semibold space-y-8 mb-12">Select Payment Method</h1>
  
      {/* Payment Methods */}
      <div className="flex w-full gap-4">
        {/* PayPal Option */}
        <button onClick={handlePaypalCheckout} className="p-4 w-full">
          <div className="flex flex-col items-center justify-center border border-gray-400 rounded-md cursor-pointer hover:border-green-600 hover:border-2 p-6 text-center gap-4 w-full">
            <img src={paypal} alt="paypal" className="w-24 h-24" />
            <h1 className="text-2xl font-semibold">Paypal</h1>
          </div>     
        </button>
  
        {/* Credit/Debit Card Option */}
        <button onClick={handleCheckout} className="p-4 w-full">
          <div className="flex flex-col items-center justify-center border border-gray-400 rounded-md cursor-pointer hover:border-green-600 hover:border-2 p-6 text-center gap-4 w-full">
            <img src="https://media.istockphoto.com/id/1137376687/photo/stacked-credit-cards.jpg?s=612x612&w=0&k=20&c=tERuCGoC9Xfg7XwuFJ9rvhJ6u_zHIdLVoxqB8Eut_nc=" alt="cards" className="w-24 h-24 bg-transparent" />
            <h1 className="text-2xl font-semibold">Credit/Debit Cards</h1>
          </div>   
        </button>
      </div>
  
      {/* Back Button */}
      <div className="flex justify-between w-full mt-6">
        <button
          onClick={() => navigate(-1)} 
          className="px-6 py-3 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition"
        >
          Back
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default PaymentMethods