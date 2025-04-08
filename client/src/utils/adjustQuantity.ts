import { Product } from '../interfaces/Product';
// import { Cart } from '../interfaces/Cart';

export const quantityIncrease = async (
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
        
        // Update cart state locally
        const updatedCart = Cart.map((cartItem) =>
            cartItem.id === product.id
                ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                : cartItem
        );
        setCart(updatedCart);
        
      // Send request to increase the quantity
      const response = await fetch(`http://localhost:3001/api/cart/${username}/product/${productId}`, {
        method: 'PATCH', // Use PATCH for updating a single field
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            quantity: updatedCart.find(item => item.id === Number(productId))?.quantity || 1
        }),
    });
        
        if (!response.ok) {
            // Log the full error response for debugging
            const errorResponse = await response.json();
            console.error("Error response from backend:", errorResponse);
            throw new Error(`Failed to update cart: ${response.status} ${response.statusText}`);
        }
        
    } catch (error) {
        console.error("Error increasing quantity:", error);
        // Revert the cart state if the API call failed
        alert("Failed to update quantity. Please try again.");
    }
};
export const quantityDecrease = async (
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
        
        // Update cart state locally
        const updatedCart = Cart.map((cartItem) =>
            cartItem.id === product.id
                ? { ...cartItem, quantity: (cartItem.quantity || 1) - 1 }
                : cartItem
        );
        setCart(updatedCart);
        
        // Only send the specific product change, not the entire cart
        const response = await fetch(`http://localhost:3001/api/cart/${username}/product/${productId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                quantity: updatedCart.find(item => item.id === Number(productId))?.quantity || 1
            }),
        });
        
        if (!response.ok) {
            throw new Error(`Failed to update cart: ${response.status} ${response.statusText}`);
        }
        
    } catch (error) {
        console.error("Error Decreasing quantity:", error);
        // Revert the cart state if the API call failed
        alert("Failed to update quantity. Please try again.");
    }
};