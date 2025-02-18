import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom";
const public_stripe_key = "pk_test_51QMcn82NPQsjFaoTZ90xF9ORG1Gj4EdmGPiQAmSGbvVomOdnWBrwJV3BR9mCFbmQPFZPEsOZgqOglMvKR1Bff5ju00HjRNjRhp";

const HandlePayment = () => {
  const { items, getProductQuantity, getTotalCost } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("handle payment page : ", items);

  const cartItems = items.map(item => {
    const registrationFee = parseFloat(
      item.description.match(/\$\d+(\.\d{2})?/)?.[0].replace("$", "") || "0"
    );
    return {
    id: item.id,  
    name: item.name,
    description: item.description || "No description available",
    quantity: item.quantity || 1,
    price: (item.price * item.quantity) + registrationFee, 
    }
  });
  
  const handleCheckout = async () => {
    try {
      const stripe = await loadStripe(public_stripe_key);
  
      console.log("Sending cart items:", JSON.stringify(cartItems, null, 2)); 
  
      const response = await fetch("http://localhost:9090/create-stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create Stripe session");
      }
  
      const session = await response.json();
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error during payment:", error);
      alert("There was an issue with the payment. Please try again later.");
    }
  };
  
  // extracting registration fee from description 

  const registrationFee = items.length > 0 ? 
  (items[0].description.match(/\$\d+(\.\d{2})?/)?.[0] || "$0") 
  : "$0";


  return (
    <div className="flex items-center justify-center min-h-screen px-4">
    <div className="w-full max-w-3xl md:w-[50%] h-auto flex flex-col items-center justify-center shadow-xl text-center gap-4 bg-gray-300 p-6 rounded-lg">
      <h1 className="lg:text-4xl text-3xl font-semibold">Your Payment Details</h1>

      <div className="w-full overflow-x-auto mt-6">
      <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-3 text-left">Plan</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Payable Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping Through Plan Items */}
            {items.map((item) => (
              <tr key={item.id} className="border border-gray-300 text-center bg-blue-200">
                <td className="p-3 text-left">{item.name} Membership</td>
                <td className="p-3 text-left">${item.price}</td>
                <td className="p-3 text-left">{item.quantity}</td>
                <td className="p-3 text-left">${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}

            {/* Registration Fee Row */}
            <tr className="border border-gray-300 text-center bg-gray-200">
              <td className="p-3 text-left ">Registration Fee</td>
              <td className="p-3"></td>
              <td className="p-3"></td>
              <td className="p-3 text-left font-semibold text-red-600 font-semibold">${items[0].description.match(/\$\d+(\.\d{2})?/)[0].replace("$", "")}</td>
            </tr>

            {/* Net Amount Row */}
            <tr className="border border-gray-300 text-center bg-blue-200 ">
              <td className="p-3 text-left">Net Amount</td>
              <td className="p-3"></td>
              <td className="p-3"></td>
              <td className="p-3 text-left text-green-700 font-bold">${(
                                getTotalCost() +
                                parseFloat(items[0].description.match(/\$\d+(\.\d{2})?/)[0].replace("$", ""))
                              ).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

      </div>

      {items.length > 0 && (
        <div className="cart-summary mt-4 text-center">
          <div className="flex items-start items-center mb-3">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  cursor-pointer"
                  required
                ></input>
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 text-lg"
                >
                  I accept the payment{" "} 
                  <a
                    className="font-medium text-green-600 hover:underline dark:text-primary-500"
                    href="/privacy"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

          <p className="text-2xl  font-semibold text-gray-800">
            Total Payable Amount: ${(
                        getTotalCost() +
                        parseFloat(items[0].description.match(/\$\d+(\.\d{2})?/)[0].replace("$", ""))
                      ).toFixed(2)}
          </p>
        </div>
      )}

<div className="flex justify-between w-full mt-6">
          <button
            onClick={() => navigate(-1)} 
            className="px-6 py-3 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition"
          >
            Back
          </button>
          
          <button
            onClick={() => handleCheckout()}
            className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition"
          >
            Pay
          </button>
        </div>
    </div>
  </div>
  );
};

export default HandlePayment;
