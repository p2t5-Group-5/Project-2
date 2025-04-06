import '../styles/components.css';
//import { addToCart } from "../api/shopAPI";
import { useState, useEffect } from "react";
import { Product } from "../interfaces/Product";
// Removed unused import of Products
import auth from '../utils/auth'; 
import CartProduct from '../components/CartProduct';
//import {addToCart} from '../utils/addTOCart';

const Cart = () => {
   const { username } = jwtDecode(auth.getToken()) as { username: string };

   const [Cart, setCart] = useState<Product[]>([]);
   const [ dataCheck, setDataCheck ] = useState(false);

   const getCart = async (username: string) => {
      try {
         const response = await fetch(`http://localhost:3001/api/cart/${username}`);
         const data = await response.json();
         setCart(data);
      } catch (error) {
         console.error("Error fetching cart:", error);
      };
   };

   useEffect(() => {
      getCart(username);
   }, []);

   return (
      <div className="cart-page">
         <div className='cart-container'>
            <h1>{username}'s Cart</h1>
            <ul>
               {Cart.length ? Cart.map((product:Product) => (
                  <div key={product.id} className="cart-product">
                      <li>
                        <CartProduct
                           name={product.name!}
                           img_url={product.image_url!}
                           price={product.price!}
                        />
                        <div>
                           <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                      </li>
                  </div>
                  )) : (
                  <h3>You do not have anything in your cart! Go to the Shop page to buy.</h3>
                  )
               }
            </ul>
         </div>
      </div>
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
