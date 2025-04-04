import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import { Product } from "../interfaces/Product";
import "../styles/components.css";
import "../styles/Sell.css";

const Sell = () => {
    const { username } = jwtDecode(auth.getToken()) as { username: string }
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async (sellerId: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/${sellerId}/products`);
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
        <div className="container productCard">
            {products.map((product:Product) => (
                <div key={product.id} className="product-card">
                    <h2>{product.name}</h2>
                    <img width="200" src={product.image_url} alt={product.description || ''}></img>
                    <p>Price: ${product.price}</p>
                    <button>Edit Item</button>
                    <button value={product.id!}
                        // onClick={handleAddToCart}
                    >Delete Item</button>
                    </div>          
                ))}
        </div>
    );
}
export default Sell;


// The seller page loads when you remove all the code from it.