import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className="left navbar-items">PORTFOLIO</div>
      <div className='right'>
        <nav>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
          <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link className="navbar-items" to="/home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link className="navbar-items" to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link className="navbar-items" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link className="navbar-items" to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
      </div>
    </nav>
      </div>
</div>
  )
}

export default Navbar