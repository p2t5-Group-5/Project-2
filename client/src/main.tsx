import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import Shop from './pages/Shop.tsx';
import Seller from './pages/Seller.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Welcome from './pages/Welcome.tsx';
import Login from './pages/Login.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Cart from './pages/Cart.tsx';
import Shop from './pages/Shop.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Welcome />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/shop',
        element: <Shop/>
      }, 
      {
        path: '/seller',
        element: <Seller />
      }, 
      {
        path: '/About',
        element: <About />
      }, 
      {
        path: '/Shop',
        element: <Shop />
      }, 
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Cart',
        element: <Cart />
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
