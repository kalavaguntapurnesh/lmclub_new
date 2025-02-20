import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AppContext } from "./../context/AppContext";
import countriesData from "../countries.json";
import { TiArrowRight } from "react-icons/ti";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [selectedCountry, setSelectedCountry] = useState(
    userData?.billingAddress?.country || ""
  );
  const [selectedState, setSelectedState] = useState(
    userData?.billingAddress?.state || ""
  );
  const [selectedCity, setSelectedCity] = useState(
    userData?.billingAddress?.city || ""
  );
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    if (selectedCountry) {
      const countryObj = countriesData.find((c) => c.name === selectedCountry);
      setStates(countryObj ? countryObj.states : []);
      setSelectedState("");
      setCities([]); // Resetting Cities
      setSelectedCity("");
    } else {
      setStates([]);
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      const countryObj = countriesData.find((c) => c.name === selectedCountry);
      const stateObj = countryObj?.states.find((s) => s.name === selectedState);
      setCities(stateObj ? stateObj.cities : []);
      setSelectedCity("");
    } else {
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedState, selectedCountry]);

  const [isEdit, setIsEdit] = useState(false);

  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const finalState = selectedState || userData.billingAddress?.state;
      const finalCity = selectedCity || userData.billingAddress?.city;
      const finalCountry = selectedCountry || userData.billingAddress?.country;

      const payLoad = {
        name: userData.name,
        phoneNumber: userData.phoneNumber,
        gender: userData.gender !== "Not Selected" ? userData.gender : "",
        secondaryEmail: userData.secondaryEmail,
        billingAddress: {
          country: finalCountry,
          state: finalState,
          city: finalCity,
          pinCode: userData.billingAddress?.pinCode,
          name: userData.billingAddress?.name,
          phoneNumber: userData.billingAddress?.phoneNumber,
        },
      };

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        payLoad,
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
      } else {
        toast.error(data.mesage);
      }
    } catch (error) {
      console.log("Error in updating profile in frontend ", error);
      toast.error(error.mesage);
    }
  };

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
                        <span className="text-green-500">Account</span> Details
                      </p>
                    </div>

                    <div className="flex justify-center items-center">
                      {isEdit ? (
                        <div
                          onClick={updateUserProfileData}
                          className="group border-[1px] cursor-pointer relative px-6 py-2 text-white text-sm rounded-full border-green-400 bg-green-400 font-semibold overflow-hidden flex items-center gap-2 w-[180px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                        >
                          <span className="relative flex-[8] text-center">
                            Save Changes
                          </span>
                          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-black group-hover:text-green-400">
                            <TiArrowRight className=" text-lg" />
                          </span>
                        </div>
                      ) : (
                        <div
                          onClick={() => setIsEdit(true)}
                          className="group border-[1px] relative px-6 py-2 text-white text-sm rounded-full border-green-400 bg-green-400 
                          cursor-pointer  font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                        >
                          <span className="relative flex-[8] text-center">
                            Edit Profile
                          </span>
                          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-black group-hover:text-green-400">
                            <TiArrowRight className=" text-lg" />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 bg-[#f2f2f3] px-4 py-5 shadow w-[100%]">
                    <img
                      className="w-36 rounded"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="image"
                    />

                    {isEdit ? (
                      <input
                        className="md:text-3xl bg-[#f2f2f3] text-2xl font-semibold max-w-80 mt-4"
                        type="text"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                      />
                    ) : (
                      <p className="font-semibold text-3xl text-neutral-800 mt-4">
                        {userData.name}
                      </p>
                    )}

                    <hr className="bg-zinc-400 h-[1px] mt-1 border-none" />

                    <div>
                      <p className="text-neutral-500 underline mt-3">
                        PERSONAL INFORMATION
                      </p>

                      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-[100%] gap-y-2.5 text-neutral-700 mt-3">
                        <div className="w-[90%]">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            Full Name
                          </label>
                          {isEdit ? (
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className=" border  border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              value={userData.name}
                            ></input>
                          ) : (
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className=" border  border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     name: e.target.value,
                              //   }))
                              // }
                              disabled
                              value={userData.name}
                            ></input>
                          )}
                        </div>
                        <div className="w-[90%]">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            Email
                          </label>
                          {isEdit ? (
                            <input
                              type="email"
                              name="email"
                              id="email"
                              disabled
                              className=" border  border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              value={userData.email}
                            ></input>
                          ) : (
                            <input
                              type="email"
                              name="email"
                              id="email"
                              disabled
                              className=" border  border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              value={userData.email}
                            ></input>
                          )}
                        </div>

                        <div className="w-[90%]">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            Gender
                          </label>
                          {isEdit ? (
                            <select
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  gender: e.target.value,
                                }))
                              }
                              value={userData.gender || "Not Selected"}
                            >
                              <option value="Not Selected">Not Selected</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          ) : (
                            <select
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     gender: e.target.value,
                              //   }))
                              // }
                              disabled
                              value={userData.gender || "Not Selected"}
                            >
                              <option value="Not Selected">Not Selected</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          )}
                        </div>

                        <div className="w-[90%]">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            Secondary Email
                          </label>
                          {isEdit ? (
                            <input
                              type="email"
                              name="secondaryEmail"
                              id="secondaryEmail"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              required="true"
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  secondaryEmail: e.target.value,
                                }))
                              }
                              value={userData.secondaryEmail}
                            ></input>
                          ) : (
                            <input
                              type="email"
                              name="secondaryEmail"
                              id="secondaryEmail"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              required="true"
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     secondaryEmail: e.target.value,
                              //   }))
                              // }
                              disabled
                              value={userData.secondaryEmail}
                            ></input>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-neutral-500 underline mt-3">
                        BILLLING ADDRESS
                      </p>

                      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-[100%] gap-y-2.5 text-neutral-700 mt-3">
                        <div className="w-[90%]">
                          <label
                            htmlFor="text"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            Country
                          </label>
                          {isEdit ? (
                            <select
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              onChange={(e) =>
                                setSelectedCountry(e.target.value)
                              }
                              value={selectedCountry}
                            >
                              <option value="">Select Country</option>
                              {countriesData.map((country) => (
                                <option key={country.iso2} value={country.name}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type="text"
                              name="addressLaneOne"
                              id="addressLaneOne"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              required="true"
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     addressLaneOne: e.target.value,
                              //   }))
                              // }
                              disabled
                              value={userData.billingAddress?.country}
                            ></input>
                          )}
                        </div>

                        <div className="w-[90%]">
                          <label
                            htmlFor="text"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            State
                          </label>
                          {isEdit ? (
                            <select
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              onChange={(e) => setSelectedState(e.target.value)}
                              value={selectedState}
                            >
                              <option value="">Select State</option>
                              {states.length > 0 &&
                                states.map((state) => (
                                  <option
                                    key={state.state_code}
                                    value={state.name}
                                  >
                                    {state.name}
                                  </option>
                                ))}
                            </select>
                          ) : (
                            <input
                              type="text"
                              name="stateResidence"
                              id="stateResidence"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              required="true"
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     addressLaneTwo: e.target.value,
                              //   }))
                              // }
                              disabled
                              value={userData.billingAddress?.state}
                            ></input>
                          )}
                        </div>

                        <div className="w-[90%]">
                          <label
                            htmlFor="city"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            City of Residence
                          </label>
                          {isEdit ? (
                            <select
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              onChange={(e) => setSelectedCity(e.target.value)}
                              value={selectedCity}
                            >
                              <option value="">Select City</option>
                              {cities.map((city) => (
                                <option key={city.id} value={city.name}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type="text"
                              name="cityResidence"
                              id="cityResidence"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="City"
                              required="true"
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     city: e.target.value,
                              //   }))
                              // }
                              disabled
                              value={userData.billingAddress?.city}
                            ></input>
                          )}
                        </div>

                        <div className="w-[90%]">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            Phone Number
                          </label>
                          {isEdit ? (
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              required="true"
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  billingAddress: {
                                    ...prev.billingAddress,
                                    phoneNumber: e.target.value,
                                  },
                                }))
                              }
                              value={userData.billingAddress?.phoneNumber || ""}
                            ></input>
                          ) : (
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="Your Mobile Number"
                              required="true"
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     phoneNumber: e.target.value,
                              //   }))
                              // }
                              value={userData.billingAddress?.phoneNumber || ""}
                              disabled
                            ></input>
                          )}
                        </div>

                        <div className="w-[90%]">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            PIN Code
                          </label>
                          {isEdit ? (
                            <input
                              type="text"
                              name="pinCode"
                              id="pinCode"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              required="true"
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  billingAddress: {
                                    ...prev.billingAddress,
                                    pinCode: e.target.value,
                                  },
                                }))
                              }
                              value={userData.billingAddress?.pinCode || ""}
                            ></input>
                          ) : (
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="Your Zip Code"
                              required="true"
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     phoneNumber: e.target.value,
                              //   }))
                              // }
                              value={userData.billingAddress?.pinCode || ""}
                              disabled
                            ></input>
                          )}
                        </div>

                        {/* <div className="w-[90%]">
                          <label
                            htmlFor="state"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            State
                          </label>
                          {isEdit ? (
                            <input
                              type="text"
                              name="state"
                              id="state"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              required="true"
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  state: e.target.value,
                                }))
                              }
                              value={userData.state}
                            ></input>
                          ) : (
                            <input
                              type="text"
                              name="state"
                              id="state"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              placeholder="name@domain.com"
                              required="true"
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     state: e.target.value,
                              //   }))
                              // }
                              disabled
                              value={userData.state}
                            ></input>
                          )}
                        </div> */}

                        {/* <div className="w-[90%]">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            Nation
                          </label>
                          {isEdit ? (
                            <select
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  country: e.target.value,
                                }))
                              }
                              value={userData.country || "Not Selected"}
                            >
                              <option value="Not Selected">Not Selected</option>
                              <option value="Australia">Australia</option>
                              <option value="Canada">Canada</option>
                              <option value="Germany">Germany</option>
                              <option value="India">India</option>
                              <option value="Mexico">Mexico</option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="USA">United States</option>
                            </select>
                          ) : (
                            <select
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              // onChange={(e) =>
                              //   setUserData((prev) => ({
                              //     ...prev,
                              //     country: e.target.value,
                              //   }))
                              // }
                              disabled
                              value={userData.country}
                            >
                              <option value="Australia">Australia</option>
                              <option value="Canada">Canada</option>
                              <option value="Germany">Germany</option>
                              <option value="India">India</option>
                              <option value="Mexico">Mexico</option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="USA">United States</option>
                            </select>
                          )}
                        </div> */}
                      </div>
                    </div>

                    {/* <div className="pt-8 pb-4 flex justify-center items-center">
                      {isEdit ? (
                        <div
                          onClick={updateUserProfileData}
                          className="group border-[1px] cursor-pointer relative px-6 py-2 text-white text-sm rounded-full border-green-500 bg-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                        >
                          <span className="relative flex-[8] text-center">
                            Save Changes
                          </span>
                          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-black group-hover:text-green-500">
                            <TiArrowRight className=" text-lg" />
                          </span>
                        </div>
                      ) : (
                        <div
                          onClick={() => setIsEdit(true)}
                          className="group border-[1px] relative px-6 py-2 text-white text-sm rounded-full border-green-500 bg-green-500 
                          cursor-pointer  font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                        >
                          <span className="relative flex-[8] text-center">
                            Edit Profile
                          </span>
                          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-black group-hover:text-green-500">
                            <TiArrowRight className=" text-lg" />
                          </span>
                        </div>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfile;
