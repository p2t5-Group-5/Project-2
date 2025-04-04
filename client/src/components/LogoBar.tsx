import { useState, useEffect } from 'react';
import auth from '../utils/auth';
import "../styles/components.css";
import logo from "../assets/logo.jpeg";
const Logobar = () => {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle('dark', !darkMode);
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
    <>
      <header>
      {/* <img src={ logo } alt="Handcrafted Harmoney logo"/>  */}
        <h1>
        Handcrafted Harmony
      <button onClick={toggleDarkMode}>
          <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
        </button>
        </h1>
      </header>
    </>
  )
}

export default Logobar;