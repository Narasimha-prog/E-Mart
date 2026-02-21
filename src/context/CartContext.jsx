import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

const increaseQuantity = (id) => {
  setCartItems(
    cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  const existingItem = cartItems.find((item) => item.id === id);

  if (existingItem.quantity > 1) {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  } 
};

 const removeFromCart = (id) => {
  const existingItem = cartItems.find((item) => item.id === id)

 
 if(existingItem) setCartItems(cartItems.filter((item) => item.id !== id))
  }


  return (
    <CartContext.Provider value={{ cartItems, addItem, removeFromCart ,increaseQuantity,decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
