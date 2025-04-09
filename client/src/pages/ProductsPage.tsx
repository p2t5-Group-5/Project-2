import { useState, useEffect,  } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import type { Product } from "../interfaces/Product";
import { useParams } from "react-router";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';
import '../styles/ProductPage.css';

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const ProductsPage = () => {
    const [product, setProduct] = useState< Product| null>(null);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (data: string) => {
        setModalText(data);
        setShow(true)
    };

    const params = useParams(); // useParams is a hook that returns an object of key/value pairs of URL parameters -JH
    console.log(params.id)
    const { username } = jwtDecode(auth.getToken()) as { username: string };
    

    const getUserIdByUsername = async () => {
        const response = await fetch(`${BASE_URL}/api/users/username/${username}`);
        const data = await response.json();
        return data.id;
    }

    const fetchProduct = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/products/` + params.id);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = async () => {
        const userId = await getUserIdByUsername();
        const response = await fetch(`${BASE_URL}/api/userCart/${userId}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${auth.getToken()}`
            },
            body: JSON.stringify({
                productId: params.id,
                quantity: 1
            })
        });
        const data = await response.json();
        handleShow(data.message);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>No item found</div>;
    }

    return (
        <div className="product-page">
            <Modal show={show} onHide={handleClose}>
                <Modal.Body><h4>{modalText}</h4></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Ok</Button>
                </Modal.Footer>
            </Modal>
            <div className="product-title">
                <h1>{product.name}</h1>
                <p><i>Category: {product.category.category}</i></p>
            </div>
            <div className="product-details">
                <div className="product-image-container-solo">
                    <img src={product.image_url} alt={product.name} className="product-image" />
                </div>
                <div className="product-price-and-button">
                    <p>{product.description}</p>
                    <p className="product-price">Price: ${product.price}</p>
                    {/* <p>Available Quantity: {product.quantity}</p> */}
                    <button className="btn btn-primary" onClick={() => handleAddToCart()}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
 }

export default ProductsPage;