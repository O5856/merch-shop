// Карточка продукта

import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Item = ({ item }) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()


    return (
        <div className="item">
            <div className="img-container">
                <img className='img' alt="item" src={`./assets/${item.img}.png`} />
            </div>
            <div className="product-description">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p>{item.price}</p>

                <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                <button className="add-to-cart-btn" onClick={() => { dispatch(addItemToCart({ item, quantity })) }}>Add to cart</button>
            </div>
        </div>
    )
}

export default Item