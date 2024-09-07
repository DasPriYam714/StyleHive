import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ContextShop";
import Title from "../components/Title";
import { RxCross1 } from "react-icons/rx";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          _id: items,
          quantity: cartItems[items],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleRemoveItem = (itemId) => {
    updateQuantity(null, itemId, 0); 
  };

  const handleChangeQuantity = (itemId, change) => {
    const item = cartData.find((item) => item._id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity >= 0) {
        updateQuantity(null, itemId, newQuantity); 
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-10 pt-10 border-t">
      <div className="border-t pt-10 sm:gap-10 w-full sm:w-3/5">
        <div className="text-2xl mb-3">
          <Title text1={"Cart"} text2={"Items"} />
        </div>
        <div>
          <div>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );

              return (
                <div
                  key={index}
                  className="py-4 w-full border-b text-gray-600 grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4"
                >
                  <div className="flex items-start gap-6 justify-between">
                    <div className="flex">
                      <button
                        onClick={() => handleChangeQuantity(item._id, 1)} // Increment quantity
                        className="border max-w-10 sm:max-10 px-1 sm:px-2 py-1 mt-8"
                      >
                        +
                      </button>
                      <input
                        className="border max-w-10 sm:max-10 px-1 sm:px-2 py-1 mt-8 text-center"
                        value={item.quantity}
                        type="text"
                        readOnly // Make the input read-only
                      />
                      <button
                        onClick={() => handleChangeQuantity(item._id, -1)} // Decrement quantity
                        className="border max-w-10 sm:max-10 px-1 sm:px-2 py-1 mt-8"
                      >
                        -
                      </button>
                    </div>
                    <img
                      src={productData.image[0]}
                      alt=""
                      className="w-16 sm:w-20"
                    />
                    <div>
                      <p className="text-xs sm:text-lg font-medium">
                        {productData.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <RxCross1
                      onClick={() => handleRemoveItem(item._id)}
                      className="text-lg mr-4 sm:text-md cursor-pointer"
                    />
                    <div className="flex item-center gap-5 mt-8">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full sm:gap-10 sm:w-2/5 mt-10 sm:mt-1">
        <CartTotal />
        <div className="w-full text-center">
          <button
            onClick={() => navigate("/placeorder")}
            className="w-full rounded bg-black text-white text-lg my-8 px-8 py-3"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
