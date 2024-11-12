import React from 'react';
import '../ContactMainMoto.css'; // Ensure to import the CSS file for styling

export default function ContactMainMoto() {
  return (
    <div style={{backgroundColor: '#f3f4f6'}}>
      <div className="trust-section container" style={{marginTop: '0'}}>
        <h2 className="trust-heading">Why Users Trust Us</h2>
        <div className="trust-list">
          <div className="trust-item">
            <i className="trust-icon fas fa-shield-alt"></i>
            <p className="trust-point">Trusted & Secure Transactions</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-user-check"></i>
            <p className="trust-point">Experienced & Professional Team</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-people-carry"></i>
            <p className="trust-point">Customer-Focused Service</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-thumbs-up"></i>
            <p className="trust-point">Top-Quality Products</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-clock"></i>
            <p className="trust-point">Timely Delivery</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-headset"></i>
            <p className="trust-point">24/7 Customer Support</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-rocket"></i>
            <p className="trust-point">Innovative Solutions</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-certificate"></i>
            <p className="trust-point">Certified & Award-Winning</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-hand-holding-heart"></i>
            <p className="trust-point">Ethical & Sustainable Practices</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-users"></i>
            <p className="trust-point">A Strong Community of Users</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-briefcase"></i>
            <p className="trust-point">Proven Track Record of Success</p>
          </div>
          <div className="trust-item">
            <i className="trust-icon fas fa-balance-scale"></i>
            <p className="trust-point">Transparency & Fair Practices</p>
          </div>
        </div>
      </div>
    </div>
  );
}
