import React from 'react';
import '../LetterMainMoto.css';

export default function Lettermainmoto() {
  return (
    <div className="letter-container">
      <div className="ProcessHeading">
        <p className="subtitle">
          Whether you need a professional business letter, a heartfelt apology, or a formal application, we’ve got you covered. Browse through our extensive categories to find the perfect template for your needs.
        </p>
      </div>

      <div className="letter-categories">
        <div className="category">
          <h2>School Letters</h2>
          <p>Permission, Excuse, Communication, Enrollment, Fundraising, and more.</p>
        </div>
        <div className="category">
          <h2>Office Letters</h2>
          <p>Business Correspondence, Employee Letters, Client Relations, and more.</p>
        </div>
        <div className="category">
          <h2>Police Station Letters</h2>
          <p>Complaints, Requests, Witness Statements, Traffic Violations, and more.</p>
        </div>
        <div className="category">
          <h2>Bank Letters</h2>
          <p>Account Management, Transactions, Loans, Financial Assistance, and more.</p>
        </div>
        <div className="category">
          <h2>Legal Letters</h2>
          <p>Legal Notices, Demand Letters, Dispute Resolutions, and Compliance Letters.</p>
        </div>
        <div className="category">
          <h2>Government Letters</h2>
          <p>Public Services, Permit and Licensing, Regulatory Compliance, and more.</p>
        </div>
        <div className="category">
          <h2>Coming Soon</h2>
          <p>Stay tuned for exciting new templates in different categories!</p>
        </div>
        <div className="category">
          <h2>Artificial Intelligence</h2>
          <p>Automation, AI Assistance, Custom AI Applications, and more.</p>
        </div>
      </div>
    </div>
  );
}
