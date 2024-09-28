import React from 'react';
// Import custom CSS for styling
import '../ImportanceLetter.css';
import img3 from '../assets/images/Suggestions.jpg';

export default function ImportanceLetter() {
  return (
    <div className="importance-letter-container">
      <section className="points-section">
        <div className="row">
          <div className="col-lg-6">
            <div className="point-container">
              <div className="point-content point-content-1">
                <h4>1. Clarity and Precision</h4>
                <p>Letters offer a way to communicate complex ideas clearly and precisely.</p>
              </div>

              <div className="point-content point-content-2">
                <h4>2. Formal Documentation</h4>
                <p>Letters serve as formal documentation for agreements, notices, and communications.</p>
              </div>

              <div className="point-content point-content-3">
                <h4>3. Professionalism</h4>
                <p>Letters help maintain a professional tone in business communications.</p>
              </div>

              <div className="point-content point-content-4">
                <h4>4. Personal Touch</h4>
                <p>Handwritten or well-crafted letters can add a personal touch to your communication.</p>
              </div>

              <div className="point-content point-content-5">
                <h4>5. Archival Value</h4>
                <p>Letters can be archived for future reference, providing a historical record of events.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 image-wrapper">
            <img src={img3} alt="Illustration" className="img-fluid point-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
