
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import estore from "../assets/estore.webp";
import beehive from "../assets/beehive.webp";

const RewardsTerms = () => {
  return (
  <div className="lg:pt-28 pt-16">
      <Navbar />
    <div className="max-w-6xl mx-auto p-6 text-gray-600">
    <section className="my-8 border border-gray-300 rounded p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <img src={beehive} alt="Enroll Rewards" className="w-24 h-24 object-contain mb-4" />
        <h1 className="text-3xl font-bold">Beehive Terms and Conditions</h1>
      </div>
      
      <div className="relative flex my-2 items-center mx-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">
              Effective from January 2023
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
       </div>

      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4 text-green-600">LM Club Beehive Widget Terms and Conditions</h2>
        <p className="mb-6">
        Welcome to the LM Club Beehive Widget! By using the Beehive Widget, you agree to the following terms and conditions. Please read them carefully before accessing or participating in the Beehive Widget features.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-green-600">The Beehive Widget designed and purpose is to:</h2>
       
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Enable members to earn points by sharing deals, coupons, and information.</li>
          <li>Provide access to exclusive offers shared by other members.</li>
          <li>Facilitate engagement with local businesses and community events.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-green-600">Do's and Don’ts</h2>
        
        <h3 className="text-xl font-semibold mt-4 text-green-600">Do’s</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Share Authentic Information:</span> Ensure that the deals, coupons, or information you share are accurate and valid.</li>
          <li><span className="font-semibold">Respect Community Guidelines: </span>  Engage respectfully with other members, maintaining a positive and constructive tone. </li>
          <li><span className="font-semibold">Redeem Points Responsibly:</span> Redeem accumulated points for rewards such as gift cards or discounts through authorized channels. </li>
          <li><span className="font-semibold">Keep Contact Information Updated: </span>  Ensure your phone number or email address is current for receiving updates and notifications.</li>
          <li><span className="font-semibold">Report Issues:</span>Notify LM Club support if you encounter invalid deals, inappropriate content, or technical issues. </li>
          <li><span className="font-semibold">Follow Activation Steps:</span>Complete all onboarding steps, including reviewing and accepting these Terms and Conditions. </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 text-green-600">Don’ts</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Do Not Share Misleading Content:</span>  Refrain from posting false or outdated deals, coupons, or offers.</li>
          <li><span className="font-semibold">Do Not Engage in Inappropriate Behavior: </span> Avoid offensive language, spamming, or harassing other members.</li>
          <li><span className="font-semibold">Do Not Exploit the System: </span>   Attempting to manipulate or exploit the points system is strictly prohibited.</li>
          <li><span className="font-semibold">Do Not Share Unauthorized Content:</span>Only share deals or information you are authorized to post. </li>
          <li><span className="font-semibold">Do Not Violate Privacy: </span>Avoid sharing private information about businesses, members, or third parties without consent.</li>
          <li><span className="font-semibold">Do Not Use the Platform for Illegal Activities:</span> The Beehive Widget must not be used for any unlawful purposes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-green-600">Eligibility</h2>
        <div className=" ml-10 mt-2">
          <li>The Beehive Widget is available to active LM Club members only.</li>
          <li>Participants must be 18 years or older to access and use the widget.</li>
        </div>
        <h2 className="text-2xl font-semibold mt-6 text-green-600">Points Accumulation and Redemption</h2>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Earning Points:</span> Points are earned by sharing deals, engaging with member-shared content, and other eligible activities.</li>
          <li><span className="font-semibold">Redeeming Points: </span> Points can be redeemed for rewards such as gift cards, discounts, or exclusive offers.</li>
          <li><span className="font-semibold">Resetting Points: </span>  Redeemed points reset to zero. Unredeemed points may expire after a specified period (as determined by LM Club policies).</li>
          <li><span className="font-semibold">Non-Transferability:</span> Points are non-transferable and cannot be exchanged for cash.</li>

        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-green-600">Notifications and Updates</h2>
        <div className=" ml-10 mt-2">
            <li>Members must provide a valid email address or phone number to receive notifications about new deals, exclusive offers, and events.</li>
            <li>Opt-out options are available for members who wish to stop receiving updates but doing so may limit access to some features.</li>
        </div>

        <h2 className="text-2xl font-semibold mt-6  text-green-600">Disclaimer</h2>
        <div className="ml-10 mt-2">
          <li>LM Club is not responsible for the validity or accuracy of deals shared by members. Members are encouraged to verify offers before use.</li>
          <li>Rewards are subject to availability and may change without prior notice.</li>
          <li>The Beehive Widget may experience occasional downtime or disruptions. LM Club will strive to resolve such issues promptly.</li>
        </div>

        <h2 className="text-2xl font-semibold mt-4 text-green-600">Termination</h2>
        <p className="mt-2">LM Club reserves the right to terminate access to the Beehive Widget for:</p>
        <div className="ml-10 mt-2">
          <li>Violation of these Terms and Conditions.</li>
          <li>Suspicious or fraudulent activity.</li>
          <li>Misuse of the platform’s features.</li>
        </div>
        <h2 className="font-semibold text-2xl mt-4 text-green-600">Amendments</h2>
        <p className="mt-2">LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued use of the Beehive Widget constitutes acceptance of the updated terms.</p>
        
        <p className="mt-6">By unlocking and using the Beehive Widget, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>

        <p className="mt-4">For questions or support, contact us at <a href="mailto:support@lmclub.com" className="text-blue-600">support@lmclub.com</a> or call us at (678) 200-4524.</p>
        
      </div>
      </section>
    </div>
    
    <Footer />
    </div>
  );
};

export default RewardsTerms;
