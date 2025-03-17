import React, { useState } from "react";
import Logo from "../assets/LMDark.webp";
import WhatsApp from "../components/WhatsApp.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
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
        const response = await fetch("http://localhost:4000/api/user/redeemForm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (data.success) {
          setShowPopup(true);
          setFormData({ name: "", email: "", phone: "", points: "", message: "" });
          setErrors({});
        } else {
          setShowPopup(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setShowPopup(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-10 w-full">
      <ScrollToTop />
      <WhatsApp />
      <h1 className="text-3xl text-green-600 font-bold text-center mb-6">
        Reach Out to Us Anytime for Assistance
      </h1>
      <div className="flex justify-center gap-6 mb-6 text-2xl">
        {[
          { href: "https://www.linkedin.com/company/laoe-maom", icon: FaLinkedin },
          { href: "https://x.com/RichardLMCLUB", icon: FaXTwitter },
          { href: "https://www.instagram.com/laoemaomclub/", icon: FaInstagram },
          { href: "https://www.tiktok.com/@lmclub0", icon: FaTiktok },
          { href: "https://www.facebook.com/people/Laoe-Maom/100063772398711/#", icon: FaFacebook },
          { href: "https://www.youtube.com/watch?v=g16zVRWJpxA", icon: FaYoutube },
        ].map(({ href, icon: Icon }, index) => (
          <a key={index} href={href} className="text-secondaryColor hover:text-green-600 transition">
            <Icon size={24} />
          </a>
        ))}
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {Object.entries(formData).map(([field, value], index) => (
            <div key={index}>
              <label className="block font-semibold capitalize">{field}</label>
              {field === "message" ? (
                <textarea
                  name={field}
                  value={value}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300 resize-none"
                  placeholder={`Enter your ${field}`}
                  rows={4}
                />
              ) : (
                <input
                  type={field === "points" ? "number" : "text"}
                  name={field}
                  value={value}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                  placeholder={`Enter your ${field}`}
                />
              )}
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
            Submit
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <div className="flex items-center justify-center gap-2">
              <img src={Logo} alt="LM Club" className="w-12 h-12 absolute top-4 left-4" />
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
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-full transition"
            >
              OK
            </button>
            <div className="text-center text-xs mt-6 text-gray-500">
              <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedeemForm;