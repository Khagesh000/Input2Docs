import React from 'react';
import '../ResumeImportance.css'; // Ensure this path is correct
import img1 from '../assets/images/Presentation1.webp';
import img2 from '../assets/images/Presentation2.webp';
import img3 from '../assets/images/Presentation3.webp';
import img4 from '../assets/images/Presentation4.webp';

export default function ResumeImportance() {
  return (
    <div className="container mt-5">
      <div className="importance-section section-left">
        <div className="row align-items-center">
          <div className="col-md-5 importance-image">
            <img src={img1} alt="Professional Presentation" className="img-fluid"/>
          </div>
          <div className="col-md-7 importance-content">
            <h2>Professional Presentation</h2>
            <ul>
              <li>Enhances the overall look of your resume.</li>
              <li>Provides a clean and organized layout.</li>
              <li>Creates a lasting impression on employers.</li>
              <li>Ensures consistency in formatting and style.</li>
              <li>Helps maintain a professional tone throughout.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="importance-section section-right">
        <div className="row align-items-center">
          <div className="col-md-7 importance-content">
            <h2>Time Efficiency</h2>
            <ul>
              <li>Reduces the time needed to create a resume.</li>
              <li>Pre-designed layouts save time on formatting.</li>
              <li>Allows you to focus on crafting personalized content.</li>
              <li>Quickly adapt templates to fit different job applications.</li>
              <li>Streamlines the application process.</li>
            </ul>
          </div>
          <div className="col-md-5 importance-image">
            <img src={img2} alt="Time Efficiency" className="img-fluid"/>
          </div>
        </div>
      </div>
      <div className="importance-section section-left">
        <div className="row align-items-center">
          <div className="col-md-5 importance-image">
            <img src={img3} alt="Customization" className="img-fluid"/>
          </div>
          <div className="col-md-7 importance-content">
            <h2>Customization</h2>
            <ul>
              <li>Tailor your resume to specific job roles.</li>
              <li>Highlight your unique skills and experiences.</li>
              <li>Personalize the design to reflect your personal brand.</li>
              <li>Adjust content to match the employer's requirements.</li>
              <li>Incorporate keywords relevant to the job description.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="importance-section section-right">
        <div className="row align-items-center">
          <div className="col-md-7 importance-content">
            <h2>Consistency</h2>
            <ul>
              <li>Ensures uniform formatting across all sections.</li>
              <li>Maintains a professional and polished appearance.</li>
              <li>Highlights key information clearly and concisely.</li>
              <li>Creates a cohesive and structured layout.</li>
              <li>Reduces the risk of formatting errors.</li>
            </ul>
          </div>
          <div className="col-md-5 importance-image">
            <img src={img4} alt="Consistency" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
}
