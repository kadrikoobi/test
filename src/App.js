import AddItem from './components/AddItem';
import ShoppingCart from './components/ShoppingCart';
import Content from './components/Content';
import apiRequest from './apiRequest';
import {useEffect, useState} from 'react';


function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({});
  const [Cart, setCart] = useState([]);

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

const saveItem = async () => { 
  console.log(newItem.name);
  const id = items.length ? items[items.length -1].id + 1 : 1;
  const myNewItem = {"id": id, "name": newItem.name, "image": newItem.image, "price": newItem.price};
  const listItems = [...items, myNewItem];
  setItems(listItems);

  const options = {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(myNewItem)
  }
  const result = await apiRequest(API_URL, options);
  console.log(result);
}
const submitItem = () => {
  if (!newItem) return;
  saveItem();
}
  const addItemToCart = (item) => {
    console.log(item);
  }
  const deleteItem = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }
  return (
    <div className="App">
      <AddItem newItem={newItem}
               setNewItem={setNewItem}
               submitItem={submitItem} />
      <ShoppingCart />
      <Content items={items}
               deleteItem={deleteItem} 
               addItemToCart={addItemToCart} />
    </div>
  );
}

export default App;
