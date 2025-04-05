import { useState, useEffect } from "react";
import { Product } from "../interfaces/Product";
// import { retrieveProducts } from "../api/shopAPI";
import SellerCard from "../components/SellerCard";
import { Link } from "react-router-dom";
import { ApiMessage } from "../interfaces/ApiMessage";

import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import ProductDetail from "../components/ProductDetail";

const Sell = () => {
    const { username } = jwtDecode(auth.getToken()) as { username: string };
    const [products, setProducts] = useState<Product[]>([]);

    const getUserIdByUsername = async () => {
        console.log("Fetching user ID for username:", username);
        const response = await fetch(`http://localhost:3001/api/users/username/${username}`);
        const data = await response.json();
        console.log(data);
        return data.id;
    }

    const fetchProducts = async () => {
        try {
            const userId = await getUserIdByUsername();
            const response = await fetch(`http://localhost:3001/api/products/${userId}/products`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const deleteIndvProduct = async (id: number): Promise<ApiMessage> => {
        const response = await fetch(`http://localhost:3001/api/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.getToken()}`
            }
        });
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="sell-page">
            <div className="new-product">
                <h1>Sell Your Products</h1>
                <Link to="/add-product"><button className="add-product-btn">Add New Product</button></Link>
            </div>
            <div className="container productCard">
                {products.length ? products.map((product:Product) => (
                        <SellerCard
                            key={product.id}
                            id={product.id!}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            quantity={product.quantity}
                            image_url={product.image_url!}
                            deleteIndvProduct={deleteIndvProduct}
                        />      
                    )
                    ) : (
                    <div>
                        <h3>You don't have anything to sell, yo! Try adding an item using the button above. (And pray that it works!)</h3>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default Sell;


// The seller page loads when you remove all the code from it.