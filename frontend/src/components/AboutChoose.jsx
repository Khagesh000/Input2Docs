import React from 'react';
import '../AboutChoose.css'; // Ensure this path is correct
import teamImage from '../assets/images/adsplace.jpg'; // Import your image

export default function AboutChoose() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 mb-4">
          <h2 className="text-center">Why Choose Us</h2>
        </div>
      </div>
      <div className="row position-relative">
        <div className="col-md-5 choose">
          <div className="project-item">
            <h3><span className="bullet"></span>Innovative Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis hendrerit leo. Nulla eu orci vitae
              eros facilisis maximus vel ac velit. Suspendisse potenti. Aliquam a feugiat nunc. Fusce vehicula risus
              a neque posuere, et scelerisque lorem mollis.
            </p>
          </div>
          <div className="project-item">
            <h3><span className="bullet"></span>Collaborative Partnership</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis hendrerit leo. Nulla eu orci vitae
              eros facilisis maximus vel ac velit. Suspendisse potenti. Aliquam a feugiat nunc. Fusce vehicula risus
              a neque posuere, et scelerisque lorem mollis.
            </p>
          </div>
          <div className="project-item">
            <h3><span className="bullet"></span>Quality Uncompromised</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis hendrerit leo. Nulla eu orci vitae
              eros facilisis maximus vel ac velit. Suspendisse potenti. Aliquam a feugiat nunc. Fusce vehicula risus
              a neque posuere, et scelerisque lorem mollis.
            </p>
          </div>
          <div className="project-item">
            <h3><span className="bullet"></span>Agile Development Approach</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis hendrerit leo. Nulla eu orci vitae
              eros facilisis maximus vel ac velit. Suspendisse potenti. Aliquam a feugiat nunc. Fusce vehicula risus
              a neque posuere, et scelerisque lorem mollis.
            </p>
          </div>
          <div className="project-item">
            <h3><span className="bullet"></span>User-Centric Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis hendrerit leo. Nulla eu orci vitae
              eros facilisis maximus vel ac velit. Suspendisse potenti. Aliquam a feugiat nunc. Fusce vehicula risus
              a neque posuere, et scelerisque lorem mollis.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center position-relative">
          <img src={teamImage} alt="Project Overview" className="img-fluid" />
          <div className="bullet-line"></div>
        </div>
      </div>
    </div>
  );
}
