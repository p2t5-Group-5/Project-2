import "../styles/welcome.css";

const Welcome = () => {
  const highlightUser = { name: "Mister Jones", image:"https://barryfestarchive.wordpress.com/wp-content/uploads/2011/07/photo_adam_350rgb-crop2_.jpg?w=1280" }; //placeholder
  const highlightItem = { name: "Golden Nerf Gun", image: "https://m.media-amazon.com/images/I/71W-qrnQCjL._AC_SL1500_.jpg" }; //placeholder
  return (
    <>
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>
          {" "}
          Thank you for visiting our online marketplace. Whether you are a
          first-time visitor or a returning customer, we are delighted to have
          you here. As a growing company, we specialize in high-quality,
          handcrafted and secondhand products, ranging from unique toys to stylish clothing.
        </p>

        <p>
          To start shopping or selling, you’ll need to create an account. Once
          registered, you’ll have access to our exclusive collection of
          handcrafted and secondhand items or the ability to list your own creations for sale.
        </p>

        <p>
          We truly appreciate you taking the time to explore our website. Browse
          through our featured store and products below, and we look forward to
          providing you with a great shopping experience.
        </p>
        
        <section className="featured">
          <div className="highlight">
            <p>This is our Featured Seller, {highlightUser.name}!</p>
            <div className="highlight-image">
              <img src={highlightUser.image} alt="Featured Seller" className="highlight-image"/>
            </div>
          </div>
          <div className="highlight">
            <p>This is one of their Featured Items, a {highlightItem.name}</p>
            <div className="highlight-image">
              <img src={highlightItem.image} alt="Featured Item" className="highlight-image"/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Welcome;
