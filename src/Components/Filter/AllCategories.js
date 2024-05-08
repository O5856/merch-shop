
// просто отображение всех категорий продуктов

import Filter from "./Filter"

const AllCategories = () => {
    return (
        <div className="categories">
            {['Headwear', 'T-Shirts', 'Hoodies', 'Bottoms', 'Bags', 'ALL'].map(category => (
                <Filter category={category} key={category} />))}
        </div>
    )
}

export default AllCategories