import apiRequest from './../apiRequest';
import {useForm} from 'react-hook-form';
import {useRef} from 'react';


const AddItem = ({items, setItems, api_url}) => {
    const {register, handleSubmit} = useForm();
    const inputRef = useRef();

    const onSubmit = async (data) => { 
        var uploadedFile = document.getElementById("file").files[0]; 
        document.getElementsByTagName("input:first-child").value = uploadedFile.name;
        const name = data.name; 
        const price = Number(data.price).toFixed(2);
        const base64 = await convertBase64(uploadedFile);
        
        saveItem(name, base64, price);
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
            reader.onerror = (error) => {
                reject(error);
            };
        }        
        )
    }
    const saveItem = async (name, image, price) => { 
      const id = items.length ? items[items.length -1].id + 1 : 1;
      const myNewItem = {"id": id, "name": name, "image": image, "price": price};
      const listItems = [...items, myNewItem];
      setItems(listItems);
    
      const options = {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(myNewItem)
      }
      const result = await apiRequest(api_url, options);
//TODO display error 
      document.getElementById("file").value = "";
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
      document.getElementById("fileName").value = "";
    }

    const getFileName =(str) => {
        document.getElementById("fileName").value = str;
    }

    return(
        <form className="addForm" onSubmit={handleSubmit(onSubmit)}>
            <h2>Add product form</h2>
            <input id="fileName"
                   type="text" 
                   placeholder="Product image" 
                   onClick={() => inputRef.current.click()} />
            <input id="file" 
                   ref={inputRef}
                   type="file" 
                   hidden
                   name="file"
                   onChange={(e) => getFileName(e.target.value)} />
            <input id="name" 
                   type="text" 
                   placeholder='Product name' 
                   {...register('name', { required: true })}/>
            <input id="price" 
                   type="text" 
                   placeholder="Product price" 
                   {...register('price', { required: true })} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddItem;