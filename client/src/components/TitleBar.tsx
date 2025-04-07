import { useState, useEffect } from 'react';
import auth from '../utils/auth';
import "../styles/components.css";
// import logo from "../assets/logo.jpeg";

const TitleBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [loginCheck]);

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

export default TitleBar;