import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart)

    const addCart = (meal) => {
        setCart([...cart, meal]);
    };

    return (
        <CartContext.Provider value={{ cart, addCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;