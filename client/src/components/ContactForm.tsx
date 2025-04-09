import React, { useState } from "react";
import "../styles/components.css";
import { Modal, Button } from "react-bootstrap";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrorMessage(""); // Clear error message when user starts typing
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setErrorMessage("Please complete all fields before submitting.");
            return;
        }

        try {
            setShowModal(true);
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label>Message:</label>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    cols={60}
                    value={formData.message}
                    onChange={handleChange}
                />
                <button className="btn btn-primary" type="submit">Send</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Message Received</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you, <strong>{formData.name || "friend"}</strong>, for reaching out! We will contact you soon.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactForm;
