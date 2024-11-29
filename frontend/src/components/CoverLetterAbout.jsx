import React from 'react'
import '../AboutChoose.css'
import Coverletterimportance from '../assets/images/Coverletterimportance.webp'


export default function CoverLetterAbout() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="text-center cover-imp">Importance of <span>Cover Letters</span> </h2>
          </div>
        </div>
        <div className="row position-relative">
          <div className="col-md-5 choose">
            <div className="project-item">
              <h3 className='text-light'><span className="bullet"></span>Personal Introduction</h3>
              <p className='about-p'>
                A cover letter provides a personal introduction to your resume. 
                It allows you to present yourself beyond the resume, adding a human touch to your application.
              </p>
            </div>
            <div className="project-item">
              <h3 className='text-light'><span className="bullet"></span>Highlighting Skills</h3>
              <p className='about-p'>
                Cover letters offer a chance to highlight your relevant skills and experiences. 
                They help employers understand how your background aligns with the job requirements.
              </p>
            </div>
            <div className="project-item">
              <h3 className='text-light'><span className="bullet"></span>Demonstrating Enthusiasm</h3>
              <p className='about-p'>
                Expressing your enthusiasm for the role and the company is crucial. 
                A cover letter allows you to convey your excitement and commitment to potential employers.
              </p>
            </div>
            <div className="project-item">
              <h3 className='text-light'><span className="bullet"></span>Showcasing Communication Skills</h3>
              <p className='about-p'>
                Effective communication is key in any job. 
                A well-written cover letter showcases your ability to communicate clearly and professionally.
              </p>
            </div>
            <div className="project-item">
              <h3 className='text-light'><span className="bullet"></span>Setting You Apart</h3>
              <p className='about-p'>
                A strong cover letter can set you apart from other candidates. 
                It provides a unique opportunity to make a memorable impression.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center position-relative">
            <img src={Coverletterimportance} alt="Cover Letter Overview" className="img-fluid" loading="lazy" />
            <div className="bullet-line"></div>
          </div>
        </div>
      </div>
    );
  }