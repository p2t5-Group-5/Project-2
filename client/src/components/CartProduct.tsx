// import { quantityIncrease, quantityDecrease } from '../utils/adjustQuantity';

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

const CartProduct = ({ id, name, price, quantity, image_url, deleteCartProduct, increaseQuantity, decreaseQuantity }: CartProductProps) => {
    // Using destructured elements to avoid unused variable error
    console.log(increaseQuantity, decreaseQuantity, quantity);

    function handleDelete(): void {
        try {
            const data = deleteCartProduct(id);
            return data;
        } catch (error) {
            console.error('Whoops! Unable to delete item:', error);
        }
    }

    return (
        <div className="cart-item">
            <div className="item-name">{name}</div>
            <img width="25" src={image_url}></img>
            {/* <div className="quantity-adjustment">
                <div>Qty: {quantity}</div>
            </div> */}
            <div className="price">${price}</div>
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


