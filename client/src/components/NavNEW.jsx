import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

const NavNew = () => {

//   const [showLinks, setShowLinks] = useState(false)

    return (
      <nav>
        <header>
            <Link to='/'>
                <div className="logo-wrapper" alt='logo'>
                <h3>PetPursuit<span style={{ color:'#5E3DD3'}}>.com</span></h3>
                </div>
            </Link>
        <div className="rightside">
          <Link className="rightsideLink" to="/states">States</Link>
          <Link className="rightsideLink" to="/shelters">Shelters</Link>
          <Link className="rightsideLink" to="/about">About</Link>
        </div>

        {/* <div className="hidden-menu">
          <button onClick={() => setShowLinks(!showLinks) }></button>
        </div> */}
        </header>
      </nav>
    )
}


export default NavNew;