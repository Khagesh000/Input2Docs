import React from 'react';
import '../CoverLetterIntro.css'; // Import the external CSS file
import img2 from '../assets/images/COVERLETTER.webp'; 

export default function CoverLetterIntro() {
  return (
    <div className="bg-black coverletter-intro">
      <div className="container cov-intro mt-5">
        <div className="row align-items-stretch">
          <div className="col-md-6 d-flex flex-column justify-content-center fade-in">
            <h2 className="heading-title">
              Free Cover Letter <br />
              <span className="heading-subtitle">Generator: Build a Cover</span>
              <span className="heading-subtitle mb-2">Letter Online in Minutes</span>
            </h2>
            <p className="lead">
              Build a professional cover letter online in just a few steps. Our free cover letter generator helps you create a polished cover letter that stands out to employers and enhances your job application.
            </p>
            <p>
              Whether you're applying for your first job or looking to take the next step in your career, our tool is designed to help you craft a compelling cover letter that highlights your skills and experiences.
            </p>
            <p>
              Follow our easy-to-use template, customize it with your details, and download your cover letter in PDF format, ready for submission. Get started now and make a great impression on your potential employers!
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center fade-in">
            <img
              src={img2}
              alt="Cover Letter Generator"
              className="img-fluid bg-black cover-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
