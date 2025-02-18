import React, { useState, useEffect } from "react";
import countriesData from "../countries.json"; // Import JSON file

const CountryStateCitySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Update states when country changes
  useEffect(() => {
    if (selectedCountry) {
      const countryObj = countriesData.find((c) => c.iso2 === selectedCountry);
      setStates(countryObj ? countryObj.states : []);
      setSelectedState(""); // Reset state when country changes
      setCities([]); // Reset cities
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  // Update cities when state changes
  useEffect(() => {
    if (selectedState && selectedCountry) {
      const countryObj = countriesData.find((c) => c.iso2 === selectedCountry);
      const stateObj = countryObj?.states.find(
        (s) => s.state_code === selectedState
      );
      setCities(stateObj ? stateObj.cities : []);
    } else {
      setCities([]);
    }
  }, [selectedState, selectedCountry]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">
          Select Country, State & City
        </h2>

        {/* Country Dropdown */}
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          className="w-full p-2 border rounded-md mt-1"
          onChange={(e) => setSelectedCountry(e.target.value)}
          value={selectedCountry}
        >
          <option value="">Select Country</option>
          {countriesData.map((country) => (
            <option key={country.iso2} value={country.iso2}>
              {country.name}
            </option>
          ))}
        </select>

        {/* State Dropdown */}
        {selectedCountry && (
          <>
            <label className="block text-sm font-medium text-gray-700 mt-4">
              State
            </label>
            <select
              className="w-full p-2 border rounded-md mt-1"
              onChange={(e) => setSelectedState(e.target.value)}
              value={selectedState}
            >
              <option value="">Select State</option>
              {states.length > 0 ? (
                states.map((state) => (
                  <option key={state.state_code} value={state.state_code}>
                    {state.name}
                  </option>
                ))
              ) : (
                <option disabled>No states available</option>
              )}
            </select>
          </>
        )}

        {/* City Dropdown */}
        {selectedState && cities.length > 0 && (
          <>
            <label className="block text-sm font-medium text-gray-700 mt-4">
              City
            </label>
            <select className="w-full p-2 border rounded-md mt-1">
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryStateCitySelector;
