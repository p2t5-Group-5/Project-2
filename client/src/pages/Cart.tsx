import '../styles/components.css';
import { useState, useEffect } from "react";
import { Product } from "../interfaces/Product";
import auth from '../utils/auth'; 
import CartProduct from '../components/CartProduct';

const Cart = () => {
   const { username } = jwtDecode(auth.getToken()) as { username: string };
   const [cart, setCart] = useState<Product[]>([]);
   const [userId, setUserId] = useState(undefined);

   const getUserIdByUsername = async () => {
      const response = await fetch(`http://localhost:3001/api/users/username/${username}`);
      const data = await response.json();
      return data.id
   }

   const getCart = async () => {
      try {
         const userIdByUsername = await getUserIdByUsername();
         setUserId(userIdByUsername);
         const response = await fetch(`http://localhost:3001/api/userCart/${userIdByUsername}`);
         const data = await response.json();
         setCart(data);
      } catch (error) {
         console.error("Error fetching cart:", error);
      }
   };

   const deleteCartProduct = async (productId: number) => {
      if (!isNaN(productId)) {
         try {
            const response = await fetch(`http://localhost:3001/api/userCart/${userId}`, {
               method: 'DELETE',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${auth.getToken()}`
               },
               body: JSON.stringify({
                  productId,
              })
            });
            const data = await response.json();
            console.log(data);
            setCart(cart.filter((item) => item.id !== productId));
         } catch (error) {
            console.error('Whoops! Unable to delete item:', error)
         }
      }
   }

   useEffect(() => {
      getCart();
   }, []);

   return (
      <div className="cart-page">
         <div className='cart-container'>
            <h1>{username}'s Cart</h1>
            <ul>
               {cart.length ? cart.map((product:Product) => (
                  <div key={product.id}>
                     <CartProduct
                        id={product.id}
                        name={product.name!}
                        image_url={product.image_url!}
                        price={product.price!}
                        quantity={product.quantity}
                        deleteCartProduct={deleteCartProduct}
                     />
                     {/* <div onClick={() => deleteCartProduct(product.id)}>Delete</div> */}
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
