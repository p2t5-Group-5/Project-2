import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Product } from "../interfaces/Product";
import '../styles/ProductDetail.css';
import { Link } from "react-router-dom";
import auth from '../utils/auth';
import ProductDetail from "../components/ProductDetail";

const Sell = () => {
    const { username } = jwtDecode(auth.getToken()) as { username: string };
    const [products, setProducts] = useState<Product[]>([]);
    // const [userId, setUserId] = useState<number | null>(null);

    const getUserIdByUsername = async () => {
        console.log("Fetching user ID for username:", username);
        const response = await fetch(`http://localhost:3001/api/users/username/${username}`);
        const data = await response.json();
        console.log(data);
        return data.id;
        // setUserId(data.id);
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

    const deleteProduct = async (productId: number | null)=> {
        const response = await fetch(`http://localhost:3001/api/products/${productId as number}`, {
           method: 'DELETE',
           headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${auth.getToken()}`
           }
        });
        await response.json();
        const updatedProducts = products.filter((item) => item.id !== productId);
        setProducts(updatedProducts);
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
            <div className="product-container">
            {products.length ? products.map((product:Product) => (
                <div key={product.id} className="product-card">
                    <ProductDetail
                        name={product.name!}
                        img={product.image_url!}
                        price={product.price!}
                    />
                    <div>
                        <button>Edit</button>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </div>     
                </div>
                )) : 
                <h3>You don't have anything to sell. Try adding an item using the button above.</h3>
            }
            </div>
        </div>
    );
}

export default Sell;


// The seller page loads when you remove all the code from it.