import { Link } from 'react-router-dom';
import "../styles/components.css";
const Footer =() =>{

return(
    <footer>
        <div className='fflex'>
            <div className='fcontact'>
                <Link to='/Contact'>Contact</Link>
                <Link to='/About'>About</Link>
            </div>
           <div className='ficons'>
                <a href='https://www.x.com'><i className="bi bi-threads-fill"></i></a>
                <a href='https://www.youtube.com'><i className="bi bi-youtube"></i></a>
                <a href='https://wwww.Instaram.com'><i className="bi bi-instagram"></i></a>
           </div>
        </div>
        <p> ©️ P2T5 </p>
    </footer>
);
};
export default Footer;