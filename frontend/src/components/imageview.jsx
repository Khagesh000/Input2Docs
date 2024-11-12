import React from 'react';
import '../ImageView.css'; // Custom CSS file for styling
import { FaEnvelope, FaFileAlt, FaRegAddressCard, FaTools } from 'react-icons/fa';

export default function ImageView() {
  return (
    <div className="image-view-container container">
      <div className="icon-section1">
        <FaEnvelope className="icon1" />
        <FaFileAlt className="icon1" />
        <FaRegAddressCard className="icon1" />
        <FaTools className="icon1" />
      </div>

      <div>
        <div className="content-section">
          <h1 className="main-heading">Welcome to Lettermaker</h1>
          <p className="content">
            Your one-stop solution for generating high-quality letters effortlessly. Whether it’s a school letter, legal letter, or any type of formal communication, we’ve got you covered.
          </p>
        </div>

        <div className="content-section">
          <h1 className="main-heading">Explore Email Maker</h1>
          <p className="content">
            Create professional emails with ease. From business emails to sales pitches, our email maker offers a wide range of templates to suit your needs.
          </p>
        </div>

        <div className="content-section">
          <h1 className="main-heading">Build Your Resume</h1>
          <p className="content">
            Craft a standout resume with our Resume Maker. Choose from various templates, customize your details, and download in multiple formats.
          </p>
        </div>

        <div className="content-section">
          <h1 className="main-heading">Cover Letter Maker</h1>
          <p className="content">
            Complement your resume with a personalized cover letter. Use our templates to create a compelling introduction for your job applications.
          </p>
        </div>

        <div className="content-section">
          <h1 className="main-heading">More Tools Coming Soon!</h1>
          <p className="content">
            Stay tuned for more innovative tools that will make your professional life easier.
          </p>
        </div>
      </div>
    </div>
  );
}
