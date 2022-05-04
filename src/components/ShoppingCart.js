const ShoppingCart = ({cart,setCart}) => {
    return(
        <div className="shoppingCart">
            <p>Products in cart: {cart.length}</p>
        </div>
    )
}

export default ShoppingCart;