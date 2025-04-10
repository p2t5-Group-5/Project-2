import { Product } from '../interfaces/Product';

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const handleAddToCart = async (
  e: React.MouseEvent<HTMLButtonElement>,
  username: string,
  Cart: Product[],
  setCart: React.Dispatch<React.SetStateAction<Product[]>>,
  Products: Product[]
) => {
  try {
    const productId = e.currentTarget.dataset.productId as string;
    const product = Products.find((product: Product) => product.id === Number(productId));
    
    if (!product) {
      throw new Error("Product not found");
    }
    
    // Check if product already exists in cart
    const existingProduct = Cart.find(item => item.id === Number(productId));
    let updatedCart: Product[];
    
    if (existingProduct) {
      // If product exists, increase quantity
      updatedCart = Cart.map(item => 
        item.id === Number(productId) 
          ? {...item, quantity: (item.quantity || 1) + 1} 
          : item
      );
    } else {
      // Otherwise add it with quantity 1
      updatedCart = [...Cart, {...product, quantity: 1}];
    }
    
    setCart(updatedCart);
    
    const response = await fetch(`${BASE_URL}/api/cart/${username}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCart),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to update cart: ${response.status} ${response.statusText}`);
    }
    
  } catch (error) {
    console.error("Error adding to cart:", error);
    alert("Failed to add item to cart. Please try again.");
  }
};

export const addToCart = async (
  username: string,
  product: Product,
) => {
  try {
    console.log(`Adding ${product.name} to cart for user: ${username}`);
    
    const response = await fetch(`${BASE_URL}/api/cart/${username}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to add to cart: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error; // Re-throw so calling code can handle it
  }
};