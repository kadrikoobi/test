const ShoppingCart = ({cart,setCart}) => {
    return(
        <div className="shoppingCart">Products in cart: {cart.length}</div>
    )
}

export default ShoppingCart;