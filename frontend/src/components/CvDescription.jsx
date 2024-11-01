import React from 'react';
import '../CvDescription.css';

export default function CvDescription() {
  return (
    <div className="cv-description-container container my-5 py-5 px-4 shadow-lg rounded">
      <h1 className="cv-heading text-center mb-5">
        Craft Your <span className="highlight">Professional CV</span>
      </h1>
      <p className="cv-intro text-center mb-5">
        Elevate your job search with a standout CV. Our customizable template
        helps you effectively present your experience, skills, and achievements.
      </p>

      <div className="cv-section">
        <h3 className="section-title">Profile</h3>
        <p className="section-description">
          Concise summary of your professional background, highlighting key skills and career aspirations.
        </p>
      </div>

      <div className="cv-section">
        <h3 className="section-title">Experience</h3>
        <p className="section-description">
          Detailed history of your work roles, significant responsibilities, and achievements.
        </p>
      </div>

      <div className="cv-section">
        <h3 className="section-title">Education</h3>
        <p className="section-description">
          Academic background including degrees, majors, institutions, and graduation years.
        </p>
      </div>

      <div className="cv-section">
        <h3 className="section-title">Skills</h3>
        <p className="section-description">
          Showcase your technical and interpersonal skills that set you apart in your field.
        </p>
      </div>

      <div className="cv-section">
        <h3 className="section-title">Projects</h3>
        <p className="section-description">
          Highlight notable projects, your roles, and results achieved.
        </p>
      </div>

      <div className="cv-section">
        <h3 className="section-title">Certifications</h3>
        <p className="section-description">
          Professional certifications, courses, or licenses relevant to your expertise.
        </p>
      </div>

      <div className="cv-section">
        <h3 className="section-title">Languages</h3>
        <p className="section-description">
          Languages known with proficiency levels for multilingual roles.
        </p>
      </div>
    </div>
  );
}
