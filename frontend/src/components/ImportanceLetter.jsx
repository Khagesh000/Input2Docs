import React from 'react';
import '../ImportanceLetter.css'; // Import custom CSS for styling
import img2 from '../assets/images/adsplace2.jpg';
import img3 from '../assets/images/lettermaker.png';

export default function ImportanceLetter() {
  return (
    <div>
      <div className="importance-letter-container mt-4">
        <div className="row align-items-center">
          {/* Left Side: Rotating Image with Content */}
          <div className="col-lg-6">
            <div className="image-wrapper">
              <div className="rotating-image">
                <div className="rotating-image-inner">
                  <img src={img2} alt="Enhance Communication" className="img-fluid" />
                  <div className="rotating-image-content">
                    <h3 className="text-dark">Enhance Your Communication</h3>
                    <p className="text-black">
                      Creating effective letters requires clarity in purpose and audience understanding.
                      Structure your content with a clear introduction, informative body, and concise
                      conclusion. Maintain a professional tone, use simple language, and personalize where
                      possible. Follow up as needed for clarity and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Text Content */}
          <div className="col-lg-6 ">
            <div className="content-wrapper">
              <h2 className="text-dark">Importance and Benefits of Letters</h2>
              <p className="text-black">
                Letters play a crucial role in communication, whether in personal or professional settings.
                They provide a formal way to convey messages, requests, or information. Letters can establish
                credibility, document important details, and serve as a record of communication.
              </p>
              <p className="text-black">
                Some benefits of letters include their ability to reach a specific recipient directly, their
                formal nature which is suitable for official communications, and their potential to be archived
                for future reference.
              </p>
            </div>
          </div>
        </div>
      </div>

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
          <div className="col-lg-6">
            <img src={img3} alt="Illustration" className="img-fluid point-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
