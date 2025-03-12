import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import WhatsApp from "../components/WhatsApp";

import LaptopNetwork from "../assets/LaptopNetwork.png";
import Directory from "../assets/Directory.svg";
import SupportTwo from "../assets/SupportTwo.svg";
import Events from "../assets/Events.svg";
import connection from "../assets/connection.svg";

const Network = () => {
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