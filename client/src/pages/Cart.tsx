import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/components.css";
import { Product } from "../interfaces/Product";
import auth from "../utils/auth";
import CartProduct from "../components/CartProduct";
import { quantityIncrease, quantityDecrease } from "../utils/adjustQuantity";
import { calculateCartTotal } from "../utils/calculateCartTotal";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function jwtDecode(token: string): { username: string } {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding JWT:", error);
    throw new Error("Invalid token");
  }
}
const Cart = () => {
  const { username } = jwtDecode(auth.getToken()) as { username: string };
  const [cart, setCart] = useState<Product[]>([]);
  const [userId, setUserId] = useState(undefined);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (data: string) => {
    setModalText(data);
    setShow(true)
  };

  const getUserIdByUsername = async () => {
    const response = await fetch(
      `${BASE_URL}/api/users/username/${username}`
    );
    const data = await response.json();
    return data.id;
  };

  const getCart = async () => {
    try {
      const userIdByUsername = await getUserIdByUsername();
      setUserId(userIdByUsername);
      const response = await fetch(
        `${BASE_URL}/api/userCart/${userIdByUsername}`
      );
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const deleteCartProduct = async (productId: number) => {
    if (!isNaN(productId)) {
      try {
        const response = await fetch(
          `${BASE_URL}/api/userCart/${userId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.getToken()}`,
            },
            body: JSON.stringify({
              productId,
            }),
          }
        );
        const data = await response.json();
        setCart(cart.filter((item) => item.id !== productId));
        handleShow(data.message);
      } catch (error) {
        console.error("Whoops! Unable to delete item:", error);
      }
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart-page">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body><h4>{modalText}</h4></Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
      <div className="cart-container">
        <h1>{username}'s Cart</h1>
        <p></p>
        <ul>
          {cart.length ? (
            cart.map((product: Product) => (
              <>
                <div key={product.id}>
                  <CartProduct
                    id={product.id!}
                    name={product.name!}
                    image_url={product.image_url!}
                    price={product.price!}
                    quantity={product.quantity ?? null}
                    increaseQuantity={quantityIncrease}
                    decreaseQuantity={quantityDecrease}
                    deleteCartProduct={deleteCartProduct}
                  />
                </div>{" "}
              </>
            ))
          ) : (
            <h3>
              You do not have anything in your cart! Go to the Shop page to buy.
            </h3>
          )}
        </ul>

        {cart.length ? <div className="cart-total">
          <p>Subtotal: ${calculateCartTotal(cart).subtotal}</p>
          <p>Tax (10%): ${calculateCartTotal(cart).taxAmount}</p>
          <h3>Total: ${calculateCartTotal(cart).total}</h3>
        </div> : ''}
      </div>
    </div>
  );
};

export default Cart;
