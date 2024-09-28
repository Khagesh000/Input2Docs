import React from 'react';
import '../importanceEmail.css'; // Import custom CSS for styling
import img3 from '../assets/images/Suggestions1.jpg';

export default function ImportanceEmail() {
  return (
    <div>
      <section className="points-section">
        <div className="row align-items-stretch"> {/* Ensures equal height */}
          <div className="col-lg-6">
            <div className="point-container">
              <div className="point-content point-content-1">
                <h4>1. Speed and Efficiency</h4>
                <p>Emails offer a way to communicate instantly, making them ideal for time-sensitive messages.</p>
              </div>

              <div className="point-content point-content-2">
                <h4>2. Formal Documentation</h4>
                <p>Emails serve as formal documentation for agreements, notices, and communications.</p>
              </div>

              <div className="point-content point-content-3">
                <h4>3. Professionalism</h4>
                <p>Emails help maintain a professional tone in business communications.</p>
              </div>

              <div className="point-content point-content-4">
                <h4>4. Convenience</h4>
                <p>Emails can be sent and received from anywhere, providing great convenience for communication.</p>
              </div>

              <div className="point-content point-content-5">
                <h4>5. Archival Value</h4>
                <p>Emails can be archived for future reference, providing a historical record of events.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={img3} alt="Illustration" className="img-fluid point-image"/>
          </div>
        </div>
      </section>
    </div>
  );
}
