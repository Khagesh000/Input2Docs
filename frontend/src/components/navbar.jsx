import React, { useState, useRef, useEffect } from 'react';
import '../Navbar.css';
const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown menu

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    // Attach event listener on mount
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
            
           

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isDropdownOpen ? 'true' : 'false'}
                onClick={toggleDropdown}
              >
                EXPLORE MORE
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/contact-us">Contact Us</a></li>
                <li><a className="dropdown-item" href="/about-us">About Us</a></li>
                <li><a className="dropdown-item" href="/privacy-policy">Privacy Policy</a></li>
                <li><a className="dropdown-item" href="/terms-and-conditions">Terms and Conditions</a></li>
                
              </ul>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
