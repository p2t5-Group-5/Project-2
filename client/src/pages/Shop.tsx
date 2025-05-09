import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Product } from "../interfaces/Product";
import ProductDetail from "../components/ProductDetail.tsx";
import { useNavigate } from "react-router-dom";

//  import { addToCart } from "../api/shopAPI";
import { jwtDecode } from "jwt-decode";
import auth from '../utils/auth';

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const Shop = () => {
    const { username } = jwtDecode(auth.getToken()) as { username: string };
    const [products, setProducts] = useState<Product[]>([]);
    const [userId, setUserId] = useState(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState('');
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = (data: string) => {
        setModalText(data);
        setShow(true)
    };
    

    const getUserIdByUsername = async () => {
        const response = await fetch(`${BASE_URL}/api/users/username/${username}`);
        const data = await response.json();
        setUserId(data.id);
    }

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/products`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
             console.error("Error fetching products:", error);
        }
    };
    
    const handleDetailsClick = (productId: number | undefined) => {
        if (productId !== undefined) {
            navigate(`/products/${productId}`);
        } else {
            console.error("Product ID is undefined");
        }
    }

    const handleAddToCart = async (productId: number | null) => {
        const response = await fetch(`${BASE_URL}/api/userCart/${userId}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${auth.getToken()}`
            },
            body: JSON.stringify({
                productId,
                quantity: 1
            })
        });
        const data = await response.json();
        handleShow(data.message);
    }

    useEffect(() => {
        fetchProducts();
        getUserIdByUsername();
    }, []);

    return (
        <div className="product-container">
            <Modal show={show} onHide={handleClose}>
                <Modal.Body><h4>{modalText}</h4></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Ok</Button>
                </Modal.Footer>
            </Modal>
            {products.length ? products.map((product:Product) => (
                <div key={product.id} className="product-card">
                    <ProductDetail
                        name={product.name!}
                        img={product.image_url!}
                        price={product.price!}
                    />
                    <div className="action-buttons">
                        <div onClick={() => handleDetailsClick(product.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width="20"
                                height="20"
                                fill="currentColor" 
                                className="bi bi-info-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                        </div>
                        <div onClick={() => handleAddToCart(product.id ?? null)}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-bag-plus"
                                viewBox="0 0 16 16"
                            >
                                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                        </div>
                    </div>
                </div>    
                )) : 
                <h3>There is nothing in the shop</h3>
            }
        </div>
    );
}

export default Shop;