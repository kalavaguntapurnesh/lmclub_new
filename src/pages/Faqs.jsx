import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";
import Accordion from "../components/Accordion";

const membershipFaqs = [
    {
      question: "As a new member, what are my membership options?",
      answer:
        "When you're logged into your LM Club account and book a pre-priced project, your 20% discount is automatically applied at checkout. If you're not logged in and are booking a fixed price project, you will be prompted to log in with your email at checkout.",
    },
    {
      question: "How do I cancel my Silver or Gold or Platinum membership?",
      answer:
       "You can cancel your paid Silver or Gold membership anytime. Simply log in to your LM Club account, go to the Manage My Account page, and click Cancel Auto-Renew.",
    },
    {
        question:"How do I know I can trust the reviews I read on LM Club?",
        answer:
        "We take several precautions to ensure that reviews come from real customers — including a combination of proprietary behind-the-scenes technology and good old-fashioned human investigations.",
    },
    {
        question:"How can a customer contact us for immediate guidance?",
        answer:
        "You can contact us through mail on support@lmclub.com or go to the Contact page for further information. And we are always ready to help.",
    },
];
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
const broadcastWidgetFaqs=[
    {question:"How do I unlock the Broadcast Widget?",answer:"•	You can unlock the Broadcast Widget by tapping the “Unlock Broadcast” button on your LM Club dashboard. You will need to provide your preferred contact information (email or phone number) and accept our terms and conditions to proceed."},
    {question:"How do I earn points with the Broadcast Widget?",answer:"•	You earn points by sharing promotions from local businesses on your social media. Each successful share that meets the promotion criteria and timing will earn you points redeemable at our rewards center."},
    {question:"What can I redeem my points for?",answer:"•	Points can be redeemed for a variety of rewards including gift cards, discounts, or exclusive offers from participating businesses. After redemption, your point balance will reset to zero."},
    {question:" How does the URL expiration work?",answer:"•	Broadcast URLs expire three minutes after they are posted to ensure promotions remain timely. To receive points, make sure to share each URL within 24 hours of receiving it. URLs shared after 24 hours will not count towards earning points."},
    {question:"What happens if I miss the expiration window for a URL?",answer:"•	If a URL is shared after the 24-hour limit or three minutes post-creation, it will not be eligible for points. We encourage users to share URLs as soon as they receive them to maximize their rewards."},
    {question:"How can I enroll a business in the Broadcast Widget?",answer:"•	To enroll a business, use the Handshake Button within the widget to fill out a marketing template. This generates a custom URL for the business’s promotions, which you can then share on your social media."},
    {question:"What are exclusive perks and how do I access them?",answer:"•	Exclusive perks include special offers like discounts and freebies provided by participating local businesses. These perks are available to members who actively promote their brands. Keep an eye on your notifications for new perks."},
    {question:"What should I do if I have trouble receiving or sharing URLs?",answer:"•	If you encounter any issues with receiving or sharing URLs, please contact our support team directly through the support link on our website or through the LM Club dashboard."},
    {question:"How often can I share URLs?",answer:"•	You can share as many URLs as you receive from LM Club. There is no limit to the number of URLs you can post, as long as each is shared within the stipulated time frame to earn points."},
    {question:"Are there any strategies for maximizing points with the Broadcast Widget? ",answer:"Yes, to maximize your points: Share URLs immediately upon receipt, regularly check your notifications for new broadcasts, and engage with the businesses to leverage additional perks."},
    {question:"Can I share a URL more than once to earn additional points?",answer:"•	No, each URL can only be shared once per user to earn points. Sharing the same URL multiple times will not accumulate additional points."},
    {question:"How do I check my current point balance?",answer:"How do I check my current point balance?"},
    {question:"What types of rewards can I expect from the reward center?",answer:"•	Rewards can vary but typically include gift cards to popular retailers, discounts on services or products from local businesses, and exclusive promotional offers only available to LM Club members."},
    {question:"Are there any limitations on the types of businesses that can be promoted through Broadcast?",answer:"•	The Broadcast Widget is designed to support a wide range of local businesses. However, businesses that do not comply with our terms of service or those involved in unethical practices will not be eligible for promotion."},
    {question:"How can businesses benefit from being featured in Broadcast?",answer:""},
    {question:"",answer:"•	Businesses gain increased visibility and customer engagement by being featured. They can reach a wider audience through the shared broadcasts, which can lead to increased sales and brand loyalty."},
    {question:"What is the process for a business to join the Broadcast Widget promotion list?",answer:"•	Businesses interested in joining the promotion list can apply through the LM Club website or directly contact our sales team for an enrollment form. They must meet certain criteria and agree to offer perks or discounts to our members."},
    {question:"How are disputes handled regarding points or rewards?",answer:"•	Disputes over points or rewards are handled by our support team. Users can submit a dispute form available in the dashboard, and our team will investigate and resolve the issue promptly."},
    {question:"Can I opt out of receiving Broadcast notifications?",answer:"•	Yes, you can opt out of receiving Broadcast notifications at any time through your dashboard settings. However, opting out may impact your ability to receive timely promotions and earn points."},
    {question:"What security measures are in place to protect my information when I participate in Broadcast?",answer:"•	We take your security seriously. All personal information is encrypted, and we implement strict data protection policies to ensure your information is safe from unauthorized access."},
    {question:"How often are new promotions available for sharing?",answer:"•	New promotions are typically available on a weekly basis, but the frequency can vary depending on the number of participating local businesses and their promotional activities."},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
    {question:"",answer:""},
];
const growWidgetFaqs = [
    {
        category: "General Questions",
        questions: [
          {
            question: " What is the Grow Rewards Widget?",
            answer:
              "The Grow Rewards Widget is a referral-based rewards program that allows users to earn points and achieve milestones by inviting others to join the LM Club. The more people you refer, the more rewards you can redeem.",
          },
          {
            question: " How does the referral program work?",
            answer:
              "When you invite someone using your unique referral link or code, and they successfully sign up, you earn reward points. You can accumulate these points to redeem exciting rewards such as gift cards, discounts, and exclusive offers.",
          },
          {
            question: " Who is eligible to participate in the Grow Rewards program?",
            answer:
              "Anyone with an LM Club account is eligible to participate in the program. There are no restrictions on location unless otherwise specified in the terms and conditions.",
          },
        ],
      },
      {
        category: "Earning Rewards & Points",
        questions: [
          {
            question: " How do I earn reward points?",
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
            question: " How many points do I earn per referral?",
            answer:
              "The standard point allocation per successful referral is X points. Bonus points may be awarded during promotional periods.",
          },
          {
            question: " What are milestone achievements?",
            answer:
              "Milestones are special achievements awarded when you reach a certain number of referrals. For example, every 10 successful referrals, you may receive bonus points and a trophy as recognition.",
          },
          {
            question: " Do my points expire?",
            answer:
              "Yes, reward points expire after 12 months if not redeemed. You will receive reminders when your points are about to expire.",
          },
          {
            question: " Can I earn points from multiple accounts?",
            answer:
              "No. Creating multiple accounts for self-referral is strictly prohibited. If detected, your points and eligibility for the rewards program may be revoked.",
          },
        ],
      },
      {
        category: "Referral Code & Tracking",
        questions: [
          {
            question: " Where can I find my referral code?",
            answer:
              "Your unique referral code is available in the LM Grow Rewards Dashboard. You can copy and share it with others.",
          },
          {
            question: " How do I share my referral link?",
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
            question: " How can I track my referrals?",
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
            question: " Can I change my referral code?",
            answer:
              "No, referral codes are assigned permanently and cannot be changed.",
          },
          {
            question: " What happens if my referral forgets to enter my code?",
            answer:
              "Unfortunately, referrals must enter your code at the time of sign-up to be counted. If they forget, they will not be linked to your account.",
          },
        ],
      },
      {
        category: "Redeeming Rewards",
        questions: [
          {
            question: " How do I redeem my points?",
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
            question: " What kind of rewards can I get?",
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
            question: " How long does it take to receive my reward?",
            answer: (
              <>
                <p><strong>Digital rewards (gift cards, coupons):</strong> Usually processed instantly or within 24 hours.</p>
                <p><strong>Physical rewards (merchandise, special gifts):</strong> Delivery may take 5-10 business days depending on location.</p>
              </>
            ),
          },
          {
            question: " Can I exchange or transfer my points?",
            answer: (
              <p>No, points cannot be transferred or exchanged between users. They can only be used by the account holder.</p>
            ),
          },
          {
            question: " What happens if a reward is out of stock?",
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
        category: "Troubleshooting & Support",
        questions: [
          {
            question: " My referral is not showing up. What should I do?",
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
            question: " My points were not credited correctly. How do I fix this?",
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
            question: " What if I accidentally redeemed the wrong reward?",
            answer: (
              <p>
                If you made an incorrect redemption,<strong> contact support within 24 hours</strong> to request cancellation.
                Approved cases will have points refunded.
              </p>
            ),
          },
          {
            question: " How can I reset my password?",
            answer: (
              <p>
                You can reset your password by clicking <strong>"Forgot Password"</strong> on the login page. A reset link will be sent
                to your registered email.
              </p>
            ),
          },
          {
            question: " How do I contact support?",
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
        category: "Security & Policy Questions",
        questions: [
          {
            question: " Can I refer myself using multiple accounts?",
            answer: (
              <p>
                No, self-referrals are against our policy. Any fraudulent activity may result in account suspension.
              </p>
            ),
          },
          {
            question: " What happens if I violate the referral program rules?",
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
            question: " Is my personal information safe?",
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
        category: "Special Promotions & Events",
        questions: [
          {
            question: " Are there bonus point promotions?",
            answer: (
              <p>
                Yes! We run <strong>seasonal promotions</strong> where you can earn <strong>extra points </strong>for referrals. 
                Keep an eye on <strong>email notifications</strong> or check your dashboard for active promotions.
              </p>
            ),
          },
          {
            question: " Can businesses participate in the referral program?",
            answer: (
              <p>
                At this time, the referral program is designed for individual users. 
                Businesses interested in partnerships should contact our support team.
              </p>
            ),
          },
          {
            question: " What happens if I reach a high referral milestone?",
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

const Faqs = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center bg-white px-4 py-10 w-full mt-16">
        <ScrollToTop />
        <WhatsApp />
        
        <div className="w-full mx-auto max-w-[1400px] p-4 mt-10">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
             Frequently Asked Questions (FAQ)
          </h2>
        <div className="max-w-4xl mx-auto space-y-2">
      {membershipFaqs.map((item, index) => (
    <div key={index}>
      <button
        className="w-full flex justify-between items-center text-left p-3 bg-gray-100 font-medium text-m rounded-md hover:bg-gray-200"
        onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
      >
        {item.question}
        {openQuestion === index ? <FaAngleDown /> : <FaAngleRight />}
      </button>
      {openQuestion === index && (
        <p className="p-2 text-gray-600">{item.answer}</p>
      )}
    </div>
  ))}
</div>
</div>
<div className="w-full mx-auto max-w-[1400px] p-4 mt-10">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Network Widget Frequently Asked Questions (FAQ)
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
    <div className="w-full mx-auto max-w-[1400px] p-4 mt-10">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Beehive Widget Frequently Asked Questions (FAQ)
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

        {/* Grow Widget FAQ Section */}
        <div className="w-full mx-auto max-w-[1400px] p-4 mt-10">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            Grow Widget Frequently Asked Questions (FAQ)
          </h2>
          <div className="max-w-4xl mx-auto space-y-2">
            {growWidgetFaqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <button
                  className="w-full flex justify-between items-center text-left p-3 bg-gray-100 font-medium text-m rounded-md hover:bg-gray-200"
                  onClick={() =>
                    setOpenCategory(openCategory === `grow-${sectionIndex}` ? null : `grow-${sectionIndex}`)
                  }
                >
                  {section.category}
                  {openCategory === `grow-${sectionIndex}` ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {openCategory === `grow-${sectionIndex}` && (
                  <div className="mt-2 space-y-2 p-3 bg-gray-100 rounded-md">
                    {section.questions.map((item, index) => (
                      <div key={index}>
                        <button
                          className="w-full flex justify-between items-center text-left p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                          onClick={() =>
                            setOpenQuestion(openQuestion === `grow-${sectionIndex}-${index}` ? null : `grow-${sectionIndex}-${index}`)
                          }
                        >
                          {item.question}
                          {openQuestion === `grow-${sectionIndex}-${index}` ? <FaAngleDown /> : <FaAngleRight />}
                        </button>
                        {openQuestion === `grow-${sectionIndex}-${index}` && (
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
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
