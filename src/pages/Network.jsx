import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import WhatsApp from "../components/WhatsApp";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import LaptopNetwork from "../assets/LaptopNetwork.png";
import Directory from "../assets/Directory.svg";
import SupportTwo from "../assets/SupportTwo.svg";
import Events from "../assets/Events.svg";
import connection from "../assets/connection.svg";
import { useState } from "react";
const networkWidgetFaqs = [
  { question: "What is the LM Club Network Widget?", answer: "The LM Club Network Widget is a tool designed to enhance your membership experience by connecting you to fellow club members, updating you on club events, and providing easy access to exclusive resources directly from your dashboard." },
  { question: "How can I use the Member Directory effectively?", answer: "You can use the Member Directory to find and connect with other club members who share similar interests or professional goals. Simply search by name, expertise, or interests to initiate connections." },
  { question: "What should I include in my profile on the widget?", answer: "Your profile should include a clear profile picture, a list of your interests, and a summary of your professional background. This information helps other members understand who you are and how you might connect based on shared interests or professional fields." },
  { question: "How do I RSVP to club events through the widget?", answer: "Navigate to the Events Section, where you can view all upcoming events. You can RSVP directly from this section and also add the events to your personal calendar with a single click." },
  { question: "Can I start a private chat with another member?", answer: "Yes, the Messaging and Chats feature allows you to start private conversations with any club member. You can also join or create public discussion groups." },
  { question: "How do I join a Community Group?", answer: "In the Community Groups section, you can browse through different interest-based groups. Join any group that aligns with your interests to participate in discussions, share resources, and get updates on related events." },
  { question: "How often should I update my profile?", answer: "It’s a good practice to update your profile whenever there are significant changes to your professional life or when you want to adjust the interests displayed to attract more relevant connections." },
  { question: "What are the benefits of attending club events?", answer: "Attending events not only helps in building a stronger network but also provides opportunities to engage directly with peers, share knowledge, and participate in discussions that can foster professional and personal growth." },
  { question: "What should I do if I encounter issues with the widget?", answer: "If you experience any difficulties, you can consult the FAQ section for troubleshooting tips. For more complex issues or immediate assistance, contact our support team using the provided link or call us at (678) 200-4524." },
  { question: "How can I make the most out of the LM Club Network Widget?", answer: "Regularly update your profile, engage actively in discussions and community groups, attend club events, and use the directory and messaging features to expand and strengthen your professional network." },
  { question: "How can I add an event to my personal calendar?", answer: "After you RSVP to an event in the Events Section, you will have the option to add the event to your personal calendar. Simply click on the 'Add to Calendar' button, and follow the prompts to sync the event with your preferred calendar app." },
  { question: "Is my personal information secure in the LM Club Network Widget?", answer: "Yes, we prioritize the security of our members' information. The widget uses advanced security measures to protect your data and ensures that your personal information is only visible to other club members according to the privacy settings you choose." },
  {question:"Can I customize my notifications for club updates and messages?",answer:"Yes, you can customize your notification settings to receive updates about club events, new messages, or new posts in community groups. You can adjust these settings in your profile to receive notifications via email, SMS, or through the widget directly."},
  { question: "What are the guidelines for participating in  community discussions?", answer: "We encourage respectful and constructive dialogue in community discussions. Please adhere to our community guidelines, which prohibit offensive language, personal attacks, and spam. These guidelines help maintain a welcoming and productive environment for all members." },
  { question: "How do I report a problem or suggest improvements for a widget?", answer: "If you encounter any issues or have suggestions for improving the widget, you can contact our support team through the 'Contact Support' link or call directly at (678) 200-4524. We welcome feedback and aim to continuously improve the user experience." },
  { question: "What types of events can I expect to find on the widget?", answer: "The widget features a variety of events, including professional development workshops, networking meetups, guest speaker sessions, and social gatherings. Events are designed to cater to a wide range of interests and professional needs within the club." },
  { question: "How do I search for members with specific expertise or interests?", answer: "Use the search function in the Member Directory to filter members by their listed expertise or interests. This feature allows you to tailor your networking efforts and connect with members whose profiles align closely with your professional goals or personal interests." },
  { question: "Can I see who has viewed my profile?", answer: "Currently, the widget does not provide functionality to see who has viewed your profile. This helps maintain privacy and encourages more genuine connections based on active engagements rather than passive browsing." },
  { question: "What happens if I miss an RSVP for an event?", answer: "If you miss an RSVP but still wish to attend, you can check the event's availability for late registrations directly through the Events Section. Some events may allow on-site registration, depending on the nature and capacity of the event." },
  { question: "How can I maximize my visibility within the club using the widget?", answer: "To maximize your visibility, actively participate in discussions, regularly update your profile with current information and achievements, engage with other members' posts, and consistently attend club events. Additionally, volunteering to lead or organize events can also significantly enhance your visibility and reputation within the club." },
  { question: "How do I deactivate or delete my LM Club account?", answer: "If you wish to deactivate or delete your account, please navigate to the settings section of your profile where you will find options to either temporarily deactivate or permanently delete your account. For detailed instructions or assistance, contact our support team" },
  { question: "Can I customize the widget interface of the widget?", answer: "The current version of the widget offers limited customization options for the interface. You can adjust themes and notification settings. We plan to introduce more customizable features in future updates to enhance user experience." },
  { question: "What should I do if I receive unwanted messages from another member?", answer: "If you receive unwanted messages, you can block the member from further contact or report the behavior to our support team through the 'Contact Support' link. We are committed to maintaining a safe and respectful networking environment." },
  { question: "How are interest groups in the widget organized?", answer: "Interest groups are organized based on professional fields and personal interests such as technology, marketing, outdoor activities, and more. Members can join existing groups or request to create new ones by submitting a proposal to the club administrators." },
  { question: "Is there a limit to how many people I can message at once?", answer: "To ensure quality communication and avoid spam, the widget limits the number of people you can message simultaneously. For large-scale communications, consider using community groups or event announcements." },
  { question: "How do I contribute to or moderate a community group?", answer: "To contribute, simply join a group and start participating in discussions or sharing resources. If you are interested in moderating a group, you can apply via the group settings or contact a current moderator for more information on the process." },
  { question: "Are there any resources available for new users to learn how to use the widget?", answer: "Yes, new users can access a series of tutorial videos and step-by-step guides available in the Help Section of the widget. These resources cover everything from setting up your profile to advanced features like organizing community events." },
  { question: "Can I recover a deleted message or conversation?", answer: "Once a message or conversation is deleted, it cannot typically be recovered due to privacy and security policies. We recommend archiving important conversations instead of deleting them if you might need to access them later." },
  { question: "What is the policy on sharing external content in community groups?", answer: "Members are encouraged to share relevant external content that adds value to discussions. However, all shared content must comply with copyright laws and our community guidelines, which prohibit inappropriate or offensive material." },
  { question: " How can I ensure that I am notified about updates or changes to the widget?", answer: "To ensure you are up-to-date with all updates or changes, keep your notification settings configured to receive announcements from the club. These notifications can be received through emails, direct messages, or push notifications, depending on your preferences." },
  { question: "How can I find events that fit my schedule?", answer: "Use the filter options in the Events Section to sort events by date, time, or type. This allows you to easily find events that match your availability and interests." },
  {question:"What is the process for submitting feedback about the widget?",answer:"Feedback can be submitted directly through the 'Feedback' option in the widget's menu. We encourage members to provide both positive feedback and constructive criticisms to help us improve the widget."},
  {question:"How do I set privacy settings on my profile?",answer:"Navigate to the privacy settings in your account settings where you can control who sees your profile information, posts, and activities. You can choose from public, members only, or custom privacy settings."},
  {question:"Are there any rules for posting in the community discussions?",answer:"Yes, posts should be respectful, relevant, and constructive. Avoid offensive language, spam, and off-topic discussions. Ensure that all posts comply with the club's posting guidelines to maintain a professional and respectful environment."},
  {question:"Can I organize an event through the widget?",answer:"Members who wish to organize events can submit a proposal through the Events Section. All event proposals are subject to approval by club administrators to ensure they align with club standards and member interests."},
  {question:" What happens if I forget my login information?",answer:"You can reset your password using the 'Forgot Password' link on the login page. For other login issues, contact our support team for assistance in regaining access to your account."},
  {question:"How are new features added to the widget?",answer:"New features are developed based on member feedback and technological advancements. Updates and new features are tested and rolled out periodically to enhance functionality and user experience."},
  {question:"Is there a way to promote my business or services within the club through the widget?",answer:"Members can promote their business in designated areas such as the business directory or during specific networking events. Make sure to adhere to the club’s promotional policies to ensure appropriate and respectful promotion."},
  {question:"How do I unsubscribe from certain notifications?",answer:"You can customize which notifications you receive by adjusting your notification settings in your profile. This includes options to unsubscribe from event alerts, group messages, or general updates."},
  {question:"What should I do if I see someone violating the community guidelines?",answer:"Report any violations of the community guidelines directly through the widget's reporting feature or by contacting the club administrators. We take violations seriously to maintain a safe and professional environment."},
];

