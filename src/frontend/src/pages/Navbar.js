import { Link } from "react-router-dom"
import logo from './m_w.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="/">
                <img src={logo}></img>
            </a>
            <Link className="links" to="/create">
                <button className="button" >Create</button>
            </Link>
        </nav>
     );
}
 
export default Navbar;