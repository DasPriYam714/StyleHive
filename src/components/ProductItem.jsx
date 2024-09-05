import { ShopContext } from "../context/ContextShop"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { assets } from "../assets/assets";
import { IoBagRemoveOutline } from "react-icons/io5";

const ProductItem = ({id, name, image,price,description}) => {
    // const{productId}=useParams();
    const { products,currency, addToCart } = useContext(ShopContext);

    // const{productData, setProductData} = useState(false)
    // const fetchProductData=async()=>{
    //     products.map((item)=>{
    //         if(item._id === productId){
    //             setProductData(item)
    //             console.log(item);
    //             return null;
    //         }
    //     })
    // }
    // useEffect(()=>{
    //     fetchProductData();
    // },[productId])
  return (
    // <Link className="text-gray-600 cursor-pointer" to={`/product/${id}`}>
   
    
    // </Link>
    <div className="max-auto">
        <div className="flex flex-col justify-between max-auto">
     <div className="overflow-hidden">
     <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="product image" />
   </div>
   <p className="pt-3 pb-1 text-sm">{name}</p>
   <div className="flex flex-row justify-between">
   <p className="text-sm font-medium">{currency}{price}</p>
   <p className="text-red-600">30% Off</p>

   </div>
   
   <p>{description}</p>

   <div>
   </div>

    <Link to={`/product/${id}`} className="flex flex-row w-full p-2 bg-black text-white items-center text-center rounded">
    <p className="text-white text-lg ml-5"><IoBagRemoveOutline/></p>
        

    <button  className="text-center">Add To Cart</button>
    


    </Link>

   
   </div>
   </div>
  )
}

export default ProductItem