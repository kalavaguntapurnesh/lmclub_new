import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import estore from "../assets/estore.webp";
const RewardsTerms = () => {
  return (
  <div className="lg:pt-28 pt-16">
      <Navbar />
    <div className="max-w-6xl mx-auto p-6 text-gray-600">
      <section className="my-8 border border-gray-300 rounded p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <img src={estore} alt="Enroll Rewards" className="w-24 h-24 object-contain mb-4" />
        <h1 className="text-3xl font-bold">E-Store Terms and Conditions</h1>
      </div>

      <div className="relative flex my-2 items-center mx-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">
              Effective from January 2023
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
       </div>

      
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4 text-green-600">LM Club E-Store Rewards Terms and Conditions</h2>
        <p className="mb-6">
        Welcome to the LM E-Store Rewards program! By participating in the E-Store Rewards, you agree to the following terms and conditions. Please read them carefully before engaging with the program.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-green-600">Purpose:</h2>
        <p className="mt-2">The LM E-Store Rewards program is designed to:</p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Reward members with 50% of the profit on purchases made through their shared E-Store link.</li>
          <li>Provide an effortless way to promote high-quality products and earn rewards.</li>
          <li>Offer friends and followers exclusive savings while supporting LM Club’s mission.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-green-600">Do's and Don’ts</h2>
        
        <h3 className="text-xl font-semibold mt-4 text-green-600">Do’s</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Use a Legitimate Bank Account:</span> Ensure your earnings are transferred to a valid bank account under your name.</li>
          <li><span className="font-semibold">Report Taxable Income: </span>  Keep track of your earnings and report them to relevant tax authorities as required by law. </li>
          <li><span className="font-semibold">Share Your Unique E-Store Link: </span> Promote your personal link to track purchases and earnings accurately. </li>
          <li><span className="font-semibold">Promote Authentically:  </span>  Share the benefits of LM Club products honestly to encourage purchases.</li>
          <li><span className="font-semibold">Track Your Earnings:</span>Monitor your sales and profits using the E-Store dashboard. </li>
          <li><span className="font-semibold">Comply with Program Guidelines:</span>Adhere to all LM Club policies and ensure your promotions are consistent with our brand values. </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 text-green-600">Don’ts</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Do Not Use Fraudulent Accounts:</span>Avoid creating fake accounts or purchases to manipulate earnings.</li>
          <li><span className="font-semibold">Do Not Spam: </span>  Refrain from spamming your E-Store link across social media or sending unsolicited messages.</li>
          <li><span className="font-semibold">Do Not Misrepresent Products: </span>Provide accurate and truthful information about the products you promote.</li>
          <li><span className="font-semibold">Do Not Engage in Unethical Practices:</span>Avoid aggressive or deceptive marketing tactics to generate sales. </li>
          <li><span className="font-semibold">Do Not Use Unauthorized Content: </span>Ensure that any promotional materials comply with copyright laws and LM Club guidelines.</li>
          <li><span className="font-semibold">Do Not Fail to Report Income:</span> Neglecting to report taxable earnings may result in penalties or program termination.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 text-green-600">Eligibility</h2>
        <div className=" ml-10 mt-2">
          <li>The LM E-Store Rewards program is open to active LM Club members only.</li>
          <li>Participants must be 18 years or older to access and use the widget.</li>
        </div>
        <>
        <h2 className="text-2xl font-bold mt-4 text-green-600 pb-3">Earning and Sharing Profits</h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <span className="font-semibold">How to Earn Profits:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li> Members earn 50% of the profit on purchases made through their unique E-Store link.</li>
                <li>Earnings may vary based on product pricing and specific campaigns.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Sharing Your E-Store Link:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li> Share your personalized E-Store link on social media, blogs, or with your network.</li>
                <li>Ensure the link is used for all promotions to properly track referrals and earnings.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Tracking and Payments:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li>View your earnings and transactions in the E-Store dashboard.</li>
                <li>Payments will be made to your registered bank account after verification of sales.</li>
              </ul>
            </li>
          </ol>
       </>
       <h2 className="text-2xl font-semibold mt-6 text-green-600">Redeeming Earnings</h2>
        <div className=" ml-10 mt-2">
          <li>Earnings will be deposited into the member’s designated bank account at regular intervals as per LM Club’s payment schedule.</li>
          <li>Earnings are non-transferable and cannot be exchanged for cash outside the program’s terms.</li>
        </div>
        <h2 className="text-2xl font-semibold mt-6 text-green-600">Notifications and Updates</h2>
        <div className=" ml-10 mt-2">
            <li>Members must provide a valid email address or phone number to receive notifications about new products, updates, and rewards.</li>
            <li>Opt-out options are available, but doing so may limit access to some program features.</li>
        </div>

        <h2 className="text-2xl font-semibold mt-6  text-green-600">Disclaimer</h2>
        <div className="ml-10 mt-2">
          <li>LM Club is not responsible for taxes, fees, or penalties incurred due to unreported income.</li>
          <li>LM Club reserves the right to withhold or revoke earnings from fraudulent or unauthorized transactions.</li>
          <li>The E-Store program may experience occasional downtime or disruptions. LM Club will work to resolve such issues promptly.</li>
        </div>

        <h2 className="text-2xl font-semibold mt-4 text-green-600">Termination</h2>
        <p className="mt-2">LM Club reserves the right to terminate participation in the E-Store Rewards program for:</p>
        <div className="ml-10 mt-2">
          <li>Violation of these Terms and Conditions.</li>
          <li>Fraudulent or suspicious activity.</li>
          <li>Failure to comply with applicable tax regulations.</li>
        </div>
        <h2 className="font-semibold text-2xl mt-4 text-green-600">Amendments</h2>
        <p className="mt-2">LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued participation in the E-Store Rewards program constitutes acceptance of the updated terms.</p>
        
        <p className="mt-6">By participating in LM E-Store Rewards, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>

        <p className="mt-4">For questions or support, contact us at <a href="mailto:support@lmclub.com" className="text-blue-600">support@lmclub.com</a> or call us at (678) 200-4524.</p>
        
      </div>
      </section>
    </div>
    
    <Footer />
    </div>
  );
};

export default RewardsTerms;