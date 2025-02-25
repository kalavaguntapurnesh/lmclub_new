import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import network from "../assets/network.webp";
const RewardsTerms = () => {
  return (
  <div className="lg:pt-28 pt-16">
      <Navbar />
    <div className="max-w-6xl mx-auto p-6 text-gray-600">
    <section className="my-8 border border-gray-300 rounded p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <img src={network} alt="Enroll Rewards" className="w-24 h-24 object-contain mb-4" />
        <h1 className="text-3xl font-bold"> Network Terms and Conditions</h1>
      </div>
      
      <div className="relative flex my-2 items-center mx-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">
              Effective from January 2023
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
       </div>

      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4 text-green-600">LM Club Network Widget Terms and Conditions</h2>
        <p className="mb-6">
        Welcome to the LM Club Network Widget! By using the Network Widget, you agree to the following terms and conditions. Please read them carefully before accessing or participating in the widget’s features.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 text-green-600">Purpose</h2>
        <p className="mt-2">The LM Club Network Widget is designed to:</p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Connect members with each other for networking opportunities.</li>
          <li>Provide access to club events, news, and exclusive resources.</li>
          <li>Facilitate meaningful discussions and collaborations within the LM Club community.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-green-600">Do's and Don’ts</h2>
        
        <h3 className="font-semibold mt-4 text-green-600">Do’s</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Complete Your Profile:</span>Add a profile picture, interests, and professional background to help others connect with you meaningfully.</li>
          <li><span className="font-semibold">Engage Respectfully: </span> Maintain a professional and courteous tone when interacting with other members. </li>
          <li><span className="font-semibold">Join Community Groups:</span> Participate in discussions and share resources in groups that align with your interests and goals. </li>
          <li><span className="font-semibold">RSVP to Events: </span> Take advantage of the events section to engage with club activities and build connections.</li>
          <li><span className="font-semibold">Use Messaging Responsibly:</span>Use the messaging feature for productive and respectful communication with other members. </li>
          <li><span className="font-semibold">Stay Updated:</span>Regularly check the network for updates on events, discussions, and resources. </li>
        </ul>
        
        <h3 className="font-semibold mt-4 text-green-600">Don’ts</h3>
        <p className="mt-2"></p>
        <ul className="list-decimal list-inside ml-6 mt-2">
          <li><span className="font-semibold">Do Not Spam:</span> Avoid sending unsolicited or irrelevant messages to other members.</li>
          <li><span className="font-semibold">Do Not Share Inappropriate Content:</span> Refrain from posting offensive, discriminatory, or harmful content in any section of the widget.</li>
          <li><span className="font-semibold">Do Not Misuse Information:</span>  Respect the privacy of other members and do not use their contact details for purposes outside the LM Club network.</li>
          <li><span className="font-semibold">Do Not Advertise Without Permission:</span>Avoid promoting external businesses or services unless explicitly permitted by LM Club policies. </li>
          <li><span className="font-semibold">Do Not Engage in Harassment:</span>Harassing, bullying, or threatening behavior towards other members is strictly prohibited.</li>
          <li><span className="font-semibold">Do Not Share False Information: </span> Ensure that the information you share is accurate and truthful.</li>
        </ul>
        <>
        <h2 className="text-xl font-bold mt-4 text-green-600 pb-3">Key Features and How to Use Them</h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <span className="font-semibold">Member Directory:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li><span className="font-semibold">What it Does:</span> Lists all LM Club members available for networking.</li>
                <li><span className="font-semibold">How to Use:</span> Search by name, expertise, or interests to find members who align with your goals.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Events Section:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li><span className="font-semibold">What it Does:</span> Provides updates on upcoming club events and RSVP options.</li>
                <li><span className="font-semibold">How to Use:</span> View event details, see attendee lists, RSVP, and add events to your calendar.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Messaging and Chats:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li><span className="font-semibold">What it Does:</span> Enables direct messaging and group chats within the club.</li>
                <li><span className="font-semibold">How to Use:</span> Start private chats or join group discussions on topics of interest.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Community Groups:</span>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li><span className="font-semibold">What it Does:</span> Offers interest-based groups for members to collaborate and share resources.</li>
                <li><span className="font-semibold">How to Use:</span> Join groups that match your interests and participate in discussions.</li>
              </ul>
            </li>
          </ol>
       </>


        <h2 className="text-xl font-semibold mt-6 text-green-600">Eligibility</h2>
        <div className=" ml-10 mt-2">
          <li>The LM Network Widget is available to active LM Club members only.</li>
          <li>Participants must be 18 years or older to access and use the widget.</li>
        </div>
        
        <h2 className="text-xl font-semibold mt-6 text-green-600">Privacy and Security</h2>
        <div className=" ml-10 mt-2">
            <li>Members are responsible for the confidentiality of their account information.</li>
            <li>LM Club does not share your personal information without consent, in accordance with our Privacy Policy.</li>
        </div>
        
        <h2 className="font-semibold text-xl mt-4 text-green-600">Termination</h2>
        <p className="mt-2">LM Club reserves the right to restrict or terminate access to the Network Widget for:</p>
        <div className="ml-10 mt-2">
          <li>Violation of these Terms and Conditions.</li>
          <li>Misuse of the widget’s features or resources.</li>
          <li>Engagement in fraudulent or harmful activities.</li>
        </div>
        <h2 className="font-semibold text-xl mt-4 text-green-600">Amendments</h2>
        <p className="mt-2">LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued use of the Network Widget constitutes acceptance of the updated terms.</p>
        
        <p className="mt-6">By participating in the LM Club Network Widget, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>

        <p className="mt-4">For questions or support, contact us at <a href="mailto:support@lmclub.com" className="text-blue-600">support@lmclub.com</a> or call us at (678) 200-4524.</p>
        
      </div>
      </section>
    </div>
    
    <Footer />
    </div>
  );
};

export default RewardsTerms;