import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import Shop from './pages/Shop.tsx';
import Sell from './pages/Sell.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Welcome from './pages/Welcome.tsx';
import Login from './pages/Login.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Cart from './pages/Cart.tsx';
import Signup from './pages/Signup.tsx';
import ProductsPage from "./pages/ProductsPage.tsx";
import EditProduct from "./pages/EditProduct.tsx";

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
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/shop',
        element: <Shop/>
      }, 
      {
        path: '/products/new',
        element: <EditProduct />
      },
      {
        path: '/products/:id',
        element: <ProductsPage />
      },
      {
        path: '/products/:id/edit',
        element: <EditProduct />
      },
      {
        path: '/sell',
        element: <Sell />
      }, 
      {
        path: '/About',
        element: <About />
      },  
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Cart',
        element: <Cart />
      },
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
