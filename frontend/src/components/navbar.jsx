import React, { Component } from 'react';
import '../Navbar.css'; // Ensure this path is correct

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-2">
        <div className="container-fluid">
          {/* Navbar Brand on the Left */}
          <a className="navbar-brand" href="/">
            Input2Docs
          </a>
          
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={this.state.isOpen}
            aria-label="Toggle navigation"
            onClick={this.toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${this.state.isOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Regular Navbar Items */}
              <li className="nav-item">
                <a className="nav-link" href="/letter">
                  LETTER MAKER
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/email">
                  EMAIL MAKER
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resume">
                  RESUME MAKER
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT US
                </a>
              </li>
              
              {/* Dropdown Menu */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/cover">
                      CoverLetter
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/email">
                      Email
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    <span className="dropdown-item-text">Resume Maker</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
