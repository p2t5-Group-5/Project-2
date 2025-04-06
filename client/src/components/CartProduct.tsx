// import { Link } from "react-router-dom";
import { ApiMessage } from "../interfaces/ApiMessage";
import { MouseEventHandler } from "react";

interface CartProductProps {
    id: number; // id: number | null;
    name: string | undefined;
    description: string | null;
    price: number | null;
    quantity: number | null;
    image_url: string | undefined;
    deleteCartProduct: (id: number) => Promise<ApiMessage>;
}

const CartProduct = ({id, name, description, price, image_url, deleteCartProduct: deleteCartProduct}: CartProductProps) => {
    
    const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
        const productID = Number(event.currentTarget.value);
        if (!isNaN(productID)) {
            try {
                const data = await deleteCartProduct(productID);
                console.log(data);
                return data;
            } catch (error) {
                console.error('Whoops! Unable to delete item:', error)
            }
        }
    };

    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <img width="25" src={image_url} alt={description || ''}></img>
            <p>${price}</p>
            <button value={id} onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default CartProduct;