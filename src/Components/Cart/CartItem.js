// Отображение каждой позиции
import { removeItemFromCart } from "../redux/cartSlice";
import dataProducts from "../data/dataProducts";
import { useDispatch } from "react-redux";


const CartItem = ({ cartItem}) => {
    const items = dataProducts.find(item=>item.id===cartItem.itemID)
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <img className="cart-item-img" src={`./assets/${items.img}.png`}></img>
            <p>{items.name}</p>
            <p>{cartItem.quantity}</p>
            <p>${items.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>  <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" /> </span>
        </div>
            )
}

export default CartItem