import { useSelector, useDispatch } from "react-redux";
import { filterCategory, getSelectedCategory } from "../redux/itemsSlice";

const Filter = ({ category }) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(getSelectedCategory);

    return (<div >
        <p className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'} onClick={() => dispatch(filterCategory(category))}>{category}</p>
    </div>)
}

export default Filter;