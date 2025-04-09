// import { Link } from "react-router-dom";
import { ApiMessage } from "../interfaces/ApiMessage";
import { MouseEventHandler, useState} from "react";
import auth from '../utils/auth';
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
interface SellerCardProps {
    id: number; // id: number | null;
    name: string | undefined;
    description: string | null;
    price: number | null;
    quantity: number | null;
    image_url: string | undefined;
    deleteIndvProduct: (id: number) => Promise<ApiMessage>;
}

const SellerCard = ({id, name, description, price, quantity, image_url, deleteIndvProduct}: SellerCardProps) => {
    const [edit, setEdit] = useState(false);
    const [editableDescription, setEditableDescription] = useState(description || "");
    const [editableName, setEditableName] = useState(name || "");
    const [editablePrice, setEditablePrice] = useState(price || 0);
    const [editableQuantity, setEditableQuantity] = useState(quantity || 0);
    const [editableImageUrl, setEditableImageUrl] = useState(image_url || "");

    const handleEdit: MouseEventHandler<HTMLButtonElement> = async () => {
        setEdit(true);
    }
    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result as string);
                setEditableImageUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }   


    const handleSave: MouseEventHandler<HTMLButtonElement> = async (event) => {
        const productID = Number(event.currentTarget.value);
        if (!isNaN(productID)) {
            try {
                const response = await fetch(`${BASE_URL}/api/products/${id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${auth.getToken()}`
                            },
                            body: JSON.stringify({
                                name: editableName,
                                description: editableDescription,
                                price: editablePrice,
                                quantity: editableQuantity,
                                image_url: editableImageUrl
                            })
                        });
                        const data = await response.json();
                        setEdit(false);
                        console.log(editableImageUrl);
                return data;
            } catch (error) {
                console.error('Whoops! Unable to update item:', error)
            }
        }
    };

    const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
        const productID = Number(event.currentTarget.value);
        if (!isNaN(productID)) {
            try {
                const data = await deleteIndvProduct(productID);
                console.log(data);
                return data;
            } catch (error) {
                console.error('Whoops! Unable to delete item:', error)
            }
        }
    };

    return (
        <div className="seller-card">
            {edit ? (
                <form>
                    <input value={editableDescription} type="text" onChange={(e) => setEditableDescription(e.target.value)} />
                    <input value={editableName} type="text" onChange={(e) => setEditableName(e.target.value)} />
                    <input value={editablePrice} type="number" onChange={(e) => setEditablePrice(Number(e.target.value))} />
                    <input value={editableQuantity} type="number" onChange={(e) => setEditableQuantity(Number(e.target.value))}/>
                    <input type="file" onChange={imageHandler}/>
                    <button type="button" onClick={handleSave}>Save</button>
                </form>
            ) : (
                <div>
                    <h2>{editableName}</h2>
                    <img width="200" src={editableImageUrl} alt={editableDescription || ""} />
                    <p>Description: {editableDescription}</p>
                    <p>Price: ${editablePrice}</p>
                    <p>Units available: {editableQuantity}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}


export default SellerCard;