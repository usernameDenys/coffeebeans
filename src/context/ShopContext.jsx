import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';



// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please select a size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId][size]
                ? (cartData[itemId][size] += 1)
                : (cartData[itemId][size] = 1);
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const value = {
        products,
        currency,
        cartItems, setCartItems,
        addToCart
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider;