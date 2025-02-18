import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PaymentMethods = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  return <div>PaymentMethods</div>;
};

export default PaymentMethods;
