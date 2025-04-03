import { useState, useEffect } from "react";
//  import { jwtDecode } from "jwt-decode";
 import auth from '../utils/auth';
 import { Product } from "../interfaces/Product";

const Shop = () => {
//    const { username } = jwtDecode(auth.getToken()) as { username: string };
//    const [Cart, setCart] = useState<Product[]>([]);
    const [Products, setProducts] = useState<Product[]>([]);

   const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/products/");
            const data = await response.json();
            console.log(data);
             setProducts(data);
        } catch (error) {
             console.error("Error fetching products:", error);
        }
     };
    
    //  const newCart = async (username:string) => {
    //     try {
    //          const response = await fetch(`http://localhost:3001/api/cart/${username}`);
    //          const data = await response.json();
    //          setCart(data);
    //      } catch (error) {
    //          console.error("Error fetching cart:", error);
    //      }
    //  }

    // const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     const productId = e.currentTarget.dataset.productId as string;
    //     const product = Products.find((product: Product) => product.id === Number(productId));
    //     if (product) {
    //        const updatedCart: Product[] = [...Cart, product];
    //        setCart(updatedCart);
    //     }
    //     fetch(`http://localhost:3001/api/cart/${username}`, {
    //        method: 'PUT',
    //        body: JSON.stringify(Cart),
    //     });
    // };


     useEffect(() => {
        fetchProducts();
        //  newCart(username);
     }, []);

     return (
        <div className="container">
             {Products.map((product:Product) => (
                 <div key={product.id} className="product-item">
                     <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    {/* <img src={product.image} alt={product.name} /> */}
                    {/* { <button key={product.id} onClick={handleAddToCart}>
                         Add to Cart
                    </button>} */}
                </div>
                ))}
        </div>
    );

}
export default Shop;