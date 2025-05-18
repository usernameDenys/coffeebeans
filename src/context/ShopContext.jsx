import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate(); // to navigate to different pages

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

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                if (cartItems[item][size] > 0) {
                    totalCount += cartItems[item][size];
                }
            }
        }
        return totalCount;
    };

    const updateCartQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            const productInfo = products.find((product) => product._id === item);
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        totalAmount += productInfo.price * cartItems[item][size];
                    }
                } catch (error) {
                    console.log('error', error);
                }
            }
        }
        return totalAmount;
    };



    const value = {
        products,
        currency,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        updateCartQuantity,
        getCartAmount,
        navigate,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider;