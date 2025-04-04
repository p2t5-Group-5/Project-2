import { useState, useEffect,  } from "react";
//import { Link } from "react-router-dom";


//import { addToCart } from "../api/shopAPI";

// useLayoutEffect
//import { retrieveUsers } from "../api/userAPI";
import type { Product } from "../interfaces/Product";
import "../styles/ProductsPage.css";
 const ProductsPage = () => {
    const [item, setItem] = useState< Product| null>(null);
    const [loading, setLoading] = useState(true);

    const fetchItem = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/item");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setItem(data);
        } catch (error) {
            console.error("Error fetching item:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItem();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!item) {
        return <div>No item found</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <img src={item.image_url} alt={item.name} />
        </div>
    );
 }



export default ProductsPage;