import { createContext, useState } from "react";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((item) => item.id === itemId);

      if (itemIndex === -1) {
        // اگر آیتم پیدا نشد، اضافه می‌کنیم
        return [...prevCartItems, { id: itemId, count: 1 }];
      } else {
        // اگر آیتم پیدا شد، تعداد آن را افزایش می‌دهیم
        const updatedCart = [...prevCartItems];
        updatedCart[itemIndex].count += 1;
        return updatedCart;
      }
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((item) => item.id === itemId);

      if (itemIndex === -1) return prevCartItems; // اگر آیتم پیدا نشد، چیزی تغییر نمی‌کنیم

      const updatedCart = [...prevCartItems];
      if (updatedCart[itemIndex].count > 1) {
        updatedCart[itemIndex].count -= 1; // اگر تعداد بیشتر از یک بود، کم می‌کنیم
      } else {
        updatedCart.splice(itemIndex, 1); // در غیر این صورت، آیتم را حذف می‌کنیم
      }
      return updatedCart;
    });
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
