import React from "react";
import beehive from "../assets/beehive.webp";
import broadcast from "../assets/broadcast.webp";
import estore from "../assets/estore.webp";
import enroll from "../assets/enroll.webp";
import network from "../assets/network.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const AllWidgetTsAndCs = () => {
  const { widget } = useParams();

  const widgetData = {
    beehive: {
      name: "Beehive",
      date: "Effective from December 2024",
      image: beehive,
      purpose: [
        "Enable members to earn points by sharing deals, coupons, and information.",
        "Provide access to exclusive offers shared by other members.",
        "Facilitate engagement with local businesses and community events.",
      ],
      do: [
        {
          title: "Share Authentic Information",
          description:
            "Ensure that the deals, coupons, or information you share are accurate and valid.",
        },
        {
          title: "Respect Community Guidelines",
          description:
            "Engage respectfully with other members, maintaining a positive and constructive tone.",
        },
        {
          title: "Redeem Points Responsibly",
          description:
            "Redeem accumulated points for rewards such as gift cards or discounts through authorized channels.",
        },
        {
          title: "Keep Contact Information Updated",
          description:
            "Ensure your phone number or email address is current for receiving updates and notifications.",
        },
        {
          title: "Report Issues",
          description:
            "Notify LM Club support if you encounter invalid deals, inappropriate content, or technical issues.",
        },
        {
          title: "Follow Activation Steps",
          description:
            "Complete all onboarding steps, including reviewing and accepting these Terms and Conditions.",
        },
      ],
      donot: [
        {
          title: "Do Not Share Misleading Content",
          description:
            "Refrain from posting false or outdated deals, coupons, or offers.",
        },
        {
          title: "Do Not Engage in Inappropriate Behavior",
          description:
            "Avoid offensive language, spamming, or harassing other members.",
        },
        {
          title: "Do Not Exploit the System",
          description:
            "Attempting to manipulate or exploit the points system is strictly prohibited.",
        },
        {
          title: "Do Not Share Unauthorized Content",
          description:
            "Only share deals or information you are authorized to post.",
        },
        {
          title: "Do Not Violate Privacy",
          description:
            "Avoid sharing private information about businesses, members, or third parties without consent.",
        },
        {
          title: "Do Not Use the Platform for Illegal Activities",
          description:
            "The Beehive Widget must not be used for any unlawful purposes.",
        },
      ],
      eligibility: [
        "The Beehive Widget is available to active LM Club members only.",
        "Participants must be 18 years or older to access and use the widget.",
      ],
      points: [
        {
          title: "Earning Points",
          description:
            "Points are earned by sharing deals, engaging with member-shared content, and other eligible activities.",
        },
        {
          title: "Redeeming Points",
          description:
            "Points can be redeemed for rewards such as gift cards, discounts, or exclusive offers.",
        },
        {
          title: "Resetting Points",
          description:
            "Redeemed points reset to zero. Unredeemed points may expire after a specified period (as determined by LM Club policies).",
        },
        {
          title: "Non-Transferability",
          description:
            "Points are non-transferable and cannot be exchanged for cash.",
        },
      ],
      notifications: [
        "Members must provide a valid email address or phone number to receive notifications about new deals, exclusive offers, and events.",
        "Opt-out options are available for members who wish to stop receiving updates but doing so may limit access to some features.",
      ],
      disclaimer: [
        "LM Club is not responsible for the validity or accuracy of deals shared by members. Members are encouraged to verify offers before use.",
        "Rewards are subject to availability and may change without prior notice.",
        "The Beehive Widget may experience occasional downtime or disruptions. LM Club will strive to resolve such issues promptly.",
      ],
      termination: [
        "Violation of these Terms and Conditions.",
        "Suspicious or fraudulent activity.",
        "Misuse of the platform’s features.",
      ],
      amendments:
        "LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued use of the Beehive Widget constitutes acceptance of the updated terms.",
      confirmation:
        "By unlocking and using the Beehive Widget, you confirm that you have read, understood, and agreed to these Terms and Conditions.",
      support:
        "For questions or support, contact us at support@lmclub.com or call us at (678) 200-4524.",
    },

    broadcast: {
      name: "Broadcast",
      date: "Effective from December 2024",
      image: broadcast,
      purpose: [
        "Reward members for sharing promotions from local businesses on their social media platforms.",
        "Help promote and support local businesses within the LM Club community.",
        "Provide members with exclusive perks and rewards for their participation.",
      ],
      do: [
        {
          title: "Share Authorized Promotions",
          description:
            "Only share broadcast URLs provided through the LM Club platform.",
        },
        {
          title: "Use Social Media Responsibly",
          description:
            "Post promotions on your social media accounts in accordance with the platform’s terms of service.",
        },
        {
          title: "Ensure Visibility",
          description:
            "Verify that your social media posts are public or visible to your intended audience for proper tracking.",
        },
        {
          title: "Track Your Progress",
          description:
            "Monitor your shared promotions and earned points in the LM Broadcast Rewards dashboard.",
        },
        {
          title: "Redeem Points Promptly",
          description:
            "Use accumulated points to redeem rewards through the designated Rewards Store in your account.",
        },
        {
          title: "Engage Positively",
          description:
            "Promote local businesses in a manner that reflects positively on LM Club and its partners.",
        },
      ],
      donot: [
        {
          title: "Do Not Share Unauthorized Links",
          description:
            "Avoid sharing non-validated links or promotions that have not been provided by LM Club.",
        },
        {
          title: "Do Not Misrepresent Promotions",
          description:
            "Ensure the accuracy and authenticity of the promotional information you share.",
        },
        {
          title: "Do Not Spam",
          description:
            "Avoid spamming promotional URLs on social media, including repeated postings or sending unsolicited messages.",
        },
        {
          title: "Do Not Manipulate Points",
          description:
            "Fraudulent activities, such as creating fake social media accounts or posts, are strictly prohibited.",
        },
        {
          title: "Do Not Use Offensive Content",
          description:
            "Ensure your social media posts are free from offensive language, imagery, or behavior.",
        },
        {
          title: "Do Not Exploit Rewards",
          description:
            "Points must be earned and redeemed according to program rules and cannot be exchanged for cash or transferred to others.",
        },
      ],
      description: "Terms and conditions for Broadcast widget.",
      eligibility: [
        "The LM Broadcast Rewards program is open to active LM Club members only.",
        "Participants must be 18 years or older to access and use the widget.",
      ],
      points: [
        {
          title: "Earning Points",
          description:
            "Points are awarded for each valid promotion you share on your social media platforms using a broadcast URL. Points may vary based on specific campaigns or promotions.",
        },
        {
          title: "Sharing Rules:",
          description:
            "Broadcast URLs must be shared through the social media platforms linked to your LM Club account. Each promotion must meet visibility and validity requirements to earn points.",
        },
        {
          title: "Redeeming Points",
          description:
            "Points can be redeemed for rewards such as gift cards, discounts, and exclusive offers through the Rewards Store. Redeemed points will reset to zero after each redemption. Unredeemed points may expire after a specified period, as determined by LM Club policies.",
        },
      ],
      notifications: [
        "Members must provide a valid email address or phone number to receive notifications about new deals, exclusive offers, and events.",
        "Opt-out options are available for members who wish to stop receiving updates but doing so may limit access to some features.",
      ],
      disclaimer: [
        "LM Club is not responsible for the validity or accuracy of deals shared by members. Members are encouraged to verify offers before use.",
        "Rewards are subject to availability and may change without prior notice.",
        "The Broadcast Widget may experience occasional downtime or disruptions. LM Club will strive to resolve such issues promptly.",
      ],
      termination: [
        "Violation of these Terms and Conditions.",
        "Fraudulent or suspicious activity.",
        "Abuse or misuse of the referral or sharing system.",
      ],
      amendments:
        "LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued participation in the LM Broadcast Rewards program constitutes acceptance of the updated terms.",
      confirmation:
        "By participating in LM Broadcast Rewards, you confirm that you have read, understood, and agreed to these Terms and Conditions.",
      support:
        "For questions or support, contact us at support@lmclub.com or call us at (678) 200-4524.",
    },
    estore: {
      name: "E-Store",
      date: "Effective from December 2024",
      image: estore,
      purpose: [
        "Reward members with 50% of the profit on purchases made through their shared E-Store link",
        "Provide an effortless way to promote high-quality products and earn rewards.",
        "Offer friends and followers exclusive savings while supporting LM Club’s mission.",
      ],
      do: [
        {
          title: "Use a Legitimate Bank Account",
          description:
            "Ensure your earnings are transferred to a valid bank account under your name.",
        },
        {
          title: "Report Taxable Income",
          description:
            "Keep track of your earnings and report them to relevant tax authorities as required by law.",
        },
        {
          title: "Share Your Unique E-Store Link",
          description:
            "Promote your personal link to track purchases and earnings accurately.",
        },
        {
          title: "Promote Authentically",
          description:
            "Share the benefits of LM Club products honestly to encourage purchases.",
        },
        {
          title: "Track Your Earnings",
          description:
            "Monitor your sales and profits using the E-Store dashboard.",
        },
        {
          title: "Comply with Program Guidelines",
          description:
            "Adhere to all LM Club policies and ensure your promotions are consistent with our brand values.",
        },
      ],
      donot: [
        {
          title: "Do Not Use Fraudulent Accounts",
          description:
            "Avoid creating fake accounts or purchases to manipulate earnings.",
        },
        {
          title: "Do Not Spam",
          description:
            "Refrain from spamming your E-Store link across social media or sending unsolicited messages.",
        },
        {
          title: "Do Not Misrepresent Products",
          description:
            "Provide accurate and truthful information about the products you promote.",
        },
        {
          title: "Do Not Engage in Unethical Practices",
          description:
            "Avoid aggressive or deceptive marketing tactics to generate sales.",
        },
        {
          title: "Do Not Use Unauthorized Content",
          description:
            "Ensure that any promotional materials comply with copyright laws and LM Club guidelines.",
        },
        {
          title: "Do Not Fail to Report Income",
          description:
            "Neglecting to report taxable earnings may result in penalties or program termination.",
        },
      ],
      eligibility: [
        "The LM E-Store Rewards program is open to active LM Club members only.",
        "Participants must be 18 years or older to access and use the widget.",
      ],
      points: [
        {
          title: "How to Earn Profits:",
          description:
            "Members earn 50% of the profit on purchases made through their unique E-Store link. Earnings may vary based on product pricing and specific campaigns.",
        },
        {
          title: "Sharing Your E-Store Link:",
          description:
            "Share your personalized E-Store link on social media, blogs, or with your network. Ensure the link is used for all promotions to properly track referrals and earnings.",
        },
        {
          title: "Tracking and Payments:",
          description:
            "View your earnings and transactions in the E-Store dashboard. Payments will be made to your registered bank account after verification of sales.",
        },
        {
          title: "Redeeming Earnings",
          description:
            "Earnings will be deposited into the member’s designated bank account at regular intervals as per LM Club’s payment schedule Earnings are non-transferable and cannot be exchanged for cash outside the program’s terms.",
        },
      ],
      notifications: [
        "Members must provide a valid email address or phone number to receive notifications about new deals, exclusive offers, and events.",
        "Opt-out options are available for members who wish to stop receiving updates but doing so may limit access to some features.",
      ],
      disclaimer: [
        "LM Club is not responsible for the validity or accuracy of deals shared by members. Members are encouraged to verify offers before use.",
        "LM Club reserves the right to withhold or revoke earnings from fraudulent or unauthorized transactions.",
        "The E-Store program may experience occasional downtime or disruptions. LM Club will work to resolve such issues promptly.",
      ],
      termination: [
        "Violation of these Terms and Conditions.",
        "Fraudulent or suspicious activity.",
        "Failure to comply with applicable tax regulations.",
      ],
      amendments:
        "LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued participation in the LM E-Store Rewards program constitutes acceptance of the updated terms.",
      confirmation:
        "By participating in LM E-Store Rewards, you confirm that you have read, understood, and agreed to these Terms and Conditions.",
      support:
        "For questions or support, contact us at support@lmclub.com or call us at (678) 200-4524.",
      description: "Terms and conditions for E-Store widget.",
    },
    enroll: {
      name: "Enroll",
      date: "Effective from December 2024",
      image: enroll,
      purpose: [
        "Reward members for inviting others to join the LM Club community.",
        "Encourage community growth through member participation.",
        "Provide exclusive rewards and milestones for successful referrals.",
      ],
      description: "Terms and conditions for Enroll widget.",
      do: [
        {
          title: "Use Your Unique Referral Code",
          description:
            "Share your personal referral link or code with others to ensure your referrals are tracked accurately.",
        },
        {
          title: "Promote Authentically",
          description:
            "Share your genuine experiences and benefits of the LM Club to inspire others to join.",
        },
        {
          title: "Track Your Progress",
          description:
            "Regularly monitor your referral count and milestones in the LM Grow Rewards dashboard.",
        },
        {
          title: "Redeem Points Promptly",
          description:
            "Redeem accumulated points for rewards through the designated Rewards Store in your account.",
        },
        {
          title: "Engage Respectfully",
          description:
            "Maintain respectful communication with potential referrals and avoid pressure tactics.",
        },
        {
          title: "Follow All Program Guidelines",
          description:
            "Adhere to the program rules and ensure your referrals are genuine members.",
        },
      ],
      donot: [
        {
          title: "Do Not Misrepresent LM Club",
          description:
            "Avoid providing false or misleading information about LM Club or its benefits.",
        },
        {
          title: "Do Not Use Spam Tactics",
          description:
            "Refrain from mass emailing, unsolicited messaging, or any form of spamming to share your referral link.",
        },
        {
          title: "Do Not Manipulate the System",
          description:
            "Fraudulent activities, such as creating fake accounts or falsifying referrals, are strictly prohibited.",
        },
        {
          title: "Do Not Share Unauthorized Content",
          description:
            "Avoid using copyrighted or unauthorized materials when promoting LM Club.",
        },
        {
          title: "Do Not Engage in Harassment",
          description:
            "Refrain from aggressive or inappropriate behavior when communicating with potential referrals.",
        },
        {
          title: "Do Not Exploit Points",
          description:
            "Points must be earned and redeemed according to program rules and cannot be exchanged for cash or transferred to others.",
        },
      ],
      eligibility: [
        "The LM E-Store Rewards program is open to active LM Club members only.",
        "Participants must be 18 years or older to access and use the widget.",
      ],
      points: [
        {
          title: "How to Earn Profits:",
          description:
            "Points are awarded for each successful referral who joins LM Club using your referral link or code. Points may vary based on specific promotions or campaigns.</li>Members earn 50% of the profit on purchases made through their unique E-Store link. Earnings may vary based on product pricing and specific campaigns.",
        },
        {
          title: "Trophy Milestones:",
          description:
            "For every tenth referral, you will receive bonus points and a trophy to celebrate your achievement. Trophies are symbolic rewards and do not hold monetary value.</li>Share your personalized E-Store link on social media, blogs, or with your network. Ensure the link is used for all promotions to properly track referrals and earnings.",
        },
        {
          title: "Redeeming Points:",
          description:
            "Points can be redeemed for rewards such as gift cards, discounts, and exclusive offers through the Rewards Store. Redeemed points will reset to zero after each redemption.",
        },
      ],
      notifications: [
        "Members must provide a valid email address or phone number to receive notifications about new deals, exclusive offers, and events.",
        "Opt-out options are available for members who wish to stop receiving updates but doing so may limit access to some features.",
      ],
      disclaimer: [
        "LM Club is not responsible for the validity or accuracy of deals shared by members. Members are encouraged to verify offers before use.",
        "Rewards are subject to availability and may change without prior notice.",
        "The LM Grow Rewards program may experience occasional downtime or disruptions. LM Club will work to resolve such issues promptly.",
      ],
      termination: [
        "Violation of these Terms and Conditions.",
        "Fraudulent or suspicious activity.",
        "Abuse or misuse of the referral system.",
      ],
      amendments:
        "LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued participation in the LM Grow Rewards program constitutes acceptance of the updated terms.",
      confirmation:
        "By participating in LM Grow Rewards, you confirm that you have read, understood, and agreed to these Terms and Conditions.",
      support:
        "For questions or support, contact us at support@lmclub.com or call us at (678) 200-4524.",
    },
    network: {
      name: "Network",
      date: "Effective from December 2024",
      image: network,
      purpose: [
        "Connect members with each other for networking opportunities.",
        "Provide access to exclusive offers shared by other members.",
        "Facilitate engagement with local businesses and community events.",
      ],
      do: [
        {
          title: "Complete Your Profile",
          description:
            "Add a profile picture, interests, and professional background to help others connect with you meaningfully.",
        },
        {
          title: "Engage Respectfully",
          description:
            "Maintain a professional and courteous tone when interacting with other members.",
        },
        {
          title: "Join Community Groups",
          description:
            "Participate in discussions and share resources in groups that align with your interests and goals.",
        },
        {
          title: "RSVP to Events",
          description:
            "Take advantage of the events section to engage with club activities and build connections.",
        },
        {
          title: "Use Messaging Responsibly",
          description:
            "Use the messaging feature for productive and respectful communication with other members.",
        },
        {
          title: "Stay Updated",
          description:
            "Regularly check the network for updates on events, discussions, and resources.",
        },
      ],
      donot: [
        {
          title: "Do Not Spam",
          description:
            "Avoid sending unsolicited or irrelevant messages to other members.",
        },
        {
          title: "Do Not Share Inappropriate Content",
          description:
            "Refrain from posting offensive, discriminatory, or harmful content in any section of the widget.",
        },
        {
          title: "Do Not Misuse Information",
          description:
            "Respect the privacy of other members and do not use their contact details for purposes outside the LM Club network.",
        },
        {
          title: "Do Not Advertise Without Permission",
          description:
            "Avoid promoting external businesses or services unless explicitly permitted by LM Club policies.",
        },
        {
          title: "Do Not Engage in Harassment",
          description:
            "Harassing, bullying, or threatening behavior towards other members is strictly prohibited.",
        },
        {
          title: "Do Not Share False Information",
          description:
            "Ensure that the information you share is accurate and truthful.",
        },
      ],
      description: "Terms and conditions for Network widget.",
      points: [
        {
          title: "How to Earn Profits:",
          description:
            "Members earn 50% of the profit on purchases made through their unique E-Store link. Earnings may vary based on product pricing and specific campaigns.",
        },
        {
          title: "Sharing Your E-Store Link:",
          description:
            "Share your personalized E-Store link on social media, blogs, or with your network. Ensure the link is used for all promotions to properly track referrals and earnings.",
        },
        {
          title: "Tracking and Payments:",
          description:
            "View your earnings and transactions in the E-Store dashboard. Payments will be made to your registered bank account after verification of sales.",
        },
        {
          title: "Redeeming Earnings",
          description:
            "Earnings will be deposited into the member’s designated bank account at regular intervals as per LM Club’s payment schedule Earnings are non-transferable and cannot be exchanged for cash outside the program’s terms.",
        },
      ],
      eligibility: [
        "The LM E-Store Rewards program is open to active LM Club members only.",
        "Participants must be 18 years or older to access and use the widget.",
      ],
      PrivacyAndSecurity: [
        "Members are responsible for the confidentiality of their account information.",
        "LM Club does not share your personal information without consent, in accordance with our Privacy Policy.",
      ],
      termination: [
        "Violation of these Terms and Conditions.",
        "Misuse of the widget’s features or resources.",
        "Engagement in fraudulent or harmful activities.",
      ],
      amendments:
        "LM Club may update these Terms and Conditions at any time. Members will be notified of significant changes via email or in-app notifications. Continued participation in the LM Network Rewards program constitutes acceptance of the updated terms.",
      confirmation:
        "By participating in LM Club Network Widget, you confirm that you have read, understood, and agreed to these Terms and Conditions.",
      support:
        "For questions or support, contact us at support@lmclub.com or call us at (678) 200-4524.",
    },
  };

  const selectedWidget = widgetData[widget];

  return (
    <div className="lg:pt-28 pt-16">
      <Navbar />
      {selectedWidget ? (
        <div className="max-w-[1400px] mx-auto p-6 text-gray-600">
          <section className="my-8 border border-gray-300 rounded p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <img
                src={selectedWidget.image}
                alt={selectedWidget.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h1 className="text-3xl font-bold" style={{ color: "#1a1a1a" }}>
                {selectedWidget.name} Widget Terms & Conditions
              </h1>
            </div>

            {/* Divider with Date */}
            <div className="relative flex my-2 items-center mx-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">
                {selectedWidget.date}
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="text-left">
              {/* Widget Purpose */}
              <h2
                className="text-2xl font-bold mb-4 text-green-600"
                style={{ color: "#1a1a1a" }}
              >
                LM Club {selectedWidget.name} Widget Terms and Conditions
              </h2>
              <p className="mb-6 text-gray-600">
                Welcome to the LM Club {selectedWidget.name} Widget! By using
                the {selectedWidget.name} Widget, you agree to the following
                terms and conditions. Please read them carefully before
                accessing or participating in the {selectedWidget.name} Widget
                features.
              </p>

              <h2 className="text-2xl font-semibold mt-6 text-green-600">
                The {selectedWidget.name} Widget is designed for:
              </h2>
              <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
                {selectedWidget.purpose.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Do's and Don'ts */}
              <h2 className="text-2xl font-semibold mt-6 text-green-600">
                Do's and Don’ts
              </h2>

              {/* Do's */}
              <h3 className="text-xl font-semibold mt-4 text-green-600">
                Do’s
              </h3>
              {selectedWidget.do && selectedWidget.do.length > 0 && (
                <ul className="list-decimal list-inside ml-6 mt-2 text-gray-600">
                  {selectedWidget.do.map((item, index) => (
                    <li key={index}>
                      <span
                        className="font-semibold"
                        style={{ color: "#1a1a1a" }}
                      >
                        {item.title}:
                      </span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              )}

              {/* Don'ts */}
              <h3 className="text-xl font-semibold mt-4 text-green-600">
                Don’ts
              </h3>
              {selectedWidget.donot && selectedWidget.donot.length > 0 && (
                <ul className="list-decimal list-inside ml-6 mt-2 text-gray-600">
                  {selectedWidget.donot.map((item, index) => (
                    <li key={index}>
                      <span
                        className="font-semibold"
                        style={{ color: "#1a1a1a" }}
                      >
                        {item.title}:
                      </span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              )}

              {/* Eligibility */}
              {selectedWidget.eligibility &&
                selectedWidget.eligibility.length > 0 && (
                  <>
                    <h2 className="text-2xl font-semibold mt-6 text-green-600">
                      Eligibility
                    </h2>
                    <div className=" ml-10 mt-2  text-gray-600">
                      {selectedWidget.eligibility.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </div>
                  </>
                )}

              {/* Points */}
              <h2 className="text-2xl font-semibold mt-6 text-green-600">
                Points Accumulation and Redemption
              </h2>
              <p className="mt-2"></p>
              {selectedWidget.points && selectedWidget.points.length > 0 && (
                <ul className="list-decimal list-inside ml-6 mt-2 text-gray-600">
                  {selectedWidget.points.map((item, index) => (
                    <li key={index}>
                      <span
                        className="font-semibold"
                        style={{ color: "#1a1a1a" }}
                      >
                        {item.title}:
                      </span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              )}

              {/* Notifications and Updates */}
              {selectedWidget.notifications &&
                selectedWidget.notifications.length > 0 && (
                  <>
                    <h2 className="text-2xl font-semibold mt-6 text-green-600">
                      Notifications and Updates
                    </h2>
                    <div className=" ml-10 mt-2  text-gray-600">
                      {selectedWidget.notifications.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </div>
                  </>
                )}
              {/* Disclaimer */}
              {selectedWidget.notifications &&
                selectedWidget.notifications.length > 0 && (
                  <>
                    <h2 className="text-2xl font-semibold mt-6  text-green-600">
                      Disclaimer
                    </h2>
                    <div className="ml-10 mt-2  text-gray-600">
                      {selectedWidget.disclaimer.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </div>
                  </>
                )}
              {/* PrivacyAndSecurity */}
              {selectedWidget.PrivacyAndSecurity &&
                selectedWidget.PrivacyAndSecurity.length > 0 && (
                  <>
                    <h2 className="text-2xl font-semibold mt-6  text-green-600">
                      Privacy And Security
                    </h2>
                    <div className="ml-10 mt-2  text-gray-600">
                      {selectedWidget.PrivacyAndSecurity.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </div>
                  </>
                )}
              {/* termination */}

              <h2 className="text-2xl font-semibold mt-6  text-green-600">
                Termination
              </h2>
              <p
                className="mt-2  text-gray-600 font-semibold"
                style={{ color: "#1a1a1a" }}
              >
                LM Club reserves the right to terminate access to the{" "}
                {selectedWidget.name} Widget for:
              </p>
              <div className="ml-10 mt-2  text-gray-600">
                {selectedWidget.termination.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </div>

              <h2 className="font-semibold text-2xl mt-4 text-green-600">
                Amendments
              </h2>
              <p className="mt-2  text-gray-600">{selectedWidget.amendments}</p>

              <p className="mt-6  text-gray-600">
                {selectedWidget.confirmation}
              </p>

              <p className="mt-4  text-gray-600">{selectedWidget.support}</p>
            </div>
          </section>
        </div>
      ) : (
        <p className="text-center text-gray-600">No widget selected.</p>
      )}

      <Footer />
    </div>
  );
};

export default AllWidgetTsAndCs;
