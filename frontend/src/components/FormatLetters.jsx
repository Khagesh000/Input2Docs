import React, { Component } from 'react';
import businessIcon from '../assets/images/business-icon.png'; // Replace with actual paths
import personalIcon from '../assets/images/personal-icon.png';
import officialIcon from '../assets/images/official-icon.png';
import academicIcon from '../assets/images/academic-icon.png';
import employmentIcon from '../assets/images/employement-icon.png';
import anotherIcon from '../assets/images/another-icon.png';
import '../FormatLetters.css';
import '../Process.css'


export default class FormatLetters extends Component {
  render() {
    return (
      <div className="format-letters-container">
        <div className='ProcessHeading'> <h1>Types Of <span>Letters</span></h1></div>
        <div className="row justify-content-around">
          {/* Business Letters */}
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
            <div className="card-square">
              <img src={businessIcon} alt="Business Letters" className="img-square" />
              <h5>Business Letters</h5>
              <p>Formal letters used for business communication.</p>
            </div>
          </div>

          {/* Personal Letters */}
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
            <div className="card-square">
              <img src={personalIcon} alt="Personal Letters" className="img-square" />
              <h5>Personal Letters</h5>
              <p>Informal letters written to friends and family.</p>
            </div>
          </div>

          {/* Official Letters */}
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
            <div className="card-square">
              <img src={officialIcon} alt="Official Letters" className="img-square" />
              <h5>Official Letters</h5>
              <p>Formal letters sent to authorities.</p>
            </div>
          </div>

          {/* Academic Letters */}
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
            <div className="card-square">
              <img src={academicIcon} alt="Academic Letters" className="img-square" />
              <h5>Academic Letters</h5>
              <p>Letters related to educational purposes.</p>
            </div>
          </div>

          {/* Employment Letters */}
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
            <div className="card-square">
              <img src={employmentIcon} alt="Employment Letters" className="img-square" />
              <h5>Employment Letters</h5>
              <p>Letters related to job applications and employment.</p>
            </div>
          </div>

          {/* Another Type */}
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 text-center">
            <div className="card-square">
              <img src={anotherIcon} alt="Another Type" className="img-square" />
              <h5>Another Type</h5>
              <p>Description of another type of letter.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
