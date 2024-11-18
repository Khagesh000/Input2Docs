import React from 'react'
import '../AboutChoose.css'
import img from '../assets/images/importanceofcv.webp'

export default function CvAbout() {
  return (
    <div>
      <div className="container mt-5">
  <div className="row">
    <div className="col-md-12 mb-4">
      <h2 className="text-center cover-imp">Importance of <span>CV's</span></h2>
    </div>
  </div>
  <div className="row position-relative">
    <div className="col-md-5 choose">
      <div className="project-item">
        <h3 className='text-light'><span className="bullet"></span>Comprehensive Overview</h3>
        <p className='about-p'>
          A CV provides a comprehensive overview of your educational background, work experience, and skills. 
          It serves as a detailed record of your professional journey.
        </p>
      </div>
      <div className="project-item">
        <h3 className='text-light'><span className="bullet"></span>Showcasing Qualifications</h3>
        <p className='about-p'>
          Your CV is an opportunity to showcase your qualifications and achievements. 
          It helps employers assess your fit for the role based on your credentials.
        </p>
      </div>
      <div className="project-item">
        <h3 className='text-light'><span className="bullet"></span>Highlighting Relevant Experience</h3>
        <p className='about-p'>
          A well-structured CV highlights your relevant experience in a clear manner. 
          It enables employers to quickly identify your strengths and suitability for the position.
        </p>
      </div>
      <div className="project-item">
        <h3 className='text-light'><span className="bullet"></span>Demonstrating Professional Growth</h3>
        <p className='about-p'>
          Your CV illustrates your professional growth over time. 
          It shows how your skills and experiences have evolved, which can be appealing to employers.
        </p>
      </div>
      <div className="project-item">
        <h3 className='text-light'><span className="bullet"></span>Facilitating Networking Opportunities</h3>
        <p className='about-p'>
          A CV can facilitate networking opportunities by providing a clear picture of your career path. 
          It makes it easier for contacts to refer you to potential job openings.
        </p>
      </div>
    </div>
    <div className="col-md-4 d-flex align-items-center justify-content-center position-relative">
      <img src={img} alt="CV Overview" className="img-fluid" loading="lazy" />
      <div className="bullet-line"></div>
    </div>
  </div>
</div>

    </div>
  )
}
