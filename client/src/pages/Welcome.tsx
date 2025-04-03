import "../styles/components.css";

const Welcome = () =>{
   const users = { name: "John Doe" }; //placeholder
   const Item = { name: "Sample Item", image: "item.jpg" }; //placeholder
return(
<>
<main>
<h2>Welcome!</h2>
<section className="flex">
<div className="seller">
<img src="" alt="Featured Seller" />
<p>
This is our featured seller {users.name}
</p>
</div>

<div className="item">
<img src="" alt="Featured Item" />
<p>
This is our featured Iteam {Item.name}
</p>
</div>

</section>

</main>
</>
); 
}

export default Welcome;