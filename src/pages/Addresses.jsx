import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./../context/AppContext";
import { TiArrowRight } from "react-icons/ti";
import countriesData from "../countries.json";

const Addresses = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isSameAsBilling, setIsSameAsBilling] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    email: "",
    country: "",
    stateResidence: "",
    cityResidence: "",
    pinCode: "",
  });

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

  const handleCheckboxChange = () => {
    setIsSameAsBilling((prev) => !prev);
    if (!isSameAsBilling) {
      setShippingAddress({
        fullName: userData.name,
        email: userData.email,
        country: userData.country,
        stateResidence: userData.stateResidence,
        cityResidence: userData.cityResidence,
        pinCode: userData.pinCode,
      });
      setSelectedCountry(userData.country);
      setSelectedState(userData.stateResidence);
      setSelectedCity(userData.cityResidence);
      console.log("The Shipping Address is : ", shippingAddress);
    } else {
      setShippingAddress({
        fullName: "",
        email: "",
        country: "",
        state: "",
        city: "",
        pinCode: "",
      });
      setSelectedCountry("");
      setSelectedState("");
      setSelectedCity("");
    }
  };

  useEffect(() => {
    console.log("Updated Shipping Address: ", shippingAddress);
  }, [shippingAddress]);

  return (
    userData && (
      <div className="w-[100%]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="w-[100%] flex flex-col gap-2 text-sm">
                  <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="lg:text-3xl text-2xl font-bold">
                        <span className="text-green-500">Billing &, </span>{" "}
                        Shipping Address
                      </p>
                    </div>

                    <p className="text-gray-600 text-base mt-2 mb-4">
                      The following addresses will be used on the checkout page
                      by default.
                    </p>
                  </div>
                </div>

                {/* Checkbox for using same billing address */}

                {/* Billing Address Section */}
                <div className="mt-4 bg-gray-100 px-4 py-5 shadow w-full">
                  <p className="text-2xl font-bold mt-3">BILLING ADDRESS</p>
                  <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 text-neutral-700 mt-3">
                    <div>
                      <label className="block text-sm font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={userData.name}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold">Email</label>
                      <input
                        type="email"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={userData.email}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold">Country</label>
                      <input
                        type="text"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={userData.country}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold">State</label>
                      <input
                        type="text"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={userData.stateResidence}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold">City</label>
                      <input
                        type="text"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={userData.cityResidence}
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={userData.pinCode}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-6 mt-6">
                  <input
                    type="checkbox"
                    id="sameAddress"
                    checked={isSameAsBilling}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="sameAddress"
                    className="ml-2 text-sm font-medium"
                  >
                    Do you want your billing address same as shipping address?
                  </label>
                </div>

                {/* Shipping Address Section */}
                <div className="mt-4 bg-gray-100 px-4 py-5 shadow w-full">
                  <div className="flex flex-row justify-between">
                    <p className="text-2xl font-bold mt-3">SHIPPING ADDRESS</p>
                    <div
                      // onClick={updateUserProfileData}
                      className="group border-[1px] cursor-pointer relative px-6 py-[6px] text-white text-sm rounded-full border-green-400 bg-green-400 font-semibold overflow-hidden flex items-center gap-2 w-[180px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                    >
                      <span className="relative flex-[8] text-center">
                        Save Changes
                      </span>
                      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-black group-hover:text-green-400">
                        <TiArrowRight className=" text-lg" />
                      </span>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 text-neutral-700 mt-3">
                    <div>
                      <label className="block text-sm font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={shippingAddress.fullName}
                        disabled={isSameAsBilling}
                        onChange={(e) =>
                          setShippingAddress((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold">Email</label>
                      <input
                        type="email"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={shippingAddress.email}
                        disabled={isSameAsBilling}
                        onChange={(e) =>
                          setShippingAddress((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold">Country</label>
                      <select
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        value={
                          isSameAsBilling ? userData.country : selectedCountry
                        }
                        disabled={isSameAsBilling}
                      >
                        <option value="">Select Country</option>
                        {countriesData.map((country) => (
                          <option key={country.iso2} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold">State</label>
                      <select
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        onChange={(e) => setSelectedState(e.target.value)}
                        value={
                          isSameAsBilling
                            ? userData.stateResidence
                            : selectedState
                        }
                        disabled={isSameAsBilling}
                      >
                        <option value="">Select State</option>
                        {states.length > 0 &&
                          states.map((state) => (
                            <option key={state.state_code} value={state.name}>
                              {state.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold">City</label>
                      <select
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        onChange={(e) => setSelectedCity(e.target.value)}
                        value={
                          isSameAsBilling
                            ? userData.cityResidence
                            : selectedCity
                        }
                        disabled={isSameAsBilling}
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.id} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                        value={shippingAddress.pinCode}
                        disabled={isSameAsBilling}
                        onChange={(e) =>
                          setShippingAddress((prev) => ({
                            ...prev,
                            pinCode: e.target.value,
                          }))
                        }
                      />
                    </div>
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

export default Addresses;
