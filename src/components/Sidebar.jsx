import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { MdWidgets } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { AppContext } from "../context/AppContext";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import LMDarkLogo from "../assets/LMDarkLogo.webp";
import { IoIosClose } from "react-icons/io";

const Sidebar = () => {
  const {
    // userData,
    // setUserData,
    setToken,
    token,
    // backendUrl,
    // loadUserProfileData,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    navigate("/");
    token && setToken("");
    token && localStorage.removeItem("token");
    setShowLogoutModal(false);
  };

  return (
    <div className="min-h-screen bg-white lg:block hidden">
      {token && (
        <div>
          <ul className="text-[#515151] mt-5 ">
            <NavLink
              className={({ isActive }) =>
                `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                  isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
                }`
              }
              to={"/dashboard"}
            >
              <BsGrid1X2Fill className="text-green-500 w-5 h-5" />
              <p>Dashboard</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                  isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
                }`
              }
              to={"/my-orders"}
            >
              <FaUsers className="text-green-500 w-5 h-5" />

              <p>Order History</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                  isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
                }`
              }
              to={"/my-subscription"}
            >
              <MdWidgets className="text-green-500 w-5 h-5" />
              <p>My Subscriptions</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                  isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
                }`
              }
              to={"/my-membership"}
            >
              <FaCalculator className="text-green-500 w-5 h-5" />
              <p>My Memberships</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                  isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
                }`
              }
              to={"/my-payments"}
            >
              <FaCalculator className="text-green-500 w-5 h-5" />
              <p>Payment Methods</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                  isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
                }`
              }
              to={"/downloads"}
            >
              <FaCalculator className="text-green-500 w-5 h-5" />
              <p>Downloads</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                  isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
                }`
              }
              to={"/my-addresses"}
            >
              <GrStatusGood className="text-green-500 w-5 h-5" />
              <p>Addresses</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                  isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
                }`
              }
              to={"/my-profile"}
            >
              <FaUserAlt className="text-green-500 w-5 h-5" />
              <p>Account Details</p>
            </NavLink>
          </ul>
          <a
            className="flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4"
            onClick={() => setShowLogoutModal(true)}
          >
            <IoMdLogOut className="text-green-500 w-5 h-5" />
            <p>Log Out</p>
          </a>
        </div>
      )}

      {showLogoutModal && (
        <div className="fixed inset-0 z-20 bg-transparent bg-opacity-50 flex justify-center items-center lg:mx-0 mx-8">
          <div className="bg-white p-6 rounded shadow w-[600px] z-20">
            <div className="flex flex-row justify-between items-center">
              <img src={LMDarkLogo} alt="logo" className="w-[52px] h-auto " />

              <h2 className="md:text-lg text-base font-semibold text-center">
                Do you want to log out ?
              </h2>
              <IoIosClose
                onClick={() => setShowLogoutModal(false)}
                className="md:w-8 md:h-8 w-6 h-6 cursor-pointer"
              />
            </div>

            <div className="border-b border-gray-200 pt-2"></div>
            <div className="flex justify-center gap-4 pt-6 pb-6">
              <button
                className="bg-green-500 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] rounded hover:bg-green-600"
                onClick={() => setShowLogoutModal(false)}
              >
                No
              </button>
              <button
                className="bg-red-500 transition ease-in-out duration-1000 cursor-pointer text-white md:px-16 px-12 md:py-2 py-[6px] rounded hover:bg-red-600"
                onClick={handleLogout}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
