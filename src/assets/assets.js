import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import Hoodie from "./Hoodie.png";
import Beanie from "./Beanie.png";
import Bottle from "./Bottle.png";
import Book from "./Book.png";
import Watch from "./Watch.png";
import LMTshirt from "./LMTshirt.png";
import WaterBottle from "./WaterBottle.png";
import Mug from "./Mug2.png";

// import logo from "./logo.png";
// import hero_img from "./hero_img.png";
// import cart_icon from "./cart_icon.png";
// import bin_icon from "./bin_icon.png";
// import dropdown_icon from "./dropdown_icon.png";
// import exchange_icon from "./exchange_icon.png";
// import profile_icon from "./profile_icon.png";
// import quality_icon from "./quality_icon.png";
// import search_icon from "./search_icon.png";
// import star_dull_icon from "./star_dull_icon.png";
// import star_icon from "./star_icon.png";
// import support_img from "./support_img.png";
// import menu_icon from "./menu_icon.png";
// import about_img from "./about_img.png";
// import contact_img from "./contact_img.png";
// import razorpay_logo from "./razorpay_logo.png";
// import stripe_logo from "./stripe_logo.png";
// import cross_icon from "./cross_icon.png";

// export const assets = {
//   logo,
//   hero_img,
//   cart_icon,
//   dropdown_icon,
//   exchange_icon,
//   profile_icon,
//   quality_icon,
//   search_icon,
//   star_dull_icon,
//   star_icon,
//   bin_icon,
//   support_img,
//   menu_icon,
//   about_img,
//   contact_img,
//   razorpay_logo,
//   stripe_logo,
//   cross_icon,
// };

export const products = [
  {
    _id: "aaaaa",
    name: "LM Club Hoodie",
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
    image: [Hoodie, p6, p3, Hoodie],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaab",
    name: "LM Club Sipper: Thermo Steel",
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
    image: [Bottle, p1, p4, p5],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "LM Club Coffee Mug",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    descriptionTwo:
      "Start your mornings with the LM Club Coffee Mug, an elegant ceramic mug designed for coffee lovers. With a comfortable grip and a sturdy build, it’s perfect for enjoying hot coffee, tea, or any beverage of your choice. The high-gloss finish and LM Club branding add a touch of sophistication to your drinkware collection. Microwave and dishwasher safe, this mug is both stylish and practical for everyday use.",
    price: 220,
    image: [Mug, Mug, Mug, Mug],
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
  },
  {
    _id: "aaaad",
    name: "LM Club Water Bottle",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    descriptionTwo:
      "Start your mornings with the LM Club Coffee Mug, an elegant ceramic mug designed for coffee lovers. With a comfortable grip and a sturdy build, it’s perfect for enjoying hot coffee, tea, or any beverage of your choice. The high-gloss finish and LM Club branding add a touch of sophistication to your drinkware collection. Microwave and dishwasher safe, this mug is both stylish and practical for everyday use.",
    image: [WaterBottle, WaterBottle, WaterBottle, WaterBottle],
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
  },
  {
    _id: "aaaae",
    name: "LM Club T-Shirt: White",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    descriptionTwo:
      "Experience ultimate comfort with our LM Club T-Shirt, crafted from premium cotton for a soft and breathable feel. Designed with a stylish fit and the exclusive LM Club logo, this T-shirt is perfect for casual wear, workouts, or everyday outings. Show your club pride while staying effortlessly cool and comfortable.",
    image: [LMTshirt, p7, LMTshirt, LMTshirt],
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
  },
  {
    _id: "aaaaf",
    name: "LM Club Spiral: Book",
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
    origin: "Imported",
  },
  {
    _id: "aaaag",
    name: "LM Club Beanie: Woolen Cloth",
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
  },
  {
    _id: "aaaah",
    name: "LM Club : Smart Watch",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    descriptionTwo:
      "Stay hydrated in style with the LM Club Thermo Steel Sipper. Engineered with double-wall insulation, this bottle keeps your beverages hot for up to 12 hours or cold for 24 hours. Its sleek design and leak-proof lid make it the ideal companion for gym workouts, office hours, or outdoor adventures. Made from high-quality stainless steel, it’s durable, eco-friendly, and easy to carry.",
    image: [Watch, p2, Watch, Watch],
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
  },
];
