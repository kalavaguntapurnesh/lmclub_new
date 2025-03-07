import { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";
import success from "../assets/success.png";

export const ECommerceCartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  EcommerceClearCart: () => {},
});

export function ECommerceCartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    const storedCart = localStorage.getItem("ecommerce-cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("ecommerce-cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity(id) {
    const product = cartProducts.find((product) => product.id === id);
    return product ? product.quantity : 0;
  }

  function addOneToCart(id, name, price, description, quantity = 1, image) {
    setCartProducts((prevCartProducts) => {
      const existingProductIndex = prevCartProducts.findIndex(
        (product) => product.id === id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCartProducts];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1, // Add only 1 to avoid doubling
        };
        return updatedCart;
      } else {
        return [
          ...prevCartProducts,
          { id, name, price, description, quantity, image },
        ];
      }
    });

    Swal.fire({
      html: `
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
            <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
            <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
              <span style="color: black;">LM</span>
              <span style="color: rgb(37, 218, 73);">Club</span>
            </h4>
          </div>
          <div style="margin-bottom: 20px;">
            <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap:20px">
            <h1 style="font-size: 25px;"> Item added to cart! </h1>
          </div>
        </div>
      `,
      customClass: {
        confirmButton: "swal-custom-ok-button",
      },
      footer: `
        <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
      `,
    });
  }

  function removeOneFromCart(id) {
    setCartProducts((prevCartProducts) => {
      const updatedCart = prevCartProducts
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
      return updatedCart;
    });
  }

  function deleteFromCart(id) {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== id)
    );
  }

  function getTotalCost() {
    return cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  function EcommerceClearCart() {
    setCartProducts([]);
    localStorage.removeItem("ecommerce-cart");
  }

  return (
    <ECommerceCartContext.Provider
      value={{
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        EcommerceClearCart,
      }}
    >
      {children}
    </ECommerceCartContext.Provider>
  );
}

export function useECommerceCart() {
  return useContext(ECommerceCartContext);
}

export default ECommerceCartProvider;
