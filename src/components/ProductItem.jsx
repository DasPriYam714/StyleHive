import { ShopContext } from "../context/ContextShop"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { assets } from "../assets/assets";
import { IoBagRemoveOutline } from "react-icons/io5";

const ProductItem = ({id, name, image,price}) => {
    const { currency } = useContext(ShopContext);
  return (
    // <Link className="text-gray-600 cursor-pointer" to={`/product/${id}`}>
   
    
    // </Link>
    <div>
        <div className="flex flex-col justify-between">
     <div className="overflow-hidden">
     <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="product image" />
   </div>
   <p className="pt-3 pb-1 text-sm">{name}</p>
   <p className="text-sm font-medium">{currency}{price}</p>
   <div>
   </div>

    <div className="flex flex-row w-full p-2 bg-black text-white items-center text-center">
    <p className="text-white text-lg ml-5"><IoBagRemoveOutline/></p>
        

    <button className="text-center"><IoBagRemoveOutline/> Add To Cart</button>
    


    </div>

   
   </div>
   </div>
  )
}

export default ProductItem