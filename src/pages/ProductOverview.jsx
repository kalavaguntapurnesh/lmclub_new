import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { useLocation, useNavigate } from "react-router-dom";
// import { ECommerceCartContext } from "../context/ECommerceCartContext";
import { useECommerceCart } from "../context/ECommerceCartContext";
import { useContext } from "react";
import { useEffect } from "react";

const ProductOverview = () => {
  const { items, getProductQuantity, getTotalCost, addOneToCart } =
    useECommerceCart();
  const location = useLocation();

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const [product, setProduct] = useState(location.state?.product || {});
  // const product = location.state.product;

  console.log("The product is : ", product);

  const [image, setImage] = useState(product.image[0]);

  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state.product);
    }
  }, [location.state?.product]);

  const handleAddToCart = () => {
    const id = product.id || `${product.title}-${product.price}`;

    addOneToCart(
      id,
      product.name,
      product.price,
      product.description,
      product.quantity,
      product.image[0]
    );

    navigate("/ecommerce-cart", { state: { product, quantity } });
  };

  const [activeTab, setActiveTab] = useState("item-details");

  if (!product) {
    return (
      <div className="text-center text-xl mt-16">
        <p>Product not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const totalPrice = (quantity * product.price).toFixed(2);

  const totalOriginalPrice = (quantity * product.originalPrice).toFixed(2);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="pt-20 lg:pb-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row lg:pt-16">
                  <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                      {product.image.map((item, index) => (
                        <img
                          onClick={() => setImage(item)}
                          src={item}
                          key={index}
                          className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded"
                        />
                      ))}
                    </div>

                    <div className="w-full sm:w-[80%] lg:ml-6 rounded">
                      <img
                        src={image}
                        alt="image"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>

                  {/* product info */}

                  <div className="flex-1">
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                      <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                        {product.name}
                      </h1>
                      <div className="mt-4 md:items-start items-center sm:gap-4 sm:flex flex-col">
                        <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                          ${totalPrice}{" "}
                          <span className="line-through ml-2">
                            ${totalOriginalPrice}
                          </span>
                        </p>

                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                            (5.0)
                          </p>
                          <a
                            href="#"
                            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                          >
                            {product.reviews} Reviews
                          </a>
                        </div>
                      </div>

                      <div className="mt-6 sm:gap-4 sm:items-center sm:flex">
                        <div>
                          <h1 className="text-green-700 font-medium text-lg">
                            In Stock
                          </h1>
                        </div>

                        <div className="flex items-center space-x-3">
                          <label className="text-lg font-semibold">
                            Quantity:
                          </label>
                          <select
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(Number(e.target.value))
                            }
                            className="p-2 border border-gray-600 rounded "
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                        <a
                          onClick={handleAddToCart}
                          href="#"
                          title=""
                          className="flex items-center justify-center py-2.5 px-8 text-sm border border-green-500 font-medium  focus:outline-none bg-white rounded   focus:z-10 focus:ring-4 text-green-500"
                          role="button"
                        >
                          <svg
                            className="w-5 h-5 -ms-2 me-2 text-green-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                          </svg>
                          Add to Cart
                        </a>

                        <a
                          href="#"
                          title=""
                          className="text-white mt-4 sm:mt-0 bg-green-500  font-medium rounded text-sm px-8 py-2.5 focus:outline-none border border-green-500 flex items-center justify-center"
                          role="button"
                        >
                          <svg
                            className="w-5 h-5 -ms-2 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                            />
                          </svg>
                          Buy Now
                        </a>
                      </div>

                      <hr className="my-6 md:my-4 border-gray-200 dark:border-gray-800" />

                      <h1 className="font-semibold text-lg">Product Details</h1>

                      {/* <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 pt-4 pb-4">
                          <div className="border border-gray-800 rounded w-[120px] text-sm text-center py-1.5 text-gray-800">
                            <h1>Top Highlights</h1>
                          </div>
                          <div className="border border-gray-800 rounded w-[120px] text-sm text-center py-1.5 text-gray-800">
                            <h1>Item Details</h1>
                          </div>
                          <div className="border border-gray-800 rounded w-[120px] text-sm text-center py-1.5 text-gray-800">
                            <h1>Features & Specs</h1>
                          </div>
                          <div className="border border-gray-800 rounded w-[120px] text-sm text-center py-1.5 text-gray-800">
                            <h1>Measurements</h1>
                          </div>
                          <div className="border border-gray-800 rounded w-[120px] text-sm text-center py-1.5 text-gray-800">
                            <h1>Style & Theme</h1>
                          </div>
                        </div> */}

                      <div className="grid lg:grid-cols-5 gap-6 grid-cols-2 md:grid-cols-3 py-4">
                        {[
                          { key: "top-highlights", label: "Top Highlights" },
                          { key: "item-details", label: "Item Details" },
                          {
                            key: "features-specs",
                            label: "Features & Specs",
                          },
                          { key: "measurements", label: "Measurements" },
                          { key: "style-theme", label: "Style & Theme" },
                        ].map((tab) => (
                          <button
                            key={tab.key}
                            className={`border border-gray-800 rounded w-[120px]  text-center text-sm font-medium py-1.5  ${
                              activeTab === tab.key
                                ? " border-green-500 text-green-500"
                                : "text-gray-800"
                            }`}
                            onClick={() => setActiveTab(tab.key)}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      <div>
                        {activeTab === "top-highlights" && (
                          <p>{product.description}</p>
                        )}

                        {activeTab === "item-details" && (
                          <ul className="list-disc list-inside">
                            <li>
                              <span className="font-medium">Brand:</span>{" "}
                              {product.brand}
                            </li>
                            <li>
                              <span className="font-medium">Color:</span>{" "}
                              {product.color}
                            </li>
                            <li>
                              <span className="font-medium">
                                {" "}
                                Material Type:
                              </span>{" "}
                              {product.materialType}
                            </li>
                            <li>
                              <span className="font-medium">
                                Recommended Use:
                              </span>{" "}
                              {product.recommendedUse}
                            </li>
                            <li>
                              <span className="font-medium">
                                {" "}
                                Origin Country:
                              </span>{" "}
                              {product.originCountry}
                            </li>
                            <li>
                              <span className="font-medium">
                                Special Feature:
                              </span>{" "}
                              {product.specialFeature}
                            </li>
                          </ul>
                        )}

                        {activeTab === "features-specs" && (
                          <ul className="list-disc list-inside">
                            <li>
                              <span className="font-medium">Item Weight:</span>{" "}
                              {product.itemWeight}
                            </li>
                            <li>
                              <span className="font-medium">
                                Number of Items:{" "}
                              </span>{" "}
                              {product.noOfItems}
                            </li>
                          </ul>
                        )}

                        {activeTab === "measurements" && (
                          <ul className="list-disc list-inside">
                            <li>
                              <span className="font-medium">Capacity:</span>{" "}
                              {product.capacity}
                            </li>
                            <li>
                              <span className="font-medium">Dimensions:</span>{" "}
                              Item
                              {product.itemDimensions}
                            </li>
                            <li>
                              <span className="font-medium">Weight: </span>{" "}
                              {product.itemWeight}
                            </li>
                          </ul>
                        )}

                        {activeTab === "style-theme" && (
                          <ul className="list-disc list-inside">
                            <li>
                              <span className="font-medium">Theme:</span>{" "}
                              {product.theme}
                            </li>
                            <li>
                              <span className="font-medium">Style:</span>{" "}
                              {product.descriptionTwo}
                            </li>
                          </ul>
                        )}
                      </div>

                      <p className="pb-6 pt-4  ">{product.description}</p>

                      <p className=" ">{product.descriptionTwo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductOverview;
