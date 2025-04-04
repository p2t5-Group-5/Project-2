import { Product } from '../interfaces/Product'; // Adjust the path as needed

export const handleAddToCart = (
  e: React.MouseEvent<HTMLButtonElement>,
  username: string,
  Cart: Product[],
  setCart: React.Dispatch<React.SetStateAction<Product[]>>,
  Products: Product[]
) => {
  const productId = e.currentTarget.dataset.productId as string;
  const product = Products.find((product: Product) => product.id === Number(productId));
  if (product) {
    const updatedCart: Product[] = [...Cart, product];
    setCart(updatedCart);
  }
  fetch(`http://localhost:3001/api/cart/${username}`, {
    method: 'PUT',
    body: JSON.stringify(Cart),
  });
};

export const addToCart = (
  username: string,
  product: Product,
) => {
  console.log(`${product} to cart for user: ${username}`);
    fetch(`http://localhost:3001/api/cart/${username}`, {
        method: 'PUT',
        body: JSON.stringify(product),
    });}