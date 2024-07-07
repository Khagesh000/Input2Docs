import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Endbar() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col-md-4 mb-3">
            <h5>Letters</h5>
            <ul className="list-unstyled">
              <li>Business Letters</li>
              <li>Personal Letters</li>
              <li>Official Letters</li>
              <li>Academic Letters</li>
              <li>Employment Letters</li>
            </ul>
          </div>
          {/* Second Column */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-envelope"></i> mani@gmail.com
              </li>
              <li>
                <i className="fab fa-whatsapp"></i> 8008332745
              </li>
              <li>Letters, Emails, and Resume Maker</li>
            </ul>
          </div>
          {/* Third Column */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fab fa-linkedin"></i> LinkedIn
              </li>
              <li>
                <i className="fab fa-facebook"></i> Facebook
              </li>
              <li>
                <i className="fab fa-instagram"></i> Instagram
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
