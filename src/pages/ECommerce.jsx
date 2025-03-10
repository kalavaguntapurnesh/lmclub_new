import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";
import EOne from "../assets/ECommerceTwo.jpg";
import ECommerceThree from "../assets/ECommerceThree.jpg";
import ECommerceFour from "../assets/ECommerceFour.jpg";
import star from "../assets/star.svg";
import ECommerceHero from "../assets/ECommerce.jpg";
import { useNavigate } from "react-router-dom";
import PS from "../assets/PS.svg";
import AS from "../assets/AS.svg";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import p13 from "../assets/p13.png";
import p14 from "../assets/p14.png";
import p16 from "../assets/p16.png";
import p17 from "../assets/p17.png";
import Hoodie from "../assets/Hoodie.png";
import Beanie from "../assets/Beanie.png";
import Bottle from "../assets/Bottle.png";
import Book from "../assets/Book.png";
import Watch from "../assets/Watch.png";
import LMTshirt from "../assets/LMTshirt.png";
import WaterBottle from "../assets/WaterBottle.png";
import Mug from "../assets/Mug2.png";
import exchange_icon from "../assets/exchange_icon.png";
import quality_icon from "../assets/quality_icon.png";
import support_img from "../assets/support_img.png";
import { useEffect, useState } from "react";
import dropdown_icon from "../assets/dropdown_icon.png";

