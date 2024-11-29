import React from 'react';
import '../CvImportance.css'; // Ensure you have this CSS file in the same directory

export default function CvImportance() {
  return (
    <div className="cv-importance-container">
      <h2 className="cv-title">Why a Great CV Matters</h2>
      <div className="cv-importance-content">
        <div className="importance-item">
          <i className="fas fa-thumbs-up importance-icon"></i>
          <h2 className="importance-heading">Professional First Impression</h2>
          <p className="importance-text">
            A well-crafted CV creates a strong first impression, showcasing your professionalism and attention to detail.
          </p>
        </div>
        <div className="importance-item">
          <i className="fas fa-star importance-icon"></i>
          <h2 className="importance-heading">Stand Out from the Crowd</h2>
          <p className="importance-text">
            In a competitive job market, a unique and visually appealing CV helps you stand out and grab the employer's attention.
          </p>
        </div>
        <div className="importance-item">
          <i className="fas fa-lightbulb importance-icon"></i>
          <h2 className="importance-heading">Highlighting Skills and Achievements</h2>
          <p className="importance-text">
            A well-structured CV effectively highlights your skills, experiences, and achievements, making it easier for employers to see your potential.
          </p>
        </div>
        <div className="importance-item">
          <i className="fas fa-list-ul importance-icon"></i>
          <h2 className="importance-heading">Ease of Navigation</h2>
          <p className="importance-text">
            An organized layout allows hiring managers to quickly navigate through your CV, increasing the chances of getting noticed.
          </p>
        </div>
        <div className="importance-item">
          <i className="fas fa-check-circle importance-icon"></i>
          <h2 className="importance-heading">Customizable for Each Application</h2>
          <p className="importance-text">
            Tailoring your CV for specific job applications helps demonstrate your fit for the role and shows your commitment to the position.
          </p>
        </div>
        <div className="importance-item">
          <i className="fas fa-chart-line importance-icon"></i>
          <h2 className="importance-heading">Professional Growth</h2>
          <p className="importance-text">
            Regularly updating your CV reflects your professional growth and helps you track your career progress over time.
          </p>
          
        </div>
      </div>
    </div>
  );
}
