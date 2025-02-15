import React, { Component } from 'react';
import '../Process.css'; 



export default class Process extends Component {
  render() {
    return (
      <div className="process-container container">
    <div className='ProcessHeading'> <h2 className='ProcessHeading' style={{textAlign: 'center'}}>Process We <span>Follow</span></h2></div>
     

        <div className="process-step">
          <div className="icon-container">
            <span className="icon" role="img" aria-label="category">🗂️</span>
          </div>
          <div className="text-container">
            <h2>Choose a Letter Category</h2>
            <p className='text-black'>Start by selecting the type of letter you need. Categories include School Letters, Office Letters, Police Station Letters, Bank Letters, Legal Letters, and Government Letters.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="icon-container">
            <span className="icon" role="img" aria-label="input">📝</span>
          </div>
          <div className="text-container">
            <h2>Provide Required Information</h2>
            <p className='text-black'>Fill out the necessary input fields to customize your letter. This may include names, dates, addresses, and specific details relevant to your chosen category.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="icon-container">
            <span className="icon" role="img" aria-label="review">📄</span>
          </div>
          <div className="text-container">
            <h2>Generate and Review Your Letter</h2>
            <p className='text-black'>Once you've filled in the required information, generate your letter. Review the document to ensure all details are correct and make any necessary adjustments.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="icon-container">
            <span className="icon" role="img" aria-label="download">📥</span>
          </div>
          <div className="text-container">
            <h2>Download or Print Your Letter</h2>
            <p className='text-black'>After reviewing your letter, download it in your preferred format (PDF, DOCX) or print it directly from the website.</p>
          </div>
        </div>
      </div>
    );
  }
}
