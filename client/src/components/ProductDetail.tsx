import '../styles/ProductDetail.css';
//import { handleAddToCart } from "../utils/addToCart";

interface ProductDetailProps {
   id: number;
   name: string;
   img: string;
   price: number;
   page: 'shop' | 'sell';
}

const ProductDetail = ({ page, id, name, img, price}: ProductDetailProps) => {
   const handleDetailsClick = () => {
      window.location.assign('/ProductPage'); // add product id
   }

   return (
      <div key={id} className="product-card">
         <h2>{name}</h2>
         <img width="200" src={img} alt={`Image for ${name}`}></img>
         <p>Price: ${price}</p>
         { page === 'sell' ?
            <div>
               <button>Edit Item</button>
               <button value={id}
                // onClick={handleAddToCart}
               >Delete Item</button>
            </div> :
            <div>
               <button onClick={handleDetailsClick}>Details</button>
               <button 
                  value={id}
                  // onClick={handleAddToCart}
                  >Add to Cart
               </button>
            </div>
         }
      </div> 
   );
}

export default ProductDetail;
