import { useState, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ items, setItems ] = useState([]);

    

    return(
        <CartContext.Provider value={{}}>
            { children }
        </CartContext.Provider>
    )
}