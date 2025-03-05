import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./../context/AppContext";
import axios from "axios";

const MySubscriptions = () => {
  const { userData, token, backendUrl } = useContext(AppContext);

  const [subscriptions, setSubscriptions] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMySubscriptions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          backendUrl + "/api/user/get-user-subscription-plan",
          {
            headers: { token },
          }
        );
        setSubscriptions(response.data.combinedData);
      } catch (error) {
        setError("Failed to fetch plans");
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
                <p className="text-3xl font-bold text-green-500">
                  My <span className="text-black">Subscriptions</span>
                </p>
                <p className="text-gray-600 text-base mt-2 mb-4">
                  Your recent subscriptions will be shown here.
                </p>

                <div className="px-4 w-full mt-8">
                  {loading ? (
                    <p>Loading subscriptions...</p>
                  ) : error ? (
                    <p className="text-red-500">{error}</p>
                  ) : (
                    <table className="w-full border border-gray-100">
                      <thead>
                        <tr className="bg-gray-300">
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Name
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Widgets
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Subscription Type
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Start Date
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            End Date
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Auto Renewal
                          </th>
                          <th className="border font-bold border-gray-300 px-4 py-2">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscriptions ? (
                          <tr
                            key={subscriptions._id}
                            className="hover:bg-gray-100"
                          >
                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              <div className="flex flex-row items-center justify-center gap-2 w-[100%]">
                                <img
                                  src={subscriptions.image}
                                  alt={subscriptions.image}
                                  className="w-[48px] h-[48px] rounded-full"
                                />
                                <div>{subscriptions.planName}</div>
                              </div>
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              {subscriptions.widgets.map((item, index) => (
                                <p key={index}>{item}</p>
                              ))}
                            </td>

                            <td className="border text-center font-medium uppercase border-gray-300 px-4 py-2 text-gray-700">
                              {subscriptions.subscriptionType}
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              {new Date(
                                subscriptions.startDate
                              ).toLocaleDateString("en-DB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              {new Date(
                                subscriptions.endDate
                              ).toLocaleDateString("en-DB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700">
                              {subscriptions.autoRenew ? "Yes" : "No"}
                            </td>

                            <td className="border text-center font-medium border-gray-300 px-4 py-2 text-gray-700 uppercase">
                              <div className="flex flex-row items-center w-[100%] justify-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <div>{subscriptions.subscriptionStatus}</div>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          <tr>
                            <td colSpan={6} className="text-center py-4">
                              No Subscriptions Found
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

export default MySubscriptions;
