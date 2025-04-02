import { useState, useEffect } from "react";
import { Product } from "../interfaces/Product";

const Shop = () => {
   const cart: Product[] = ;
   const [Products, setProducts] = useState<Product[]>([]);

   const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    
    const handleAddToCart = (product: Product) => {

    }


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">
            {Products.map((product:Product) => (
                <div key={product.id} className="product-item">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.image} alt={product.name} />
                </div>
                ))}
        </div>
    );
}
export default Shop;