import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsGrid1X2Fill } from "react-icons/bs";
import { BsFillArchiveFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { MdWidgets } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
// import { LuWaypoints } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { IoDocument } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { AppContext } from "../context/AppContext";
import { FaUserAlt } from "react-icons/fa";

const Sidebar = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  return (
    <div className="min-h-screen bg-white lg:block hidden">
      {token && (
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

            <p>Orders</p>
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
            <p>Subscriptions</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
              }`
            }
            to={"/plans"}
          >
            <FaCalculator className="text-green-500 w-5 h-5" />
            <p>Memberships</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
              }`
            }
            to={"/category"}
          >
            <MdCategory className="text-green-500 w-5 h-5" />
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

          {/* <NavLink
            className={({ isActive }) =>
              `flex  items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer shadow my-[12px] mx-4 ${
                isActive ? "bg-[#f2f2f3] border-r-4 border-green-400" : ""
              }`
            }
            to={"/email-templates"}
          >
            <SiMinutemailer className="text-green-500 w-5 h-5" />
            <p>Payment Methods</p>
          </NavLink> */}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
