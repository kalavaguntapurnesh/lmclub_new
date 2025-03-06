import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./../context/AppContext";
import axios from "axios";
import paypal from "../assets/paypalOne.svg";
import stripe from "../assets/stripe.svg";

const MyPayments = () => {
  const { userData, token, backendUrl } = useContext(AppContext);

  const [subscriptions, setSubscriptions] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMySubscriptions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          backendUrl + "/api/user/get-user-payment-details-user",
          {
            headers: { token },
          }
        );

        if (response.data.payments && response.data.payments.length > 0) {
          setSubscriptions(response.data.payments);
        } else {
          setSubscriptions([]);
        }
        setError(null);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMySubscriptions();
  }, []);

  return (
    userData && (
      <div className="w-[100%]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <p className="text-3xl px-4  font-bold text-green-500">
                  Payment <span className="text-black">Methods</span>
                </p>
                <p className="text-gray-600 px-4  text-base mt-2 mb-4">
                  Your history of payments will be available here.
                </p>

                <div className="px-4 w-full mt-8">
                  {loading ? (
                    <p>Loading your payments...</p>
                  ) : error ? (
                    <p className="text-red-500">{error}</p>
                  ) : (
                    <table className="w-full border border-gray-100">
                      <thead>
                        <tr className="bg-gray-300">
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Payment Type
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Currency
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Payment Price
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Transaction Id
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Auto Renewal
                          </th>

                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Payment Date
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscriptions.map((subscription) => (
                          <tr
                            key={subscription._id}
                            className="hover:bg-gray-100"
                          >
                            <td className="border text-center border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                              <div className="w-[100%] flex justify-center items-center">
                                <img
                                  className="w-16 h-16
                              "
                                  src={
                                    subscription.paymentMethod === "PayPal"
                                      ? paypal
                                      : stripe
                                  }
                                  alt=""
                                />
                              </div>
                            </td>
                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              {subscription.currency}
                            </td>
                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700 ">
                              {subscription.amount}
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              {subscription.paymentMethod !== "PayPal"
                                ? subscription.transactionId.substring(0, 18) +
                                  "****"
                                : subscription.transactionId}
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              {subscription.autoRenew ? "Yes" : "No"}
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              {new Date(
                                subscription.createdAt
                              ).toLocaleDateString("en-DB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              <div className="flex flex-row items-center justify-center gap-2 w-[100%]">
                                <div
                                  className={`h-2 w-2 rounded-full ${
                                    subscription.paymentStatus
                                      ? "bg-green-500"
                                      : "bg-red-500"
                                  } `}
                                ></div>
                                <div>
                                  {subscription.paymentStatus
                                    ? "SUCCESSFUL"
                                    : "FAILED"}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}

                        {subscriptions.length === 0 && (
                          <tr>
                            <td colSpan={6} className="text-center py-4">
                              Your Payment History is Empty.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MyPayments;
