import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import LaptopBeehive from "../assets/LaptopBeehive.png";
import lity from "../assets/lity.svg";
import moneyTwo from "../assets/moneyTwo.svg";
import Business from "../assets/Business.svg";
import Reward from "../assets/Reward.svg";
import WhatsApp from "../components/WhatsApp";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
const beehiveWidgetFaqs=[
  { question: "What is the LM Club Beehive widget?", answer: "The LM Club Beehive widget is an interactive feature within the LM Club App that allows members to earn points by sharing and accessing exclusive deals, coupons, and community-shared updates. Members can redeem points for gift cards and enjoy special offers from local businesses." },
  { question: "How do I unlock the Beehive widget?", answer: "To unlock the Beehive widget, tap the Unlock Beehive button on your LM Club App dashboard, agree to the Terms & Conditions, and then tap to unlock." },
  { question: "Is there a cost to use the Beehive widget?", answer: "No, accessing and using the Beehive widget is free for all LM Club members as part of their membership benefits."},
  { question: "How do I post a deal on Beehive?", answer: "Go to the Beehive section in the app, click 'Add Post', select the relevant category, fill in the necessary details like post name and description, and optionally upload images or videos. Finally, click 'Create' to submit your post for review." },
  { question: "How are points calculated when I share a deal?", answer: "Points are awarded based on several factors including the engagement your post receives (like the number of likes), the uniqueness of the deal, and your membership level. More engagement and higher membership levels yield more points."},
  { question: "How can I redeem the points I earn on Beehive?", answer: "Points can be redeemed through the LM Club App by accessing the ‘Redeem Points’ section. You can exchange points for gift cards or special offers as available." },
  { question: "How can I customize notifications I receive from Beehive?", answer: "You can customize your notifications by accessing the settings section in the Beehive widget. Here, you can adjust the filters to receive alerts for specific types of deals and information that interest you most."},
  { question: "I'm not receiving notifications, what should I do?", answer:"Ensure that your app notifications are enabled in both the LM Club App and your device's settings. If issues persist, contact support for further assistance." },
  { question: "What should I do if I cannot unlock the Beehive widget?", answer: "Make sure your app is updated to the latest version. If the problem continues, restart your app or device and try again. For persistent issues, contact our support team."  },
  { question: "My post was not approved, why?", answer: "Posts may not be approved if they fail to meet community guidelines, such as promoting inappropriate content or not adhering to the terms of deal postings. Review the guidelines in the Terms & Conditions or contact support for specific feedback." },
  { question: "How can I contact support if I need help?", answer:"For any assistance, you can contact our support team directly through the app by navigating to the 'Contact Support' section, where you can send a message or call for help." },
  { question: "Where can I find more information about using Beehive?", answer:"Additional information, including detailed user guides and tips, is available under the 'Learn More' section in the Beehive widget of your LM Club App."   },
  { question: "How can I see the deals shared by others on Beehive?", answer: "You can view deals shared by others by navigating to the 'View Post' section in the Beehive widget. Here, you can browse through different categories or use the search feature to find specific types of deals."},
  { question: "What are the benefits of liking or commenting on a post?", answer:"Engaging with posts by liking or commenting not only supports other community members but also enhances your visibility and activity within the community, which can contribute to earning more points."   },
  { question: "Can I share a deal I found on Beehive with someone not in the LM Club?", answer: "Sharing deals outside the LM Club is typically restricted to ensure exclusivity for members. However, specific deals may have different sharing policies, which are detailed within the post." },
  { question: "What should I do if the app crashes while I’m using Beehive?", answer:"If the app crashes, try restarting the app and ensure your device's operating system is up-to-date. If the problem persists, uninstall and reinstall the app, or contact our technical support for help."  },
  { question: "How do I report a problem or a bug within the Beehive widget?", answer: "To report a technical issue or bug, use the 'Report a Problem' feature in the app settings or contact support with a detailed description of the issue, including screenshots if possible."  },
  { question: "Are there any specific membership requirements to access Beehive?", answer:  "Beehive is available to all LM Club members, but certain features and the number of points that can be earned may vary by membership level."},
  { question: "What happens to my points if I cancel my LM Club membership?", answer: "Points typically expire when a membership is canceled. It's recommended to redeem any accumulated points before canceling your membership."},
  { question: "How often do the Terms & Conditions for Beehive get updated?", answer: "The Terms & Conditions may be updated periodically to reflect changes in policies or the operational aspects of the widget. Members will be notified of any significant changes through email or app notifications." },
  { question: "How can I maximize the visibility of my posts on Beehive?", answer:"To maximize visibility, ensure your posts are compelling, include high-quality images or videos, and use relevant keywords and categories. Posting during high-activity hours can also increase engagement."   },
  { question: "What types of deals are most popular on Beehive?", answer:"Deals offering substantial discounts, unique experiences, or popular items tend to attract more attention and engagement from the community."  },
  { question: "How can I keep track of my favorite types of deals on Beehive?", answer: "You can bookmark deals or set up personalized alerts for your favorite types of deals through the notification settings in the Beehive widget." },
  { question: "Can I edit a post after it has been published on Beehive?", answer: "Yes, you can edit your posts after they have been published. Simply go to your post, select the 'Edit' option, make the necessary changes, and resubmit it for approval." },
  { question: "What should I do if I see inappropriate content in a post?", answer: "If you encounter inappropriate content, please use the 'Report' feature on the post to alert our moderation team, who will review the content and take appropriate action." },
  { question: "Are there any restrictions on the types of deals I can post on Beehive?", answer: "Yes, all deals must comply with LM Club's community guidelines, which prohibit illegal, offensive, or harmful content. Deals should be relevant to the community and provide genuine value." },
  { question: "How can I update my email or contact information in Beehive?", answer: "To update your contact information, navigate to the 'Settings' section of your LM Club App, where you can update your email and other personal details." },
  { question: "What security measures are in place to protect my personal information on Beehive?", answer: "Beehive employs robust security measures including data encryption, secure server connections, and compliance with privacy laws to protect your personal information." },
  { question: "Can I deactivate my Beehive widget without affecting my LM Club membership?", answer: "Yes, you can deactivate the Beehive widget independently of your LM Club membership by adjusting your settings in the app. This action will not affect your overall membership status." },
  { question: "What types of rewards can I redeem with my points on Beehive?", answer: "You can redeem your points for a variety of rewards, including gift cards, exclusive deals, and special promotions from our business partners." },
  { question: "Is there a limit to how many points I can earn on Beehive?", answer: "There is no cap on the number of points you can earn; however, the rate at which you earn points may vary based on promotional activities and changes to policy." },
  { question: "How long do points remain valid on my Beehive account?", answer: "Points typically remain valid for one year from the date they are earned. Be sure to check the specific terms and conditions for any changes to this policy." },
  { question: "Does Beehive offer any features to make it more accessible for users with disabilities?", answer: "Beehive is designed with accessibility in mind, featuring options for text enlargement, voice commands, and screen reader compatibility to ensure all members can navigate and use the widget effectively." },
  { question: "Can I access Beehive from multiple devices?", answer: "Yes, you can access Beehive from multiple devices as long as you are logged into your LM Club account. Your data and points will synchronize across all devices." },
  { question: "Are there tutorials available to help new users understand how to use Beehive effectively?", answer: "Yes, Beehive provides a range of tutorials and step-by-step guides available within the app to help new users familiarize themselves with all features and functionalities." },
];
const Estore = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />

      <div className="lg:pt-36 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-green-500"></div>
                      <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                        LM CLUB Beehive
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                      <h1>LM Club Beehive Widget Onboarding Guide</h1>
                    </div>

                    <div className="text-gray-600 space-y-2 md:text-start text-center">
                      <p>
                        Beehive allows you to start earning redeemable points by
                        sharing deals, coupons, and information you've
                        discovered. Plus, receive exclusive offers and updates
                        shared by other members. Connect with your community and
                        enjoy unique deals from local restaurants, hotels,
                        retailers, and more! .{" "}
                        <a
                          className="text-blue-500 underline cursor-pointer  hover:font-bold"
                          href={`/widget-terms-and-conditions/beehive`}
                        >
                          Please read Terms and conditions.
                        </a>
                      </p>
                    </div>

                    <div className="pt-4 flex lg:justify-start justify-center flex-row gap-4">
                      <a
                        href="/pricing"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                      >
                        <span className="relative flex-[8] text-center">
                          Learn More
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <TiArrowRight className=" text-lg" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center items-center lg:pt-0 pt-4">
                    <div>
                      <img
                        src={LaptopBeehive}
                        className="rounded w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-20">
                  <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                      Key Features of the LM Club
                      <br className="lg:block hidden" /> Beehive
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Unlock Broadcast to start earning points by sharing
                      promotions from local businesses on your social media.
                      Each time you share, you’ll earn points redeemable in our
                      rewards center.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={Business}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Promote a Business
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Easily enroll businesses with a marketing fillable
                            template that generates a custom URL for their
                            promotions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={Reward}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Redeeming Reward Points
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Accumulate points and redeem them for rewards such
                            as gift cards, discounts, or exclusive offers. Once
                            points have been redeemed the accumulated points
                            reset to Zero.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={moneyTwo}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Exclusive Perks from Local Businesses
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Some participating businesses offer additional perks
                            to members who help promote their brand.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                   <div className="w-full mx-auto max-w-[1400px] p-4 mt-10">
                        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                          Frequently Asked Questions (FAQ)
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-2">
                          {beehiveWidgetFaqs.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 pb-2">
                              <button
                                className="w-full flex justify-between items-center text-left p-3 bg-gray-100 font-medium text-m rounded-md hover:bg-gray-200"
                                onClick={() =>
                                  setOpenQuestion(openQuestion === index ? null : index)
                                }
                              >
                                {item.question}
                                {openQuestion === index ? <FaAngleDown /> : <FaAngleRight />}
                              </button>
                              {openQuestion === index && (
                                <p className="mt-2 p-3 text-gray-600 bg-gray-100 rounded-md">
                                  {item.answer}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                  <h2 className="text-3xl text-center font-semibold mt-6 text-green-600 pt-6">
                    Do's and Don’ts
                  </h2>
                  <table className="w-full border-collapse border border-gray-300 mt-6">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 px-4 py-2 text-left text-green-600 text-xl">
                          Do’s
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-green-600 text-xl">
                          Don’ts
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Share Authentic Information:
                          </span>{" "}
                          Ensure that the deals, coupons, or information you
                          share are accurate and valid.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Do Not Share Misleading Content:
                          </span>{" "}
                          Refrain from posting false or outdated deals, coupons,
                          or offers.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Respect Community Guidelines:
                          </span>{" "}
                          Engage respectfully with other members, maintaining a
                          positive and constructive tone.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Do Not Engage in Inappropriate Behavior:
                          </span>{" "}
                          Avoid offensive language, spamming, or harassing other
                          members.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Redeem Points Responsibly:
                          </span>{" "}
                          Redeem accumulated points for rewards such as gift
                          cards or discounts through authorized channels.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Do Not Exploit the System:
                          </span>{" "}
                          Attempting to manipulate or exploit the points system
                          is strictly prohibited.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Keep Contact Information Updated:
                          </span>{" "}
                          Ensure your phone number or email address is current
                          for receiving updates and notifications.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Do Not Share Unauthorized Content:
                          </span>{" "}
                          Only share deals or information you are authorized to
                          post.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Report Issues:
                          </span>{" "}
                          Notify LM Club support if you encounter invalid deals,
                          inappropriate content, or technical issues.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Do Not Violate Privacy:
                          </span>{" "}
                          Avoid sharing private information about businesses,
                          members, or third parties without consent.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Follow Activation Steps:
                          </span>{" "}
                          Complete all onboarding steps, including reviewing and
                          accepting these Terms and Conditions.
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <span className="font-semibold text-black">
                            Do Not Use the Platform for Illegal Activities:
                          </span>{" "}
                          The Beehive Widget must not be used for any unlawful
                          purposes.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Estore;
