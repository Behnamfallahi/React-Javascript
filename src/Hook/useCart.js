import { useEffect, useState } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    // خواندن مقدار اولیه از localStorage
    try {
      const storedCart = localStorage.getItem("local-cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing localStorage cart:", error);
      return [];
    }
  });

  // ذخیره به localStorage هر وقت cartItems تغییر کرد
  useEffect(() => {
    try {
      localStorage.setItem("local-cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (!itemId) return;
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((item) => item.id === itemId);
      if (itemIndex === -1) {
        return [...prevCartItems, { id: itemId, count: 1 }];
      } else {
        const updatedCart = [...prevCartItems];
        updatedCart[itemIndex].count += 1;
        return updatedCart;
      }
    });
  };

  const removeFromCart = (itemId) => {
    if (!itemId) return;
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((item) => item.id === itemId);
      if (itemIndex === -1) return prevCartItems;

      const updatedCart = [...prevCartItems];
      if (updatedCart[itemIndex].count > 1) {
        updatedCart[itemIndex].count -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem("local-cart");
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  return { cartItems, addToCart, removeFromCart, clearCart };
};
