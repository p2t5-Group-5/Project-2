import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import "../styles/Navbar.css";

const Navbar = () => {
  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);

  // Function to check if the user is logged in using auth.loggedIn() method
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);  // Set loginCheck to true if user is logged in
    }
  };

  // useEffect hook to run checkLogin() on component mount and when loginCheck state changes
  useEffect(() => {
    checkLogin();  // Call checkLogin() function to update loginCheck state
  }, [loginCheck]);  // Dependency array ensures useEffect runs when loginCheck changes

  return (
    <div className=" ">
        <button className=''>
           <Link to='/'>Home</Link>
        </button>
        <button className=''>
            <Link to='/shop'>Shop</Link>
        </button>
     
      <button className=''>
        <Link to='/Seller'>Seller</Link>
      </button>
    </div>
  )
}

export default Navbar;
