import React, { useState } from "react";
import Logo from "../assets/LMDarkLogo.webp";
import Lottie from "lottie-react";
import SuccessLottie from "../assets/Success.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { IoIosClose } from "react-icons/io";

const Success = () => {
  const {
    items,
    getProductQuantity,
    getTotalCost,
    addOneToCart,
    deleteFromCart,
    clearCart,
  } = useContext(CartContext);
  const { backendUrl } = useContext(AppContext);

  const navigate = useNavigate("");

  const [transaction, setTransaction] = useState(null);
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));
  const isYearly = JSON.parse(localStorage.getItem("isYearly"));
  console.log(userData);
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
          paymentStatus:
            transactionData.status === "paid" ? "COMPLETED" : "Failed",
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
      const response = await axios.get(
        backendUrl + `/api/user/get-payment/${userData._id}`
      );
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
      localStorage.removeItem("userData");
      localStorage.removeItem("selectedPlan");
      localStorage.removeItem("isYearly");
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
          <div className="flex flex-row justify-between items-center">
            <img src={Logo} alt="logo" className="w-[52px] h-auto" />

            <h2 className="md:text-lg text-base font-bold text-center">
              Payment Successful
            </h2>

            <IoIosClose
              onClick={() => {
                navigate("/dashboard");
                scrollTo(0, 0);
              }}
              className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
            />
          </div>

          <div className="border-b border-gray-200 pt-2"></div>

          <div className="space-y-0">
            <div className="w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center">
              <Lottie
                animationData={SuccessLottie}
                loop={true}
                className="w-full h-[140px]"
              />
            </div>

            {transaction && (
              <div className="text-gray-700">
                <p className="text-base font-bold text-center">
                  {" "}
                  Your Order Details
                </p>
                <div className="mt-4">
                  <table className=" border border-gray-300 w-[100%]">
                    <tbody>
                      <tr className="bg-gray-100">
                        <td className="border px-4 py-2 ">Order ID:</td>
                        <td className="border px-4 py-2">
                          {transaction.orderId || "N/A"}
                        </td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Status:</td>
                        <td className="border px-4 py-2">
                          {transaction.status ? "PAID" : "N/A"}
                        </td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Email:</td>
                        <td className="border px-4 py-2">
                          {transaction.customerEmail || "N/A"}
                        </td>
                      </tr>

                      <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Amount:</td>
                        <td className="border px-4 py-2">
                          ${transaction.amount || "N/A"}
                        </td>
                      </tr>

                      <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Plan Type:</td>
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
            <div className="pt-6 text-center p-3">
              <button
                className={`px-12 w-2/3 text-center py-2 bg-green-500 text-white cursor-pointer font-medium hover:bg-green-700 duration-1000 ease-in-out  transition text-sm`}
              >
                <Link to="/dashboard">Go To Dashboard</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
