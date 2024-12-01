import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SearchCategory.css';
import '../Searchcategory-new.css'; // Import custom CSS for styling
import LetterMaker from './LetterMaker'; // Assuming this is where your LetterMaker component resides
import { FaBriefcase, FaClock, FaStar } from 'react-icons/fa';

const categories = {
  "School Letters": {
    "Permission Letters": [
      "Field Trip Permission Letter",
      "Medical Treatment Permission",
      "Overnight Stay Permission",
      "Travel Permission Letter",
      "Parental Consent for Minor's",
      "Permission to Use Property",
      "Parental Permission for School"
    ],
    "Excuse Letters": [
      "Absentee Excuse Letter",
      "Late Arrival Excuse Letter",
      "Sick Leave Excuse Letter",
      "Personal Emergency Excuse Letter",
      "Family Emergency Excuse Letter",
      "Jury Duty Excuse Letter",
      "Medical Appointment Excuse Letter"
    ],
    
    "Communication Letters": [
      "Job Application",
      "Follow-Up After Meeting",
      "Complaint About Service",
      "Request for Meeting",
      "Apology for Mistake",
      "Notification of Change of Address",
      "Resignation Letter"
    ],
    "Enrollment Letters": [
      "Application for Admission",
      "Confirmation of Enrollment",
      "Request for Enrollment Deferral",
      "Request for Transcript",
      "Request for Enrollment Verification",
      "Notification of Withdrawal",
      "Request for Enrollment Confirmation"
    ],
    "Fundraising Letters": [
      "Charity Event Invitation",
      "Donation Request",
      "Thank You for Your Donation",
      "Campaign Update",
      "Grant Proposal Request",
      "Sponsorship Request",
      "Thank You for Sponsorship"
    ],
    "Safety and Emergency Letters": [
      "Emergency Contact Information Update",
      "Safety Incident Report",
      "Workplace Safety Alert",
      "Emergency Evacuation Plan",
      "Safety Equipment Inspection Report",
      "Incident Follow-Up Report",
      "Safety Training Confirmation"
    ],
    "Educational Updates Letters":[
      "Academic Progress Report",
      "Parent-Teacher Conference Invitation",
      "Behavioral Improvement Plan",
      "Student Achievement Recognition",
      "Course Enrollment Confirmation",
      "Scholarship Award Notification",
      "Graduation Ceremony Invitation",


    ]
  },
  "Office Letters": {
    "Business Correspondence": [
      "Business Proposal",
      "Complaint Letter",
      "Job Offer Letter",
      "Invoice",
      "Purchase Order",
      "Meeting Request",
      "Acknowledgment Letter",
      
    ],
    "Internal Communication": [
      "Meeting Invitation",
      "Project Update",
      "Company Announcement",
      "HR Communication",
      "Policy Update",
      "Event Announcement",
      "Team Appreciation"

    ],
    "Employee Letters": [
       "Offer Letter",
       "Appointment Letter",
       "Promotion Letter",
       "Termination Letter",
       "Appreciation Letter",
       "Warning Letter",
       "Resignation Acceptance Letter"
    ],
    "Client Relations": [
      "Welcome Email",
      "Follow-Up Email",
      "Feedback Request",
      "Problem Resolution",
      "Service/Product Update",
      "Special Offers",
      "Anniversary Thank You"
    ],
    "Meeting and Appointment": [
      "Meeting Invitation",
      "Appointment Confirmation",
      "Meeting Agenda",
      "Appointment Reminder",
      "Meeting Cancellation",
      "Reschedule Request",
      "Meeting Follow-Up",
    ],
    "Financial Documents":[
      "Expense Report",
      "Financial Statement",
      "Budget Proposal",
      "Reimbursement Request",
      "Payment Reminder",
      "Audit Report",
      "Tax Documentation"
    ],
    "Legal and Compliance":[
      "Confidentiality Agreement",
      "Non-Disclosure Agreement (NDA)",
      "Contract Agreement",
      "Policy Compliance Notice",
      "Data Protection Notice",
      "Compliance Audit Notification",
      "Legal Notice"
    ]
  },
  "Police Station Letters": {
    "Complaint Letters": [
      "Complaint Against Police Misconduct",
      "Complaint About Delayed Investigation",
      "Complaint About Unlawful Arrest",
      "Complaint About Police Negligence",
      "Complaint About Police Brutality",
      "Complaint About Police Harassment",
      "Complaint About Negligent Response",
     

    ],
    "Request Letters": [
      "Leave Request",
      "Information Request",
      "Resource Request",
      "Approval Request",
      "Change Request",
      "Extension Request",
      "Recommendation Request"
    ],
    "Witness Statements": [
      "Incident Report",
      "Character Reference",
      "Affidavit",
      "Testimonial",
      "Sworn Statement",
      "Witness Testimony",
      "Witness Affidavit",
    ],
    "Traffic Violation": [
      "Speeding Violation",
      "DUI Violation",
      "Hit and Run",
      "Reckless Driving",
      "Traffic Light Violation",
      "Illegal U-Turn",
      "Failure to Yield"
    ],
    "Victim Assistance": [
      "Emergency Assistance Request",
      "Victim Impact Statement",
      "Counseling Request",
      "Legal Assistance Request",
      "Victim Compensation Claim",
      "Support Group Referral",
      "Medical Assistance Request",
    ],
    "Crime Reporting":[
      "Incident Report",
      "Theft Report",
      "Burglary Report",
      "Vandalism Report",
      "Fraud Report",
      "Assault Report",
      "Robbery Report"
    ],
    "Personal Safety and Protection":[
      "Restraining Order Request",
      "Protective Custody Request",
      "Safety Plan Request",
      "Emergency Contact Information Update",
      "Witness Protection Request",
      "Security Assessment Request",
      "Victim Support Services Request"
    ]
  },
  "Bank Letters": {
    "Account Management": [
      "Account Creation Request",
      "Account Deletion Request",
      "Account Information Update Request",
      "Password Reset Request",
      "Account Reactivation Request",
      "Account Suspension Request",
      "Permission Change Request"
    ],
    "Transaction Letters": [
      "Acknowledgment of Receipt of Payment",
      "Confirmation of Transaction",
      "Notification of Payment Due",
      "Payment Overdue Notice",
      "Refund Request Confirmation",
      "Dispute Resolution Acknowledgment",
      "Cancellation of Transaction Notice"
    ],
    "Loan and Mortgage": [
      "Loan Approval Letter",
      "Loan Rejection Letter",
      "Mortgage Payment Reminder",
      "Mortgage Default Notice",
      "Loan Payment Confirmation",
      "Mortgage Modification Request",
      "Loan Prepayment Notice"
    ],
    "Financial Assistance": [
      "Grant Approval Letter",
      "Grant Rejection Letter",
      "Funding Request Letter",
      "Assistance Follow-Up Letter",
      "Financial Aid Disbursement Letter",
      "Financial Aid Renewal Letter",
      "Assistance Confirmation Letter"
    ],
    "Security Letters": [
      "Security Incident Report",
      "Access Authorization Letter",
      "Security Breach Notification",
      "Access Revocation Letter",
      "Confidentiality Agreement",
      "Security Policy Implementation",
      "Background Check Confirmation"
    ],
    "Investment and Savings":[
      "Investment Portfolio Update",
      "Savings Account Interest Rate Change Notice",
      "Investment Account Statement",
      "Fixed Deposit Maturity Notification",
      "Investment Risk Assessment Report",
      "Investment Withdrawal Confirmation",
      "Savings Plan Recommendation"
    ],

    "Customer Service":[
      "General Inquiry Response",
      "Complaint Acknowledgment",
      "Feedback Response",
      "Service Improvement Notification",
      "Customer Appreciation Letter",
      "Service Interruption Notification",
      "Account Closure Confirmation"
    ]
  },
  "Legal Letters": {
    "Legal Notices": [
       "Cease and Desist Letter",
       "Demand for Payment",
       "Notice of Breach of Contract",
       "Intellectual Property Rights Notice",
       "Termination of Lease",
       "Eviction Notice",
       "Notice of Intent to Sue"

    ],
    "Demand Letters": [
      "Demand for Payment",
      "Demand for Lease Payment",
      "Demand for Refund",
      "Demand for Contract Performance",
      "Demand for Service Completion",
      "Demand for Contract Breach",
      "Demand for Non-Disclosure Breach"
    ],
    "Legal Correspondence": [
      "Settlement Agreement",
      "Legal Compliance Notice",
      "Notice of Breach of Contract",
      "Legal Advice Request",
      "Contract Termination Letter",
      "Request for Proposal",
      "Customer Complaint Response"
    ],
    "Contract Letters": [
      "Settlement Agreement",
      "Legal Compliance Notice",
      "Notice of Breach of Contract",
      "Legal Advice Request",
      "Employment Contract",
      "Contract Renewal Notice",
      "Contract Termination Notice"
    ],
    "Dispute Resolution": [
      "Settlement Agreement",
      "Mediation Agreement",
      "Arbitration Notice",
      "Dispute Resolution Proposal",
      "Legal Demand for Resolution",
      "Conflict Resolution Proposal",
      "Complaint Resolution Letter"
    ],
    "Regulatory Compliance Letters": [
      "Regulatory Compliance Acknowledgment",
      "Notice of Regulatory Violation",
      "Compliance Certification Request",
      "Regulatory Inquiry Response",
      "Compliance Audit Notification",
      "Compliance Policy Implementation",
      "Legal Compliance Report"
    ],

    "Employment Law Letters":[
      "Employment Termination Notice",
      "Employment Dispute Resolution",
      "Harassment Complaint Response",
      "Employee Warning Notice",
      "Notice of Disciplinary Action",
      "Workplace Policy Violation Notice",
      "Employment Law Compliance Notice"
    ]
  },
  "Government Letters": {
    "Public Services": [
      "Request for Public Records",
      "Complaint Against Government Service",
      "Request for Government Grant",
      "Notification of Policy Changes",
      "Request for Government Assistance",
      "Notification of Public Hearing",
      "Request for Government Feedback",
    ],
    "Permit and Licensing": [
      "Building Permit Application",
      "Business License Application",
      "Food Service Permit Application",
      "Liquor License Application",
       "Event Permit Application",
       "Health and Safety Permit",
       "Construction Permit Application"
    ],
    "Regulatory Compliance": [
      "Environmental Impact Assessment",
      "Health and Safety Compliance Report",
      "Data Protection Compliance Statement",
      "Occupational Safety and Health Compliance Report",
      "Financial Compliance Declaration",
      "Product Safety Compliance Report",
      "Export Control Compliance Statement"
    ],
    "Public Announcement": [
      "Company Name Change",
      "New Product Launch",
      "Office Relocation",
      "Service Disruption Notice",
      "Policy Change Notification",
      "Annual General Meeting",
      "EmployeeT ermination"
    ],
    "Government Grant": [
      "Research Grant",
      "Community Development Grant",
      "Educational Grant",
      "Small Business Grant",
      "Non Profit Grant",
      "Environmental Grant",
      "Health Grant"
    ],
    "Legal and Compliance Notifications":[
      "Notice of Violation",
      "Cease and Desist Letter",
      "Legal Compliance Certification",
      "Notice of Investigation",
      "Regulatory Change Notification",
      "Penalty or Fine Notification",
      "Court Summons"
    ],
    "Community and Social Services":[
      "Public Service Announcement",
      "Social Assistance Application",
      "Community Event Notification",
      "Volunteer Recruitment Notice",
      "Community Safety Alert",
      "Public Health Advisory",
      "Disaster Relief Request"
    ]

  },
  
};

