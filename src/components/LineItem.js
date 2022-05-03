const LineItem = ({item, deleteItem, addItemToCart}) => {
    return(
        <li className="item">
           <div>
               <img src={item.image} />
               <h4>{item.name}</h4>
               <p>{item.price}</p>
           </div> 
        </li>
    )
}

export default LineItem;