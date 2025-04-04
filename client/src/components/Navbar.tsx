import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import auth from "../utils/auth";
import { Link, useNavigate, NavLink } from 'react-router-dom';
import "../styles/components.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);

  // Function to check if the user is logged in using auth.loggedIn() method
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true); // Set loginCheck to true if user is logged in
    }
  };

  // useEffect hook to run checkLogin() on component mount and when loginCheck state changes
  useEffect(() => {
    checkLogin(); // Call checkLogin() function to update loginCheck state
  }, [loginCheck]); // Dependency array ensures useEffect runs when loginCheck changes
  // Hook to navigate programmatically
  const navigate = useNavigate();
 // Function to navigate to the cart page
 const goToCart = () => {
  navigate('/cart'); // Navigate to the cart page
};

  return (
    <Navbar className="nav">
    <Container>
      <Navbar.Brand>
      <img
              src={ logo }
              width="40"
              height="40"
              alt="Handcrafted Harmony logo"
            />
      </Navbar.Brand>
      <Nav className="">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink>
        <NavLink to="/seller" className={({ isActive }) => isActive ? "active" : ""}>Seller</NavLink>
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
      </Nav>
    </Container>
  </Navbar>
  );
};

export default Navigation;
