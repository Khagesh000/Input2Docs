import React from 'react';
import '../ImportanceLetter.css';
import img3 from '../assets/images/Suggestions.webp';

export default function ImportanceLetter() {
  return (
    <div className="importance-letter-container m-0">
      <section className="intro-section text-center">
        <div className="ProcessHeading"><h2>The Importance of <span>Formal Letters</span></h2></div>
        
        <p className="intro-text">
          In today’s fast-paced digital world, formal letters still hold significant value.
          They are a testament to clarity, professionalism, and provide an invaluable means for
          preserving important communications.
        </p>
        <p className="intro-text">
          Here are some key reasons why letters remain an essential part of effective communication.
        </p>
      </section>

      <section className="points-section">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="point-container">
              <div className="point-content point-content-1">
                <h4>1. Clarity and Precision</h4>
                <p>Letters offer a way to communicate complex ideas clearly and precisely, reducing misunderstandings.</p>
              </div>
              <div className="point-content point-content-2">
                <h4>2. Formal Documentation</h4>
                <p>Letters serve as formal documentation for agreements, notices, and key communications.</p>
              </div>
              <div className="point-content point-content-3">
                <h4>3. Professionalism</h4>
                <p>Letters help maintain a professional tone in business and formal settings.</p>
              </div>
              <div className="point-content point-content-4">
                <h4>4. Personal Touch</h4>
                <p>Handwritten or well-crafted letters add a personal touch, making the message memorable.</p>
              </div>
              <div className="point-content point-content-5">
                <h4>5. Archival Value</h4>
                <p>Letters provide a historical record that can be archived for future reference.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 image-wrapper">
            <div className="image-overlay">
              <img src={img3} alt="Illustration" className="img-fluid point-image" loading="lazy"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
