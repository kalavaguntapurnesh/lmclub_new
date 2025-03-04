import React, { useContext } from "react";
import { AppContext } from "./../context/AppContext";

const MyPayments = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  return (
    userData && (
      <div className="w-[100%]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <p className="text-3xl font-bold text-green-500">
                  Payment <span className="text-black">Methods</span>
                </p>
                <p className="text-gray-600 text-base mt-2 mb-4">
                  These addresses will be used at checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MyPayments;
