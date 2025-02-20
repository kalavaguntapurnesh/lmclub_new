import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./../context/AppContext";
import countriesData from "../countries.json";
import { toast } from "react-toastify";
import { TiTrash } from "react-icons/ti";
import axios from "axios";

const Addresses = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [shippingAddresses, setShippingAddresses] = useState([]);

  const defaultShippingAddress = {
    name: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
  };

  const [newShippingAddress, setNewShippingAddress] = useState(
    defaultShippingAddress
  );

  useEffect(() => {
    loadUserProfileData();
  }, []);

  useEffect(() => {
    if (userData?.shippingAddresses) {
      setShippingAddresses(userData.shippingAddresses);
      
    }
  }, [userData]);

  useEffect(() => {
    if (selectedCountry) {
      const countryObj = countriesData.find((c) => c.name === selectedCountry);
      setStates(countryObj ? countryObj.states : []);
      setSelectedState("");
      setCities([]);
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

  const addShippingAddress = async () => {
    if (
      !newShippingAddress.name ||
      !newShippingAddress.phoneNumber ||
      !newShippingAddress.country ||
      !newShippingAddress.state ||
      !newShippingAddress.city ||
      !newShippingAddress.pinCode
    ) {
      toast.error("Please fill out all fields for the new shipping address.");
      return;
    }

    const updatedShippingAddresses = [...shippingAddresses, newShippingAddress];

    try {
      const { data } = await axios.put(
        backendUrl + "/api/user/add-shipping-address",
        { userId: userData._id, shippingAddresses: updatedShippingAddresses },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success("Shipping address added successfully.");
        setShippingAddresses(updatedShippingAddresses);
        setUserData((prev) => ({
          ...prev,
          shippingAddresses: updatedShippingAddresses,
        }));
        setNewShippingAddress(defaultShippingAddress);
        loadUserProfileData(); // Refresh user data to reflect changes
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error adding shipping address.");
      console.log(error);
    }
  };

  const deleteShippingAddress = async (index) => {
    const updatedShippingAddresses = shippingAddresses.filter(
      (_, i) => i !== index
    );

    try {
      const { data } = await axios.put(
        `${backendUrl}/api/user/delete-shipping-address`,
        { userId: userData._id, shippingAddresses: updatedShippingAddresses },
        { headers: { Authorization: token } }
      );

      if (data.success) {
        toast.success("Shipping address removed.");
        setShippingAddresses(updatedShippingAddresses);
        setUserData((prev) => ({
          ...prev,
          shippingAddresses: updatedShippingAddresses,
        }));
        loadUserProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error removing shipping address.");
      console.log(error);
    }
  };

  return (
    userData && (
      <div className="w-[100%]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <p className="text-3xl font-bold text-green-500">
                  Billing & <span className="text-black">Shipping Address</span>
                </p>
                <p className="text-gray-600 text-base mt-2 mb-4">
                  These addresses will be used at checkout.
                </p>

                {/* Billing Address */}
                <div className="mt-4 bg-gray-100 px-4 py-5 shadow w-full">
                  <p className="text-2xl font-bold mt-3">BILLING ADDRESS</p>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-neutral-700 mt-3">
                    {[
                      "name",
                      "phoneNumber",
                      "country",
                      "state",
                      "city",
                      "pinCode",
                    ].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-bold">
                          {field.toUpperCase()}
                        </label>
                        <input
                          type="text"
                          className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                          value={userData.billingAddress?.[field]}
                          disabled
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Addresses */}
                <div className="mt-4 bg-gray-100 px-4 py-5 shadow w-full">
                  <p className="text-2xl font-bold mt-3">SHIPPING ADDRESSES</p>

                  {/* {userData?.shippingAddresses?.length > 0 ? (
                    shippingAddresses.map((address, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white p-3 mt-3 rounded shadow"
                      >
                        <p>{`${address.name}, ${address.phoneNumber}, ${address.city}, ${address.state}, ${address.country}, ${address.pinCode}`}</p>
                        <button
                          onClick={() => deleteShippingAddress(index)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          <TiTrash />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 mt-3">
                      No shipping addresses added.
                    </p>
                  )} */}

                  <p className="mt-6 text-lg font-bold">
                    Add New Shipping Address
                  </p>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-neutral-700 mt-3">
                    {[
                      "name",
                      "phoneNumber",
                      "country",
                      "state",
                      "city",
                      "pinCode",
                    ].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-bold">
                          {field.toUpperCase()}
                        </label>
                        <input
                          type="text"
                          className="border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5"
                          value={newShippingAddress[field]}
                          onChange={(e) =>
                            setNewShippingAddress({
                              ...newShippingAddress,
                              [field]: e.target.value,
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={addShippingAddress}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Add Address
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

export default Addresses;
