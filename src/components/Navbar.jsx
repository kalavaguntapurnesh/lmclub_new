import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LMDark.webp";
import { FaAngleDown } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import network from "../assets/network.webp";
import broadcast from "../assets/broadcast.webp";
import beehive from "../assets/beehive.webp";
import enroll from "../assets/enroll.webp";
import estore from "../assets/estore.webp";
import LMDark from "../assets/LMDark.webp";
import phone from "../assets/NavPhone.png";
import phoneTwo from "../assets/NavPhoneTwo.png";
import LMDarkLogo from "../assets/LMDarkLogo.webp";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = storedCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartItemsCount(totalQuantity);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown and close others
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // close if the same dropdown is clicked
    } else {
      setOpenDropdown(dropdown); // open the clicked dropdown
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex items-center">
          <img
            src={LMDarkLogo}
            className={` ${
              isScrolled
                ? "md:w-[56px] md:h-[56px] w-[52px] h-[52px]"
                : "md:w-[56px] md:h-[56px] w-[52px] h-[52px]"
            }`}
            alt="logo"
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8 items-center">
          <Tabs />
        </ul>

        <div className="lg:flex hidden relative mr-5">
          <a href="/selected-plan/cart" className="cursor-pointer">
            <CiShoppingCart className="md:w-8 md:h-8 w-4 h-4"></CiShoppingCart>
          </a>
          <div className="absolute top-[-8px] right-[-8px] text-[10px] bg-red-500 text-white rounded-full px-2 py-1">
            <h1>{cartItemsCount}</h1>
          </div>
        </div>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/login"
            className={`border-[1px] border-green-500 font-semibold text-green-500 relative lg:px-[28px] md:px-4 py-2 bg-trumpOne  text-sm overflow-hidden transition-all rounded-full ${
              isScrolled
                ? "border-green-500 font-semibold text-green-500"
                : "font-semibold text-green-500"
            }`}
          >
            <span className="relative z-10">Login / Register</span>
          </a>
        </div>

        <div className="lg:hidden flex gap-6">
          <div className="relative">
            <a href="/selected-plan/cart" className="cursor-pointer">
              <CiShoppingCart className="w-7 h-7"></CiShoppingCart>
            </a>
            <div className="absolute top-[-8px] right-[-8px] text-[8px] bg-red-500 text-white rounded-full px-2 py-1">
              <h1>{cartItemsCount}</h1>
            </div>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose
                className={`w-5 h-5 ${
                  isScrolled ? "text-black" : "text-black"
                }`}
              />
            ) : (
              <RiMenu3Fill
                className={`w-5 h-5 ${
                  isScrolled ? "text-black" : "text-black"
                }`}
              />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "lg:hidden fixed left-[-100%] h-[100%] ease-in-out duration-1000 "
              : "lg:hidden fixed left-0 top-0 w-[100%] h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <div className="flex flex-row w-[100%] px-5 mt-6 justify-between items-center">
            <a href="/" className="w-[50%]">
              <img src={logo} className="w-[70px] h-auto " alt="logo" />
            </a>
            <div className="mb-4 flex justify-end w-[50%]">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <AiOutlineClose className="w-[22px] h-[22px] text-black" />
              </button>
            </div>
          </div>

          <ul className="p-4 mt-4">
            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a] font-medium"
              >
                About LM Club
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "home"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "home" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/learn-about-us"
                        className="block text-sm text-gray-700"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/learn-about-us#about_founder"
                        className="block text-sm text-gray-700"
                      >
                        Our Leadership
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/privacy-policy"
                        className="block text-sm text-gray-700"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/rewards"
                        className="block text-sm text-gray-700"
                      >
                        Widget Rewards
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("services")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a] font-medium"
              >
                Our Widgets
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "services"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "services" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a href="/grow" className="block text-sm text-gray-700">
                        Grow
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/beehive"
                        className="block text-sm text-gray-700"
                      >
                        Beehive
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/broadcast"
                        className="block text-sm text-gray-700"
                      >
                        Broadcast
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a href="/estore" className="block text-sm text-gray-700">
                        Estore
                      </a>
                    </li>

                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/network"
                        className="block text-sm text-gray-700"
                      >
                        Network
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a] font-medium"
              >
                Membership Plans
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "products"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "products" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/pricing"
                        className="block text-sm text-gray-700"
                      >
                        Bronze
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/pricing"
                        className="block text-sm text-gray-700"
                      >
                        Silver
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/pricing"
                        className="block text-sm text-gray-700"
                      >
                        Gold
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/pricing"
                        className="block text-sm text-gray-700"
                      >
                        Platinum
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("technologies")}
                className="flex items-center justify-between cursor-pointer text-[#1a1a1a] font-medium"
              >
                Our Resources
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "technologies"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "technologies" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a
                        href="/contact-us"
                        className="block text-sm text-gray-700"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a href="/events" className="block text-sm text-gray-700">
                        Upcoming Events
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center">
                      <a href="/blogs" className="block text-sm text-gray-700">
                        Blogs & News
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <div className="h-[200px] flex flex-row items-center justify-center">
              <img src={phone} alt="phone" className="h-full" />
              <img src={phoneTwo} alt="phone" className="h-full" />
            </div>

            <li className="px-4 mt-10 w-[100%] flex justify-center items-center">
              <a
                href="/login"
                className="border-[1px] relative py-[10px] bg-trumpOne text-white rounded-full border-green-500 text-sm bg-green-500 flex justify-center items-center font-semibold overflow-hidden text-center w-[90%]"
              >
                <span className="relative z-10">Login / Register</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors ${
        selected === tab ? " bg-white text-gray-700" : "text-gray-700"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-[100%] bg-white rounded-lg shadow p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden " key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-white"
    />
  );
};

const WidgetsBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/grow"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={enroll} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Grow</h1>
            <p className="text-gray-800 text-sm">
              Enroll earn rewards for helping our community to expand. T & C
              apply.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/beehive"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={beehive} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Beehive</h1>
            <p className="text-gray-800 text-sm">
              Unlock the Beehive. It will allow us to text / email great deals,
              coupons,
            </p>
          </div>
        </div>
      </a>

      <a
        href="/broadcast"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={broadcast} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Broadcast</h1>
            <p className="text-gray-800 text-sm">
              Activate Broadcast to advertise local businesses on your social
              media
            </p>
          </div>
        </div>
      </a>

      <a
        href="/estore"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={estore} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Estore</h1>
            <p className="text-gray-800 text-sm">
              Activate E-Store and we will share a percentage of our profits
              with you.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/network"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={network} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Network</h1>
            <p className="text-gray-800 text-sm">
              Activate Network today to connect with like-minded individuals
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/blogs"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Blogs & News</h1>
            <p className="text-gray-800 text-sm">
              Reach out to us for assistance
            </p>
          </div>
        </div>
      </a>

      <a
        href="/events"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Upcoming Events</h1>
            <p className="text-gray-800 text-sm">
              Get to know more about upcoming events.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/videos"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Videos</h1>
            <p className="text-gray-800 text-sm">
              Learn more about your list of favourite items.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Homebar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/learn-about-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">About LM Club</h1>
            <p className="text-gray-800 text-sm">
              Get to know more about our mision, vision and value.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Our Leadership</h1>
            <p className="text-gray-800 text-sm">
              Know about our founders and their vision of networking.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/contact-us"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Contact Us</h1>
            <p className="text-gray-800 text-sm">
              Know about our founders and their vision of networking.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/rewards"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Widget Rewards</h1>
            <p className="text-gray-800 text-sm">
              Earn rewards for inviting new members
            </p>
          </div>
        </div>
      </a>

      <a
        href="/privacy-policy"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Privacy Policy</h1>
            <p className="text-gray-800 text-sm">
              Get to know more about privacy policy.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Membership = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      <a
        href="/pricing"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Bronze</h1>
            <p className="text-gray-800 text-sm">
              Get to know more about our mision, vision and value.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/pricing"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Silver</h1>
            <p className="text-gray-800 text-sm">
              Get to know more about our mision, vision and value.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/pricing"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Gold</h1>
            <p className="text-gray-800 text-sm">
              Get to know more about our mision, vision and value.
            </p>
          </div>
        </div>
      </a>

      <a
        href="/pricing"
        className="space-y-1 transition duration-1000 ease-in-out p-2 hover:bg-[#e6e6e6] rounded-lg"
      >
        <div className="flex flex-col items-start gap-3">
          <img src={LMDark} alt="network" className="w-10 h-10" />
          <div className="flex flex-col">
            <h1 className="text-[#1a1a1a] font-semibold">Platinum</h1>
            <p className="text-gray-800 text-sm">
              Get to know more about our mision, vision and value.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const TABS = [
  { title: "Home", Component: Homebar },
  {
    title: "Our Widgets",
    Component: WidgetsBar,
  },
  {
    title: "Membership Plans",
    Component: Membership,
  },
  {
    title: "Our Blogs",
    Component: ContactBar,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
