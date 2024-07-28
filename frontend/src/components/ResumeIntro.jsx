import React from 'react';
import '../ResumeIntro.css'; // Make sure you have a CSS file for ResumeIntro styling
import img2 from '../assets/images/adsplace2.jpg'; 

export default function ResumeIntro() {
  return (
    <div className='resume'>
      <div className="container res-intro mt-5">
        <div className="row align-items-stretch"> {/* Use align-items-stretch to make columns equal height */}
          <div className="col-md-6 d-flex flex-column justify-content-center"> {/* Center content vertically */}
            <h1 className="heading-title">
              Free Resume <br />
              <span className="heading-subtitle">Builder: Create a Professional</span>
              <span className="heading-subtitle mb-2">Resume Online</span>
            </h1>
            <p className="lead">
              Build a professional resume online in just a few steps. Our free resume builder helps you create a polished resume that stands out to employers and enhances your job application.
            </p>
            <p>
              Whether you're applying for your first job or looking to take the next step in your career, our tool is designed to help you craft a compelling resume that highlights your skills and experiences.
            </p>
            <p>
              Follow our easy-to-use template, customize it with your details, and download your resume in PDF format ready for submission. Get started now and make a great impression on your potential employers!
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center"> {/* Center image vertically */}
            <img
              src={img2}
              alt="Resume Builder"
              className="img-fluid bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
