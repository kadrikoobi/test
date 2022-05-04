import {FaTrashAlt} from 'react-icons/fa';

const LineItem = ({item, deleteItem, addItemToCart}) => {
    return(
        <li className="item">
           <div>
               <img src={item.image} />
               <h4>{item.name}</h4>
               <p>{item.price}</p>
               <button onClick={() => addItemToCart(item.id)}>Add to cart</button>
               <FaTrashAlt onClick={() => deleteItem(item.id)}
                           role="button"
                           aria-label={`Delete ${item.name}`} />
           </div> 
        </li>
    )
}

export default LineItem;