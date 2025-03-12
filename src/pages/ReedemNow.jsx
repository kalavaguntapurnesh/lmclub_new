import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../assets/LMDark.webp"
import WhatsApp from "../components/WhatsApp.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
// import { useContext } from "react";
// import { AppContext } from "./../context/AppContext";

import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Import icons
// const { userData, token, backendUrl } = useContext(AppContext);
const RedeemForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    points: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email.";
    if (formData.phone && !formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (formData.points && isNaN(formData.points))
      newErrors.points = "Points must be a number.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('localhost:4000/api/user/redeemForm', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setPopupMessage("Form submitted successfully!");
          setShowPopup(true);
          setFormData({ name: "", email: "", phone: "", points: "", message: "" });
          setErrors({});
        } else {
          setPopupMessage("Failed to submit the form.");
          setShowPopup(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setPopupMessage("Server error. Please try again later.");
        setShowPopup(true);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <ScrollToTop />
       <WhatsApp />
      <div className="flex flex-1 flex-col items-center pt-20 mt-20">
        <h1 className="text-3xl text-green-600 font-bold text-center mb-4">
          Reach Out to Us Anytime for Assistance
        </h1>

        {/* Social Links */}
        <div className="flex justify-center gap-10 mb-6 text-2xl pt-5 pb-5">
          <a href="https://www.linkedin.com/company/laoe-maom" className="text-[#1a1a1a] hover:text-[#1a1a1a]">
            <FaLinkedin />
          </a>
          <a href="https://x.com/RichardLMCLUB" className="text-[#1a1a1a] hover:text-[#1a1a1a]">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/laoemaomclub/" className="text-[#1a1a1a] hover:text-[#1a1a1a]">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@lmclub0" className="text-[#1a1a1a] hover:text-[#1a1a1a]">
            <FaTiktok />
          </a>
          <a href="https://www.facebook.com/people/Laoe-Maom/100063772398711/#" className="text-[#1a1a1a] hover:text-[#1a1a1a]">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/watch?v=g16zVRWJpxA" className="text-[#1a1a1a] hover:text-[#1a1a1a]">
            <FaYoutube />
          </a>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-3/4 max-w-3xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label className="block font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label className="block font-semibold">Would you like to redeem points?</label>
              <input
                type="text"
                name="points"
                value={formData.points}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter the points you'd like to redeem"
              />
              {errors.points && <p className="text-red-500 text-sm">{errors.points}</p>}
            </div>

            <div className="space-y-2">
              <label className="block font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your message"
                rows="3"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
      {/* Logo and Title */}
      <div className="flex items-center justify-center gap-2">
        <img
         src={Logo}
                                  alt="LM Club"
                                  className="w-12 h-12 absolute top-4 left-4"
                                />
        <h2 className="text-3xl font-bold">
          LM <span className="text-green-600">Club</span>
        </h2>
      </div>

      <div className="flex flex-col items-center mt-4">
        <FaCheckCircle className="text-green-600 text-5xl" />
        <p className="text-gray-700 text-lg text-center mt-2">
          Form submitted successfully!
        </p>
      </div>
     
      <button
        onClick={() => setShowPopup(false)}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-full"
      >
        OK
      </button>
    </div>
  </div>


      )}

      <Footer />
    </div>
  );
};

export default RedeemForm;