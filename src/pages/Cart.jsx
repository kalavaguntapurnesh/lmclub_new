import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import HandlePayment from "./HandlePayment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../assets/LMDark.webp";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Cart = () => {
  const {
    items,
    getTotalCost,
    removeOneFromCart,
    deleteFromCart,
    addOneToCart,
  } = useContext(CartContext);
  console.log("Cart items:", items);
  console.log(items.name);
  const [flag, setFlag] = useState(false);
  const style = document.createElement("style");
  style.innerHTML = `
    .swal-custom-ok-button {
      background-color:rgb(27, 202, 103); /* Custom color */
      color:white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
    }

    .swal-custom-ok-button:hover {
      background-color:rgb(18, 91, 25); /* Hover color */
    }
  `;
  document.head.appendChild(style);
  const handlePaymentClick = () => {
        Swal.fire({
              html: `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                         <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                             <img src="${Logo}" alt="Logo" 
                                  style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                                
                                   <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                       <span style="color: black;">LM</span>
                                       <span style="color: rgb(37, 218, 73);">Club</span>
                                   </h4>
                         </div>
                  
                        <div style="text-align: center; font-size: 22px;  color: #333; margin-bottom: 20px;">
                         <p>You haven't logged in. </p>
                       </div> 
                       <div style=" ;">
                          <a href="https://www.lmclub.club/login" style="display: inline-block; padding: 14px 20px; background-color: green; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; text-align: center;">Please Login</a>
                        </div>
                    </div>
                   `,
                   showConfirmButton: false,
              // customClass: {
              //   confirmButton: "swal-custom-ok-button",
                
              // },
            });
    
    setFlag(!flag);
  };
  const location = useLocation();
  // console.log("getting year or month", items[0].isYearly);
  const CartPlan = location.state?.plan;
  console.log("cart page content", CartPlan);
  const navigate = useNavigate();

  // extracting registration fee from description

  const registrationFee =
    items.length > 0
      ? items[0].description.match(/\$\d+(\.\d{2})?/)?.[0] || "$0"
      : "0";

  const removingDollarForRegistrationFee = registrationFee.replace("$", "");
  console.log("registrationFee:", removingDollarForRegistrationFee);

  const handleGoToAgainSelectedPage = () => {
    navigate("/pricing");
  };

  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-10">
        <div className="cart-items bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:translate-y-2 h-auto lg:w-[60%] w-[80%] mx-auto bg-gray-200">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Your Cart
          </h2>
          <div className="w-full border border-2 border-black   items-center p-6">
            <div className="lg:text-xl font-semibold mr-[70px] text-center">
              <p>
                {items.length > 0
                  ? `${items[0].name} Membership - in Now & Enjoy All 5 Widgets! has been added to your cart.`
                  : "Your cart is empty. Add any membership to continue!"}
              </p>
            </div>
            {/* <button className="p-3 text-white font-bold rounded-full bg-green-600 hover:bg-green-800">
                    <Link to='/pricing'>Continue Shopping</Link>
                </button> */}
          </div>

          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="cart-item flex items-center justify-between border-b border-gray-300 py-4"
              >
                <img
                  src={Logo}
                  alt={item.name}
                  className="w-16 h-16 object-cover "
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name} Membership
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Price: ${item.price} / {item.isYearly ? "Year" : "Month"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Registration Fee: {registrationFee}
                  </p>
                  {/* <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p> */}
                  {/* <div className="flex justify-between gap-1 w-1/6">
                      <button
                        onClick={() => removeOneFromCart(item.id)}
                        className="mt-4 w-1/4 bg-green-400 text-white py-1 rounded-md  transition-colors hover:bg-green-600"
                      >
                        -
                      </button>
                      <button
                        className="mt-4 w-1/4 bg-green-400 text-white py-1 rounded-md  transition-colors"
                      >
                        {item.quantity}
                      </button>
                      <button
                        onClick={()=>addOneToCart(item.id,item.image, item.name, item.price,item.quantity+1)}
                        className="mt-4 w-1/4 bg-green-400 text-white py-1 rounded-md  transition-colors hover:bg-green-600"
                      >
                        +
                      </button>
                    </div> */}
                </div>

                <div className="text-lg font-semibold text-gray-800 flex flex-col gap-2">
                  <p className="text-gray-500 text-md">
                    Total Price: $
                    {(
                      getTotalCost() +
                      parseFloat(
                        items[0].description
                          .match(/\$\d+(\.\d{2})?/)[0]
                          .replace("$", "")
                      )
                    ).toFixed(2)}
                  </p>
                  <button
                    onClick={() => deleteFromCart(item.id)}
                    className="bg-red-500 w-2/3 text-center text-white py-1 px-3 rounded-md hover:bg-red-400 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center py-4"></p>
          )}

          {items.length > 0 && (
            <div className="cart-summary mt-6 text-center">
              {/* <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Total: ${getTotalCost()}
                  </p>
                  
                </div> */}

              <div className="flex flex-col lg:flex-row justify-between w-full">
                <button
                  onClick={handleGoToAgainSelectedPage}
                  className="pay-button mt-4 lg:w-1/3 bg-green-700 text-white py-2 rounded-md hover:bg-green-400 transition-colors"
                >
                  Would you like to explore more Plans
                </button>
                <button
                  onClick={handlePaymentClick}

                  className="pay-button mt-4 lg:w-1/3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 transition-colors"
                >
                  Proceed to Payment
                  {/* <Link to="/payment">Proceed to Payment</Link> */}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};

export default Cart;
