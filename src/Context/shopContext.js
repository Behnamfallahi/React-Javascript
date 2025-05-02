import { createContext } from "react";
import { useCart } from "../Hook/useCart";

export const ShopContext = createContext({
  cartItems: null,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={useCart()}>
      {props.children}
    </ShopContext.Provider>
  );
};
