import React from 'react';
import '../AboutImage.css'; // Ensure this path is correct
import img2 from '../assets/images/adsplace2.webp'; // Import your image

// Import icons from react-icons
import { FaCheckCircle, FaUserCheck, FaHeart, FaRegLightbulb, FaStar, FaSyncAlt } from 'react-icons/fa';

export default function AboutImage() {
  return (
    <div>
      <div className="about-image-container" style={{ backgroundImage: `url(${img2})` }}>
        <div className="about-image-text">
          <h2 className='ProcessHeading'>About Us</h2>
          <p className='abouti-p'>We are committed to delivering the best services...</p>
        </div>
      </div>

      <div className="project-details container mt-5">
        <div className="row">
          <div className="col-md-4">
            <h2>Languages Used</h2>
            <h2>Web Development</h2>
            <h2>Project Features</h2>
          </div>
          <div className="col-md-8">
            <p className='abouti-p'>
              Our project utilizes various programming languages including JavaScript, Python, and SQL.
              We focus on creating robust web applications using modern frameworks and libraries such as React, Django, and Bootstrap.
            </p>
            <p className='abouti-p'>
              The project involves full-stack web development, encompassing front-end design, back-end logic, and database management.
              Our aim is to deliver seamless user experiences with responsive and interactive interfaces.
            </p>
            <p className='abouti-p'>
              Some of the key features of our project include real-time data processing, user authentication and authorization,
              API integration, and a comprehensive admin panel for managing content and user interactions.
            </p>
            
          </div>
        </div>
        <p className='abouti-p'>
              Additionally, our platform supports multi-language options, ensuring accessibility for a global audience.
              We have integrated advanced security measures to protect user data and prevent unauthorized access.
              The user interface is designed to be intuitive and user-friendly, allowing users to navigate the system effortlessly.
              Our team continuously monitors and updates the system to enhance performance and introduce new features.
              We prioritize customer feedback and strive to implement suggestions to meet user needs effectively.
            </p>
      </div>

      <div className="core-values container mt-5 text-center">
        <h2>Our Core Values</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex">
                <div className="icon-container mr-3">
                  <FaCheckCircle size={32} color="#28a745" />
                </div>
                <div>
                  <h5 className="card-title">Integrity</h5>
                  <p className="card-text abouti-p">
                    We adhere to the highest standards of ethics and honesty in all that we do.
                    Our actions are guided by strong moral principles, and we are committed to transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex">
                <div className="icon-container mr-3">
                  <FaUserCheck size={32} color="#007bff" />
                </div>
                <div>
                  <h5 className="card-title">Responsibility</h5>
                  <p className="card-text abouti-p">
                    We take ownership of our actions and their impact on our stakeholders.
                    Our team is dedicated to meeting our commitments and being accountable for our performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex">
                <div className="icon-container mr-3">
                  <FaHeart size={32} color="#dc3545" />
                </div>
                <div>
                  <h5 className="card-title">Customer First</h5>
                  <p className="card-text abouti-p">
                    Our customers are at the heart of everything we do.
                    We strive to exceed their expectations and deliver exceptional service and value.
                    Our goal is to build long-term relationships based on trust and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex">
                <div className="icon-container mr-3">
                  <FaRegLightbulb size={32} color="#ffc107" />
                </div>
                <div>
                  <h5 className="card-title">Accountability</h5>
                  <p className="card-text abouti-p">
                    We hold ourselves accountable to deliver on our commitments.
                    Accountability drives us to achieve our goals and fulfill our promises to customers and stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex">
                <div className="icon-container mr-3">
                  <FaStar size={32} color="#6f42c1" />
                </div>
                <div>
                  <h5 className="card-title">Excellence</h5>
                  <p className="card-text abouti-p">
                    We strive for excellence in everything we do.
                    Our team is dedicated to continuous improvement and delivering the highest quality of work.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex">
                <div className="icon-container mr-3">
                  <FaSyncAlt size={32} color="#17a2b8" />
                </div>
                <div>
                  <h5 className="card-title">Continuous Improvement</h5>
                  <p className="card-text abouti-p">
                    We constantly seek to improve and innovate.
                    Our focus is on finding better ways to serve our customers and enhance our services.
                    We embrace change and are committed to growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