const Network = () => {
  // const [openCategory, setOpenCategory] = useState(null);
    const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />

      <div className="lg:pt-36 pt-24">
        <div className="w-full max-w-[1400px] mx-auto p-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col space-y-3 w-full">
              <div className="flex items-center md:justify-start justify-center">
                <div className="h-4 w-1 bg-green-500"></div>
                <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                  LM CLUB Network
                </h1>
              </div>
              <h1 className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                Welcome to the LM Club Network Widget!
              </h1>
              <p className="text-gray-600 space-y-2 md:text-start text-center">
                This widget guides your journey and connects you to fellow club members, events, and exclusive resources right from your dashboard.
                Provides interest-based groups where members can collaborate and discuss specific topics. Join groups that match your interests to share
                resources, insights, and event updates.
                <a
                  className="text-blue-500 underline cursor-pointer hover:font-bold"
                  href="/widget-terms-and-conditions/network"
                >
                  Please read Terms and conditions.
                </a>
              </p>
              <div className="pt-4 flex lg:justify-start justify-center flex-row gap-4">
                <a
                  href="/pricing"
                  className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                >
                  <span className="relative flex-[8] text-center">Learn More</span>
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                    <TiArrowRight className=" text-lg" />
                  </span>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center lg:pt-0 pt-4">
              <img src={LaptopNetwork} className="rounded w-auto h-auto" alt="Laptop Network" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-20">
            <h2 className="lg:text-4xl text-2xl font-bold text-trumpTwo">Key Features of the LM Club Network</h2>
            <p className="text-gray-600">
              Browse the member directory to find connections and start building your LM Club network. RSVP to Events Check out the upcoming events and add them to your calendar.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
            {[Directory, Events, SupportTwo, connection].map((icon, index) => (
              <div key={index} className="flex md:justify-start justify-center">
                <div className="w-full bg-white rounded p-6">
                  <img src={icon} className="w-12 h-12" alt="Feature Icon" />
                  <h1 className="text-2xl text-trumpTwo font-bold text-start">
                    {index === 0 && "Member Directory"}
                    {index === 1 && "Events Section"}
                    {index === 2 && "Messaging and Chats"}
                    {index === 3 && "Community Groups"}
                  </h1>
                  <p className="text-gray-600">
                    {index === 0 && "Lists all LM Club members available for networking."}
                    {index === 1 && "Shows upcoming club events and RSVP options."}
                    {index === 2 && "Enables direct messaging and group chats within the club."}
                    {index === 3 && "Provides interest-based groups where members can collaborate and discuss specific topics."}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full mx-auto max-w-[1400px] p-4 mt-10">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                  Frequently Asked Questions (FAQ)
                </h2>
                <div className="max-w-4xl mx-auto space-y-2">
                  {networkWidgetFaqs.map((item, index) => (
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

          <div className="overflow-x-auto mt-6">
            <h2 className="text-3xl text-center font-semibold text-green-600">Do's and Don’ts</h2>
            <table className="min-w-full border border-gray-300 mt-4">
              <thead>
                <tr className="bg-green-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-green-600 text-xl">Do’s</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-green-600 text-xl">Don’ts</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["Complete Your Profile", "Do Not Spam"],
                  ["Engage Respectfully", "Do Not Share Inappropriate Content"],
                  ["Join Community Groups", "Do Not Misuse Information"],
                  ["RSVP to Events", "Do Not Advertise Without Permission"],
                  ["Use Messaging Responsibly", "Do Not Engage in Harassment"],
                  ["Stay Updated", "Do Not Share False Information"],
                ].map(([doText, dontText], index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="p-3 border border-gray-300">
                      <span className="font-semibold text-gray-900">{doText}:</span> Description here.
                    </td>
                    <td className="p-3 border border-gray-300">
                      <span className="font-semibold text-gray-900">{dontText}:</span> Description here.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Network;