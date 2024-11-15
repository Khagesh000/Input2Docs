import React from 'react';
import '../Endbar.css';

export default function Endbar() {
  return (
    <footer className="endbar">
      <div className="container">
        <div className="row">
          {/* Branding Column */}
          <div className="col-md-3 mb-3">
          <h5 className="section-title">
  <span className="input-text">INPUT</span>
  <span className="docs-text">2DOCS</span>
</h5>

            <p className="brand-description">
              Input2Docs is your one-stop solution for generating professional letters, emails, resumes, and more. Simplify your documentation needs with just a few clicks!
            </p>
            <button className="contact-us-btn">Contact Us</button>
          </div>

          {/* Features Section */}
          <div className="col-md-3 mb-3">
            <h5 className="section-title">Our Features</h5>
            <ul className="features-list">
              <li><i className="fas fa-envelope-open-text"></i><a href="/letter"> Letter Maker</a></li>
              <li><i className="fas fa-paper-plane"></i><a href="/email"> Email Maker</a></li>
              <li><i className="fas fa-file-alt"></i><a href="/resume"> Resume Maker</a></li>
              <li><i className="fas fa-id-card"></i><a href="/cv"> CV Templates</a></li>
              <li><i className="fas fa-pen"></i><a href="/cover"> Cover Letter</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-3">
            <h5 className="section-title">Quick Links</h5>
            <ul className="quick-links features-list">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="col-md-3 mb-3">
            <h5 className="section-title">Contact Us</h5>
            <ul className="contact-info">
              <li><i className="fas fa-envelope"></i> input2docs@gmail.com</li>
              <li><i className="fas fa-phone"></i> +91 800000000</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-4 bottom-footer">
          <div className="col text-center">
            <p>&copy; 2024 Input2Docs. All rights reserved. Registered under XYZ Corp.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
