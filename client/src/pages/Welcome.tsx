import { useNavigate } from "react-router";
import "../styles/welcome.css";
import auth from "../utils/auth";
import { useState, useEffect } from "react";


const Welcome = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const navigate = useNavigate();
  
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };
  
  const handleItemClick = () => {
    navigate('/products/20');
  } 

  useEffect(() => {
    checkLogin();
  }, [loginCheck]);

  const highlightUser = {
    name: "Mister Jones",
    image:"https://barryfestarchive.wordpress.com/wp-content/uploads/2011/07/photo_adam_350rgb-crop2_.jpg?w=1280"
  };

  const highlightItem = {
    name: "Pottery Mug",
    image: "https://i.etsystatic.com/16156688/r/il/4ed8bd/5039617674/il_1588xN.5039617674_jvkb.jpg"
  };

  return (
    <div className="welcome">
      <h1>Welcome!</h1> 
      <p>
        Thank you for visiting our online marketplace. Whether you are a first-time visitor or a returning customer, we are delighted to have you here. As a growing company, we specialize in high-quality, handcrafted products, ranging from unique toys to stylish clothing.
      </p>
      <p>
        To start shopping or selling, you’ll need to create an account. Once registered, you’ll have access to our exclusive collection of handcrafted items or the ability to list your own creations for sale.
      </p>
      <p>
        We truly appreciate you taking the time to explore our website. Browse through our featured store and products below, and we look forward to providing you with a great shopping experience.
      </p>
      {loginCheck && (<p>Welcome back!</p>)}
      {!loginCheck && (<p id="LoginPlease">Please log in to see the shop!</p>)}
      <section className="featured">
        <div className="highlight">
          <p>This is our Featured Seller, {highlightUser.name}!</p>
          <div className="highlight-image">
            <img src={highlightUser.image} alt="Featured Seller" className="highlight-image"/>
          </div>
        </div>
        <div className="highlight">
          <p>This is one of their Featured Items, a {highlightItem.name}</p>
          <div className="highlight-image" onClick={() => handleItemClick()}>
            <img src={highlightItem.image} alt="Featured Item" className="highlight-image"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
