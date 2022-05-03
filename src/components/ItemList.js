import LineItem from './LineItem';

const ItemList = ({items, deleteItem, addItemToCart}) => {
    return(
        <ul className='container'>
            {
                items.map((item) => {
                    return <LineItem item={item}
                                     deleteItem={deleteItem}
                                     addItemToCart={addItemToCart} 
                                     key={item.id} />
                })
            }
        </ul>
    )
}

export default ItemList;