const SearchCategory = ({ handleSubcategoryClick }) => {
  const letterGenerationSectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const categoryRef = useRef(null);
  const subcategoryRef = useRef(null);
  const templateRef = useRef(null);


 

  useEffect(() => {
    if (selectedCategory) {
      subcategoryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedSubcategory) {
      templateRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedSubcategory]);

  useEffect(() => {
    if (selectedTemplate) {
      letterGenerationSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedTemplate]);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
    setSelectedTemplate('');
  };

  const handleSubcategorySelection = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedTemplate(categories[subcategory]?.[Object.keys(categories[subcategory])[0]]); // Select the first template automatically
  
    handleSubcategoryClick(subcategory);
  };

  const handleTemplateSelection = (templateName) => {
    setSelectedTemplate(templateName);
  };

  return (
    <div className="container" style={{paddingTop: '3%'}}>

<div className="lettermaker-container">
      <div className="lettermaker-content">
        <div className="ProcessHeading">
          <h2 className="lettermaker-title animate-slow">
            Craft Your Letters, <span>Professionally and Effortlessly</span>
          </h2>
        </div>
        <p className="lettermaker-subtitle animate-fadein" style={{color: 'grey'}}>
          Discover professionally designed templates that simplify your communication and make a lasting impression.
        </p>

        

        <div className="lettermaker-feature-grid" >

          <div className="lettermaker-feature-card animate-slideup delay-200">
            <div className="lettermaker-icon-circle">
              <FaStar className="lettermaker-icon" />
            </div>
            <h2 className="lettermaker-feature-title">Make a Lasting Impression</h2>
    <p className="lettermaker-feature-description">
      Our Letter Maker helps you craft polished, compelling letters that reflect your message with clarity and professionalism.
    </p>
            <div className="lettermaker-card-accent"></div>
          </div>
        </div>

      </div>
    </div>


      {/*  first one search category Dropdown */}
      <div className="input-group search-category-smallscreens">
        {/* Main Category Dropdown */}
        <div className="btn-group">
          <button
            className="btn btn-outline-secondary dropdown-toggle custom-dropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedTemplate || selectedSubcategory || selectedCategory || 'Select Category'}
          </button>
          <ul className="dropdown-menu">
            {Object.keys(categories).map((mainCategory) => (
              <li key={mainCategory} className="dropdown-item">
                <button
                  className="dropdown-item"
                  onMouseEnter={() => handleCategorySelection(mainCategory)}
                >
                  {mainCategory}
                </button>
                {selectedCategory === mainCategory && (
                  <ul className="dropdown-menu-sub">
                    {Object.keys(categories[mainCategory]).map((subcategory) => (
                      <li key={subcategory}>
                        <button
                          className="dropdown-item"
                          onMouseEnter={() => handleSubcategorySelection(subcategory)}
                        >
                          {subcategory}
                        </button>
                        {/* Template Dropdown */}
                        {selectedSubcategory === subcategory && (
                          <ul className="dropdown-menu-sub">
                            {categories[mainCategory][subcategory]?.map((template) => (
                              <li key={template}>
                                <button
                                  className={`dropdown-item ${selectedTemplate === template ? 'active' : ''}`}
                                  onClick={() => handleTemplateSelection(template)}
                                >
                                  {template}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

          {/* Input Box to display selected category, subcategory, and template */}
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown buttons"
          value={`${selectedCategory} ${selectedSubcategory} ${selectedTemplate}`.trim()}
          readOnly
        />
      </div>
      
      <div className='ProcessHeading mt-5'>
        <h2 style={{textAlign: 'center'}}>
          View And Download <span>Letters</span>
        </h2>
      </div>

      
      <p className="view-download-instructions" style={{color: 'grey', fontWeight: 'bolder'}}>
        You can view and download letters for various purposes below.
      </p>
      

      {/* Second Section: Card-Style Category Selector */}
      <div className="secondsearch-card-selector-container">
        <h3 style={{ marginTop: 0, color: '#9B2D20', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Select Category</h3>
        <div className="secondsearch-card-category-list">
          {Object.keys(categories).map((category) => (
            <div
              key={category}
              className={`secondsearch-card secondsearch-category-card ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategorySelection(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="secondsearch-card-subcategory-list" ref={subcategoryRef}>
            <h4 style={{ marginTop: 0, color: '#9B2D20', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{selectedCategory} - Select Subcategory</h4>
            {Object.keys(categories[selectedCategory]).map((subcategory) => (
              <div
                key={subcategory}
                className={`secondsearch-card secondsearch-subcategory-card ${selectedSubcategory === subcategory ? 'active' : ''}`}
                onClick={() => handleSubcategorySelection(subcategory)}
              >
                {subcategory}
              </div>
            ))}
          </div>
        )}

        {selectedSubcategory && (
          <div className="secondsearch-card-template-list" ref={templateRef}>
            <h4 style={{ marginTop: 0, color: '#9B2D20', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{selectedSubcategory} - Select Template</h4>
            {categories[selectedCategory][selectedSubcategory]?.map((template) => (
              <div
                key={template}
                className={`secondsearch-card secondsearch-template-card ${selectedTemplate === template ? 'active' : ''}`}
                onClick={() => handleTemplateSelection(template)}
              >
                {template}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Letter Generation Section */}
      <div ref={letterGenerationSectionRef} className="letter-generation-section">
        {selectedTemplate && (
          <div className='ProcessHeading mt-5'>
            <h2 >Generate Your <span>Letter</span></h2>
            <LetterMaker selectedTemplate={selectedTemplate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCategory;
