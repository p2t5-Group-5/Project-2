import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../utils/auth';
import "../styles/components.css";
const Logobar = () => {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle('dark-mode', !darkMode);
};
  // Hook to navigate programmatically
  const navigate = useNavigate();
 // Function to navigate to the cart page
 const goToCart = () => {
  navigate('/cart'); // Navigate to the cart page
};

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
    <div className="display-flex justify-space-between align-center py-2 px-5 mint-green">
      <header>
      <img src="" alt="shop name logo"/> 
        <h1>
          Handcrafted Goodies
        </h1>
        <button onClick={toggleDarkMode}>
          <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
        </button>
      </header>
      <div>
      <button onClick={goToCart}> 
          <i className="bi bi-cart4"></i>
        </button>
        {
          // Conditional rendering based on loginCheck state
          !loginCheck ? (
            // Render login button if user is not logged in
            <button className="btn" type='button'>
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            // Render logout button if user is logged in
            <button className="btn" type='button' onClick={() => {
              auth.logout();  // Call logout() method from auth utility on button click
            }}><i className="bi bi-file-person"></i></button>
          )
        }
      </div>
    </div>
  )
}

export default Logobar;