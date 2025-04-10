import ContactForm from '../components/ContactForm';
import "../styles/Contact.css";

import '../styles/components.css';
const Contact =() =>{
     return ( 
    <>
         <div className="contact">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, please fill out the form below:</p>
            <ContactForm />
            <br/>
            <h4>We will get back to you as soon as possible!</h4>
        </div>
    </>
    )
}

export default Contact;