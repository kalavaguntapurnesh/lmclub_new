import React, { useContext, useState } from "react";
import { AppContext } from "./../context/AppContext";
import { useNavigate } from "react-router-dom";
import beehive from "../assets/beehive.webp";
import broadcast from "../assets/broadcast.webp";
import enroll from "../assets/enroll.webp";
import estore from "../assets/estore.webp";
import network from "../assets/network.webp";
import { MdArrowRightAlt } from "react-icons/md";

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
                      <p className="lg:text-3xl text-lg font-bold">
                        <span className="text-green-500">Hello, </span>{" "}
                        {userData.firstName}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 pt-4">
                  <a href="" className="flex justify-center">
                    <div className="w-full bg-white border border-gray-200 rounded p-4">
                      <div className="space-y-2">
                        <div className="flex justify-center items-center">
                          <img
                            src={beehive}
                            alt="about_one"
                            className="w-[72px] h-[72px]"
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-lg text-trumpTwo font-semibold    text-center">
                            Beehive
                          </h1>
                        </div>

                        <div className="flex justify-center">
                          <a
                            // href={value.link}
                            className="flex flex-row items-center text-green-500 "
                          >
                            <span className="relative text-sm">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" className="flex justify-center">
                    <div className="w-full bg-white border border-gray-200 rounded p-4">
                      <div className="space-y-2">
                        <div className="flex justify-center items-center">
                          <img
                            src={enroll}
                            alt="about_one"
                            className="w-[72px] h-[72px]"
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-lg text-trumpTwo font-semibold    text-center">
                            Refer & Earn
                          </h1>
                        </div>

                        <div className=" flex justify-center">
                          <a
                            // href={value.link}
                            className="flex flex-row items-center text-green-500 "
                          >
                            <span className="relative text-sm">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" className="flex justify-center">
                    <div className="w-full bg-white border border-gray-200 rounded p-4">
                      <div className="space-y-2">
                        <div className="flex justify-center items-center">
                          <img
                            src={broadcast}
                            alt="about_one"
                            className="w-[72px] h-[72px]"
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-lg text-trumpTwo font-semibold   text-center">
                            Broadcast
                          </h1>
                        </div>

                        <div className=" flex justify-center">
                          <a
                            // href={value.link}
                            className="flex flex-row items-center text-green-500 "
                          >
                            <span className="relative text-sm">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" className="flex justify-center">
                    <div className="w-full bg-white border border-gray-200 rounded p-4">
                      <div className="space-y-2">
                        <div className="flex justify-center items-center">
                          <img
                            src={estore}
                            alt="about_one"
                            className="w-[72px] h-[72px]"
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-lg text-trumpTwo font-semibold    text-center">
                            E-Store
                          </h1>
                        </div>

                        <div className=" flex justify-center">
                          <a
                            // href={value.link}
                            className="flex flex-row items-center text-green-500 "
                          >
                            <span className="relative text-sm">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" className="flex justify-center">
                    <div className="w-full bg-white border border-gray-200 rounded p-4">
                      <div className="space-y-2">
                        <div className="flex justify-center items-center">
                          <img
                            src={network}
                            alt="about_one"
                            className="w-[72px] h-[72px]"
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-lg text-trumpTwo font-semibold    text-center">
                            Network
                          </h1>
                        </div>

                        <div className=" flex justify-center">
                          <a
                            // href={value.link}
                            className="flex flex-row items-center text-green-500 "
                          >
                            <span className="relative text-sm">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
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
