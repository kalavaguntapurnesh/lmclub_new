import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import LaptopBroadcast from "../assets/LaptopBroadcast.png";
import Check from "../assets/Check.svg";
import moneyTwo from "../assets/moneyTwo.svg";
import Business from "../assets/Business.svg";
import Reward from "../assets/Reward.svg";
import WhatsApp from "../components/WhatsApp";
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
const broadcastWidgetFaqs=[
  {question:"How do I unlock the Broadcast Widget?",answer:"You can unlock the Broadcast Widget by tapping the “Unlock Broadcast” button on your LM Club dashboard. You will need to provide your preferred contact information (email or phone number) and accept our terms and conditions to proceed."},
  {question:"How do I earn points with the Broadcast Widget?",answer:"You earn points by sharing promotions from local businesses on your social media. Each successful share that meets the promotion criteria and timing will earn you points redeemable at our rewards center."},
  {question:"What can I redeem my points for?",answer:"Points can be redeemed for a variety of rewards including gift cards, discounts, or exclusive offers from participating businesses. After redemption, your point balance will reset to zero."},
  {question:" How does the URL expiration work?",answer:"Broadcast URLs expire three minutes after they are posted to ensure promotions remain timely. To receive points, make sure to share each URL within 24 hours of receiving it. URLs shared after 24 hours will not count towards earning points."},
  {question:"What happens if I miss the expiration window for a URL?",answer:"If a URL is shared after the 24-hour limit or three minutes post-creation, it will not be eligible for points. We encourage users to share URLs as soon as they receive them to maximize their rewards."},
  {question:"How can I enroll a business in the Broadcast Widget?",answer:"To enroll a business, use the Handshake Button within the widget to fill out a marketing template. This generates a custom URL for the business’s promotions, which you can then share on your social media."},
  {question:"What are exclusive perks and how do I access them?",answer:"Exclusive perks include special offers like discounts and freebies provided by participating local businesses. These perks are available to members who actively promote their brands. Keep an eye on your notifications for new perks."},
  {question:"What should I do if I have trouble receiving or sharing URLs?",answer:"If you encounter any issues with receiving or sharing URLs, please contact our support team directly through the support link on our website or through the LM Club dashboard."},
  {question:"How often can I share URLs?",answer:"You can share as many URLs as you receive from LM Club. There is no limit to the number of URLs you can post, as long as each is shared within the stipulated time frame to earn points."},
  {question:"Are there any strategies for maximizing points with the Broadcast Widget? ",answer:"Yes, to maximize your points: Share URLs immediately upon receipt, regularly check your notifications for new broadcasts, and engage with the businesses to leverage additional perks."},
  {question:"Can I share a URL more than once to earn additional points?",answer:"No, each URL can only be shared once per user to earn points. Sharing the same URL multiple times will not accumulate additional points."},
  {question:"How do I check my current point balance?",answer:"	You can check your current point balance by accessing the “Rewards” section within your LM Club dashboard. This section provides a detailed view of your accumulated points and redemption options."},
  {question:"What types of rewards can I expect from the reward center?",answer:"Rewards can vary but typically include gift cards to popular retailers, discounts on services or products from local businesses, and exclusive promotional offers only available to LM Club members."},
  {question:"Are there any limitations on the types of businesses that can be promoted through Broadcast?",answer:"The Broadcast Widget is designed to support a wide range of local businesses. However, businesses that do not comply with our terms of service or those involved in unethical practices will not be eligible for promotion."},
  {question:"How can businesses benefit from being featured in Broadcast?",answer:"	Businesses gain increased visibility and customer engagement by being featured. They can reach a wider audience through the shared broadcasts, which can lead to increased sales and brand loyalty."},
  {question:"What is the process for a business to join the Broadcast Widget promotion list?",answer:"Businesses interested in joining the promotion list can apply through the LM Club website or directly contact our sales team for an enrollment form. They must meet certain criteria and agree to offer perks or discounts to our members."},
  {question:"How are disputes handled regarding points or rewards?",answer:"Disputes over points or rewards are handled by our support team. Users can submit a dispute form available in the dashboard, and our team will investigate and resolve the issue promptly."},
  {question:"Can I opt out of receiving Broadcast notifications?",answer:"Yes, you can opt out of receiving Broadcast notifications at any time through your dashboard settings. However, opting out may impact your ability to receive timely promotions and earn points."},
  {question:"What security measures are in place to protect my information when I participate in Broadcast?",answer:"We take your security seriously. All personal information is encrypted, and we implement strict data protection policies to ensure your information is safe from unauthorized access."},
  {question:"How often are new promotions available for sharing?",answer:"New promotions are typically available on a weekly basis, but the frequency can vary depending on the number of participating local businesses and their promotional activities."},
  {question:"What should I do if a broadcast URL is not working?",answer:"If you encounter a non-functional broadcast URL, please report it immediately using the 'Report Issue' button in your dashboard or contact our support team. We aim to resolve such issues promptly to ensure a smooth experience."},
  {question:"How do I know if a promotion has been successfully shared?",answer:"After sharing a promotion, you should receive a confirmation notification on your LM Club dashboard indicating that the share has been registered. Additionally, points corresponding to that promotion will be added to your account balance."},
  {question:"Can I suggest local businesses that I think should be part of Broadcast?",answer:"Absolutely! We encourage users to suggest local businesses that they'd like to see in our Broadcast Widget. Please use the 'Suggest a Business' feature in your dashboard or contact our customer service to submit a business for consideration."},
  {question:"What happens to my points if I decide to deactivate my LM Club account?",answer:"If you decide to deactivate your LM Club account, any unused points will be forfeited. We recommend redeeming any outstanding points before deactivating your account."},
  {question:"Are there any geographical restrictions on participating in Broadcast?",answer:"Currently, Broadcast is available to users in specified regions where LM Club operates. Please check our website or contact support to find out if your area is included."},
  {question:"How can I maximize the visibility of my shared promotions?",answer:"To maximize visibility, consider sharing promotions during peak social media hours, use engaging captions, and encourage your friends and followers to interact with the post. This can increase the reach and effectiveness of each promotion."},
  {question:"What measures are in place to ensure the fairness of the points system?",answer:"Our points system is monitored for fairness and accuracy with regular audits. We use sophisticated algorithms to track and validate shares and engagements to ensure that points are awarded justly and equitably."},
  {question:"Can I transfer points to another member?",answer:"Points are non-transferable between members to maintain the integrity of the rewards system. Points must be earned and redeemed by the same account holder."},
  {question:"How is the privacy of my shared information maintained when I use Broadcast?",answer:"Privacy is a top priority for us. Any information shared through Broadcast is protected by robust privacy policies and technology measures to prevent unauthorized access and ensure data integrity."},
  {question:"What should I do if I have feedback or suggestions for improving Broadcast?",answer:"We highly value user feedback and suggestions for improvement. Please submit your feedback through the 'Feedback' option in your dashboard or directly to our customer service team."},
  {question:"How often are the terms and conditions for Broadcast updated?",answer:"The terms and conditions for Broadcast are reviewed and updated periodically to reflect changes in legal regulations, operational practices, or corporate policies. Users will be notified of any significant changes and must agree to the updated terms to continue using the service."},
  {question:"Is there a limit to the number of businesses I can promote at one time?",answer:"No, there is no set limit to the number of businesses you can promote at one time. However, we recommend focusing on a manageable number of promotions to ensure quality and effective sharing."},
  {question:"How are businesses vetted before they are included in the Broadcast system?",answer:"Businesses are thoroughly vetted through a review of their market reputation, compliance with local business regulations, and the quality of their products or services. This ensures that only reputable businesses are promoted through Broadcast."},
  {question:"Can changes be made to a promotion once it has been broadcasted?",answer:"Once a promotion is broadcasted, it cannot be modified. Any necessary changes must be communicated and approved beforehand, requiring a new broadcast URL to be generated."},
  {question:"What types of promotions are most successful on Broadcast?",answer:"Promotions offering exclusive discounts, limited-time offers, or unique experiences tend to be the most successful, as they provide tangible benefits that encourage sharing and participation."},
  {question:"How can I ensure my social media posts are compliant with Broadcast's guidelines?",answer:"Ensure your posts are in line with Broadcast's content guidelines, which include maintaining a respectful and professional tone, not altering the promotional content, and adhering to any specific instructions for each promotion."},
  {question:"What should I do if I notice unethical behavior associated with a promotion?",answer:"Report any unethical behavior or concerns immediately through the 'Report Issue' feature in your dashboard or contact our customer support. We take such reports seriously and will investigate promptly."},
  {question:"Are there any seasonal promotions specific to certain times of the year?",answer:"Yes, Broadcast often features seasonal promotions tailored to holidays, special events, or consumer shopping periods. Keep an eye on your dashboard for these timely opportunities."},
  {question:"How does Broadcast handle data security for its users?",answer:"Broadcast employs advanced security measures, including encryption and secure server connections, to protect user data from unauthorized access and ensure data integrity."},
  {question:"What resources are available for new users to learn how to use Broadcast effectively?",answer:"New users can access a variety of resources, including tutorial videos, step-by-step guides, and live webinars, available through the LM Club website or directly within the Broadcast dashboard."},
  {question:"What happens if a promotion ends before I get a chance to share it?",answer:"If a promotion ends before you can share it, the URL will become inactive, and you will not be able to earn points from that specific broadcast. We recommend checking your notifications regularly to stay updated on promotion durations."},
  {question:"Can I participate in Broadcast from multiple devices?",answer:"Yes, you can access and participate in Broadcast from multiple devices as long as you log in with your registered LM Club account. This allows you to share promotions conveniently from your smartphone, tablet, or computer."},
  {question:"How does LM Club ensure the quality and relevance of the promotions offered?",answer:"LM Club collaborates closely with local businesses to curate promotions that are not only attractive but also relevant to our user base. We also continuously gather user feedback to adjust and improve the offerings."},
  {question:"Are there any performance metrics available for businesses participating in Broadcast?",answer:"Yes, participating businesses have access to performance metrics such as the number of shares, audience reach, and user engagement levels, which help them evaluate the effectiveness of their promotions."},
  {question:"What happens if I share a URL but do not see my points updated immediately?",answer:"There might be a slight delay in points updating due to system processing. If your points do not appear within 24 hours, please contact our support team for assistance."},
  {question:"Can I delete a promotion from my dashboard if I decide not to share it?",answer:"Yes, you can remove any promotion from your dashboard if you decide not to share it. This action will not affect your points balance but will help keep your dashboard organized."},
  {question:"How do I report a problem with a specific promotion or business?",answer:"Problems with specific promotions or businesses can be reported directly through the 'Report Issue' option in the widget or by contacting customer support with details of the issue."},
  {question:"What training or support does LM Club offer to new businesses joining Broadcast?",answer:"LM Club offers comprehensive training sessions and support materials to new businesses, including best practices on creating engaging promotions and understanding the analytics provided by our platform."},
  {question:"How can I suggest improvements or new features for the Broadcast widget?",answer:"We welcome suggestions for improvements or new features via the 'Feedback' option in your user dashboard, or you can directly contact our product development team via email."},
  {question:"What measures are taken to prevent spamming by users in the Broadcast system?",answer:"LM Club has strict policies against spamming. Users must adhere to guidelines that prevent excessive posting and ensure quality engagements. Violations can result in suspension or termination of membership."},
  {question:"How are the redeemable points calculated for each promotion shared?",answer:"Points are calculated based on several factors, including the type of promotion, the reach of your share, and the engagement it generates. Specific point values for different types of promotions are detailed in your dashboard under the 'Point System' section."},
  {question:"Is there a maximum number of points I can earn in a month?",answer:"There is no maximum limit to the points you can earn in a month. The more promotions you share that comply with the terms, the more points you can accumulate."},
  {question:"Can I see a history of all the promotions I've shared?",answer:"Yes, your LM Club dashboard provides a history section where you can view all the promotions you have shared, along with the points earned from each promotion."},
  {question:"Are there specific times when new promotions are released?",answer:"New promotions are typically released at the beginning of each week, but this can vary depending on the business and promotional strategy. Regular updates are sent to users via email or notifications within the app."},
  {question:"What if I encounter a technical glitch while sharing a promotion?",answer:"If you encounter a technical issue, please report it immediately using the technical support contact options available on your dashboard. Our team will work to resolve the issue as quickly as possible to ensure a smooth user experience."},
  {question:"How can I ensure that my shared promotions are seen by the maximum number of people?",answer:"To maximize visibility, consider sharing during peak user activity times on social media, using engaging and relevant hashtags, and encouraging interactions such as likes, comments, and shares from your followers."},
  {question:"What is LM Club's policy on data privacy for shared promotions?",answer:"LM Club adheres to strict data privacy laws and regulations. We do not share your personal data with third parties without your consent, and we ensure that all promotional data is handled with the highest level of security and confidentiality."},
  {question:"How can I withdraw from a promotion after agreeing to participate?",answer:"If you wish to withdraw from a promotion, you can do so by selecting the ‘Withdraw’ option in the promotion details on your dashboard. This will remove the promotion from your active list and no points will be awarded."},
  {question:"What are the consequences of not following the terms and conditions of the Broadcast Widget?",answer:"Failure to adhere to the terms and conditions may result in suspension of your account, forfeiture of accumulated points, and potential legal action if the breach involves serious violations."},
  {question:"How is feedback from users incorporated into improving the Broadcast Widget?",answer:"User feedback is highly valued and regularly reviewed by our development team. We incorporate this feedback into continuous updates and improvements to the Broadcast Widget, aiming to enhance user experience and satisfaction."},
];
const Broadcast = () => {
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
                        LM CLUB Broadcast
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                      <h1>Welcome to the LM Club Broadcast Widget!</h1>
                    </div>

                    <div className="text-gray-600 space-y-2 md:text-start text-center">
                      <p>
                        Unlock Broadcast to start earning points by sharing
                        promotions from local businesses on your social media.
                        Each time you share, you’ll earn points redeemable in
                        our rewards center. It’s a win-win: you help promote
                        local businesses, and we reward you for it!
                      </p>
                      <p>
                        Easily enroll businesses with a marketing fillable
                        template that generates a custom URL for their
                        promotions.{" "}
                        <a
                          className="text-blue-500 underline cursor-pointer  hover:font-bold"
                          href={`/widget-terms-and-conditions/broadcast`}
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
                        src={LaptopBroadcast}
                        className="rounded w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-20">
                  <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                      Key Features of the LM Club
                      <br className="lg:block hidden" /> Broadcast
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Gain access to exclusive perks from participating local
                      businesses while benefiting from LM Club rewards
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

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-16">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="image"
                      className="rounded"
                    />
                  </div>

                  <div className="flex justify-center items-center lg:px-4">
                    <div className="space-y-2">
                      <h1 className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                        Build on trust, driven by excellence.
                      </h1>
                      <p className="text-gray-600">
                        Stay updated on new broadcasts so you don’t miss any
                        opportunities to earn points and perks.
                      </p>

                      <div className="pt-8 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Check Notifications Regularly</span>
                        </p>
                        <p className="lg:ml-10">
                          Stay updated on new broadcasts so you don’t miss any
                          opportunities to earn points and perks.
                        </p>
                      </div>

                      <div className="pt-4 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Broadcast URL with Expiration</span>
                        </p>
                        <p className="lg:ml-10">
                          Once you receive the URL, post it immediately. Be sure
                          to post within 24 hours of receiving the URL.
                        </p>
                      </div>

                      <div className="pt-4 space-y-1">
                        <p className="flex flex-row items-center text-xl font-bold text-[#1a1a1a] space-x-3">
                          <img src={Check} alt="check" className="w-6 h-6" />
                          <span>Engage with Businesses</span>
                        </p>
                        <p className="lg:ml-10">
                          Take advantage of special perks from local businesses
                          to get the most out of the program.
                        </p>
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
                                    {broadcastWidgetFaqs.map((item, index) => (
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
                  
                  <h3 className="text-3xl text-center font-semibold mt-4 text-green-600 p-6">
                    Do’s and Don’ts
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 mt-4">
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
                        <tr className="border border-gray-300">
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Share Authorized Promotions:
                            </span>{" "}
                            Only share broadcast URLs provided through the LM
                            Club platform.
                          </td>
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Do Not Share Unauthorized Links:
                            </span>{" "}
                            Avoid sharing non-validated links or promotions that
                            have not been provided by LM Club.
                          </td>
                        </tr>

                        <tr className="border border-gray-300">
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Use Social Media Responsibly:
                            </span>{" "}
                            Post promotions on your social media accounts in
                            accordance with the platform’s terms of service.
                          </td>
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Do Not Misrepresent Promotions:
                            </span>{" "}
                            Ensure the accuracy and authenticity of the
                            promotional information you share.
                          </td>
                        </tr>

                        <tr className="border border-gray-300">
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Ensure Visibility:
                            </span>{" "}
                            Verify that your social media posts are public or
                            visible to your intended audience for proper
                            tracking.
                          </td>
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Do Not Spam:
                            </span>{" "}
                            Avoid spamming promotional URLs on social media,
                            including repeated postings or sending unsolicited
                            messages.
                          </td>
                        </tr>

                        <tr className="border border-gray-300">
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Track Your Progress:
                            </span>{" "}
                            Monitor your shared promotions and earned points in
                            the LM Broadcast Rewards dashboard.
                          </td>
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Do Not Manipulate Points:
                            </span>{" "}
                            Fraudulent activities, such as creating fake social
                            media accounts or posts, are strictly prohibited.
                          </td>
                        </tr>

                        <tr className="border border-gray-300">
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Redeem Points Promptly:
                            </span>{" "}
                            Use accumulated points to redeem rewards through the
                            designated Rewards Store in your account.
                          </td>
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Do Not Use Offensive Content:
                            </span>{" "}
                            Ensure your social media posts are free from
                            offensive language, imagery, or behavior.
                          </td>
                        </tr>

                        <tr className="border border-gray-300">
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Engage Positively:
                            </span>{" "}
                            Promote local businesses in a manner that reflects
                            positively on LM Club and its partners.
                          </td>
                          <td className="p-3 border border-gray-300">
                            <span className="font-semibold text-gray-900">
                              Do Not Exploit Rewards:
                            </span>{" "}
                            Points must be earned and redeemed according to
                            program rules and cannot be exchanged for cash or
                            transferred to others.
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
      </div>

      <Footer />
    </div>
  );
};

export default Broadcast;
