// src/components/Navbar.js

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-container'>
    <nav className="navbar">
      <div className="logo">Your Vision Studios <span className='digi'>-<span className='market'></span>Data Driven Solutions to Unlock Maximum Business Potential <span className='h23'><span className='dot'></span></span> </span> </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      <li><Link to="/">Home</Link></li>  
         <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

      </ul>
    </nav>
    </div>
  );
}

export default Navbar;