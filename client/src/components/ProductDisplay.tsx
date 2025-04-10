import { Product } from "../interfaces/Product";
import "../styles/components.css";

interface ProductDisplayProps {
   product: Product;
}

const ProductDisplay = ({ product }: ProductDisplayProps) => {
   return (
      <>
         <div className="product-header">
            <h1>
               {product.name}
            </h1>
         </div>
         <div className="product-display">
            <img src={product.image_url || ""} alt={product.name || "Product"} />
         </div>
         <div className="product-price">
            <h2>Price</h2>
            <p>${product.price}</p>
         </div>
         <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
         </div>
         <div className=" ">
            <button className="btn btn-primary"> Add to cart</button>
         </div>
      </>
   );
}

export default ProductDisplay;

