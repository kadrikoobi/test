import {FaTrashAlt} from 'react-icons/fa';

const LineItem = ({item, deleteItem, addItemToCart}) => {
    return(
        <li className="item">
           <div>
               <FaTrashAlt onClick={() => deleteItem(item.id)}
                           role="button"
                           aria-label={`Delete ${item.name}`} />               
               <img src={item.image} />
               <p className='productName'>{item.name}</p>
               <p>{item.price}</p>
               <button onClick={() => addItemToCart(item.id)}>Add to cart</button>
           </div> 
        </li>
    )
}

export default LineItem;