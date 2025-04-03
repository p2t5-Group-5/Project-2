
import { Link } from 'react-router-dom';
import "../styles/components.css";
const Footer =() =>{

return(
    <footer>
        <Link to='../Contact'>Contact</Link><br/>
        <Link to='../About'>About</Link><br/>
        <a href='https://www.x.com'>twitter</a><br/>
        <a href='https://www.youtube.com'>Youtube</a><br/>
        <a href='https://wwww.Instaram.com'>Instagram</a><br/>
        <p> ©️ T5P2</p>
    </footer>
);
};
export default Footer;