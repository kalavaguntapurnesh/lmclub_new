import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import Logo from "../assets/LMDark.webp"
import Amazon from "../assets/Amazon.jpg";
import Card500 from "../assets/500.jpg";
import ae from "../assets/ae.png";

const rewardsData = [
  { img: Amazon, title: "$500 Giftcard", members: 15 },
  { img: Card500, title: "$1000 Giftcard", members: 30 },
  { img: ae, title: "$1500 Giftcard", members: 45 },
];

const RewardSection = ({ title }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const isUserLoggedIn = !!localStorage.getItem("token");

  const handleRedeemClick = () => {
    if (!isUserLoggedIn) {
      setShowModal(true);
    } else {
      navigate("/redeem");
    }
  };

  return (
    <div className="w-full mx-auto max-w-[1400px] p-14">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="space-y-3 text-center"
      >
        <div className="flex items-center justify-center">
          <div className="h-4 w-1 bg-green-500"></div>
          <h1 className="ml-2 font-bold text-green-500 lg:uppercase">{title}</h1>
        </div>
        <h1 className="lg:text-4xl text-2xl font-bold text-headingColor">
          Earn rewards for inviting new members
        </h1>
        <p className="text-gray-600">
          Start earning rewards for enrolling other members into our thriving community!
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8"
      >
        {rewardsData.map((reward, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="max-w-md rounded overflow-hidden shadow-md border mx-2">
              <img className="w-full h-64" src={reward.img} alt={reward.title} />
              <div className="px-6 pt-4">
                <h2 className="font-bold text-2xl text-headingColor text-center lg:text-start mb-2">
                  Claim {reward.title}
                </h2>
                <p className="text-lg text-gray-700 text-center lg:text-start">
                  Enroll {reward.members} Members
                </p>
              </div>
              <div className="px-6 pt-4 pb-4 flex justify-center lg:justify-start">
                <button
                  onClick={handleRedeemClick}
                  className="group border relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out"
                >
                  <span className="relative flex-[8] text-center">Redeem Now</span>
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition text-black group-hover:bg-white group-hover:text-green-500">
                    <TiArrowRight className=" text-lg" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
      <div className="flex items-center justify-center gap-2">
        <img
          src={Logo}
          alt="LM Club"
          className="w-12 h-12 absolute top-4 left-4"
        />
        <h2 className="text-3xl font-bold">
          LM <span className="text-green-600">Club</span>
        </h2>
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-gray-800">
          Please log in to continue
        </p>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button 
          onClick={() => setShowModal(false)} 
          className="px-4 py-2 bg-gray-300 rounded text-gray-800"
        >
          Cancel
        </button>
        <button 
          onClick={() => navigate("/login")} 
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          OK
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

const Rewards = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />
      <div className="lg:pt-28 pt-24">
        <RewardSection title="Grow Rewards" />
        <RewardSection title="Beehive Rewards" />
        <RewardSection title="Broadcast Rewards" />
      </div>
      <Footer />
    </div>
  );
};

export default Rewards;