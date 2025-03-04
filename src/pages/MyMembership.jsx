import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./../context/AppContext";
import axios from "axios";
import Logo from "../assets/LMDarkLogo.webp";
import { IoIosClose } from "react-icons/io";

const MyMembership = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [plans, setPlans] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const [showPlanModal, setShowPlanModal] = useState(false);

  const openPlanModal = (plan) => {
    setSelectedPlan(plan);
    setShowPlanModal(true);
  };

  const closePlanModal = (user) => {
    setShowPlanModal(false);
    setSelectedPlan(null);
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          backendUrl + "/api/user/getSubscription-types",
          {
            headers: { token },
          }
        );
        setPlans(response.data.subscriptionPlans);
      } catch (error) {
        setError("Failed to fetch plans");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    userData && (
      <div className="w-[100%]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <p className="text-3xl font-bold text-green-500">
                  My <span className="text-black">Memberships</span>
                </p>
                <p className="text-gray-600 text-base mt-2 mb-4">
                  These addresses will be used at checkout.
                </p>
              </div>

              <div className="px-4 w-full">
                {loading ? (
                  <p>Loading plans...</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : (
                  <table className="w-full border border-gray-100">
                    <thead>
                      <tr className="bg-green-400">
                        <th className="border font-bold border-gray-300 px-4 py-2">
                          Logo
                        </th>
                        <th className="border font-bold border-gray-300 px-4 py-2">
                          Name
                        </th>
                        <th className="border font-bold border-gray-300 px-4 py-2">
                          Monthly Price
                        </th>
                        <th className="border font-bold border-gray-300 px-4 py-2">
                          Description
                        </th>
                        <th className="border font-bold border-gray-300 px-4 py-2">
                          Widgets Provided
                        </th>
                        <th className="border font-bold border-gray-300 px-4 py-2">
                          More Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {plans.map((plan) => (
                        <tr key={plan._id} className="hover:bg-gray-100">
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <img
                              src={plan.image}
                              alt={plan.planName}
                              className="w-[72px] h-[72px] rounded-full"
                            />
                          </td>
                          <td className="border text-center  border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                            {plan.planName}
                          </td>
                          <td className="border text-center  border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                            ${plan.planAmount}
                          </td>

                          <td className="border border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                            {plan.planDescription}
                          </td>

                          <td className="border border-gray-300 px-4 py-2 text-zinc-600 text-sm">
                            Beehive Broadcast Grow
                          </td>

                          <td className="border text-center border-gray-300 px-4 py-2 text-zinc-600 text-sm align-middle h-full">
                            <button
                              onClick={() => openPlanModal(plan)}
                              className="px-4 w-[120px] py-2 bg-green-400 border-green-400 text-center text-white text-sm hover:bg-green-600 transition duration-1000 ease-in-out"
                            >
                              Buy Now
                            </button>
                          </td>
                        </tr>
                      ))}

                      {plans.length === 0 && (
                        <tr>
                          <td colSpan={6} className="text-center py-4">
                            No Plans Found
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

        {showPlanModal && selectedPlan && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center lg:mx-0 mx-8">
            <div className="bg-white p-6 rounded shadow w-[600px] z-20">
              <div className="flex flex-row justify-between items-center">
                <img src={Logo} alt="logo" className="w-[52px] h-auto" />

                <h2 className="md:text-lg text-base font-bold text-center">
                  Plan Details
                </h2>

                <IoIosClose
                  onClick={closePlanModal}
                  className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
                />
              </div>

              <div className="border-b border-gray-200 pt-2"></div>

              <div className="grid grid-cols-2 gap-6 pt-8 text-gray-600 md:text-[16px] text-xs">
                <p>Plan Name:</p>
                <p className="font-light">{selectedPlan.planName}</p>
                <p>Plan Amount:</p>
                <p className="font-light">${selectedPlan.planAmount}</p>

                <p>Plan Description:</p>
                <p className="font-light">{selectedPlan.planDescription}</p>
                <p>Widgets Provided:</p>
                <p className="font-light">Beehive Broadcast Grow</p>

                {/* <p>Status:</p>

                <div>
                  <div className="border text-sm text-center md:w-[120px] w-[100px] border-green-400 rounded-full px-8 md:py-2 py-[6px] text-green-400 font-semibold">
                    Active
                  </div>
                </div> */}
              </div>

              <div className="flex items-center justify-center mt-8 mb-4">
                <button
                  onClick={closePlanModal}
                  className="bg-green-400 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] hover:bg-green-600"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default MyMembership;
