import React from 'react';
import '../CvMainMoto.css'; // Ensure this path is correct

export default function CvMainMoto() {
  return (
    <div className="cvmain-container">
      <div className='ProcessHeading'><h1 className="cvmain-heading">Pros and Cons of a <span>CV</span></h1></div>
      <div className="cvmain-content">
        <div className="cvmain-section pros">
          <h2 className="cvmain-subheading">Pros of a CV</h2>
          <ul className="cvmain-list">
            <li className="cvmain-item">
              <span className="cvmain-icon">✔️</span>
              <span>Provides a detailed history of your work experience and achievements.</span>
            </li>
            <li className="cvmain-item">
              <span className="cvmain-icon">✔️</span>
              <span>Ideal for academic, scientific, and research positions that value qualifications.</span>
            </li>
            <li className="cvmain-item">
              <span className="cvmain-icon">✔️</span>
              <span>Shows off certifications, skills, and other credentials comprehensively.</span>
            </li>
            <li className="cvmain-item">
              <span className="cvmain-icon">✔️</span>
              <span>Useful for demonstrating career growth and a well-rounded professional history.</span>
            </li>
          </ul>
        </div>
        <div className="cvmain-section cons">
          <h2 className="cvmain-subheading">Cons of a CV</h2>
          <ul className="cvmain-list">
            <li className="cvmain-item">
              <span className="cvmain-icon">✖️</span>
              <span>Can be lengthy and overwhelming if not tailored to the job.</span>
            </li>
            <li className="cvmain-item">
              <span className="cvmain-icon">✖️</span>
              <span>Not ideal for jobs that require a quick overview of qualifications.</span>
            </li>
            <li className="cvmain-item">
              <span className="cvmain-icon">✖️</span>
              <span>May include outdated or irrelevant information if not regularly updated.</span>
            </li>
            <li className="cvmain-item">
              <span className="cvmain-icon">✖️</span>
              <span>Too much detail can distract from the most relevant skills and experience.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
