import React, { Component } from 'react';

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
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Input2Docs
            </a>
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
            <div
              className={`collapse navbar-collapse ${this.state.isOpen ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
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
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="/letter">
                        Letter
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/email">
                        Email
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                      Resume Maker
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
