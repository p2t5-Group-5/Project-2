import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/Product";

//  import { addToCart } from "../api/shopAPI";
//  import { jwtDecode } from "jwt-decode";
//  import auth from '../utils/auth';


const Shop = () => {

    const [Products, setProducts] = useState<Product[]>([]);
    const [ dataCheck, setDataCheck ] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/products");
            const data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
             console.error("Error fetching products:", error);
        }
     };
    
    useEffect(() => {
        if(dataCheck) {
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
        <div className="container productCard">
            {Products.map((product:Product) => (
                <div key={product.id} className="product-card">
                    <h2>{product.name}</h2>
                    <img width="200" src={product.image_url} alt={product.description ||  ''}></img>
                    <p>Price: ${product.price}</p>
                    <Link to={'/ProductPage'} state={{id: product.id}}>
                        <button>Details</button>
                    </Link>
                    <button 
                        value={product.id!}
                        // onClick={handleAddToCart}
                    >Add to Cart</button>
                    </div>          
                ))}
        </div>
    );
}

export default Shop;