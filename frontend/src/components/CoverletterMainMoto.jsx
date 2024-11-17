import React from 'react';
import '../CoverletterMainMoto.css';

export default function CoverletterMainMoto() {
  return (
    <div className="coverletter-container">
      <div className='ProcessHeading'><h2 className="coverletter-heading">The Importance of a <span>Cover Letter</span></h2></div>
      <div className="coverletter-content">
        <div className="coverletter-section">
          <h2 className="coverletter-subheading">What is a Cover Letter?</h2>
          <p className="coverletter-description">
            A cover letter is a personalized document that accompanies your resume, providing a more detailed introduction to your background, skills, and motivations. It serves as a direct line of communication with potential employers, enabling you to make a compelling case for why you're the right fit for the position.
          </p>
        </div>
        
        <div className="coverletter-section">
          <h2 className="coverletter-subheading">Why a Cover Letter is Useful</h2>
          <ul className="coverletter-list">
            <li className="coverletter-item">
              <span className="coverletter-icon">📝</span>
              <span>Demonstrates your personality and enthusiasm for the role, helping you stand out among other applicants.</span>
            </li>
            <li className="coverletter-item">
              <span className="coverletter-icon">📈</span>
              <span>Allows you to highlight specific experiences and skills that align closely with the job description.</span>
            </li>
            <li className="coverletter-item">
              <span className="coverletter-icon">🔗</span>
              <span>Provides context for any career changes or gaps in employment, framing your story in a positive light.</span>
            </li>
            <li className="coverletter-item">
              <span className="coverletter-icon">🌟</span>
              <span>Helps establish a connection with hiring managers by addressing the company’s values and needs directly.</span>
            </li>
          </ul>
        </div>

        <div className="coverletter-section">
          <h2 className="coverletter-subheading">How a Cover Letter Can Help You in the Future</h2>
          <ul className="coverletter-list">
            <li className="coverletter-item">
              <span className="coverletter-icon">🚀</span>
              <span>Builds a strong personal brand that can make you memorable in the long run, even for future opportunities.</span>
            </li>
            <li className="coverletter-item">
              <span className="coverletter-icon">🔍</span>
              <span>Enhances your networking skills by refining how you present yourself and your achievements.</span>
            </li>
            <li className="coverletter-item">
              <span className="coverletter-icon">🤝</span>
              <span>Helps create professional connections that might lead to future recommendations or referrals.</span>
            </li>
            <li className="coverletter-item">
              <span className="coverletter-icon">📬</span>
              <span>Leaves a positive impression that can encourage hiring managers to reach out when other positions open.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
