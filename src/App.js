import AddItem from './components/AddItem';
import ShoppingCart from './components/ShoppingCart';
import Content from './components/Content';
import {useEffect, useState} from 'react';
import apiRequest from './apiRequest';
import './index.css';


function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not received data");
        const listItems = await response.json();
        console.log('items' + listItems);
        setItems(listItems);
      } catch (err) {
        console.log(err.message);
      }
    }
    (async () => await fetchItems())();
  }, []);

  const addItemToCart = (id) => {
    const itemToAdd = items.filter((item) => item.id === id);
    const cartItems = [...cart, itemToAdd];
    setCart(cartItems);
    //deleteItem(id);
  }
  const deleteItem = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const options= {
      method: 'DELETE'
    }
    const result = await apiRequest(`${API_URL}/${id}`, options);
    if (result) setFetchError(result);
  }

  return (
    <div className="App">
      <AddItem items={items}
               setItems={setItems} 
               api_url={API_URL} />
      <ShoppingCart cart={cart} 
                    setCart={setCart} />
      <main>
        {fetchError && 
        <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && 
        <Content items={items}
                 deleteItem={deleteItem} 
                 addItemToCart={addItemToCart} />}
      </main>
    </div>
  );
}

export default App;
