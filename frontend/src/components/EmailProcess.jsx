import React, { Component } from 'react';
import '../Process.css'; 
import '../App.css'

export default class EmailProcess extends Component {
  render() {
    return (
      <div className="process-container">
        <div className='ProcessHeading'> <h2 style={{textAlign: 'center'}}>Process We <span>Follow</span></h2></div>
        
        <div className="process-step">
          <div className="icon-container">
            <span className="icon" role="img" aria-label="category">🗂️</span>
          </div>
          <div className="text-container">
            <h2>Choose an Email Category</h2>
            <p className='text-black'>Start by selecting the type of email you need. Categories include School Emails, Office Emails, Police Station Emails, Bank Emails, Legal Emails, and Government Emails.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="icon-container">
            <span className="icon" role="img" aria-label="input">📝</span>
          </div>
          <div className="text-container">
            <h2>Provide Required Information</h2>
            <p className='text-black'>Fill out the necessary input fields to customize your email. This may include names, dates, addresses, and specific details relevant to your chosen category.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="icon-container">
            <span className="icon" role="img" aria-label="review">📄</span>
          </div>
          <div className="text-container">
            <h2>Generate and Review Your Email</h2>
            <p className='text-black'>Once you've filled in the required information, generate your email. Review the document to ensure all details are correct and make any necessary adjustments.</p>
          </div>
        </div>
        <div className="process-step">
          <div className="icon-container">
            <span className="icon" role="img" aria-label="download">📥</span>
          </div>
          <div className="text-container">
            <h2>Send or Download Your Email</h2>
            <p className='text-black'>After reviewing your email, you can send it directly from the website or download it in your preferred format (PDF, DOCX).</p>
          </div>
        </div>
      </div>
    );
  }
}
