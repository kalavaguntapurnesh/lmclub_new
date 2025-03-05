
import React, { useState } from 'react'
import success from "../assets/success.png";
import Logo from "../assets/LMDark.webp";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { useEffect } from 'react';
import { AppContext } from "../context/AppContext";
 import axios from 'axios';

const Success = () => {
  const { items, getProductQuantity, getTotalCost, addOneToCart,deleteFromCart, clearCart} = useContext(CartContext);
  const { backendUrl } = useContext(AppContext);

  const [transaction, setTransaction] = useState(null);
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));
  const isYearly = JSON.parse(localStorage.getItem("isYearly"));

  //  Fetch Transaction Details

  const fetchTransactionDetails = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get("session_id");

      if (!sessionId) return;
      console.log("Session ID:", sessionId);

      const response = await fetch(
        backendUrl + `/api/user/get-transaction-details?session_id=${sessionId}`
      );
      const transactionData = await response.json();

      console.log("Transaction Details:", transactionData);
      setTransaction(transactionData);

      handleStoringPaymentDetails(transactionData);
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    }
  };

  //  Store Payment Details

  const handleStoringPaymentDetails = async (transactionData) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/user/storing-payment-details",
        {
          userId: userData._id,
          paymentMethod: "Stripe",
          transactionId: transactionData.transactionId || "N/A",
          paymentStatus: transactionData.status === "paid" ? "COMPLETED" : "Failed",
          amount: transactionData.amount || "0",
          subscriptionType: isYearly ? "Yearly" : "Monthly",
        }
      );

      console.log("Payment details saved successfully:", response.data);

      // Move to the next step: Fetching payment ID
      fetchPaymentId();
    } catch (error) {
      console.error("Error while storing payment details into DB:", error);
    }
  };

  // Fetch Payment ID


  const fetchPaymentId = async () => {
    try {
      const response = await axios.get(backendUrl + `/api/user/get-payment/${userData._id}`);
      setPayments(response.data);
      console.log("Payment ID fetched:", response.data);

      // Move to the next step: Storing subscription details
      handleSubscriptionDetails(response.data);
    } catch (error) {
      setError(error.response?.data?.error || "Error fetching payment details");
    }
  };

  // Store Subscription Details

  const handleSubscriptionDetails = async (paymentData) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/user/storing-subscription-details",
        {
          userId: userData._id,
          planId: selectedPlan._id,
          paymentId: paymentData[0]._id,
          subscriptionType: isYearly ? "Yearly" : "Monthly",
          subscriptionStatus: selectedPlan.isActive ? "active" : "expired",
        }
      );

      console.log("Subscription details saved successfully:", response.data);
      clearCart();
    } catch (error) {
      console.error("Error while storing subscription details into DB:", error);
    }
  };

  useEffect(() => {
    fetchTransactionDetails();
  }, []);


  return (
    <div>
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">
       
            <div className="flex items-center justify-between mb-2">
              <img src={Logo} alt="Logo" className="w-12 h-12" />
              <h4 className="text-3xl font-bold text-center flex-1">
                <span className="text-black">LM</span>
                <span className="text-green-500">Club</span>
              </h4>
            </div>
    
    
            <div className="space-y-0">
    
              <div className='w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center'>
                <img src={success} alt="Logo" className="w-12 h-12 text-center" />
              
              </div>
    
              {transaction && (
          <div className="text-gray-700">
            <p className="font-semibold text-3xl text-center text-green-500 mb-2">
              {" "}
              Thank You!
            </p>
            <p className=" text-xl text-center mb-3">
              {" "}
              Payment Done Successfully
            </p>
            <p className="border-b border-1 border-gray-800"></p>
            <p className=" text-xl text-center mt-3"> Your Order Details</p>
            <div className="mt-4">
              <table className="w-full border border-gray-300 w-[80%]">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">
                      Order ID:
                    </td>
                    <td className="border px-4 py-2">
                      {transaction.orderId|| "N/A"}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Status:</td>
                    <td className="border px-4 py-2">
                      {transaction.status || "N/A"}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Email:</td>
                    <td className="border px-4 py-2">
                      {transaction.customerEmail || "N/A"}
                    </td>
                  </tr>
                  
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Amount:</td>
                    <td className="border px-4 py-2">
                      $
                      {transaction.amount || "N/A"}
                    </td>
                  </tr>

                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Plan Type:</td>
                    <td className="border px-4 py-2">
                     
                      {transaction.planType ? "Yearly" : "Monthly" || "N/A"}
                    </td>
                  </tr>

                  {/* <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Transaction Id:</td>
                    <td className="border px-4 py-2">
                     
                      {transaction.transactionId|| "N/A"}
                    </td>
                  </tr> */}
                 
                </tbody>
              </table>
            </div>
          </div>
        )}

            {/* Error State */}
            {!loading && !paymentDetails && (
              <p className="text-center text-red-500">
                Payment failed or details not found.
              </p>
            )}
              {/* Login Button */}
              <div className="mt-6 text-center p-3">
                <button
                
                  className={`w-1/3 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600`}
                   
                >
                <Link to="/dashboard">Go To Dashboard</Link> 
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Success