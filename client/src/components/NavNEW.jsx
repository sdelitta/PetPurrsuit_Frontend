import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavNew = () => {
    return (
        <header>
         <Link to='/'>
            <div className="logo-wrapper" alt='logo'>
                <h3>PetPurrsuit<span style={{ color:'#5E3DD3'}}>.com</span></h3>
            </div>
         </Link>
          <nav>
                <div className="rightside">
                <Link className="rightsideLink" to="/states">States</Link>
                <Link className="rightsideLink" to="/shelters">Shelters</Link>
                <Link className="rightsideLink" to="/animals">Animals</Link> 
                <Link className="rightsideLink" to="/about">About</Link>
                </div> 
            </nav>
        </header>
)
}


export default NavNew;