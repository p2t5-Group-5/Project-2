import React, { useState } from "react";
import "../styles/components.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // const response = await fetch("http://localhost:3001/api/contact", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(formData),
            // });
            // if (!response.ok) {
            //     throw new Error("Network response was not ok");
            // }
            alert("Message sent successfully!");
            console.log(formData);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
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
        </form>
    );
};
    
export default ContactForm;
