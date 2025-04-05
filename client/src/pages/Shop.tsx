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
    
    useEffect(() => {
        if (dataCheck) {
            fetchProducts();
        } else {
            setDataCheck(false);
        }
    }, [dataCheck]);

    // const handleGoToProduct: MouseEventHandler<HTMLButtonElement> = async (event) => {
    //     console.log(event.currentTarget.value)
    //     const productID = Number(event.currentTarget.value);
    //     if (!isNaN(productID)) {
    //         try {
    //             const data = await goToItem(productID);
    //             fetchProducts();
    //             return data;
    //         } catch (error) {
    //             console.error('Whoops! Unable to go to item:', error)
    //         }
    //     }
    // };

    return (
        <div className="product-container">
            {products.length ? products.map((product:Product) => (
                <ProductDetail
                    page='shop'
                    id={product.id!}
                    name={product.name!}
                    img={product.image_url!}
                    price={product.price!}/>        
                )) : 
                <h3>There is nothing in the shop</h3>
            }
        </div>
    );
}

export default Shop;