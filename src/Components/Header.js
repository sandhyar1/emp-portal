import { useState } from 'react'
import {  Link } from 'react-router-dom'
import {BsGrid3X3GapFill} from  "react-icons/bs";
import {AiOutlineUserAdd} from  "react-icons/ai";

import './Styles/Navbar.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
         <BsGrid3X3GapFill className='icon'/><Link className="link" id="link1">Menu</Link>
      </div>
      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>

        <li><Link className="link" to="/CeoConnect">CeoConnect</Link></li>
        <li><Link className="link" to="/UnitNews">UnitNews</Link></li>
        <li><Link className="link" to="/ContactForm">Contact</Link></li>
        <li><Link className="link" to="/profile">{AiOutlineUserAdd}</Link></li>

      </ul>
      <div className="navbar-burger" onClick={toggleMenu}>
        <div className="navbar-burger-line"></div>
        <div className="navbar-burger-line"></div>
        <div className="navbar-burger-line"></div>
      </div>
    </nav>
  );
}

export default Header;
