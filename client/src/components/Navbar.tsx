import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import auth from "../utils/auth";
import { NavLink } from 'react-router-dom';
import "../styles/components.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    <Navbar className="nav" expand="lg">
    <Container>
      <Navbar.Brand>
      <img
        src={logo}
        width="40"
        height="40"
        alt="Handcrafted Harmony logo"
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-links">
        <div className="nav-links-container">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink>
          {loginCheck && (
            <NavLink to="/sell" className={({ isActive }) => isActive ? "active" : ""}>Sell</NavLink>
          )}
        </div>
        <div className="user-info">
          {loginCheck && (
            <div onClick={goToCart}>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30" fill="currentColor"
                className="bi bi-cart4"
                viewBox="0 0 20 20">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
              </svg>
            </div>
          )}
          {!loginCheck ? (
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to='/login'>Login</NavLink>
          ) : (
              <div onClick={() => auth.logout()}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-door-closed"
                  viewBox="0 0 20 20">
                  <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"/>
                  <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
                </svg>
              </div>
            )}
        </div>
      </Nav>
         </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navigation;
