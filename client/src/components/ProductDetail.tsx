interface ProductDetailProps {
   name: string;
   img: string;
   price: number;
}

const ProductDetail = ({ name, img, price }: ProductDetailProps) => {
   return (
      <div>
         <h2>{name}</h2>
         <div className="product-image-container">
            <img className="product-image" src={img} alt={`Image for ${name}`}></img>
         </div>
         <p className="price">Price: ${price}</p>
      </div>
   );
}

export default ProductDetail;
