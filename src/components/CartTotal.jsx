import { useContext } from "react"
import { ShopContext } from "../context/ContextShop"
import Title from "./Title"


const CartTotal = () => {

  const {currency, getCartAmount} = useContext(ShopContext)
  return (
    <div >
       <div className="text-2xl">
            <Title text1={'Order'} text2={'Details'} />

        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>

            </div>
            <hr />
            <div className="flex justify-between">
                <p>Shipping:</p>
                <p>Free</p>

            </div>
            <hr />
            <div className="flex justify-between">
                <p>Estimated Tax:</p>
                <p>$-</p>

            </div>
            <hr />

            <div className="flex justify-between font-semibold">
                <p>Total amount:</p>
                <p>{currency}{getCartAmount()=== 0?0: getCartAmount()}</p>

            </div>


        </div>
      
    </div>
  )
}

export default CartTotal
