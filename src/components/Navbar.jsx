import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <a href="/">Elementum</a>
      </div>
      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
        <a href="#careers" onClick={() => setIsOpen(false)}>Careers</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
      </div>

      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
