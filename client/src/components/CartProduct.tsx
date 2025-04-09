// import { Link } from "react-router-dom";
//import { ApiMessage } from "../interfaces/ApiMessage";
import { MouseEventHandler } from "react";
import { quantityIncrease, quantityDecrease } from '../utils/adjustQuantity';
//import { WhereAttributeHashValue } from "sequelize";
import { Product } from "../interfaces/Product";
interface CartProductProps {
    id: number;
    name: string | undefined;
    price: number | null;
    quantity: number | null;
    image_url: string | undefined;
    deleteCartProduct: (productId: number) => void;
    increaseQuantity: (e: React.MouseEvent<HTMLButtonElement>, username: string, cart: Product[], setCart: React.Dispatch<React.SetStateAction<Product[]>>, products: Product[]) => void;
    decreaseQuantity: (e: React.MouseEvent<HTMLButtonElement>, username: string, cart: Product[], setCart: React.Dispatch<React.SetStateAction<Product[]>>, products: Product[]) => void;
 }


const CartProduct = ({id, name, price, image_url, quantity, deleteCartProduct: deleteCartProduct}: CartProductProps) => {
    
    const handleIncrease = async (id: number): Promise<ApiMessage | void> => {
   
        const username = localStorage.getItem('username') || "guest"

        if (!isNaN(productID)) {
            try {
                const data =  quantityIncrease(event, username, [], () => {}, []);
                console.log(data);
                return data;
            } catch (error) {
                console.error('Whoops! Unable to increase quantity:', error);
            }
        }
    };

    const handleDecrease = async (id: number): Promise<ApiMessage | void> => {
        
            if (quantity === 1) {
                await handleDelete(id);
            } else {
                try {
                    const data =  quantityDecrease(event, 'username', [], () => {}, []);
                    console.log(data);
                    return data;
                } catch (error) {
                    console.error('Whoops! Unable to decrease quantity:', error);
                }
            }
        }
    };

    const handleIncreaseClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        const productID = Number(event.currentTarget.value);
        if (!isNaN(productID)) {
            handleIncrease(productID);
        }
    };
    
    const handleDecreaseClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        const productID = Number(event.currentTarget.value);
        if (!isNaN(productID)) {
            handleDecrease(productID);
        }

    const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
        // console.log('Delete button clicked');
        const productID = Number(event.currentTarget.value);
        if (!isNaN(productID)) {
            try {
                const data =  deleteCartProduct(productID);
                console.log(data);
                return data;
            } catch (error) {
                console.error('Whoops! Unable to delete item:', error)
            }
        }
    };

    return (
        <div className="cart-item">
            <div className="item-name">{name}</div>
            <img width="25" src={image_url}></img>
            <div className="quantity-adjustment">
                <button value={String(id)} onClick={(e) => increaseQuantity(e, localStorage.getItem('username') , [], () => {}, [])}>[+]</button>
              
                <div>Qty: {quantity}</div>
               <button value={String(id)} onClick = {(e) => decreaseQuantity(e, localStorage.getItem('username') , [], () => {}, []) }>[-]</button> 
            </div>
            <div className="price">${price}</div>
            <div>Total: ${quantity! * price!}</div>
            <button value={String(id)} onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-x-circle"
                    viewBox="0 0 20 20">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
        </div>
    );
};

export default CartProduct;