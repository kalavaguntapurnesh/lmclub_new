import React, { useEffect } from "react";
import Platinum from "../assets/platinum.jpg";
import Bronze from "../assets/bronze.jpg";
import Gold from "../assets/gold.jpg";
import Silver from "../assets/silver.jpg";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
const AllMembershipPackage = () => {
  const { membership } = useParams();
  console.log(membership);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const MembershipData = {
    Platinum: {
      name: "Platinum",
      title: "You’re getting more out of LaoeMaom!",
      image: Platinum,
      membershipFees: [
        "Registration fee is $35.00 / Yearly",
        "Member Fee $14.99 / Monthly",
      ],
      includes: [
        "(LM) Bee Hive - Make a post, get 25 likes, earn 20 points",
        "(LM) Broadcast - Promote a business, earn 20 points",
        "(LM) Network - Complete (TFS) tasks for success, earn 50 points",
        "(LM) E-Store - Shares Its Online Store Profits With You! Post our store on your social media and get 70% of store profits.",
        "(LM) Grow - Enroll 20 members, get a $500.00 Gift Certificate",
        "We are so excited about you; we welcome you to our LM family!",
      ],
      benefits: [
        "Allow us to post our store on your social media, and we will pay you for it.",
      ],
      beeHive: [
        "Access to deals posted by other members and LM CLUB",
        "Get discounts and coupons from vendors that support our club",
        "Streaming information that can be filtered and shared with each other.",
      ],
      broadcast: [
        "We market our sponsors on your social media and give you trade-in points for great prizes.",
      ],
      network: [
        "Follow our tasks for success and network for your net worth.",
        "Meet peers who reinforce your goals and support your vision.",
        "Network with like-minded people just like you.",
      ],
      welcomeMessage: [
        "Platinum Membership Fee $14.99 / Monthly.",
        "Yearly renewal fee $35.00 / Yearly.",
      ],
    },
    Bronze: {
      name: "Bronze",
      title: "You’re getting more out of LaoeMaom!",
      image: Bronze,
      membershipFees: [
        "Registration fee is $20.00 / Yearly",
        "Member Fee $5.99 / Monthly",
      ],
      includes: [
        "(LM) Bee Hive - Make a post, get 25 likes, earn 5 points",
        "(LM) Broadcast - Promote a business, earn 5 points",
        "(LM) Network - Complete (TFS) tasks for success, earn 25 points",
        "(LM) E-Store - Shares Its Online Store Profits With You! Post our store on your social media and get 20% of store profits.",
        "(LM) Grow - Enroll 35 members, get a $500.00 Gift Certificate",
      ],
      benefits: [
        "Allow us to post our store on your social media, and we will pay you for it.",
      ],
      beeHive: [
        "Access to deals posted by other members and LM CLUB",
        "Get discounts and coupons from vendors that support our club",
        "Streaming information that can be filtered and shared with each other.",
      ],
      broadcast: [
        "We market our sponsors on your social media and give you trade-in points for great prizes.",
      ],
      network: [
        "Follow our tasks for success and network for your net worth.",
        "Meet peers who reinforce your goals and support your vision.",
        "Network with like-minded people just like you.",
      ],
      welcomeMessage: [
        "Platinum Membership Fee $5.99 / Monthly.",
        "Yearly renewal fee $20.00 / Yearly.",
      ],
    },
    Silver: {
      name: "Silver",
      title: "You’re getting more out of LaoeMaom!",
      image: Silver,
      membershipFees: [
        "Registration fee is $25.00 / Yearly",
        "Member Fee $8.99 / Monthly",
      ],
      includes: [
        "(LM) Bee Hive - Make a post, get 25 likes, earn 10 points",
        "(LM) Broadcast - Promote a business, earn 10 points",
        "(LM) Network - Complete (TFS) tasks for success, earn 50 points",
        "(LM) E-Store - Shares Its Online Store Profits With You! Post our store on your social media and get 30% of store profits.",
        "(LM) Grow - Enroll 30 members, get a $500.00 Gift Certificate",
      ],
      benefits: [
        "Allow us to post our store on your social media, and we will pay you for it.",
      ],
      beeHive: [
        "Access to deals posted by other members and LM CLUB",
        "Get discounts and coupons from vendors that support our club",
        "Streaming information that can be filtered and shared with each other.",
      ],
      broadcast: [
        "We market our sponsors on your social media and give you trade-in points for great prizes.",
      ],
      network: [
        "Follow our tasks for success and network for your net worth.",
        "Meet peers who reinforce your goals and support your vision.",
        "Network with like-minded people just like you.",
      ],
      welcomeMessage: [
        "Platinum Membership Fee $8.99 / Monthly.",
        "Yearly renewal fee $25.00 / Yearly.",
      ],
    },
    Gold: {
      name: "Gold",
      title: "You’re getting more out of LaoeMaom!",
      image: Gold,
      membershipFees: [
        "Registration fee is $30.00 / Yearly",
        "Member Fee $11.99 / Monthly",
      ],
      includes: [
        "(LM) Bee Hive - Make a post, get 25 likes, earn 15 points",
        "(LM) Broadcast - Promote a business, earn 15 points",
        "(LM) Network - Complete (TFS) tasks for success, earn 75 points",
        "(LM) E-Store - Shares Its Online Store Profits With You! Post our store on your social media and get 40% of store profits.",
        "(LM) Grow - Enroll 25 members, get a $500.00 Gift Certificate",
      ],
      benefits: [
        "Allow us to post our store on your social media, and we will pay you for it.",
      ],
      beeHive: [
        "Access to deals posted by other members and LM CLUB",
        "Get discounts and coupons from vendors that support our club",
        "Streaming information that can be filtered and shared with each other.",
      ],
      broadcast: [
        "We market our sponsors on your social media and give you trade-in points for great prizes.",
      ],
      network: [
        "Follow our tasks for success and network for your net worth.",
        "Meet peers who reinforce your goals and support your vision.",
        "Network with like-minded people just like you.",
      ],
      welcomeMessage: [
        "Platinum Membership Fee $11.99 / Monthly.",
        "Yearly renewal fee $30.00 / Yearly.",
      ],
    },
  };
  const selectedMembership = MembershipData[membership];

  return (
    <div className="lg:pt-28 pt-16">
      <Navbar />
      <WhatsApp/>
      <ScrollToTop/>
      {selectedMembership ? (
        <div className="mx-auto p-6 text-gray-600 max-w-[1400px]">
          <section className="my-8 border border-gray-300 rounded p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <img
                src={selectedMembership.image}
                alt={selectedMembership.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h1 className="text-3xl font-bold">
                {selectedMembership.name} Membership
              </h1>
              <h2 className="text-2xl font-bold p-4  text-green-600">
                You’re getting more out of LaoeMaom!
              </h2>
            </div>
            <h2 className="text-2xl font-semibold mt-6 ">
              As a {selectedMembership.name} Member, you’ll earn points,
              unlocking rewards across all widgets.
            </h2>
            <h2 className="text-2xl font-semibold mt-6 text-green-600">
              {selectedMembership.name} Package
            </h2>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              {selectedMembership.membershipFees.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4 text-green-600">
              Includes
            </h3>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              {selectedMembership.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {selectedMembership.benefits && (
              <>
                <h2 className="text-2xl font-semibold mt-6 text-green-600">
                  (LM) Shares Its Online Store Profits With You
                </h2>
                <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
                  {selectedMembership.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="text-2xl font-semibold mt-6 text-green-600">
              (LM) Bee Hive
            </h2>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              {selectedMembership.beeHive.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 text-green-600">
              (LM) Broadcast
            </h2>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              {selectedMembership.broadcast.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 text-green-600">
              (LM) Network
            </h2>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              {selectedMembership.network.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 text-green-600">
              We welcome you to our LM family!
            </h2>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              {selectedMembership.welcomeMessage.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <p className="text-center text-red-600 font-bold">
          Membership not found!
        </p>
      )}
      <Footer />
    </div>
  );
};

export default AllMembershipPackage;
