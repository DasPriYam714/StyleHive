import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({});

    const addToCart= async(itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId]){
            cartData[itemId] +=1;

        }
        else{
            cartData[itemId] =1;
        }
    }
    else{
        cartData[itemId] ={};
        cartData[itemId]=1;
    }
    setCartItems(cartData);

    }
    useEffect(()=>{
console.log(cartItems)
    },[cartItems])
    const currency ='$';
    const deliveryFee = 20;

    const value={
        products, currency, deliveryFee,cartItems,addToCart
    }

    return(
        <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
    );
}
export default ShopContextProvider;