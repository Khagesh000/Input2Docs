import React from 'react';
import '../Websitemainmoto.css';

export default function Websitemainmoto() {
  return (
    <div className="main-container">
      <p className="moto-subheading">Your ultimate toolset for crafting professional letters, emails, resumes, CVs, and cover letters.</p>
      
      <div className="services-row">
        <div className="service-card">
          <a href="/letter" className="service-link">
            <div className="card-content">
              <h3>Letter Maker</h3>
              <p>Create professional letters effortlessly.</p>
            </div>
          </a>
        </div>

        <div className="service-card">
          <a href="/email" className="service-link">
            <div className="card-content">
              <h3>Email Maker</h3>
              <p>Design and send impactful emails.</p>
            </div>
          </a>
        </div>

        <div className="service-card">
          <a href="/resume" className="service-link">
            <div className="card-content">
              <h3>Resume Maker</h3>
              <p>Build a professional resume quickly.</p>
            </div>
          </a>
        </div>

        <div className="service-card">
          <a href="/cv" className="service-link">
            <div className="card-content">
              <h3>CV Templates</h3>
              <p>Choose from top CV templates.</p>
            </div>
          </a>
        </div>

        <div className="service-card">
          <a href="/cover" className="service-link">
            <div className="card-content">
              <h3>Cover Letter Maker</h3>
              <p>Design and customize your cover letter easily.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
