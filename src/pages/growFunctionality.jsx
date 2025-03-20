import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaDollarSign, FaCheck, FaCopy, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import Logo from "../assets/LMDarkLogo.webp";

const REWARD_AMOUNT = "$500";
const REFERRAL_BONUS = "$100";
const userId = localStorage.getItem("userId") || "67caedb9328ecc13ecd80286";
const referralBaseURL = "https://lmclub.club/referral";
const REFERRAL_LINK = `${referralBaseURL}?ref=${userId}`;
const API_URL = "http://localhost:4000/api/referrals";

const growFunctionality = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [copied, setCopied] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingReferrals, setFetchingReferrals] = useState(true);
  const [error, setError] = useState("");

  // Fetch referrals immediately when the component loads
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        console.log("Fetching referrals for:", userId);
        const response = await axios.get(`${API_URL}/stats/${userId}`);
        setReferrals(response.data);
        if (response.data.length > 0) setShowDashboard(true); // Show dashboard if referrals exist
      } catch (error) {
        console.error("Error fetching referrals:", error);
      } finally {
        setFetchingReferrals(false);
      }
    };

    fetchReferrals();
  }, []); // Run once when component mounts

  const copyToClipboard = () => {
    navigator.clipboard.writeText(REFERRAL_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareReferral = async () => {
    if (!name || !email) {
      setError("Please provide both name and email.");
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post(`${API_URL}/create`, { referrer_id: userId, email, name });
      console.log("Referral Created:", response.data);
      alert(response.data.message);
      setReferrals([...referrals, { name, email, status: "pending" }]);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error sending referral:", error.response?.data || error.message); 
      setError(error.response?.data?.error || "Error sending referral.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateReferralStatus = async (email) => {
    try {
      const response = await axios.put(`${API_URL}/update-status`, {
        email: email,
        status: "success"
      });
      alert(response.data.message);

      // Update state instantly
      setReferrals(referrals.map(ref =>
        ref.email === email ? { ...ref, status: "success" } : ref
      ));
    } catch (error) {
      console.error("Error updating referral status:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300">
      {!showDashboard ? (
        <>
          <div className="flex items-center space-x-4 mb-4 pt-10">
            <img src={Logo} alt="LM Club Logo" className="w-12 h-12" />
            <h2 className="text-2xl font-bold text-gray-900">Refer Friends To Laoe Maom Get Rewarded</h2>
          </div>

          <div className="mt-6 space-y-5  border-green-700">
            <div className="flex items-center space-x-3">
              <FaHeart className="text-green-700 text-xl" />
              <p className="text-gray-800 text-lg">Share your unique referral link.</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaDollarSign className="text-green-700 text-xl" />
              <p className="text-gray-800 text-lg">Earn <span className="font-bold">{REWARD_AMOUNT}</span> per referral.</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheck className="text-green-700 text-xl" />
              <p className="text-gray-800 text-lg">Limited Time Offer</p>
            </div>
            
          </div>

          <button 
            className="mt-8 bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-lg w-full" 
            onClick={() => setShowDashboard(true)}
          >
            Get Referral Link
          </button>
          <div className="text-center text-xs mb-4 pt-4">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-800">Earn {REWARD_AMOUNT} per referral!</h2>
          <p className="text-gray-700 mt-2">Share your link below.</p>

          <div className="mt-4 flex items-center border rounded-md overflow-hidden">
            <input type="text" value={REFERRAL_LINK} readOnly className="flex-1 px-4 py-2 border-none bg-gray-100" />
            <button className="bg-green-600 text-white px-4 py-2" onClick={copyToClipboard}>
              {copied ? "Copied!" : <><FaCopy /> Copy</>}
            </button>
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-bold">Rewards Dashboard</h3>
            
            {fetchingReferrals ? (
              <p className="text-gray-600">Loading referrals...</p>
            ) : referrals.length > 0 ? (
              referrals.map((referral, index) => (
                <div key={index} className="mt-4 text-left p-4 border rounded-md shadow">
                  <p className="font-bold">{referral.name}</p>
                  <p className="text-sm text-gray-600">{referral.email}</p>
                  <p className={`flex items-center ${referral.status === "success" ? "text-green-700" : "text-gray-500"}`}>
                    {referral.status === "success" ? <FaCheckCircle className="mr-2" /> : <FaExclamationCircle className="mr-2" />}
                    {referral.status === "success" ? "$100 Earned" : "Reward Pending"}
                  </p>

                  {referral.status !== "success" && (
                    <button 
                      onClick={() => updateReferralStatus(referral.email)} 
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Mark as Successful
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-600">No referrals yet.</p>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-semibold">Refer a Friend</h4>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md" />
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md" />
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleShareReferral} className="w-full bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600">
              {isLoading ? "Sending..." : "Send Referral"}
            </button>
          </div>
          <div className="text-center text-xs mb-4 pt-4">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default growFunctionality;
