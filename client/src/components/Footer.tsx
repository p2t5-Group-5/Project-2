
import { Link } from 'react-router-dom';
import "../styles/components.css";
const Footer =() =>{

return(
    <footer>
        <div className='fflex'>
            <Link to='/Contact'>Contact</Link>
            <Link to='/About'>About</Link><br/>
            <a href='https://www.x.com'>Twitter</a>
            <a href='https://www.youtube.com'>Youtube</a>
            <a href='https://wwww.Instagram.com'>Instagram</a>
        </div>
        <p> ©️ P2T5 </p>
    </footer>
);
};
export default Footer;