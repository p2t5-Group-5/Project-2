import '../styles/components.css';
//import { addToCart } from "../api/shopAPI";
import { useState, useEffect } from "react";
import { Product } from "../interfaces/Product";
// Removed unused import of Products
import auth from '../utils/auth'; 
//import {addToCart} from '../utils/addTOCart';

const Cart = () => {
   const { username } = jwtDecode(auth.getToken()) as { username: string };
   const [Cart, setCart] = useState<Product[]>([]);
   const newCart = async (username:string) => {
      try {
         const response = await fetch(`http://localhost:3001/api/cart/${username}`);
         const data = await response.json();
         setCart(data);
      } catch (error) {
         console.error("Error fetching cart:", error);
      }
   }

   useEffect(() => {
      newCart(username);
   }, []);

   return (
      <>
         <div>
            <h1>{username}'s Cart</h1>
            <ul>
               {Cart.map((product: Product) => (
                  <li key={product.id}>
                     {product.name} - ${product.price}
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

export default Cart;

function jwtDecode(token: string): { username: string } {
   try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
         atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
      );
      return JSON.parse(jsonPayload);
   } catch (error) {
      console.error("Error decoding JWT:", error);
      throw new Error('Invalid token');
   }
}
