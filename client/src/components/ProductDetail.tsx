interface ProductDetailProps {
   name: string;
   img: string;
   price: number;
}

const ProductDetail = ({ name, img, price }: ProductDetailProps) => {
   return (
      <>
         <h2>{name}</h2>
         <img width="200" src={img} alt={`Image for ${name}`}></img>
         <p>Price: ${price}</p>
      </>
   );
}

export default ProductDetail;
