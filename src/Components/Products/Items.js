// отвечает за отображение всех карточек продуктов.

import { useSelector } from "react-redux"
import dataProducts from "../data/dataProducts"
import Item from "./Item"
import { getSelectedCategory } from "../redux/itemsSlice"
import CartItem from "../Cart/CartItem"


const Items = () => {
    const selectedCategory = useSelector(getSelectedCategory)

    return (<div className="products">
        {dataProducts
            .filter(item => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === item.category;

            })
            .map(item => (
                < Item key={item.id} item={item} />
            ) )}
    </div>

    )
}

export default Items;