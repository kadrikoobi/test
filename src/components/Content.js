import ItemList from './ItemList';

const Content = ({items, deleteItem, addItemToCart}) => {
    return(
        <>
            {items.length ? (
                <ItemList items={items}
                           deleteItem={deleteItem}
                           addItemToCart={addItemToCart} />
            ) : (<p className='msg'>No Products to display</p>)
            }
        </>
    )
}

export default Content;