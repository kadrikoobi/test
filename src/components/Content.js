import ItemList from './ItemList';

const Content = ({items, deleteItem, addItemToCart}) => {
    return(
        <main>
            {items.length ? (
                <ItemList items={items}
                           deleteItem={deleteItem}
                           addItemToCart={addItemToCart} />
            ) : (<p>No Products to display</p>)
            }
        </main>
    )
}

export default Content;