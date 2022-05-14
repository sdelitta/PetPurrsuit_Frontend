import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

const Nav = ({ user, loginStatus, handleLogOut }) => {

  const [showLinks, setShowLinks] = useState(false)



  let authenticatedOptions;
  // console.log(user, loginStatus)
  // if (user) {
    authenticatedOptions = (
      <nav>
        <div className="rightside" id={showLinks ? 'hidden' : ''}>
          {/* <Link className="rightsideLink" to="/myprofile">My Profile</Link> */}
          <Link className="rightsideLink" to="/users/:id">MyProfile</Link>
          <Link className="rightsideLink" to="/states">States</Link>
          <Link className="rightsideLink" to="/shelters">Shelters</Link>
          <Link className="rightsideLink" to="/about">About</Link>
          <Link className="rightsideLink" onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>

        <div className="hidden-menu">
          <button onClick={() => setShowLinks(!showLinks) }></button>
        </div>
      </nav>
    )

  const publicOptions = (
    <nav className="about-page">
      <Link to="/about">About</Link>
    </nav>
  )
  
  return (
    <header>
      <Link to='/'>
        <div className="logo-wrapper" alt='logo'>
        <h3>PetPursuit<span style={{ color:'#5E3DD3'}}>.com</span></h3>
        </div>
      </Link>
        {loginStatus && user ? authenticatedOptions : publicOptions}
      </header>

  )
}


export default Nav;