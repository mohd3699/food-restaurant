import { createContext, useState } from "react";
import React from "react";

const FoodMenusContext = createContext();

const ContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const addCartItem = (item) => {
        const existingItemIndex = cartItems.findIndex(d => d.name === item.name)
        if (existingItemIndex >= 0) {
            const old = cartItems[existingItemIndex];
            const newData = { ...old, quantity: old.quantity + 1 };
            const data = cartItems.slice(0, existingItemIndex);
            const remainingData = cartItems.slice(existingItemIndex + 1, cartItems.length);
            setCartItems([...data, newData, ...remainingData])
        } else {
            setCartItems(old => [...old, { ...item, quantity: 1 }]);
        }
    }
    const removeItemFromCart = (item) => {
        const existingItemIndex = cartItems.findIndex(d => d.name === item.name)
        if (existingItemIndex >= 0) {
            const old = cartItems[existingItemIndex];
            const newData = { ...old, quantity: old.quantity - 1 };
            const data = cartItems.slice(0, existingItemIndex);
            const remainingData = cartItems.slice(existingItemIndex + 1, cartItems.length);
            if (newData.quantity > 0) {

                setCartItems([...data, newData, ...remainingData])
            } else
                setCartItems([...data, ...remainingData])
        }
    }
    const clearCartItems = () => {
        setCartItems([])
    }
    return (
        <FoodMenusContext.Provider
            value={{
                cartItems,
                addCartItem,
                removeItemFromCart,
                clearCartItems
            }}
        >
            {children}
        </FoodMenusContext.Provider>
    );
};

export { ContextProvider, FoodMenusContext };