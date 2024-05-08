

import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../redux/cartSlice"
import CartItem from "./CartItem"

const Cart = () => {

    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    return (
        <div className='cart'>
            <h2>CART</h2>
            <div className="cart-items">
                {cartItems.map(cartItem => (<CartItem cartItem={cartItem} key={cartItem.id} />))}</div>
           
            <h3>TOTAL: ${totalPrice}  </h3>
        </div>
    )
}

export default Cart