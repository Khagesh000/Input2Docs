import React, { Suspense } from 'react';
import '../AboutChoose.css'; 
import teamImage from '../assets/images/innovative-team-working.webp';

export default function AboutChoose() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 mb-4">
        </div>
      </div>
      <div className="row position-relative">
        <div className="col-md-5 choose">
          <div className="project-item">
            <h3 className='text-light'><span className="bullet"></span>Innovative Solutions</h3>
            <p className='about-p'>
              We deliver cutting-edge solutions that stay ahead of the curve. 
              Our team uses the latest technologies to drive success. 
              Innovation is at the heart of what we do.
            </p>
          </div>
          <div className="project-item">
            <h3 className='text-light'><span className="bullet"></span>Collaborative Approach</h3>
            <p className='about-p'>
              We work closely with you to understand your goals. 
              Our approach ensures solutions tailored to your needs. 
              Collaboration drives our project success.
            </p>
          </div>
          <div className="project-item">
            <h3 className='text-light'><span className="bullet"></span>Uncompromising Quality</h3>
            <p className='about-p'>
              Quality is our priority, with a focus on high standards. 
              We ensure exceptional results with flawless execution. 
              Excellence is non-negotiable.
            </p>
          </div>
          <div className="project-item">
            <h3 className='text-light'><span className="bullet"></span>Agile Development</h3>
            <p className='about-p'>
              Our agile approach allows for quick adaptations and iterative improvements. 
              Your project evolves effectively with us. 
              Flexibility and responsiveness are key.
            </p>
          </div>
          <div className="project-item">
            <h3 className='text-light'><span className="bullet"></span>User-Centric Design</h3>
            <p className='about-p'>
              We focus on designs that enhance user experience. 
              Our user-centric approach ensures intuitive and engaging interactions. 
              Design that prioritizes user needs is our goal.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center position-relative">
        <img 
            src={teamImage} 
            alt="Innovative team working together on cutting-edge solutions" 
            className="img-fluid" 
            loading="lazy"
          />
          <div className="bullet-line"></div>
        </div>
      </div>
    </div>
  );
}
