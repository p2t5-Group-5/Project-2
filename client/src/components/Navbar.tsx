import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import auth from "../utils/auth";
import { Link, NavLink } from 'react-router-dom';
import "../styles/components.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  const goToCart = () => {
    window.location.assign('/cart');
  };

  useEffect(() => {
    checkLogin();
  }, [loginCheck]);

  return (
    <Navbar className="nav">
    <Container>
      <Navbar.Brand>
      <img
        src={logo}
        width="40"
        height="40"
        alt="Handcrafted Harmony logo"
      />
      </Navbar.Brand>
      <Nav className="">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>

        <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink>

        {loginCheck && (
        <NavLink to="/sell" className={({ isActive }) => isActive ? "active" : ""}>Sell</NavLink>
        )}

        {loginCheck && (
          <button onClick={goToCart}> 
            <i className="bi bi-cart4"></i>
          </button>
        )}


        {
          !loginCheck ? (
            <button className='login' type='button'>
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            <button  type='button' onClick={() => {
              auth.logout();
            }}><i className="bi bi-file-person"></i></button>
          )
        }

      </Nav>
    </Container>
  </Navbar>
  );
};

export default Navigation;
