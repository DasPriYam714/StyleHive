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


const getCartCount =()=>{
    let totalCount=0;
    for(const items in cartItems){{
        
            try{
                if(cartItems[items]>0){
                    totalCount += cartItems[items];
                }
            } catch (error){

            }
        }
    }
    return totalCount;
}

    const currency ='$';
    const deliveryFee = 20;

    const value={
        products, currency, deliveryFee,cartItems,addToCart, getCartCount
    }

    return(
        <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
    );
}
export default ShopContextProvider;