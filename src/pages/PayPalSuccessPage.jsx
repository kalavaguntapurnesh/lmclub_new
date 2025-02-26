import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";
import success from "../assets/success.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PayPalSuccessPage = () => {
  const {
    items,
    getProductQuantity,
    getTotalCost,
    addOneToCart,
    deleteFromCart,
    clearCart,
  } = useContext(CartContext);
  const { backendUrl } = useContext(AppContext);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const payerID = searchParams.get("PayerID");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);
  
  useEffect(() => {
    if (!token || !payerID) return;
  
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios.get(
          backendUrl + /api/user/complete-order?token=${token}&PayerID=${payerID}
        );
        setPaymentDetails(response.data);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPaymentDetails();
  }, [token, payerID]);
  
  // Call handleStoringPaymentDetails only once when paymentDetails is available
  useEffect(() => {
    if (paymentDetails && !flag && items?.length > 0) {
      handleStoringPaymentDetails();
    }
  }, [paymentDetails, flag, items]);  // Added 'items' to dependency to ensure it's available
  
  const handleStoringPaymentDetails = async () => {
    try {
      if (!items || items.length === 0) {
        console.error("Error: Items are undefined or empty");
        return;  // Stop execution if items are not available
      }
  
      console.log(items[0]?.name);
      console.log(items[0]?.price);
      console.log(items[0]?.description);
      console.log(paymentDetails?.data?.id);
      console.log(paymentDetails?.data?.status);
      console.log(paymentDetails?.data?.payer?.email_address);
      console.log(paymentDetails?.data?.payer?.name?.given_name);
      console.log(
        paymentDetails?.data?.purchase_units?.[0]?.payments?.captures?.[0]
          ?.amount?.value
      );
      console.log(paymentDetails?.data?.payment_source?.paypal?.account_id);
  
      const response = await axios.post(backendUrl + "/api/user/payment-details", {
        MembershipName: items?.[0]?.name || "N/A",
        MembershipPrice: items?.[0]?.price || "N/A",
        MembershipDescription: items?.[0]?.description || "N/A",
        paymentOrderID: paymentDetails?.data?.id || "N/A",
        paymentStatus: paymentDetails?.data?.status || "N/A",
        paymentEmail: paymentDetails?.data?.payer?.email_address || "N/A",
        paymentName: paymentDetails?.data?.payer?.name?.given_name || "N/A",
        paymentAmount:
          paymentDetails?.data?.purchase_units?.[0]?.payments?.captures?.[0]
            ?.amount?.value || "0",
        paymentAccountID:
          paymentDetails?.data?.payment_source?.paypal?.account_id || "N/A",
      });
  
      console.log("Payment details saved successfully:", response.data);
  
      setFlag(true); 
      clearCart();
    } catch (error) {
      console.error("Error while storing payment details into DB:", error);
    }
  };
  
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg ">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <h4 className="text-3xl font-bold text-center flex-1">
            <span className="text-black">LM</span>
            <span className="text-green-500">Club</span>
          </h4>
        </div>

        <div className="mb-6 flex justify-center">
          <img src={success} alt="Success" className="w-[50px] h-[50px]" />
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-600">Processing payment...</p>
        )}

        {/* Display Payment Details */}
        {paymentDetails && (
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
                      {paymentDetails?.data?.id || "N/A"}
                    </td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="border px-4 py-2 font-semibold">Status:</td>
                    <td className="border px-4 py-2">
                      {paymentDetails?.data?.status || "N/A"}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Email:</td>
                    <td className="border px-4 py-2">
                      {paymentDetails?.data?.payer?.email_address || "N/A"}
                    </td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="border px-4 py-2 font-semibold">Name:</td>
                    <td className="border px-4 py-2">
                      {paymentDetails?.data?.payer?.name?.given_name || "N/A"}
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2 font-semibold">Amount:</td>
                    <td className="border px-4 py-2">
                      $
                      {paymentDetails?.data?.purchase_units?.[0]?.payments
                        ?.captures?.[0]?.amount?.value || "N/A"}
                    </td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="border px-4 py-2 font-semibold">
                      Account ID:
                    </td>
                    <td className="border px-4 py-2">
                      {paymentDetails?.data?.payment_source?.paypal
                        ?.account_id || "N/A"}
                    </td>
                  </tr>
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

        <button
          // onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition mt-3"
        >
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default PayPalSuccessPage;