import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [soldItems, setSoldItems] = useState({}); // ✅ Track sold counts

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    setSoldItems((prevSold) => ({
      ...prevSold,
      [item.id]: (prevSold[item.id] || 0) + 1,
    }));
  };

  const decreaseItemQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemCount = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const getItemSoldCount = (id) => {
    return soldItems[id] || 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseItemQuantity,
        removeFromCart,
        clearCart,
        getItemCount,
        getItemSoldCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;