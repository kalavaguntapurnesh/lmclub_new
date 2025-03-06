import React, { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
import { useECommerceCart } from "../context/ECommerceCartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import sad from "../assets/sad.svg";

const ECommerceCart = () => {
  const {
    items,
    getTotalCost,
    removeOneFromCart,
    deleteFromCart,
    addOneToCart,
  } = useECommerceCart();
  console.log("Cart items:", items);
  console.log(items.descriptionTwo);
  const [flag, setFlag] = useState(false);
  const handlePaymentClick = () => {
    setFlag(!flag);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoToAgainSelectedPage = () => {
    navigate("/pricing");
  };

  return (
    <div>
      <Navbar />

      <div className="pt-24 lg:pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      Your Cart
                    </h1>
                  </div>
                  <h1 className="lg:text-3xl text-2xl text-center font-bold text-headingColor">
                    {items.length > 0
                      ? "Proceed to Secure Checkout"
                      : "Oops! It seems like your cart is empty"}
                  </h1>
                </div>
                {items.length > 0 ? (
                  <div className="cart-items bg-white p-4   shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-transform transform hover:translate-y-2 h-auto  mx-auto ">
                    {items.length > 0 ? (
                      items.map((item) => (
                        <div
                          key={item.id}
                          className="cart-item flex items-center justify-between border-b border-gray-300 py-4"
                        >
                          <div className="flex-1 ml-4">
                            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                              <div className="flex flex-row items-center gap-4">
                                <img
                                  src={item.image}
                                  alt="imga"
                                  className="w-[72px]"
                                />
                                <h3 className="text-lg font-bold">
                                  {item.name}
                                </h3>
                              </div>

                              <div className="flex flex-row items-center justify-center gap-1">
                                <button
                                  onClick={() => removeOneFromCart(item.id)}
                                  className="font-semibold px-8 h-[24px] bg-gray-300 text-white flex items-center justify-center text-center text-sm   "
                                >
                                  -
                                </button>
                                <button className="font-semibold px-8 h-[24px] bg-green-500 text-white flex items-center justify-center text-center text-sm  hover:bg-green-600">
                                  {item.quantity}
                                </button>
                                <button
                                  onClick={() =>
                                    addOneToCart(
                                      item.id,
                                      item.image,
                                      item.name,
                                      item.price,
                                      item.quantity
                                    )
                                  }
                                  className="font-semibold  px-8 h-[24px] bg-green-500 text-white flex items-center justify-center text-center text-sm   hover:bg-green-600"
                                >
                                  +
                                </button>
                              </div>
                              <div className="flex flex-col items-center lg:items-end justify-center lg:mr-4">
                                <p className="text-[#1a1a1a] text-sm">
                                  Price: ${item.price}
                                </p>
                                <div className="text-lg font-semibold flex flex-col gap-2">
                                  <p className="text-[#1a1a1a]">
                                    Total Price: $ {item.price * item.quantity}{" "}
                                  </p>
                                  <button
                                    onClick={() => deleteFromCart(item.id)}
                                    className="bg-red-400 text-center text-white py-1.5 px-3 font-medium text-sm"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600 text-center py-4"></p>
                    )}

                    {items.length > 0 && (
                      <div className="cart-summary mt-6 text-end">
                        <div className="py-4">
                          <p className="text-xl font-bold text-gray-800">
                            Total: ${getTotalCost().toFixed(2)}
                          </p>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between w-full">
                          <button className="pay-button mt-4 lg:w-1/3 bg-green-500 text-white py-2 font-medium transition duration-1000 ease-in-out hover:bg-green-700">
                            <Link to="/ecommerce">Continue Shopping</Link>
                          </button>
                          <button className="pay-button mt-4 lg:w-1/3 bg-green-500 text-white py-2 font-medium transition duration-1000 ease-in-out hover:bg-green-700">
                            <Link to="/ecommerce-payment">
                              Proceed to Checkout
                            </Link>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mt-4 space-y-2">
                      <img src={sad} alt="sad" className="w-56 h-56" />
                    </div>
                    <button className="pay-button mt-4 w-[200px] lg:w-[240px] bg-green-500 text-white py-2 font-medium transition duration-1000 ease-in-out hover:bg-green-700">
                      <Link to="/ecommerce">Continue Shopping</Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ECommerceCart;
