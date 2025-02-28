import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import RedeemModal from "../components/RedeemModal";
import { useState } from "react";
import Amazon from "../assets/Amazon.jpg";
import Card500 from "../assets/500.jpg";
import ae from "../assets/ae.png";
import { TiArrowRight } from "react-icons/ti";
import WhatsApp from "../components/WhatsApp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import beehive from "../assets/beehive.webp";
import broadcast from "../assets/broadcast.webp";
import network from "../assets/network.webp";
import estore from "../assets/estore.webp";
import enroll from "../assets/enroll.webp";
const Rewards = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRedeemClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
return (
  <div>
    <Navbar />
    <ScrollToTop />
    <WhatsApp />
    <div className="lg:pt-28 pt-24">
      <div className="relative">
        <div className="w-full mx-auto max-w-[1400px] p-4">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-3 text-center"
          >
            <div className="flex items-center justify-center">
              <div className="h-4 w-1 bg-green-500"></div>
              <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                Grow Rewards
              </h1>
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
            {[{ img: Amazon, title: "$500 Giftcard", members: 15 },
              { img: Card500, title: "$1000 Giftcard", members: 30 },
              { img: ae, title: "$1500 Giftcard", members: 45 }].map((reward, index) => (
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
                    <a
                      href="/contact-us"
                      className="group border relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out"
                    >
                      <span className="relative flex-[8] text-center">Redeem Now</span>
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition text-black group-hover:bg-white group-hover:text-green-500">
                        <TiArrowRight className=" text-lg" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="overflow-x-auto lg:flex justify-center items-center hidden pt-8">
            <table className="features w-[90%] border-collapse shadow-2xl rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md">
                  <th className="p-4 border">Reward Cards</th>
                  {["Bronze", "Silver", "Gold", "Platinum"].map((tier) => (
                    <th key={tier} className="p-4 border font-bold text-xl">{tier}</th>
                  ))}
                </tr>
                <tr className="bg-gradient-to-r from-gray-500 to-gray-400 text-white shadow-md">
                  <th className="p-4 border">Amazon Gift Card Worth $500</th>
                  {["$5.99", "$8.99", "$11.99", "$14.99"].map((tier) => (
                    <th key={tier} className="p-4 border font-bold text-xl">{tier}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[{
                  task: "Make a post & get 25 likes",
                  img: beehive,
                  values: [5, 10, 15, 20],
                },
                {
                  task: "Promote a business",
                  img: broadcast,
                  values: [5, 10, 15, 20],
                },
                {
                  task: "Complete (TFS) tasks",
                  img: network,
                  values: [25, 50, 75, 100],
                },
                {
                  task: "Promote e-Store Online",
                  img: estore,
                  values: ["20%", "30%", "40%", "70%"],
                },
                {
                  task: "Enroll Members",
                  img: enroll,
                  values: [35, 30, 25, 20],
                }].map((row, index) => (
                  <>
                    <tr key={index} className="bg-green-50">
                      <td colSpan={5} className="p-4 font-medium text-green-500 border shadow-lg">{row.task}</td>
                    </tr>
                    <tr key={`data-${index}`} className="hover:bg-gray-100 transition-all duration-300 shadow-md">
                      <td className="p-4 border">
                        <img src={row.img} alt={row.task} className="w-16 h-16 drop-shadow-lg" />
                      </td>
                      {row.values.map((value, i) => (
                        <td key={i} className="p-4 text-center font-semibold text-gray-700 border">{value}</td>
                      ))}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <RedeemModal showModal={showModal} onClose={closeModal} />
    <Footer />
  </div>
);
};


export default Rewards;
