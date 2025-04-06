import { Link } from 'react-router-dom';
import "../styles/components.css";

const Footer = () =>{
    return(
        <footer>
            <div className='contact-links'>
                <Link to='/Contact'>Contact</Link>
                <Link to='/About'>About</Link>
            </div>
            {/* <div>P2T5</div> */}
            <div className='social-media-links'>
                 <a target="_blank" href='https://www.x.com'><i className="bi bi-threads-fill"></i></a>
                 <a target="_blank" href='https://www.youtube.com'><i className="bi bi-youtube"></i></a>
                 <a target="_blank" href='https://wwww.Instaram.com'><i className="bi bi-instagram"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
