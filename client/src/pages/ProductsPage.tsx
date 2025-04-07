import { useState, useEffect,  } from "react";
//import { Link } from "react-router-dom";
//import { addToCart } from "../api/shopAPI";
import type { Product } from "../interfaces/Product";
import { useParams } from "react-router";
import "../styles/ProductDetail.css";
//import { retrieveUsers } from "../api/userAPI";
// useLayoutEffect
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';


const ProductsPage = () => {
    const [thisProduct, setThisProduct] = useState< Product| null>(null);
    const [userId, setUserId] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const params = useParams(); // useParams is a hook that returns an object of key/value pairs of URL parameters -JH
    console.log(params.id)
    const { username } = jwtDecode(auth.getToken()) as { username: string };
    

    const getUserIdByUsername = async () => {
        const response = await fetch(`http://localhost:3001/api/users/username/${username}`);
        const data = await response.json();
        setUserId(data.id);
    }

    const fetchProduct = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/products/" + params.id);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setThisProduct(data);
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = async () => {
        const response = await fetch(`http://localhost:3001/api/userCart/${userId}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${auth.getToken()}`
            },
            body: JSON.stringify({
                productId: params.id,
                quantity: 1
            })
        });
        const data = await response.json();
        alert(data.message);
    }

    useEffect(() => {
        fetchProduct();
        getUserIdByUsername();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!thisProduct) {
        return <div>No item found</div>;
    }

    return (
        <div>
            <h1>{thisProduct.name}</h1>
            {/* <p><i>Category: {thisProduct.Category.category}</i></p> */}
            <div className="product-image-container-solo">
                <img src={thisProduct.image_url} alt={thisProduct.name} className="product-image" />
            </div>
            <p>{thisProduct.description}</p>
            <p>Price: ${thisProduct.price}</p>
            {/* <p>Available Quantity: {thisProduct.quantity}</p> */}
            <button onClick={() => handleAddToCart()}>Add to Cart</button>
        </div>
    );
 }



export default ProductsPage;