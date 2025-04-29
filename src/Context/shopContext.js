import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId) => {
        setCartItems([...cartItems, { id: itemId, count: 1 }]);
    };

    const removeFromCart = () => {
       setCartItems([cartItems.map( (i) => {
        if(i.id === itemId)
            return {...i , count : i.count - 1}
        else return i
       })])
    };

    const contextValue = { cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
