import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import { Product } from "../interfaces/Product";

const Seller = () => {
    const { username } = jwtDecode(auth.getToken()) as { username: string }

    const [Products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async (sellerId: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/${sellerId}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts(username);
    }, []);

    return (
        <>
        <h1>This is the Seller Page</h1>
         <div className="container">
             {Products.map((product:Product) => (
                 <div key={product.id} className="product-item">
                     <h2>{product.name}</h2>
                     <p>{product.description}</p>
                     <p>Price: ${product.price}</p>
                     {/* <img src={product.image} alt={product.name} /> */}
                 </div>
                 ))}
         </div>
        </>
    );
}
export default Seller;


// The seller page loads when you remove all the code from it.