import { useState, useEffect } from 'react';
import auth from '../utils/auth';
import "../styles/components.css";
// import logo from "../assets/logo.jpeg";

const TitleBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode based on localStorage
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark', newDarkMode);
    // Save the setting to localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  useEffect(() => {
    // Apply the dark mode class on initial render
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);
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