import { Product } from '../interfaces/Product';
// import { Cart } from '../interfaces/Cart';

export const quantityIncrease = (
    e: React.MouseEvent<HTMLButtonElement>,
    username: string,
    Cart: Product[],
    setCart: React.Dispatch<React.SetStateAction<Product[]>>,
    Products: Product[]
) => {
    const productId = e.currentTarget.dataset.productId as string;
    const product = Products.find((product: Product) => product.id === Number(productId));
    if (product) {
        const updatedCart = Cart.map((cartItem) =>
            cartItem.id === product.id
                ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                : cartItem
        );
        setCart(updatedCart);
        fetch(`http://localhost:3001/api/cart/${username}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCart),
        });
    }
};

export const quantityDecrease = (
    e: React.MouseEvent<HTMLButtonElement>,
    username: string,
    Cart: Product[],
    setCart: React.Dispatch<React.SetStateAction<Product[]>>,
    Products: Product[]
) => {
    const productId = e.currentTarget.dataset.productId as string;
    const product = Products.find((product: Product) => product.id === Number(productId));
    if (product) {
        const updatedCart = Cart.reduce((acc, cartItem) => {
            if (cartItem.id === product.id) {
            const newQuantity = (cartItem.quantity || 1) - 1;
            if (newQuantity > 0) {
                acc.push({ ...cartItem, quantity: newQuantity });
            }
            } else {
            acc.push(cartItem);
            }
            return acc;
        }, [] as Product[]);
        setCart(updatedCart);
        fetch(`http://localhost:3001/api/cart/${username}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCart),
        });

    }


};