import { ShopContext } from "../context/ContextShop";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoBagRemoveOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, image, price, description } = item;
  const { currency } = useContext(ShopContext);

  return (
    <div className="mx-auto border-2 border-gray-100 p-4 rounded-xl flex flex-col">
      <div className="overflow-hidden rounded-xl h-auto">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt="product image"
        />
      </div>
      <div className="text-start flex flex-col h-1/2">
        <p className="pt-3 pb-1 text-2xl">{name}</p>
        <div className="flex flex-row justify-between baseline content-center">
          <p className="text-sm font-medium">
            {currency}
            {price}
          </p>
          <p className="text-red-600">30% Off</p>
        </div>

        <p>{description}</p>
      </div>

      <div className="h-1/3 sm:h-auto  flex flex-col justify-end">

        <Link
          to={`/product/${_id}`}
          className="flex flex-row items-center justify-center w-full p-2 bg-black text-white rounded"
        >
          <p className="text-white text-lg ml-5">
            <IoBagRemoveOutline />
          </p>
          <button className="ml-2">Add To Cart</button>{" "}
         
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
