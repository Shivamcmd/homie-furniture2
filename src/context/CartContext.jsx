import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {

    setCartItems((prev) => {

      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          months: 3
        }
      ];
    });

  };

  const decreaseQuantity = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );

  };

  const removeFromCart = (id) => {

    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );

  };

  const updateMonths = (id, months) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, months: Number(months) }
          : item
      )
    );

  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        updateMonths
      }}
    >
      {children}
    </CartContext.Provider>
  );

};

export const useCart = () => useContext(CartContext);