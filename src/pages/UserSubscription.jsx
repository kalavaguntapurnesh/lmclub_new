import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const UserSubscription = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  return (
    userData && (
      <div className="w-[100%]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="w-[100%] flex flex-col gap-2 text-sm">
                  <div className="flex flex-row justify-between">
                    <div className="space-y-2">
                      <p className="lg:text-3xl text-2xl font-bold">
                        <span className="text-green-500">My</span> Subscription
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserSubscription;
