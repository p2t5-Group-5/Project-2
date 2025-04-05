import { useState, useEffect } from "react";
import { Product } from "../interfaces/Product";
import ProductDetail from "../components/ProductDetail.tsx";

//  import { addToCart } from "../api/shopAPI";
//  import { jwtDecode } from "jwt-decode";
//  import auth from '../utils/auth';

const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [dataCheck, setDataCheck ] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
             console.error("Error fetching products:", error);
        }
    };
    
    const handleDetailsClick = () => {
        window.location.assign('/ProductPage'); // add product id
    }

    const handleAddToCart = async (productId: number | null) => {
        console.log(productId);
        // const response = await fetch(`http://localhost:3001/api/products/${userId as number}`, {
        //    method: 'POST',
        //    headers: {
        //       'Content-Type': 'application/json',
        //       'Authorization': `Bearer ${auth.getToken()}`
        //    }
        // });
        // const data = await response.json();
        // return data;
    }

    useEffect(() => {
        if (dataCheck) {
            fetchProducts();
        } else {
            setDataCheck(false);
        }
    }, [dataCheck]);

    return (
        <div className="product-container">
            {products.length ? products.map((product:Product) => (
                <div key={product.id} className="product-card">
                    <ProductDetail
                        name={product.name!}
                        img={product.image_url!}
                        price={product.price!}
                    />
                    <div>
                        <button onClick={handleDetailsClick}>Details</button>
                        <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                    </div>
                </div>    
                )) : 
                <h3>There is nothing in the shop</h3>
            }
        </div>
    );
}

export default Shop;