import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
const ECommerce = () => {
  const { userData, backendUrl } = useContext(AppContext);
  // const { userData, setUserData, token, backendUrl, loadUserProfileData } =
  //     useContext(AppContext);
  const products = [
    {
      _id: "aaaaa",
      name: "LM Club Hoodie",
      descriptionThree: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and shorr, worn as an hoodie or outer garment.",
      descriptionTwo:
        "Embrace warmth and style with our LM Club Hoodie, designed for ultimate coziness and functionality. Crafted from a high-quality cotton-polyester blend, this hoodie provides insulation without feeling bulky. Featuring a front pocket and adjustable drawstring hood, it’s perfect for layering during colder seasons. Whether you're lounging at home, heading to a casual meet-up, or braving the chilly weather, this hoodie has you covered.",
      price: 39.99,
      originalPrice: 69.99,
      rating: 4.9,
      reviews: 135,
      brand: "Jockey",
      specialFeature: "Crew Neck",
      color: "White",
      materialType: "94% cotton. 6% spandex",
      ageRange: "Adult",
      capacity: "1 Person",
      itemDimensions: "38 Inches (L)",
      itemWeight: "1.2 ounces",
      noOfItems: "1",
      recommendedUse: "Travel, Workouts, Camping, Hiking",
      theme: "Sport",
      originCountry: "USA",
      origin: "Local",
      image: [Hoodie, p13, p3, p6],
      category: "Garment",
      subCategory: "Cotton",
      date: 1716634345448,
      bestseller: true,
    },
    {
      _id: "aaaab",
      name: "LM Club Sipper: Thermo Steel",
      descriptionThree: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      descriptionTwo:
        "Stay hydrated in style with the LM Club Thermo Steel Sipper. Engineered with double-wall insulation, this bottle keeps your beverages hot for up to 12 hours or cold for 24 hours. Its sleek design and leak-proof lid make it the ideal companion for gym workouts, office hours, or outdoor adventures. Made from high-quality stainless steel, it’s durable, eco-friendly, and easy to carry.",
      price: 14.99,
      originalPrice: 43.99,
      rating: 4.8,
      reviews: 431,
      brand: "CIVAGO",
      specialFeature: "Leak Proof",
      color: "Stainless Steel",
      materialType: "Steel",
      ageRange: "Adult",
      capacity: "2 Pounds",
      itemDimensions: "4.5 W x 9.84 H",
      itemWeight: "12.8 ounces",
      noOfItems: "1",
      recommendedUse: "Travel, Workouts, Camping, Hiking",
      theme: "Sport",
      originCountry: "USA",
      origin: "Local",
      image: [Bottle, p1, p5],
      sizes: ["M", "L", "XL"],
      date: 1716621345448,
      bestseller: true,
      category: "Drinkware",
      subCategory: "ThermoSteel",
    },
    {
      _id: "aaaac",
      name: "LM Club Coffee Mug",
      descriptionThree: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      descriptionTwo:
        "Start your mornings with the LM Club Coffee Mug, an elegant ceramic mug designed for coffee lovers. With a comfortable grip and a sturdy build, it’s perfect for enjoying hot coffee, tea, or any beverage of your choice. The high-gloss finish and LM Club branding add a touch of sophistication to your drinkware collection. Microwave and dishwasher safe, this mug is both stylish and practical for everyday use.",
      price: 11.99,
      image: [Mug, p11, p14],
      originalPrice: 19.99,
      rating: 4.9,
      reviews: 249,
      brand: "LE TAUCI",
      materialType: "Ceramic",
      specialFeature: "Microwave Safe",
      color: "Arctic White",
      ageRange: "Adult",
      capacity: "1.2 ounces",
      itemDimensions: "3.7 W x 4.4 H",
      itemWeight: "1 Pounds",
      noOfItems: "1",
      recommendedUse: "Wedding, Holiday, Valentine's Day",
      theme: "Everyday Use",
      originCountry: "USA",
      origin: "Local",
      category: "Drinkware",
      subCategory: "Ceramic",
    },
    {
      _id: "aaaad",
      name: "LM Club Water Bottle",
      descriptionThree: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      descriptionTwo:
        "Start your mornings with the LM Club Coffee Mug, an elegant ceramic mug designed for coffee lovers. With a comfortable grip and a sturdy build, it’s perfect for enjoying hot coffee, tea, or any beverage of your choice. The high-gloss finish and LM Club branding add a touch of sophistication to your drinkware collection. Microwave and dishwasher safe, this mug is both stylish and practical for everyday use.",
      image: [WaterBottle, p17, WaterBottle],
      price: 9.99,
      originalPrice: 19.99,
      rating: 4.9,
      reviews: 249,
      brand: "CIVAGO",
      specialFeature: "Leak Proof",
      color: "Stainless Steel",
      materialType: "Steel",
      ageRange: "Adult",
      capacity: "2 Pounds",
      itemDimensions: "4.5 W x 9.84 H",
      itemWeight: "12.8 ounces",
      noOfItems: "1",
      recommendedUse: "Travel, Workouts, Camping, Hiking",
      theme: "Sport",
      originCountry: "China",
      origin: "Imported",
      category: "Drinkware",
      subCategory: "ThermoSteel",
    },
    {
      _id: "aaaae",
      name: "LM Club T-Shirt: White",
      descriptionThree: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      descriptionTwo:
        "Experience ultimate comfort with our LM Club T-Shirt, crafted from premium cotton for a soft and breathable feel. Designed with a stylish fit and the exclusive LM Club logo, this T-shirt is perfect for casual wear, workouts, or everyday outings. Show your club pride while staying effortlessly cool and comfortable.",
      image: [LMTshirt, p16, p7],
      price: 7.99,
      originalPrice: 15.99,
      rating: 4.9,
      reviews: 114,
      brand: "Jockey",
      specialFeature: "Crew Neck",
      color: "White",
      materialType: "94% cotton. 6% spandex",
      ageRange: "Adult",
      capacity: "1 Person",
      itemDimensions: "38 Inches (L)",
      itemWeight: "1.2 ounces",
      noOfItems: "1",
      recommendedUse: "Travel, Workouts, Camping, Hiking",
      theme: "Sport",
      originCountry: "USA",
      origin: "Local",
      category: "Garment",
      subCategory: "Cotton",
    },
    {
      _id: "aaaaf",
      name: "LM Club Spiral: Book",
      descriptionThree: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      descriptionTwo:
        "Experience ultimate comfort with our LM Club T-Shirt, crafted from premium cotton for a soft and breathable feel. Designed with a stylish fit and the exclusive LM Club logo, this T-shirt is perfect for casual wear, workouts, or everyday outings. Show your club pride while staying effortlessly cool and comfortable.",
      image: [Book, Book, Book, Book],
      price: 4.99,
      originalPrice: 9.99,
      rating: 4.9,
      reviews: 114,
      brand: "Class Mate",
      specialFeature: "Paper Back",
      color: "Grey",
      materialType: "100% Paper",
      ageRange: "All Age Types",
      capacity: "170 Pages",
      itemDimensions: "40 Inches (L)",
      itemWeight: "1.2 ounces",
      noOfItems: "1",
      recommendedUse: "Travel, Workouts, Camping, Hiking",
      theme: "Education",
      originCountry: "India",
      category: "Stationery",
      subCategory: "Topwear",
      origin: "Imported",
    },
    {
      _id: "aaaag",
      name: "LM Club Beanie: Woolen Cloth",
      descriptionThree: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      descriptionTwo:
        "Stay hydrated in style with the LM Club Thermo Steel Sipper. Engineered with double-wall insulation, this bottle keeps your beverages hot for up to 12 hours or cold for 24 hours. Its sleek design and leak-proof lid make it the ideal companion for gym workouts, office hours, or outdoor adventures. Made from high-quality stainless steel, it’s durable, eco-friendly, and easy to carry.",
      image: [Beanie, Beanie, Beanie, Beanie],
      price: 3.99,
      originalPrice: 10.99,
      rating: 4.8,
      reviews: 431,
      brand: "Wmcaps",
      specialFeature: "100% Acrylic",
      color: "Black",
      materialType: "Elastic",
      ageRange: "Adult Wear",
      capacity: "170 Pages",
      itemDimensions: "40 Inches (L)",
      itemWeight: "1.2 ounces",
      noOfItems: "1",
      recommendedUse: "Travel, Workouts, Camping, Hiking",
      theme: "Healthcare",
      originCountry: "India",
      origin: "Imported",
      category: "Garment",
      subCategory: "Woolen",
    },
    {
      _id: "aaaah",
      name: "LM Club : Smart Watch",
      descriptionThree: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      descriptionTwo:
        "Stay hydrated in style with the LM Club Thermo Steel Sipper. Engineered with double-wall insulation, this bottle keeps your beverages hot for up to 12 hours or cold for 24 hours. Its sleek design and leak-proof lid make it the ideal companion for gym workouts, office hours, or outdoor adventures. Made from high-quality stainless steel, it’s durable, eco-friendly, and easy to carry.",
      image: [Watch, p2, p12],
      price: 60.99,
      originalPrice: 107.99,
      rating: 4.8,
      reviews: 431,
      brand: "Wmcaps",
      specialFeature: "100% Acrylic",
      color: "Black",
      materialType: "Plastic",
      ageRange: "Adult Wear",
      capacity: "350 Milliamp Hours",
      itemDimensions: "1.83 Inches",
      itemWeight: "1.2 ounces",
      noOfItems: "1",
      recommendedUse: "Travel, Workouts, Camping, Hiking",
      theme: "Electronics",
      originCountry: "USA",
      origin: "Local",
      category: "Electronics",
      subCategory: "Plastic",
    },
  ];

  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product-overview/${product.id}`, { state: { product } });
    scrollTo(0, 0);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("relavant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      console.log("Value is : ", e.target.value);

      setCategory((prev) => prev.filter((item) => item !== e.target.value));
      //above line means it will remove the item if it doesn't match the targetted value..
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice(); // this will create a copy of products

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filteredProductsCopy = filterProducts.slice(); // this will create a copy of filtered products

    switch (sortType) {
      case "low-high":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => a.price - b.price)
        );
        break;

      case "high-low":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => b.price - a.price)
        );
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div>
      {
        userData ? "": <Navbar />
      }
      <ScrollToTop />
      <WhatsApp />
      <div className="lg:pt-36 pt-28">
        <div className="relative ">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                  <div className="flex justify-start flex-col">
                    <div>
                      <div className="flex items-center justify-start ">
                        <div className="h-4 w-1 bg-green-500"></div>
                        <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                          LMClub Merchandise
                        </h1>
                      </div>
                      <h2 className="pt-3 lg:text-[44px] lg:leading-[50px] text-3xl font-bold text-black text-start">
                        Streamline your daily needs
                        <br className="lg:block hidden" />
                        with our Merchandise.
                      </h2>
                    </div>
                    <div>
                      <p className="pt-4 text-gray-600 text-start">
                        Designed to complement your lifestyle, our products
                        bring functionality, style,
                        <br className="lg:block hidden" />
                        and reliability to your daily routine with our exclusive
                        merchandise!
                      </p>

                      <p className="pt-4 text-gray-600 text-start">
                        Enhance your everyday experience with our premium
                        merchandise! Crafted with{" "}
                        <br className="lg:block hidden" /> comfort, efficiency,
                        and style, our collection ensures you have everything.
                      </p>
                    </div>
                    <div className="pt-6 flex flex-row items-center justify-start lg:gap-6 gap-4">
                      <a
                        href="https://apps.apple.com/us/app/lm-club/id6469708246"
                        className="group flex flex-row border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden items-center gap-2 w-[200px] "
                      >
                        <span className="relative flex-[8] text-center">
                          Get on App Store
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 flex-[2] mb-[1px] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <img src={AS} alt="AS" className="w-6 h-6" />
                        </span>
                      </a>

                      <a
                        href="https://play.google.com/store/apps/details?id=com.lm.lmclub&hl=en_US"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] "
                      >
                        <span className="relative flex-[8] text-center">
                          Get on Play Store
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 flex-[2] mb-[1px] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <img src={PS} alt="PS" className="w-6 h-6" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <img src={ECommerceHero} alt="image" className="rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="relative ">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div>
                  <div className="flex flex-wrap flex-col lg:items-start items-center pb-3">
                    <div className="lg:text-start text-center leading-relaxed font-bold text-black">
                      <p className="lg:text-3xl text-2xl">
                        Today&apos;s Trending Searches
                      </p>
                    </div>
                    <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-6">
                  <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-[100%] h-[160px] rounded overflow-hidden">
                    <div className="flex flex-row w-[100%] justify-between h-[100%]">
                      <div className="px-4 pt-4 space-y-2 h-[100%]  w-[65%]">
                        <p className="font-bold text-green-500">#PromoToday</p>
                        <h1 className="font-bold text-xl">
                          Purchase our best kitchen ware
                        </h1>
                        <button className="bg-green-500 text-center font-medium px-6 py-1.5 rounded text-sm">
                          Buy Now
                        </button>
                      </div>

                      <div className="overflow-hidden h-40  w-[35%]">
                        <img
                          src={EOne}
                          alt="image"
                          className="overflow-hidden w-40 h-[100%]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-[100%] h-[160px] rounded overflow-hidden">
                    <div className="flex flex-row w-[100%] justify-between h-[100%]">
                      <div className="px-4 pt-4 space-y-2 h-[100%]  w-[65%]">
                        <p className="font-bold text-green-500">#PromoToday</p>
                        <h1 className="font-bold text-xl">
                          Purchase our best kitchen ware
                        </h1>
                        <button className="bg-green-500 text-center font-medium px-6 py-1.5 rounded text-sm">
                          Buy Now
                        </button>
                      </div>

                      <div className="overflow-hidden h-40  w-[35%]">
                        <img
                          src={ECommerceFour}
                          alt="image"
                          className="overflow-hidden w-40 h-[100%]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-[100%] h-[160px] rounded overflow-hidden">
                    <div className="flex flex-row w-[100%] justify-between h-[100%]">
                      <div className="px-4 pt-4 space-y-2 h-[100%]  w-[65%]">
                        <p className="font-bold text-green-500">#PromoToday</p>
                        <h1 className="font-bold text-xl">
                          Purchase our best kitchen ware
                        </h1>
                        <button className="bg-green-500 text-center font-medium px-6 py-1.5 rounded text-sm">
                          Buy Now
                        </button>
                      </div>

                      <div className="overflow-hidden h-40  w-[35%]">
                        <img
                          src={ECommerceThree}
                          alt="image"
                          className="overflow-hidden w-40 h-[100%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 lg:mt-24 mt-12">
                  {/* filter options */}

                  <div className="min-w-60">
                    <p
                      onClick={() => setShowFilter(!showFilter)}
                      className="my-2 text-xl font-semibold flex items-center cursor-pointer gap-2"
                    >
                      FILTERS
                      <img
                        src={dropdown_icon}
                        className={`h-3 sm:hidden ${
                          showFilter ? "rotate-90" : ""
                        }`}
                        alt=""
                      />
                    </p>

                    {/* Category Filter */}

                    <div
                      className={` border border-gray-300 pl-5 py-3 mt-6 ${
                        showFilter ? " " : "hidden"
                      } sm:block`}
                    >
                      <p className="mb-3 text-sm font-semibold">CATEGORIES</p>
                      <div className="flex flex-col gap-2 text-sm font-normal uppercase text-gray-800">
                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"Garment"}
                            id=""
                            onChange={toggleCategory}
                          />
                          Garments
                        </p>

                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"Drinkware"}
                            id=""
                            onChange={toggleCategory}
                          />
                          Drinkware
                        </p>

                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"Electronics"}
                            id=""
                            onChange={toggleCategory}
                          />
                          Electronics
                        </p>

                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"Stationery"}
                            id=""
                            onChange={toggleCategory}
                          />
                          Stationery
                        </p>
                      </div>
                    </div>

                    {/* Sub Category Filter */}

                    <div
                      className={` border border-gray-300 pl-5 py-3 my-5 mt-6 ${
                        showFilter ? " " : "hidden"
                      } sm:block`}
                    >
                      <p className="mb-3 text-sm font-semibold">PRODUCT TYPE</p>
                      <div className="flex flex-col gap-2 text-sm font-normal uppercase text-gray-800">
                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"ThermoSteel"}
                            id=""
                            onChange={toggleSubCategory}
                          />
                          THERMO STEEL
                        </p>

                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"Ceramic"}
                            id=""
                            onChange={toggleSubCategory}
                          />
                          Ceramic
                        </p>

                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"Plastic"}
                            id=""
                            onChange={toggleSubCategory}
                          />
                          Plastic
                        </p>

                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"Cotton"}
                            id=""
                            onChange={toggleSubCategory}
                          />
                          Cotton Products
                        </p>

                        <p className="flex gap-2">
                          <input
                            type="checkbox"
                            name=""
                            className="w-3"
                            value={"Woolen"}
                            id=""
                            onChange={toggleSubCategory}
                          />
                          Woolen Products
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}

                  <div className="flex-1 ">
                    <div className="flex justify-between text-base sm:text-2xl mb-4">
                      <div className="lg:flex hidden flex-wrap flex-col lg:items-start items-center pb-3">
                        <div className="lg:text-start text-center leading-relaxed font-bold text-black">
                          <p className="lg:text-3xl text-2xl">
                            Top Picks for you
                          </p>
                        </div>
                        <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                      </div>

                      {/* Product Sorting */}

                      <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border-2 border-gray-300 text-sm px-2"
                      >
                        <option value="relavant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                      </select>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                      {filterProducts.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleProductClick(product)}
                          className="flex md:justify-start justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded cursor-pointer"
                        >
                          <div className="space-y-2 w-[100%] rounded">
                            <div className="w-[100%]">
                              <img
                                src={product.image[0]}
                                alt="about_one"
                                className={`w-[100%] h-[240px] ${
                                  product.id === 1 ? "" : "object-contain"
                                }`}
                              />
                            </div>

                            <div className="flex px-3 pt-2 md:justify-start justify-center items-center">
                              <h1 className="text-xl font-bold text-center lg:text-start">
                                {product.title}
                              </h1>
                            </div>
                            <div className="px-3 flex md:justify-start justify-center  items-center text-gray-600 lg:text-start text-center text-[14px] leading-[22px]">
                              <p>{product.descriptionThree}</p>
                            </div>

                            <div className="px-3 flex flex-row items-center gap-2">
                              <p className="font-bold">{product.rating} / 5</p>
                              <div className="flex flex-row gap-1 items-center">
                                <img
                                  src={star}
                                  alt="start"
                                  className="w-4 h-4"
                                />
                                <img
                                  src={star}
                                  alt="start"
                                  className="w-4 h-4"
                                />
                                <img
                                  src={star}
                                  alt="start"
                                  className="w-4 h-4"
                                />
                                <img
                                  src={star}
                                  alt="start"
                                  className="w-4 h-4"
                                />
                                <img
                                  src={star}
                                  alt="start"
                                  className="w-4 h-4"
                                />
                              </div>
                              <p className="text-gray-500">
                                ({product.reviews})
                              </p>
                            </div>

                            <div className="px-3 pb-3 flex lg:justify-start justify-center">
                              <h1 className="text-lg font-bold text-center lg:text-start">
                                ${product.price}{" "}
                                <span className="line-through">
                                  ${product.originalPrice}
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="relative ">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
                  <div>
                    <img
                      src={exchange_icon}
                      className="w-12 m-auto mb-5"
                      alt=""
                    />
                    <p className="font-semibold">Easy Exchange Policy</p>
                    <p className="text-gray-400">
                      We offer hassle free exchange policy
                    </p>
                  </div>

                  <div>
                    <img
                      src={quality_icon}
                      className="w-12 m-auto mb-5"
                      alt=""
                    />
                    <p className="font-semibold">7 days return Policy</p>
                    <p className="text-gray-400">
                      We offer hassle free exchange policy
                    </p>
                  </div>

                  <div>
                    <img
                      src={support_img}
                      className="w-12 m-auto mb-5"
                      alt=""
                    />
                    <p className="font-semibold">Best Customer Support</p>
                    <p className="text-gray-400">
                      We offer hassle free exchange policy
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">
                    Join our membership now and get 20% off
                  </p>
                  <p className="text-gray-400 mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis, esse?
                  </p>

                  <form
                    onScroll={onSubmitHandler}
                    className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-600 pl-3"
                  >
                    <input
                      type="email"
                      name=""
                      placeholder="Enter your email"
                      className="w-full sm:flex-1 outline-none"
                      required
                      id=""
                    />
                    <button
                      type="submit"
                      className="bg-green-500 text-white text-sm font-medium  lg:px-10 px-6 lg:py-4 py-3 "
                    >
                      SUBSCRIBE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        userData ? "": <Footer />
      }
      
    </div>
  );
};

export default ECommerce;
