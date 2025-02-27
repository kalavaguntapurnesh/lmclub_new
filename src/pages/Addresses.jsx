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
  const [useBillingAsShipping, setUseBillingAsShipping] = useState(false);

  const defaultShippingAddress = {
    firstName: "",
    lastName: "",
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
    if (useBillingAsShipping && userData.billingAddress) {
      setNewShippingAddress(userData.billingAddress);
    } else {
      setNewShippingAddress(defaultShippingAddress);
    }
  }, [useBillingAsShipping, userData]);

  const addShippingAddress = async () => {
    if (
      !newShippingAddress.firstName ||
      !newShippingAddress.lastName ||
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
      console.log("The shipping address is : ", updatedShippingAddresses);
      const { data } = await axios.put(
        backendUrl + "/api/user/add-shipping-address",
        { userId: userData._id, shippingAddresses: [newShippingAddress] },
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
        setUseBillingAsShipping(false);
        loadUserProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error adding shipping address.");
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

                <div className="mt-2 bg-gray-100 px-4 py-5 shadow w-full">
                  <p className="text-2xl font-bold ">Billing Address</p>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 text-neutral-700 mt-3">
                    {[
                      "firstName",
                      "lastName",
                      "country",
                      "state",
                      "city",
                      "pinCode",
                      "phoneNumber",
                    ].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-bold mb-1">
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

                <div className="border-b border-gray-800"></div>

                <div className="mt-4 mb-4">
                  <p className="text-2xl font-bold">
                    Existing Shipping Addresses
                  </p>
                  {shippingAddresses.length > 0 ? (
                    shippingAddresses.map((address, index) => (
                      <div key={index} className="bg-gray-200 p-4 mt-2 rounded">
                        <p>{`${address.firstName} ${address.lastName}, ${address.phoneNumber}, ${address.city}, ${address.state}, ${address.country}, ${address.pinCode}`}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No shipping addresses available.
                    </p>
                  )}
                </div>

                <div className=" bg-gray-100 px-4 py-5 shadow w-full">
                  <p className="text-2xl font-bold ">
                    Add New Shipping Address
                  </p>

                  <div className="mt-3 flex items-center">
                    <input
                      type="checkbox"
                      id="sameAsBilling"
                      checked={useBillingAsShipping}
                      onChange={() =>
                        setUseBillingAsShipping(!useBillingAsShipping)
                      }
                      className="mr-2"
                    />
                    <label htmlFor="sameAsBilling" className="text-base">
                      Make Shipping Address same as Billing Address
                    </label>
                  </div>

                  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 text-neutral-700 mt-3">
                    {[
                      "firstName",
                      "lastName",
                      "country",
                      "state",
                      "city",
                      "pinCode",
                      "phoneNumber",
                    ].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-bold mb-1">
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
                          disabled={useBillingAsShipping}
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
