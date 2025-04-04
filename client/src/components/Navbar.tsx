import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import "../styles/components.css";

const Navbar = () => {
  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);
  

  // Function to check if the user is logged in using auth.loggedIn() method
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true); // Set loginCheck to true if user is logged in
    }
  };

  const goToCart = () => {
    window.location.assign('/cart'); // Navigate to the cart page
  };
  // useEffect hook to run checkLogin() on component mount and when loginCheck state changes
  useEffect(() => {
    checkLogin(); // Call checkLogin() function to update loginCheck state
  }, [loginCheck]); // Dependency array ensures useEffect runs when loginCheck changes

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/sell">Sell</Link>
      <button onClick={goToCart}> 
          <i className="bi bi-cart4"></i>
        </button>
         {
                // Conditional rendering based on loginCheck state
                !loginCheck ? (
                  // Render login button if user is not logged in
                  <button className='login' type='button'>
                    <Link to='/login'>Login</Link>
                  </button>
                ) : (
                  // Render logout button if user is logged in
                  <button  type='button' onClick={() => {
                    auth.logout();  // Call logout() method from auth utility on button click
                  }}><i className="bi bi-file-person"></i></button>
                )
              }
    </nav>
  );
};

export default Navbar;
