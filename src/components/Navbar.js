import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo ">
          <a href='src\assets\Sync.png'>MyLogo</a>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><button href="#" class="custom-button">Home</button></li>
          <li><button href="#" class="custom-button">Services</button></li>
          <li><button href="#" class="custom-button">About Us</button></li>
          <li><button href="#" class="custom-button">Contact</button></li>
        </ul>
        <div className="navbar-toggle" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  )
}
 
export default Navbar
