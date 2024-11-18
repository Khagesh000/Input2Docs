import React from 'react';
import '../importanceEmail.css'; // Import custom CSS for styling
import img3 from '../assets/images/Suggestions1.webp';

export default function ImportanceEmail() {
  return (
    <div className="importance-email-container">
      <section className="email-intro-section text-center">
      <div className="ProcessHeading"><h2>The Importance of Emails in <span>Modern Communication</span></h2></div>
        <p className="email-intro-text">
          In today’s digital age, emails are essential for effective communication. They provide a quick,
          convenient, and professional way to convey messages, formalize agreements, and maintain records.
        </p>
        <p className="email-intro-text">
          Below are some key reasons why emails remain a vital part of personal and professional interactions.
        </p>
      </section>

      <section className="email-points-section mt-5">
        <div className="row align-items-center">
          <div className="col-lg-5 image-container">
            <img src={img3} alt="Illustration" className="email-image" />
          </div>
          <div className="col-lg-7 email-point-list">
            <div className="email-point-container email-point-1">
              <h4>1. Speed and Efficiency</h4>
              <p>Emails offer a way to communicate instantly, making them ideal for time-sensitive messages.</p>
            </div>
            <div className="email-point-container email-point-2">
              <h4>2. Formal Documentation</h4>
              <p>Emails serve as formal documentation for agreements, notices, and communications.</p>
            </div>
            <div className="email-point-container email-point-3">
              <h4>3. Professionalism</h4>
              <p>Emails help maintain a professional tone in business communications.</p>
            </div>
            <div className="email-point-container email-point-4">
              <h4>4. Convenience</h4>
              <p>Emails can be sent and received from anywhere, providing great convenience for communication.</p>
            </div>
            <div className="email-point-container email-point-5">
              <h4>5. Archival Value</h4>
              <p>Emails can be archived for future reference, providing a historical record of events.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
