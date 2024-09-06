import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

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

const updateQuantity =async (itemId, quantity) =>{
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
}


const getCartAmount = () =>{
    let totalAmount =0;
    for (const items in cartItems){
        let itemInfo = products.find((product)=> product._id === items);{
            try{
                if(cartItems[items]>0){
                    totalAmount += itemInfo.price * cartItems[items];
                }
            }catch (error){

            }
        }
    }
 return totalAmount;
}

    const currency ='$';
    const deliveryFee = 20;

    const value={
        products, currency, deliveryFee,cartItems,addToCart, getCartCount, updateQuantity, getCartAmount, navigate
    }

    return(
        <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
    );
}
export default ShopContextProvider;