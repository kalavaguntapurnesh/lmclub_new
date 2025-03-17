import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import LaptopRewards from "../assets/LaptopRewards.png";
import money from "../assets/money.svg";
import profit from "../assets/Profits.svg";
import RewardTwo from "../assets/RewardTwo.svg";
import WhatsApp from "../components/WhatsApp";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
const faqs = [
  {
    category: "1.General Questions",
    questions: [
      {
        question: "1.1 What is the Grow Rewards Widget?",
        answer:
          "The Grow Rewards Widget is a referral-based rewards program that allows users to earn points and achieve milestones by inviting others to join the LM Club. The more people you refer, the more rewards you can redeem.",
      },
      {
        question: "1.2 How does the referral program work?",
        answer:
          "When you invite someone using your unique referral link or code, and they successfully sign up, you earn reward points. You can accumulate these points to redeem exciting rewards such as gift cards, discounts, and exclusive offers.",
      },
      {
        question: "1.3 Who is eligible to participate in the Grow Rewards program?",
        answer:
          "Anyone with an LM Club account is eligible to participate in the program. There are no restrictions on location unless otherwise specified in the terms and conditions.",
      },
    ],
  },
  {
    category: "2.Earning Rewards & Points",
    questions: [
      {
        question: "2.1 How do I earn reward points?",
        answer: (
          <>
            <p>You can earn points by:</p>
            <ul className="list-disc pl-6">
              <li>Referring new users who successfully sign up.</li>
              <li>Completing special milestone achievements (e.g., referring 10 members).</li>
              <li>Participating in promotional bonus events.</li>
            </ul>
          </>
        ),
      },
      {
        question: "2.2 How many points do I earn per referral?",
        answer:
          "The standard point allocation per successful referral is X points. Bonus points may be awarded during promotional periods.",
      },
      {
        question: "2.3 What are milestone achievements?",
        answer:
          "Milestones are special achievements awarded when you reach a certain number of referrals. For example, every 10 successful referrals, you may receive bonus points and a trophy as recognition.",
      },
      {
        question: "2.4 Do my points expire?",
        answer:
          "Yes, reward points expire after 12 months if not redeemed. You will receive reminders when your points are about to expire.",
      },
      {
        question: "2.5 Can I earn points from multiple accounts?",
        answer:
          "No. Creating multiple accounts for self-referral is strictly prohibited. If detected, your points and eligibility for the rewards program may be revoked.",
      },
    ],
  },
  {
    category: "3.Referral Code & Tracking",
    questions: [
      {
        question: "3.1 Where can I find my referral code?",
        answer:
          "Your unique referral code is available in the LM Grow Rewards Dashboard. You can copy and share it with others.",
      },
      {
        question: "3.2 How do I share my referral link?",
        answer: (
          <>
            <p>You can share your referral link via:</p>
            <ul className="list-disc pl-6">
              <li>Social media (Facebook, Twitter, Instagram, LinkedIn, WhatsApp).</li>
              <li>Email and SMS invitations.</li>
              <li>QR code sharing.</li>
            </ul>
          </>
        ),
      },
      {
        question: "3.3 How can I track my referrals?",
        answer: (
          <>
            <p>You can track your successful and pending referrals in the Grow Rewards Dashboard, where you’ll see:</p>
            <ul className="list-disc pl-6">
              <li>The number of people who signed up using your referral code.</li>
              <li>Your earned points and available balance.</li>
              <li>Your progress toward milestones.</li>
            </ul>
          </>
        ),
      },
      
      {
        question: "3.4 Can I change my referral code?",
        answer:
          "No, referral codes are assigned permanently and cannot be changed.",
      },
      {
        question: "3.5 What happens if my referral forgets to enter my code?",
        answer:
          "Unfortunately, referrals must enter your code at the time of sign-up to be counted. If they forget, they will not be linked to your account.",
      },
    ],
  },
  {
    category: "4.Redeeming Rewards",
    questions: [
      {
        question: "4.1 How do I redeem my points?",
        answer: (
          <>
            <p>You can redeem your points by:</p>
            <ul className="list-disc pl-6">
              <li>Visiting the Rewards Store in your Grow Rewards Dashboard.</li>
              <li>Selecting an available reward.</li>
              <li>Confirming the redemption (points will be deducted from your balance).</li>
            </ul>
          </>
        ),
      },
      {
        question: "4.2 What kind of rewards can I get?",
        answer: (
          <>
            <p>Rewards may include:</p>
            <ul className="list-disc pl-6">
              <li>Gift cards (e.g., Amazon, Starbucks, etc.).</li>
              <li>Discount coupons for partner brands.</li>
              <li>Exclusive LM Club perks or merchandise.</li>
            </ul>
          </>
        ),
      },
      {
        question: "4.3 How long does it take to receive my reward?",
        answer: (
          <>
            <p><strong>Digital rewards (gift cards, coupons):</strong> Usually processed instantly or within 24 hours.</p>
            <p><strong>Physical rewards (merchandise, special gifts):</strong> Delivery may take 5-10 business days depending on location.</p>
          </>
        ),
      },
      {
        question: "4.4 Can I exchange or transfer my points?",
        answer: (
          <p>No, points cannot be transferred or exchanged between users. They can only be used by the account holder.</p>
        ),
      },
      {
        question: "4.5 What happens if a reward is out of stock?",
        answer: (
          <>
            <p>If a reward is out of stock, you can either:</p>
            <ul className="list-disc pl-6">
              <li>Wait for it to be restocked.</li>
              <li>Choose a different reward available in the Rewards Store.</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    category: "5.Troubleshooting & Support",
    questions: [
      {
        question: "5.1 My referral is not showing up. What should I do?",
        answer: (
          <>
            <p>If a referral is missing, check the following:</p>
            <ul className="list-disc pl-6">
              <li>Ensure your referral <strong>used your code/link at the time of sign-up</strong>.</li>
              <li>Ask your referral to <strong>confirm their account registration.</strong> </li>
              <li>Wait for <strong>up to 24 hours </strong> for the system to update.</li>
              <li>
                If the issue persists, report a <strong>Missing Referral</strong> ticket in the support section.
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "5.2 My points were not credited correctly. How do I fix this?",
        answer: (
          <>
            <p>If you believe your points were not credited:</p>
            <ul className="list-disc pl-6">
              <li>Check the <strong>Referral History</strong> in your dashboard.</li>
              <li>Confirm if the referred user <strong>successfully completed registration. </strong> </li>
              <li>If the issue remains, <strong>contact support </strong> with details.</li>
            </ul>
          </>
        ),
      },
      {
        question: "5.3 What if I accidentally redeemed the wrong reward?",
        answer: (
          <p>
            If you made an incorrect redemption,<strong> contact support within 24 hours</strong> to request cancellation.
            Approved cases will have points refunded.
          </p>
        ),
      },
      {
        question: "5.4 How can I reset my password?",
        answer: (
          <p>
            You can reset your password by clicking <strong>"Forgot Password"</strong> on the login page. A reset link will be sent
            to your registered email.
          </p>
        ),
      },
      {
        question: "5.5 How do I contact support?",
        answer: (
          <>
            <p>You can reach out through:</p>
            <ul className="list-disc pl-6">
              <li><strong>Live Chat:</strong> Available in the support section.</li>
              <li><strong>Email Support:</strong> <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a></li>
              <li><strong>Submit a Ticket:</strong> In the Help Center.</li>
              <li><strong>Call Helpline:</strong> +1-800-555-1234 (available during business hours).</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    category: "6.Security & Policy Questions",
    questions: [
      {
        question: "6.1 Can I refer myself using multiple accounts?",
        answer: (
          <p>
            No, self-referrals are against our policy. Any fraudulent activity may result in account suspension.
          </p>
        ),
      },
      {
        question: "6.2 What happens if I violate the referral program rules?",
        answer: (
          <>
            <p>If your account is flagged for <strong>fraudulent activities,</strong>including self-referrals or automated sign-ups:</p>
            <ul className="list-disc pl-6">
              <li>Your points may be forfeited</li>
              <li>Your referral eligibility may be revoked</li>
              <li>Your account may be permanently banned</li>
            </ul>
          </>
        ),
      },
      {
        question: "6.3 Is my personal information safe?",
        answer: (
          <p>
            Yes, LM Club follows strict <strong>data privacy policies</strong> to protect your information.
            We do not share your details with third parties without consent.
          </p>
        ),
      },
    ],
  },
  {
    category: "7.Special Promotions & Events",
    questions: [
      {
        question: "7.1 Are there bonus point promotions?",
        answer: (
          <p>
            Yes! We run <strong>seasonal promotions</strong> where you can earn <strong>extra points </strong>for referrals. 
            Keep an eye on <strong>email notifications</strong> or check your dashboard for active promotions.
          </p>
        ),
      },
      {
        question: "7.2 Can businesses participate in the referral program?",
        answer: (
          <p>
            At this time, the referral program is designed for individual users. 
            Businesses interested in partnerships should contact our support team.
          </p>
        ),
      },
      {
        question: "7.3 What happens if I reach a high referral milestone?",
        answer: (
          <>
            <p>Top referrers may be eligible for <strong>exclusive VIP perks</strong>, including:</p>
            <ul className="list-disc pl-6">
              <li>Special gifts.</li>
              <li>Early access to new LM Club features.</li>
              <li>Invitations to private events.</li>
            </ul>
          </>
        ),
      },
    ],
  },
];
const Grow = () => {
  const [openCategory, setOpenCategory] = useState(null);
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
                        LM CLUB GROW
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                      <h1>Welcome to LM Grow Rewards!</h1>
                    </div>

                    <div className="text-gray-600 space-y-2 md:text-start text-center">
                      <p>
                        The LM Grow Rewards program allows you to earn
                        redeemable points and achieve special milestones simply
                        by inviting others to join our community. Help us grow,
                        and in return, enjoy exclusive perks and rewards!
                      </p>
                      <p>
                        Keep track of your referrals in the LM Grow Rewards
                        dashboard. Each time you reach ten referrals, you’ll
                        earn extra points and a trophy to celebrate your
                        achievement.{" "}
                        <a
                          className="text-blue-500 underline cursor-pointer  hover:font-bold"
                          href={`/widget-terms-and-conditions/enroll`}
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
                        src={LaptopRewards}
                        className="rounded w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-20">
                  <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                      Key Features of the LM Club
                      <br className="lg:block hidden" /> Grow
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Receive bonus points and a trophy for every tenth member
                      you bring into the community and win exciting prizes,
                      discounts.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={RewardTwo}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Earn Reward Points
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Gain points each time someone joins the LM Club
                            using your referral link or code.
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
                            src={profit}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Trophy Achievement for Milestones
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            For every tenth referral, receive bonus points and a
                            prestigious trophy as a symbol of your dedication to
                            growing the community.
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
                            src={money}
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
                </div>

                <div className="w-full mx-auto max-w-[1400px] p-4">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="max-w-4xl mx-auto space-y-2">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <button
              className="w-full flex justify-between items-center text-left p-3 bg-gray-100 font-bold text-m rounded-md hover:bg-gray-200"
              onClick={() => setOpenCategory(openCategory === sectionIndex ? null : sectionIndex)}
            >
              {section.category}
              {openCategory === sectionIndex ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            {openCategory === sectionIndex && (
              <div className="mt-2 space-y-2 p-3 bg-gray-100 rounded-md">
                {section.questions.map((item, index) => (
                  <div key={index}>
                    <button
                      className="w-full flex justify-between items-center text-left p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                      onClick={() => setOpenQuestion(openQuestion === `${sectionIndex}-${index}` ? null : `${sectionIndex}-${index}`)}
                    >
                      {item.question}
                      {openQuestion === `${sectionIndex}-${index}` ? <FaAngleDown /> : <FaAngleRight />}
                    </button>
                    {openQuestion === `${sectionIndex}-${index}` && (
                      <p className="p-2 text-gray-600">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
     <h2 className="text-3xl text-center font-semibold mt-6 text-green-600">
                  Do's and Don’ts
                </h2>

                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border border-gray-300">
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
                            Use Your Unique Referral Code:
                          </span>{" "}
                          Share your personal referral link or code with others
                          to ensure your referrals are tracked accurately.
                        </td>
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Do Not Misrepresent LM Club:
                          </span>{" "}
                          Avoid providing false or misleading information about
                          LM Club or its benefits.
                        </td>
                      </tr>

                      <tr className="border border-gray-300">
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Promote Authentically:
                          </span>{" "}
                          Share your genuine experiences and benefits of the LM
                          Club to inspire others to join.
                        </td>
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Do Not Use Spam Tactics:
                          </span>{" "}
                          Refrain from mass emailing, unsolicited messaging, or
                          any form of spamming to share your referral link.
                        </td>
                      </tr>

                      <tr className="border border-gray-300">
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Track Your Progress:
                          </span>{" "}
                          Regularly monitor your referral count and milestones
                          in the LM Grow Rewards dashboard.
                        </td>
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Do Not Manipulate the System:
                          </span>{" "}
                          Fraudulent activities, such as creating fake accounts
                          or falsifying referrals, are strictly prohibited.
                        </td>
                      </tr>

                      <tr className="border border-gray-300">
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Redeem Points Promptly:
                          </span>{" "}
                          Redeem accumulated points for rewards through the
                          designated Rewards Store in your account.
                        </td>
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Do Not Share Unauthorized Content:
                          </span>{" "}
                          Avoid using copyrighted or unauthorized materials when
                          promoting LM Club.
                        </td>
                      </tr>

                      <tr className="border border-gray-300">
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Engage Respectfully:
                          </span>{" "}
                          Maintain respectful communication with potential
                          referrals and avoid pressure tactics.
                        </td>
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Do Not Engage in Harassment:
                          </span>{" "}
                          Refrain from aggressive or inappropriate behavior when
                          communicating with potential referrals.
                        </td>
                      </tr>

                      <tr className="border border-gray-300">
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Follow All Program Guidelines:
                          </span>{" "}
                          Adhere to the program rules and ensure your referrals
                          are genuine members.
                        </td>
                        <td className="p-3 border border-gray-300">
                          <span className="font-semibold text-gray-900">
                            Do Not Exploit Points:
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

      <Footer />
    </div>
  );
};

export default Grow;
