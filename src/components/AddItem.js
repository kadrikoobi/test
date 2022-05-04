import apiRequest from './../apiRequest';
import {useForm} from 'react-hook-form';

const AddItem = ({items, setItems, api_url}) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data) => {
        const name = data.name; 
        const price = data.price;
        const base64 = await convertBase64(data.image[0]);
        
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
      console.log(result); //TODO Kuva veateade kusagil
    }

    return(
        <form className="addForm" onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register('image')}/>
            <input {...register('name')}/>
            <input {...register('price')} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddItem;