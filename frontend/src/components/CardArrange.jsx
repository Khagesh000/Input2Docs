import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/SchoolLetter.jpg';
import img1 from '../assets/images/OfficeLetters.jpg';
import img2 from '../assets/images/PoliceStationLetter.jpg';
import img3 from '../assets/images/BankLetter.jpg';
import img4 from '../assets/images/LegalLetter.jpg';
import img5 from '../assets/images/GovernmentLetter.jpg';

import '../App.css';

const CardArrange = () => {
  const headingText = "OUR POPULAR SERVICES";
  const styledHeading = headingText.split('').map((char, index) => (
    <span key={index} className="gradient-letter">{char}</span>
  ));

  return (
    <div className='cardHeading'>
      <h1>{styledHeading}</h1>
      <div className="row pb-5">
        <div className="col-md-4">
          <div className="card h-100">
            <img src={img} className="card-img-top img-fluid" alt="Image 1" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body cardBody">
              <h5 className="card-title">School Letters</h5>
              <ul className="list-unstyled">
                <li>Permission Letters</li>
                <li>Excuse Letters</li>
                <li>Communication Letters</li>
                <li>Enrollment Letters</li>
                <li>Fundraising Letters</li>
                <li>Safety and Emergency Letters</li>
              </ul>
              <Link to="/letter" className="btn btn-primary">
                EXPLORE <span className="arrow-right">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src={img1} className="card-img-top img-fluid" alt="Image 2" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Office Letters</h5>
              <ul className="list-unstyled">
                <li>Business Correspondence</li>
                <li>Internal Communication</li>
                <li>Employee Letters</li>
                <li>Client Relations</li>
                <li>Meeting and appointment</li>
              </ul>
              <Link to="/letter" className="btn btn-primary">
                EXPLORE <span className="arrow-right">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src={img2} className="card-img-top img-fluid" alt="Image 3" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Police Station</h5>
              <ul className="list-unstyled">
                <li>Complaint Letters</li>
                <li>Request Letters</li>
                <li>Witness Statements</li>
                <li>Traffic Violation</li>
                <li>Victim Assistance</li>
              </ul>
              <Link to="/letter" className="btn btn-primary">
                EXPLORE <span className="arrow-right">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row pb-5">
        <div className="col-md-4">
          <div className="card h-100">
            <img src={img3} className="card-img-top img-fluid" alt="Image 4" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Bank Letters</h5>
              <ul className="list-unstyled">
                <li>Account management</li>
                <li>Transaction Letters</li>
                <li>Loan and Mortgage</li>
                <li>Financial Assistance</li>
                <li>Security Letters</li>
              </ul>
              <Link to="/letter" className="btn btn-primary">
                EXPLORE <span className="arrow-right">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src={img4} className="card-img-top img-fluid" alt="Image 5" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Legal Letters</h5>
              <ul className="list-unstyled">
                <li>Legal Notices</li>
                <li>Demand Letters</li>
                <li>Legal Correspondence</li>
                <li>Contract Letters</li>
                <li>Dispute Resolution</li>
              </ul>
              <Link to="/letter" className="btn btn-primary">
                EXPLORE <span className="arrow-right">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src={img5} className="card-img-top img-fluid" alt="Image 6" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">Government Letters</h5>
              <ul className="list-unstyled">
                <li>Public Services</li>
                <li>Permit and Licensing</li>
                <li>Regulatory Compliance</li>
                <li>Public Announcement</li>
                <li>Government Grant</li>
              </ul>
              <Link to="/letter" className="btn btn-primary">
                EXPLORE <span className="arrow-right">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArrange;
