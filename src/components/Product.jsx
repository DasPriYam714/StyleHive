import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ContextShop";
import { assets } from "../assets/assets";


const Product = () => {
    const { productId} =useParams();
    const { products, currency, addToCart} =useContext(ShopContext);
    const[productData, setProductData] = useState(false);
    const [productImg, setProductImg] = useState('');

    const fetchProductData= async()=>{
        products.map((item)=>{
            if(item._id=== productId){
                setProductData(item)
               
                setProductImg(item.image[0])
                
                return null;
                
            }

        })

    }

    useEffect(()=>{
        fetchProductData();
    },[productId])


  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

        {/* product data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

                {/* product image */}
            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                    {
                        productData.image.map((item,index)=>(
                            <img onClick={()=>setProductImg(item)} src={item} key={index} alt="pic" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
                        ))
                    }

                </div>
                <div className="w-full sm:w-[80%]">
                    <img src={productImg} alt="" className="w-full h-auto" />

                </div>

            </div>
            {/* product information */}
            <div className="flex-1 items-center">
                <h1 className="font-medium justify-center md:justify-start text-2xl mt-2">{productData.name}</h1>
                <div className="flex justify-center items-center gap-1 mt-2">
                    <img src={assets.star_icon} alt="" className="w-3.5" />
                    <img src={assets.star_icon} alt="" className="w-3.5" />
                    <img src={assets.star_icon} alt="" className="w-3.5" />
                    <img src={assets.star_icon} alt="" className="w-3.5" />
                    <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                    <p className="pl-2">{210}</p>
                </div>
                <p className="mt-5 text-3xl font-medium ">{currency}{productData.price}</p>
                <p className="mt-5 text-gray-400 md:4/5">{productData.description}</p>
                <div className="flex flex-col gap-4 my-8">
                    <p>Product Size</p>
                    <div className="flex justify-center gap-2">
                        {productData.sizes.map((item,index)=>(
                            <button  className={`border py-2 px-4 bg-gray-200`} key={index}>{item}</button>
                        ))}

                    </div>
                </div>
                <button onClick={()=>addToCart(productData._id)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-600 rounded w-full">Add to Cart</button>

                <hr className="mt-10 sm:w-4/5 justify-center"/>
                <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
                    <p>100% Original Product</p>
                    <p>Cash on delivery available.</p>
                    <p>Easy return and exchange policy within 7 days.</p>

                </div>
            </div>

        </div>
        <div className="mt-20">
            <div className="flex">
                <b className="border px-5 py-3 text-sm">Description</b>
                <p className="border px-5 py-3 text-sm">Reviews</p>

            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600 mb-10">
                <p className="text-start">Discover the latest trends at our online clothing shop, where style meets convenience. Explore a wide range of fashionable apparel for men, women, and kids, from casual wear to formal attire. Enjoy easy browsing, secure checkout, and fast delivery. Elevate your wardrobe with quality, affordable pieces that suit every occasion. Shop now and redefine your fashion statement!</p>

            </div>

        </div>
        
      
    </div>
  ) : <div></div>
}

export default Product
