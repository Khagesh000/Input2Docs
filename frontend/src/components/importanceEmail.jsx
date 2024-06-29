import React from 'react';
import '../importanceEmail.css'; // Import custom CSS for styling
import img2 from '../assets/images/adsplace.jpg';
import img3 from '../assets/images/lettermaker.png';

export default function ImportanceLetter() {
  return (
    <div>
      <div className="importance-letter-container1 mt-4 mb-5">
        <div className="row align-items-center">
          {/* Left Side: Rotating Image with Content */}
          <div className="col-lg-6">
            <div className="image-wrapper">
              <div className="rotating-image">
                <div className="rotating-image-inner">
                  <img src={img2} alt="Enhance Communication" className="img-fluid" />
                  <div className="rotating-image-content">
                    <h3 className="text-dark">Enhance Your Communication</h3>
                    <p className="text-dark">
                      Creating effective emails requires clarity in purpose and audience understanding.
                      Structure your content with a clear subject line, informative body, and concise
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
              <h2 className="text-dark">Importance and Benefits of Emails</h2>
              <p className="text-dark">
                Emails play a crucial role in communication, whether in personal or professional settings.
                They provide a quick and efficient way to convey messages, requests, or information. Emails can establish
                credibility, document important details, and serve as a record of communication.
              </p>
              <p className="text-dark">
                Some benefits of emails include their ability to reach a specific recipient instantly, their
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
            <img src={img3} alt="Illustration" className="img-fluid point-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
