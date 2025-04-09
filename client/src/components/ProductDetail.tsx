interface ProductDetailProps {
   name: string;
   img: string;
   price: number;
}

const ProductDetail = ({ name, img, price }: ProductDetailProps) => {
   return (
      <div>
         <div className="product-title">
            <h4>{name}</h4>
         </div>
         <div className="product-image-container">
            <img className="product-image" src={img} alt={`Image for ${name}`}></img>
         </div>
         <p className="price">Price: ${price}</p>
      </div>
   );
}

export default ProductDetail;
