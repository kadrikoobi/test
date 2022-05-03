import {useForm} from 'react-hook-form';

const AddItem = ({newItem, setNewItem, submitItem}) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data) => {
        const name = data.name;
        const price = data.price;
        const base64 = await convertBase64(data.image[0]);
        setNewItem({
            name: name,
            price: price,
            image: base64
        });
        submitItem();
        
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