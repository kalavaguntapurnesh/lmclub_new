import React, { useContext, useState } from "react";
import { AppContext } from "./../context/AppContext";
import { SlCalender } from "react-icons/sl";
import { MdSchedule } from "react-icons/md";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdCategory } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { MdFilterAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import beehive from "../assets/beehive.webp";
import broadcast from "../assets/broadcast.webp";
import enroll from "../assets/enroll.webp";

const Dashboard = () => {
  const { userData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const navigate = useNavigate();

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    userData && (
      <div className="w-[100%]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="w-[100%] flex flex-col gap-2 text-sm">
                  <div className="flex flex-row justify-between">
                    <div className="space-y-2">
                      <p className="lg:text-3xl text-2xl font-bold">
                        <span className="text-green-500">Hello, </span>{" "}
                        {userData.firstName}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 
                <div className="lg:flex gap-3 pt-8">
                  <div className="relative">
                    <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl font-bold text-colorFour">
                      <CiSearch />
                    </span>
                    <input
                      type="text"
                      placeholder="Search for a widget or plan"
                      className="w-full py-2 pl-8 border border-gray-300 rounded focus:outline-none hover:border-colorFour transition-colors duration-300 "
                    />
                  </div>

                  <div className="lg:flex grid grid-cols-2 gap-2 lg:mt-0 mt-4">
                    <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                      <span className="text-colorFour text-xl">
                        <MdCategory />
                      </span>
                      <div>All Categories</div>
                      <span
                        className="text-2xl   hover:bg-white cursor-pointer"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                      >
                        <RiArrowDropDownLine />
                      </span>
                      {categoryOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                          <ul>
                            <li className="p-2">Category 1</li>
                            <li className="p-2">Category 2</li>
                            <li className="p-2">Category 3</li>
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                      <span className="text-colorFour text-xl">
                        <SlGraph />
                      </span>
                      <div>All Status</div>
                      <span
                        className="text-2xl   hover:bg-white cursor-pointer"
                        onClick={() => setStatusOpen(!statusOpen)}
                      >
                        <RiArrowDropDownLine />
                      </span>
                      {statusOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                          <ul>
                            <li className="p-2">Status 1</li>
                            <li className="p-2">Status 2</li>
                            <li className="p-2">Status 3</li>
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                      <span className="text-colorFour text-xl font-bold">
                        <FaLocationDot />
                      </span>
                      <div>All Location</div>
                      <span
                        className="text-2xl   hover:bg-white cursor-pointer"
                        onClick={() => setLocationOpen(!locationOpen)}
                      >
                        <RiArrowDropDownLine />
                      </span>
                      {locationOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                          <ul>
                            <li className="p-2">Location 1</li>
                            <li className="p-2">Location 2</li>
                            <li className="p-2">Location 3</li>
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                      <span className="text-colorFour text-xl">
                        <MdFilterAlt />
                      </span>
                      <div>Advance Filter</div>
                      <span
                        className="text-2xl   hover:bg-white cursor-pointer"
                        onClick={() => setFilterOpen(!filterOpen)}
                      >
                        <RiArrowDropDownLine />
                      </span>
                      {filterOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded p-2">
                          <ul>
                            <li className="p-2">Filter 1</li>
                            <li className="p-2">Filter 2</li>
                            <li className="p-2">Filter 3</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div> */}

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-4">
                  <button
                    // onClick={() => navigate(`/createSchedule/${user?._id}`)}
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                      <div className="space-y-4 h-full flex flex-col justify-between">
                        <div className="py-8 space-y-2">
                          <div className="flex justify-center items-center">
                            <div className="w-12 h-12 ">
                              <span className="text-5xl text-colorFour font-bold">
                                <img src={beehive} alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center text-center">
                            <h1 className="text-xl font-semibold">Beehive</h1>
                          </div>
                          <div className="flex justify-center items-center text-center">
                            <p className="text-gray-500">
                              Beehive allows you to start earning redeemable
                              points by sharing deals, coupons.
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center py-8">
                          <button
                            // onClick={() =>
                            //   navigate(`/createSchedule/${user?._id}`)
                            // }
                            className="text-colorFour font-semibold text-xl"
                          >
                            Promo
                          </button>
                        </div>
                      </div>
                    </div>
                  </button>

                  <button
                    // onClick={() => navigate(`/bookings/${user?._id}`)}
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                      <div className="space-y-4 h-full flex flex-col justify-between">
                        <div className="py-8 space-y-2">
                          <div className="flex justify-center items-center">
                            <div className="w-12 h-12 ">
                              <span className="text-5xl  text-colorFour font-bold">
                                <img src={enroll} alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center text-center">
                            <h1 className="text-xl font-semibold">
                              Refer & Earn
                            </h1>
                          </div>
                          <div className="flex justify-center items-center text-center">
                            <p className="text-gray-500">
                              As soon as someone books a time with you it will
                              show up here.
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center py-8">
                          <button
                            // onClick={() => navigate(`/bookings/${user?._id}`)}
                            className="text-colorFour font-semibold text-xl"
                          >
                            View all Bookings
                          </button>
                        </div>
                      </div>
                    </div>
                  </button>

                  <button
                    // onClick={() => navigate(`/bookings/${user?._id}`)}
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 h-full">
                      <div className="space-y-4 h-full flex flex-col justify-between">
                        <div className="py-8 space-y-2">
                          <div className="flex justify-center items-center">
                            <div className="w-12 h-12 ">
                              <span className="text-5xl  text-colorFour font-bold">
                                <img src={broadcast} alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center text-center">
                            <h1 className="text-xl font-semibold">Broadcast</h1>
                          </div>
                          <div className="flex justify-center items-center text-center">
                            <p className="text-gray-500">
                              As soon as someone books a time with you it will
                              show up here.
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center py-8">
                          <button
                            // onClick={() => navigate(`/bookings/${user?._id}`)}
                            className="text-colorFour font-semibold text-xl"
                          >
                            View all Bookings
                          </button>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
