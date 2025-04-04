import "../styles/welcome.css";

const Welcome = () => {
  const users = { name: "John Doe" }; //placeholder
  const Item = { name: "Sample Item", image: "item.jpg" }; //placeholder
  return (
    <>
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>
          {" "}
          Thank you for visiting our online marketplace. Whether you are a
          first-time visitor or a returning customer, we are delighted to have
          you here. As a growing company, we specialize in high-quality,
          handcrafted products, ranging from unique toys to stylish clothing.
        </p>
        <p>
          To start shopping or selling, you’ll need to create an account. Once
          registered, you’ll have access to our exclusive collection of
          handcrafted items or the ability to list your own creations for sale.
        </p>

        <p>
          We truly appreciate you taking the time to explore our website. Browse
          through our featured store and products below, and we look forward to
          providing you with a great shopping experience.
        </p>
        <section className="flex">
          <div className="seller">
            <img src="" alt="Featured Seller" />
            <p>This is our featured seller {users.name}</p>
          </div>

          <div className="item">
            <img src="" alt="Featured Item" />
            <p>This is our featured Iteam {Item.name}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Welcome;
