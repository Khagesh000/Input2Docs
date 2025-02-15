import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Endbar.css';

export default function Endbar() {
  return (
    <footer className="endbar">
      <div className="endbar-container">
        <div className="row">
          {/* Branding Column */}
          <div className="col-md-3 col-12 mb-3">
            <h2 className="endbar-section-title">
              <p className="endbar-input-text" style={{color:'wheat', fontSize: '30px'}}>INPUT<span className="endbar-docs-text" style={{color: 'red'}}>2DOCS</span></p>
              
            </h2>
            <p className="endbar-brand-description">
              Input2Docs is your one-stop solution for generating professional letters, emails, resumes, and more. Simplify your documentation needs with just a few clicks!
            </p>
            <button className="endbar-contact-us-btn">Contact Us</button>
          </div>

          {/* Features Section */}
          <div className="col-md-3 col-12 mb-3">
            <h5 className="endbar-section-title">Our Features</h5>
            <ul className="endbar-features-list">
              <li><i className="fas fa-envelope-open-text"></i><a href="/letter"> Letter Maker</a></li>
              <li><i className="fas fa-paper-plane"></i><a href="/email"> Email Maker</a></li>
              <li><i className="fas fa-file-alt"></i><a href="/resume"> Resume Maker</a></li>
              <li><i className="fas fa-id-card"></i><a href="/cv"> CV Templates</a></li>
              <li><i className="fas fa-pen"></i><a href="/cover"> Cover Letter</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 col-12 mb-3">
            <h5 className="endbar-section-title">Quick Links</h5>
            <ul className="endbar-quick-links endbar-features-list">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="col-md-3 col-12 mb-3">
            <h5 className="endbar-section-title">Contact Us</h5>
            <ul className="endbar-contact-info">
              <li><i className="fas fa-envelope"></i> inputdocs1@gmail.com</li>
              <li><i className="fas fa-phone"></i> +9180808080</li>
            </ul>
          </div>

           {/* Social Media Icons */}
  <div className="endbar-social-icons">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="endbar-social-icon endbar-instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="endbar-social-icon endbar-facebook">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="endbar-social-icon endbar-github">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="endbar-social-icon endbar-linkedin">
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="endbar-social-icon endbar-twitter">
      <i className="fab fa-twitter"></i>
    </a>
  </div>

        </div>

        {/* Bottom Section */}
        <div className="row mt-4 endbar-bottom-footer">
          <div className="col-12 text-center">
            <p>&copy; 2024 Input2Docs.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
