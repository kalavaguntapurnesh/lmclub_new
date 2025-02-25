import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LaptopRewards from "../assets/LaptopRewards.png";
import enroll from "../assets/enroll.webp";

const RewardsTerms = () => {
  return (
  <div className="lg:pt-28 pt-16">
      <Navbar />
    <div className="max-w-6xl mx-auto p-6 text-gray-600">
    <section className="my-8 border border-gray-300 rounded p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <img src={enroll} alt="Enroll Rewards" className="w-24 h-24 mb-4" />
        <h1 className="text-3xl font-bold"> Grow Terms and Conditions</h1>
      </div>
      
      <div className="relative flex my-2 items-center mx-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">
              Effective from January 2023
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
       </div>

      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4  text-green-600">LM Club Grow Rewards Terms and Conditions</h2>
        <p className="mb-6">
          Welcome to the LM Grow Rewards program! By participating in LM Grow Rewards, you agree to the following terms and conditions. Please read them carefully before engaging with the program.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6  text-green-600">Purpose</h2>
        <p className="mt-2">The LM Grow Rewards program is designed to:</p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Reward members for inviting others to join the LM Club community.</li>
          <li>Encourage community growth through member participation.</li>
          <li>Provide exclusive rewards and milestones for successful referrals.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6  text-green-600">Do's and Don’ts</h2>
        
        <h3 className="font-semibold mt-4  text-green-600">Do’s</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Use Your Unique Referral Code:</span> Share your personal referral link or code with others to ensure your referrals are tracked accurately.</li>
          <li><span className="font-semibold">Promote Authentically:</span> Share your genuine experiences and benefits of the LM Club to inspire others to join.</li>
          <li><span className="font-semibold">Track Your Progress:</span> Regularly monitor your referral count and milestones in the LM Grow Rewards dashboard.</li>
          <li><span className="font-semibold">Redeem Points Promptly:</span> Redeem accumulated points for rewards through the designated Rewards Store in your account.</li>
          <li><span className="font-semibold">Engage Respectfully:</span> Maintain respectful communication with potential referrals and avoid pressure tactics.</li>
          <li><span className="font-semibold">Follow All Program Guidelines:</span> Adhere to the program rules and ensure your referrals are genuine members.</li>
        </ul>
        
        <h3 className="font-semibold mt-4  text-green-600">Don’ts</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Do Not Misrepresent LM Club:</span> Avoid providing false or misleading information about LM Club or its benefits.</li>
          <li><span className="font-semibold">Do Not Use Spam Tactics:</span> Refrain from mass emailing, unsolicited messaging, or any form of spamming to share your referral link.</li>
          <li><span className="font-semibold">Do Not Manipulate the System:</span> Fraudulent activities, such as creating fake accounts or falsifying referrals, are strictly prohibited.</li>
          <li><span className="font-semibold">Do Not Share Unauthorized Content:</span> Avoid using copyrighted or unauthorized materials when promoting LM Club.</li>
          <li><span className="font-semibold">Do Not Engage in Harassment:</span> Refrain from aggressive or inappropriate behavior when communicating with potential referrals.</li>
          <li><span className="font-semibold">Do Not Exploit Points:</span> Points must be earned and redeemed according to program rules and cannot be exchanged for cash or transferred to others.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6  text-green-600">Eligibility</h2>
        <div className=" ml-10 mt-2">
          <li>The LM Grow Rewards program is open to active LM Club members only.</li>
          <li>Participants must be 18 years or older to participate.</li>
        </div>
        
        <h2 className="text-2xl font-semibold mt-6  text-green-600">Referral Points and Trophies</h2>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><strong>Earning Points:</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Points are awarded for each successful referral who joins LM Club using your referral link or code.</li>
              <li>Points may vary based on specific promotions or campaigns.</li>
            </ul>
          </li>
          <li><strong>Trophy Milestones:</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>For every tenth referral, you will receive bonus points and a trophy to celebrate your achievement.</li>
              <li>Trophies are symbolic rewards and do not hold monetary value.</li>
            </ul>
          </li>
          <li><strong>Redeeming Points:</strong>
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Points can be redeemed for rewards such as gift cards, discounts, and exclusive offers through the Rewards Store.</li>
              <li>Redeemed points will reset to zero after each redemption.</li>
            </ul>
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6  text-green-600">Notifications and Updates</h2>
        <div className="ml-10 mt-2">
          <li>Members must provide a valid email address or phone number to receive notifications about referrals, rewards, and updates.</li>
          <li>Opt-out options are available for members who do not wish to receive updates, but doing so may limit access to some program features.</li>
        </div>
        
        <h2 className="text-2xl font-semibold mt-6  text-green-600">Disclaimer</h2>
        <div className="ml-10 mt-2">
          <li>LM Club is not responsible for any misrepresentation or unauthorized use of the referral system by members.</li>
          <li>Rewards are subject to availability and may change without prior notice.</li>
          <li>The LM Grow Rewards program may experience occasional downtime or disruptions. LM Club will work to resolve such issues promptly.</li>
        </div>
        
        <h2 className="text-2xl font-semibold mt-6  text-green-600">Termination</h2>
        <p className="mt-2">LM Club reserves the right to terminate participation in the LM Grow Rewards program for:</p>
        <div className="ml-10 mt-2">
          <li>Violation of these Terms and Conditions.</li>
          <li>Fraudulent or suspicious activity.</li>
          <li>Abuse or misuse of the referral system.</li>
        </div>
        
        <h2 className="text-2xl font-semibold mt-6  text-green-600 ">Amendments</h2>
        <p className="mt-2">LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued participation in the LM Grow Rewards program constitutes acceptance of the updated terms.</p>
        
        <p className="mt-6">By participating in LM Grow Rewards, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>

        <p className="mt-4">For questions or support, contact us at <a href="mailto:support@lmclub.com" className="text-blue-600">support@lmclub.com</a>.</p>
      </div>
      </section>

    </div>
    <Footer />
    </div>
  );
};

export default RewardsTerms;