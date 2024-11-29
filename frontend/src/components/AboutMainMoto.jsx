import React from 'react';
import '../AboutMainMoto.css';
import { FaEnvelope, FaFileAlt, FaUser, FaFileSignature, FaAddressCard, FaRobot } from 'react-icons/fa';

export default function AboutMainMoto() {
  return (
    <div className="about-section bg-black">
      <div className="container about-container mt-5">
        <div className='ProcessHeading'><h2>Discover Our Suite of <span>Professional Makers</span></h2></div>
        <div className="row">
          <div className="col-md-6 col-lg-4 fade-in">
            <div className="feature-box">
              <FaEnvelope className="icon" />
              <h3>
                <a href="/letter" className="internal-link">Letter Maker</a>
              </h3>
              <p>
                Easily create professional letters with customizable templates designed for every occasion. Stand out with polished, high-quality letters tailored to your needs.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 fade-in">
            <div className="feature-box">
              <FaFileAlt className="icon" />
              <h3>
                <a href="/email" className="internal-link">Email Maker</a>
              </h3>
              <p>
                Craft impactful emails that capture attention. With our Email Maker, generate professional emails that are structured to enhance communication and engagement.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 fade-in">
            <div className="feature-box">
              <FaUser className="icon" />
              <h3>
                <a href="/resume" className="internal-link">Resume Maker</a>
              </h3>
              <p>
                Build a standout resume effortlessly. Our Resume Maker offers easy-to-use templates that highlight your skills, experience, and achievements.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 fade-in">
            <div className="feature-box">
              <FaFileSignature className="icon" />
              <h3>
                <a href="/cover" className="internal-link">Cover Letter Maker</a>
              </h3>
              <p>
                Create a persuasive cover letter that complements your resume. Our Cover Letter Maker provides you with a professional format for a lasting impression.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 fade-in">
            <div className="feature-box">
              <FaAddressCard className="icon" />
              <h3>
                <a href="/cv" className="internal-link">CV Templates Maker</a>
              </h3>
              <p>
                Design a comprehensive CV with ease. Choose from templates crafted to present your career highlights and qualifications effectively.
              </p>
            </div>
          </div>
          {/* Coming Soon Section for AI Integration */}
          <div className="col-md-6 col-lg-4 fade-in coming-soon">
            <div className="feature-box">
              <FaRobot className="icon ai-icon" />
              <h3>
                <a href="/about-us" className="internal-link">AI-Powered Tools</a>
              </h3>
              <p>
                <em>Coming Soon</em>: Discover the next level of customization with AI-driven templates and smart recommendations. Experience personalized suggestions tailored to your career goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
