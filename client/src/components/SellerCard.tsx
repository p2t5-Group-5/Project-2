import { Link } from "react-router-dom";
import { ApiMessage } from "../interfaces/ApiMessage";
import { MouseEventHandler } from "react";

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
            <h2>{name}</h2>
            <img width="200" src={image_url} alt={description || ''}></img>
            <p>Price: ${price}</p>
            <p>Units available: ${quantity}</p>
            <button>
                <Link to={'/edit-product'} state={{id: id}}>Edit</Link>    
            </button>
            <button value={id} onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default SellerCard;