import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SchoolLetter from '../assets/images/SchoolLetter.webp';
import OfficeLetters from '../assets/images/OfficeLetters.webp';
import PoliceStationLetter from '../assets/images/PoliceStationLetter.webp';
import BankLetter from '../assets/images/BankLetter.webp';
import LegalLetter from '../assets/images/LegalLetter.webp';
import GovernmentLetter from '../assets/images/GovernmentLetter.webp';
import '../App.css';
import '../Cardarrange.css'

const CardArrange = () => {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector('.card');
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth + 15); // Including margin
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);

    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const headingText = "OUR POPULAR SERVICES";
  const styledHeading = headingText.split('').map((char, index) => (
    <span key={index} className="gradient-letter">{char}</span>
  ));

  return (
    <div className='cardHeading'>
      <div className="position-relative">
      <h2 className='ProcessHeading' style={{color:'red', fontWeight:'bolder'}}>Types Of Letters</h2>
        <div className="template-row" ref={containerRef}>
          <div className="col-md-4 col-sm-12 card-temp">
            <div className="card h-100">
              
              <img src={SchoolLetter} className="card-img-top img-fluid" alt="School_Letter" loading="lazy" style={{ height: '200px', objectFit: 'cover' }} />
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
          <div className="col-md-4 col-sm-12 card-temp">
            <div className="card h-100">
              <img src={OfficeLetters} className="card-img-top img-fluid" alt="Office-letter" loading="lazy" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body cardBody">
                <h5 className="card-title">Office Letters</h5>
                <ul className="list-unstyled">
                  <li>Recommendation Letters</li>
                  <li>Resignation Letters</li>
                  <li>Appointment Letters</li>
                  <li>Salary Verification Letters</li>
                  <li>Experience Letters</li>
                  <li>Promotion Letters</li>
                </ul>
                <Link to="/letter" className="btn btn-primary">
                  EXPLORE <span className="arrow-right">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 card-temp">
            <div className="card h-100">
              <img src={PoliceStationLetter} className="card-img-top img-fluid" alt="Police-station-letter" loading="lazy" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body cardBody">
                <h5 className="card-title">Police Station Letters</h5>
                <ul className="list-unstyled">
                  <li>Complaint Letters</li>
                  <li>FIR Registration Requests</li>
                  <li>Verification Requests</li>
                  <li>Missing Person Reports</li>
                  <li>Character Certificates</li>
                  <li>Incident Reports</li>
                </ul>
                <Link to="/letter" className="btn btn-primary">
                  EXPLORE <span className="arrow-right">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 card-temp">
            <div className="card h-100">
              <img src={BankLetter} className="card-img-top img-fluid" alt="Bank-letter" loading="lazy" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body cardBody">
                <h5 className="card-title">Bank Letters</h5>
                <ul className="list-unstyled">
                  <li>Loan Requests</li>
                  <li>Account Opening Requests</li>
                  <li>Statement Requests</li>
                  <li>Transaction Disputes</li>
                  <li>Cheque Book Requests</li>
                  <li>Address Change Requests</li>
                </ul>
                <Link to="/letter" className="btn btn-primary">
                  EXPLORE <span className="arrow-right">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 card-temp">
            <div className="card h-100">
              <img src={LegalLetter} className="card-img-top img-fluid" alt="Legal-letter" loading="lazy" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body cardBody">
                <h5 className="card-title">Legal Letters</h5>
                <ul className="list-unstyled">
                  <li>Legal Notices</li>
                  <li>Contract Letters</li>
                  <li>Power of Attorney Letters</li>
                  <li>Cease and Desist Letters</li>
                  <li>Demand Letters</li>
                  <li>Settlement Letters</li>
                </ul>
                <Link to="/letter" className="btn btn-primary">
                  EXPLORE <span className="arrow-right">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 card-temp">
            <div className="card h-100">
              <img src={GovernmentLetter} className="card-img-top img-fluid" alt="Government-letter" loading="lazy" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body cardBody">
                <h5 className="card-title">Government Letters</h5>
                <ul className="list-unstyled">
                  <li>Application Letters</li>
                  <li>Request for Certificates</li>
                  <li>Complaint Letters</li>
                  <li>Appeal Letters</li>
                  <li>Grievance Letters</li>
                  <li>Proposal Letters</li>
                </ul>
                <Link to="/letter" className="btn btn-primary">
                  EXPLORE <span className="arrow-right">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button className="arrow-button left-arrow" onClick={scrollLeft}>
          &lt;
        </button>
        <button className="arrow-button right-arrow" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardArrange;
