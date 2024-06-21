import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="nav-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <div className="logo">
        {isOpen ? '' : ' Your Vision Studios'}
       
          <span className="digi"> 
            <span className="market">
              {isOpen ? '' : 'Data Driven Solutions to Unlock Maximum Business Potential'}
            </span>
            <span className="h23">
            </span>
          </span>
        </div>
       
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      <li><Link to="/">Home</Link></li>  
         <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
