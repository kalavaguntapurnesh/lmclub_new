
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LaptopBroadcast from "../assets/LaptopBroadcast.png";

import broadcast from "../assets/broadcast.webp";
const RewardsTerms = () => {
  return (
  <div className="lg:pt-28 pt-16">
      <Navbar />
    <div className="max-w-6xl mx-auto p-6 text-gray-600">
    <section className="my-8 border border-gray-300 rounded p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <img src={broadcast} alt="Enroll Rewards" className="w-24 h-24 object-contain mb-4" />
        <h1 className="text-3xl font-bold"> Broadcast Terms and Conditions</h1>
      </div>

      <div className="relative flex my-2 items-center mx-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">
              Effective from January 2023
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
       </div>

      
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4 text-green-600">LM Club Broadcast Rewards Terms and Conditions</h2>
        <p className="mb-6">
        Welcome to the LM Broadcast Rewards program! By participating in the Broadcast Rewards, you agree to the following terms and conditions. Please read them carefully before engaging with the program.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-green-600">Purpose:</h2>
        <p className="mt-2">The LM Broadcast Rewards program is designed to:</p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Reward members for sharing promotions from local businesses on their social media platforms.</li>
          <li>Help promote and support local businesses within the LM Club community.</li>
          <li>Provide members with exclusive perks and rewards for their participation.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-green-600">Do's and Don’ts</h2>
        
        <h3 className="text-xl font-semibold mt-4 text-green-600">Do’s</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Share Authorized Promotions:</span> Only share broadcast URLs provided through the LM Club platform.</li>
          <li><span className="font-semibold">Use Social Media Responsibly: </span>Post promotions on your social media accounts in accordance with the platform’s terms of service.</li>
          <li><span className="font-semibold">Ensure Visibility:</span>Verify that your social media posts are public or visible to your intended audience for proper tracking.</li>
          <li><span className="font-semibold">Track Your Progress:</span>Monitor your shared promotions and earned points in the LM Broadcast Rewards dashboard.</li>
          <li><span className="font-semibold">Redeem Points Promptly:</span>Use accumulated points to redeem rewards through the designated Rewards Store in your account.</li>
          <li><span className="font-semibold">Engage Positively:</span> Promote local businesses in a manner that reflects positively on LM Club and its partners.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 text-green-600">Don’ts</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Do Not Share Unauthorized Links:</span>Avoid sharing non-validated links or promotions that have not been provided by LM Club.</li>
          <li><span className="font-semibold">Do Not Misrepresent Promotions:</span>Ensure the accuracy and authenticity of the promotional information you share.</li>
          <li><span className="font-semibold">Do Not Spam:</span>Avoid spamming promotional URLs on social media, including repeated postings or sending unsolicited messages.</li>
          <li><span className="font-semibold">Do Not Manipulate Points:</span> Fraudulent activities, such as creating fake social media accounts or posts, are strictly prohibited.</li>
          <li><span className="font-semibold">Do Not Use Offensive Content:</span>Ensure your social media posts are free from offensive language, imagery, or behavior.</li>
          <li><span className="font-semibold">Do Not Exploit Rewards: </span> Points must be earned and redeemed according to program rules and cannot be exchanged for cash or transferred to others.</li>
      </ul>
        <h2 className="text-2xl font-semibold mt-6 text-green-600">Eligibility</h2>
        <div className=" ml-10 mt-2">
          <li>The LM Broadcast Rewards program is open to active LM Club members only.</li>
          <li>Participants must be 18 years or older to access and use the widget.</li>
        </div>
        <>
        <h2 className="text-2xl font-bold mt-4 text-green-600 pb-3">Earning Points</h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <span className="font-semibold">How to Earn Points:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li> Points are awarded for each valid promotion you share on your social media platforms using a broadcast URL.</li>
                <li>Points may vary based on specific campaigns or promotions.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Sharing Rules:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li> Broadcast URLs must be shared through the social media platforms linked to your LM Club account.</li>
                <li>Each promotion must meet visibility and validity requirements to earn points.</li>
              </ul>
            </li>
          </ol>
       </>
       <h2 className="text-2xl font-semibold mt-6 text-green-600">Redeeming Points</h2>
        <div className=" ml-10 mt-2">
          <li>Points can be redeemed for rewards such as gift cards, discounts, and exclusive offers through the Rewards Store.</li>
          <li>Redeemed points will reset to zero after each redemption.</li>
          <li>Unredeemed points may expire after a specified period, as determined by LM Club policies.</li>
        </div>
        <h2 className="text-2xl font-semibold mt-6 text-green-600">Notifications and Updates</h2>
        <div className=" ml-10 mt-2">
            <li>Members must provide a valid email address or phone number to receive notifications about new promotions and rewards.</li>
            <li>Opt-out options are available for members who do not wish to receive updates, but doing so may limit access to some program features.</li>
        </div>

        <h2 className="text-2xl font-semibold mt-6  text-green-600">Disclaimer</h2>
        <div className="ml-10 mt-2">
          <li>LM Club is not responsible for the accuracy of promotions provided by participating businesses.</li>
          <li>Rewards are subject to availability and may change without prior notice.</li>
          <li>The LM Broadcast Rewards program may experience occasional downtime or disruptions. LM Club will work to resolve such issues promptly.</li>
        </div>

        <h2 className="text-2xl font-semibold mt-4 text-green-600">Termination</h2>
        <p className="mt-2">LM Club reserves the right to terminate participation in the LM Broadcast Rewards program for:</p>
        <div className="ml-10 mt-2">
          <li>Violation of these Terms and Conditions.</li>
          <li>Fraudulent or suspicious activity.</li>
          <li>Abuse or misuse of the referral or sharing system.</li>
        </div>
        <h2 className="font-semibold text-2xl mt-4 text-green-600">Amendments</h2>
        <p className="mt-2">LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued participation in the LM Broadcast Rewards program constitutes acceptance of the updated terms.</p>
        
        <p className="mt-6">By participating in LM Broadcast Rewards, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>

        <p className="mt-4">For questions or support, contact us at <a href="mailto:support@lmclub.com" className="text-blue-600">support@lmclub.com</a> or call us at (678) 200-4524.</p>
        
      </div>
      </section>
    </div>
    
    <Footer />
    </div>
  );
};

export default RewardsTerms;
