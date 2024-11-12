import React, { useState } from 'react';
import '../Navbar.css';
const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-2">
      <div className="container-fluid">
        {/* Navbar Brand on the Left */}
        <a className="navbar-brand" href="/">
          <span className="brand-input">Input</span><span className="brand-2docs">2Docs</span>
        </a>

        {/* Navbar Toggler */}
        <button
          className={`navbar-toggler ${isDropdownOpen ? 'collapsed' : ''}`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isDropdownOpen}
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          <span className={`line ${isDropdownOpen ? 'cross' : ''}`}></span> {/* Custom toggler */}
          <span className={`line ${isDropdownOpen ? 'cross' : ''}`}></span>
          <span className={`line ${isDropdownOpen ? 'cross' : ''}`}></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/letter">LETTER MAKER</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/email">EMAIL MAKER</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">RESUME MAKER</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cv">CV TEMPLATES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cover">COVER LETTER</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/about">ABOUT US</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
