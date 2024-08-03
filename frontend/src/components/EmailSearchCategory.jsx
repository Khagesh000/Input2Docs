import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SearchCategory.css';
import EmailMaker from './EmailMaker';

const categories = {
  "Business Emails": {
    "Sales Emails": [
      "Introduction Email",
      "Follow-Up Email",
      "Product Launch Email",
      "Sales Pitch Email",
      "Discount or Promotion Email",
      "Case Study or Success Story Emai",
      "Re-engagement Email"
    ],
    "Marketing Emails": [
      "Product Launch Email",
      "Newsletter Email",
      "Welcome Email",
      "Promotional Email",
      "Event Invitation Email",
      "Re-engagement Email",
      "Feedback or Survey Email"
    ],
    "Customer Service Emails": [
    "Customer Support Email",
    "Complaint Resolution Email",
    "Order Confirmation Email",
    "Shipping Confirmation Email",
    "Return or Refund Email",
    "Feedback Request Email",
    "Follow-Up Support Email"
  ],
  "HR & Internal Communication Emails": [
    "Job Offer Email",
    "Onboarding Email",
    "Internal Newsletter Email",
    "Policy Update Email",
    "Meeting Invitation Email",
    "Performance Review Reminder Email",
    "Employee Recognition Email"
  ],
  "Partnership & Collaboration Emails": [
    "Partnership Proposal Email",
    "Collaboration Invitation Email",
    "Joint Venture Announcement Email",
    "Sponsorship Request Email",
    "Affiliate Program Email",
    "Co-Marketing Opportunity Email",
    "Partner Onboarding Email"
  ],
  "Thank You Emails": [
    "Thank You for Your Purchase Email",
    "Thank You for Your Feedback Email",
    "Thank You for Your Support Email",
    "Thank You for Attending Email",
    "Thank You for Your Business Email",
    "Thank You for Your Donation Email",
    "Thank You for Your Inquiry Email"
  ],
  "Operational Emails": [
    "System Maintenance Notification Email",
    "Service Interruption Notification Email",
    "Account Activation Email",
    "Password Reset Email",
    "Billing Invoice Email",
    "Subscription Renewal Reminder Email",
    "Account Deactivation Warning Email"
  ]
  
  
  },
  "Professional Emails": {
    "Job Application Emails": [
    "Cover Letter Email",
    "Thank You Email After Interview",
    "Job Inquiry Email",
    "Follow-Up Email After Application",
    "Job Acceptance Email",
    "Job Decline Email",
    "Interview Rescheduling Email"
  ],
"Resume Emails": [
  "Resume Submission Email",
  "Resume Update Email",
  "Resume Request Email",
  "Resume Follow-Up Email",
  "Blind Resume Submission Email",
  "Referral Resume Submission Email",
  "Resume Acknowledgment Email"
],
"Meeting Request Emails": [
  "Initial Meeting Request Email",
  "Follow-Up Meeting Request Email",
  "Meeting Confirmation Email",
  "Meeting Rescheduling Email",
  "Meeting Agenda Email",
  "Meeting Cancellation Email",
  "Virtual Meeting Request Email"
],
   "Recommendation Request Emails": [
    "Recommendation Letter Request Email",
    "LinkedIn Recommendation Request Email",
    "Referral Request Email",
    "Character Reference Request Email",
    "Professional Reference Request Email",
    "Academic Recommendation Request Email",
    "Thank You Email for Recommendation"
  ],
  "Feedback Emails": [
    "Performance Feedback Request Email",
    "Customer Feedback Request Email",
    "Employee Feedback Request Email",
    "Product Feedback Request Email",
    "Peer Feedback Request Email",
    "Project Feedback Request Email",
    "Exit Interview Feedback Email"
  ],
  "Networking Emails": [
    "Networking Introduction Email",
    "Follow-Up After Networking Event Email",
    "Request for Informational Interview Email",
    "Reconnecting Email",
    "Referral Request Email",
    "LinkedIn Connection Request Email",
    "Invitation to Professional Event Email"
  ],
  "Offer & Negotiation Emails": [
    "Job Offer Email",
    "Salary Negotiation Email",
    "Counter Offer Email",
    "Acceptance of Offer Email",
    "Rejection of Offer Email",
    "Negotiation Follow-Up Email",
    "Offer Clarification Email"
  ]
  },
  "Customer Support Emails":{

    "Order Confirmation Email":[
      "Basic Order Confirmation",
      "Detailed Order Confirmation",
      "Order Confirmation with Payment Details",
      "Order Confirmation with Loyalty Points",
      "Order Confirmation with Delivery Instructions",
      "Order Confirmation with Gift Options",
      "Order Confirmation with Return Policy"
    ],
    "Shipping Notification Email":[
      "Basic Shipping Notification",
      "Shipping Confirmation with Tracking Link",
      "Shipping Update Email",
      "Shipping Confirmation with Delivery Window",
      "Shipping Confirmation with Contact Information",
      "Shipping Confirmation with Delivery Instructions",
      "Shipping Confirmation with Signature Requirement"
    ],
    "Order Cancellation Email":[
      "Order Cancellation Confirmation",
      "Order Cancellation with Refund Information",
      "Order Cancellation with Reason",
      "Order Cancellation with Reorder Option",
      "Order Cancellation with Customer Support Contact",
      "Order Cancellation with Apology",
      "Order Cancellation with Account Update"
    ],
    "Return and Refund Email":[
      "Return Request Confirmation",
      "Return Received Notification",
      "Refund Processed Notification",
      "Refund with Estimated Timeframe",
      "Return and Refund Status Update",
      "Return and Refund Policy Reminder",
      "Return and Refund Apology"
    ],
    "Technical Support Email":[
      "Support Ticket Confirmation",
      "Issue Resolution Confirmation",
      "Request for Additional Information",
      "Status Update on Ongoing Issue",
      "Technical Issue Escalation Notice",
      "Follow-Up for Feedback",
      "Technical Support Closure"
    ],
    "Feedback Request Email":[
      "Post-Service Feedback Request",
      "Product Review Request:",
      "Survey Participation Request",
      "Customer Experience Improvement Request",
      "Feedback on Recent Interaction",
      "Net Promoter Score (NPS) Request",
      "Feedback on New Features or Changes"
    ],
    "Apology Email":[
      "Apology for Service Failure",
      "Apology for Product Defect",
      "Apology for Incorrect Billing",
      "Apology for Late Delivery",
      "Apology for Poor Customer Service",
      "Apology for Data Breach",
      "Apology for Miscommunication"
    ]

  },

  "Networking Emails":{
    "Introduction Email": [
    "Professional Introduction",
    "Brief Overview of Background",
    "Purpose of Reaching Out",
    "Personal Connection or Common Interest",
    "Specific Request or Call to Action",
    "Availability for Follow-Up",
    "Gratitude and Sign-Off"
],
"Follow-Up Email": [
    "Follow-Up After Initial Meeting",
    "Follow-Up After Job Interview",
    "Follow-Up on Proposal or Offer",
    "Follow-Up on Unanswered Email",
    "Follow-Up on Networking Event",
    "Follow-Up on Previous Discussion or Agreement",
    "Follow-Up Requesting Feedback or Response"
],
"Thank You Email": [
    "Thank You for Meeting",
    "Thank You for Your Purchase",
    "Thank You for Your Referral",
    "Thank You for Your Feedback",
    "Thank You for Your Support",
    "Thank You for Your Hospitality",
    "Thank You for Your Assistance"
],
"Referral Request Email": [
    "Referral Request for Job Opportunity",
    "Referral Request for Business Partnership",
    "Referral Request for Professional Introduction",
    "Referral Request for Client Lead",
    "Referral Request for Service Provider",
    "Referral Request for Product Review",
    "Referral Request for Industry Insights"
],
"Networking Event Follow-Up Email": [
    "Follow-Up After Initial Meeting",
    "Thank You for Attending My Presentation",
    "Follow-Up on Business Cards Exchanged",
    "Follow-Up to Discuss Opportunities",
    "Follow-Up on Shared Interests",
    "Invitation to Connect on LinkedIn",
    "Request for a Follow-Up Meeting"
]
,
"Collaboration Proposal Email": [
    "Proposal for Joint Project",
    "Proposal for Strategic Partnership",
    "Proposal for Co-Hosting an Event",
    "Proposal for Content Collaboration",
    "Proposal for Research Partnership",
    "Proposal for Product Development",
    "Proposal for Mutual Promotion"
]
,
"Career Advice Request Email": [
    "Request for Career Guidance",
    "Request for Industry Insights",
    "Request for Resume Feedback",
    "Request for Interview Tips",
    "Request for Job Market Advice",
    "Request for Networking Opportunities",
    "Request for Mentorship and Career Planning"
]


  },

  "Event Planning Emails":{
    "Event Invitation Email": [
      "Formal Event Invitation",
      "Save the Date Notice",
      "Exclusive Event Invitation",
      "Event RSVP Request",
      "Invitation with Agenda",
      "Invitation with Event Details",
      "Invitation for Guest Speakers"
  ],
  "Event Reminder Email": [
      "Reminder for Upcoming Event",
      "Reminder with Event Agenda",
      "Reminder with Venue Details",
      "Reminder with RSVP Confirmation",
      "Reminder for Registration Deadline",
      "Reminder for Special Instructions",
      "Reminder for Event Check-In"
  ],
  "Event Confirmation Email": [
      "Event Registration Confirmation",
      "Attendance Confirmation",
      "Confirmation of Event Details",
      "Confirmation with Ticket Information",
      "Confirmation of Special Requests",
      "Confirmation of Event Schedule",
      "Confirmation of Participation"
  ],
  "Event Follow-Up Email": [
      "Thank You for Attending",
      "Event Highlights and Recap",
      "Follow-Up on Post-Event Feedback",
      "Follow-Up with Event Photos",
      "Follow-Up on Networking Opportunities",
      "Follow-Up on Event Materials",
      "Follow-Up for Future Engagement"
  ],
  "Event Cancellation Email": [
      "Event Cancellation Notice",
      "Cancellation Due to Unexpected Circumstances",
      "Cancellation with Rescheduling Information",
      "Cancellation with Apology and Refund Info",
      "Cancellation Due to Low Attendance",
      "Cancellation Due to Venue Issues",
      "Cancellation with Alternative Options"
  ],
  "Event Feedback Request Email": [
      "Request for Post-Event Survey",
      "Feedback on Event Experience",
      "Request for Comments on Event Content",
      "Request for Feedback on Event Organization",
      "Request for Suggestions for Improvement",
      "Request for Ratings on Event Aspects",
      "Follow-Up on Feedback Submission"
  ],
  "Event Promotion Email": [
      "Promotional Email for Upcoming Event",
      "Early Bird Registration Promotion",
      "Special Offer for Event Tickets",
      "Event Highlights Promotion",
      "Promotion for Event Speakers",
      "Promotion for Event Partners",
      "Final Call for Event Registration"
  ]
  },

  "Public Relations Emails":{
      "Press Release Email": [
        "New Product Launch Press Release",
        "Company Milestone Announcement",
        "Crisis Management Press Release",
        "Event Announcement Press Release",
        "Partnership or Collaboration Press Release",
        "Executive Appointment Press Release",
        "Product Recall or Safety Notice Press Release"
    ],
    "Media Inquiry Response Email": [
        "Response to Media Interview Request",
        "Response to Media Information Request",
        "Response to Media Pitch or Query",
        "Clarification on Recent News",
        "Confirmation of Media Interview Details",
        "Response to Media Fact-Checking",
        "Response to Media Coverage Request"
    ],
    "Media Kit Email": [
        "Press Kit for New Product Launch",
        "Company Overview Media Kit",
        "Executive Bios and Photos Media Kit",
        "Media Kit for Upcoming Event",
        "Press Release Media Kit",
        "Crisis Communication Media Kit",
        "Media Kit for Annual Report"
    ],
    "Public Statement Email": [
        "Statement on Company Policy Change",
        "Public Apology Statement",
        "Statement on Recent Controversy",
        "Company Position on Industry Issue",
        "Statement Following Major News Event",
        "Statement on Regulatory Changes",
        "Public Response to Community Feedback"
    ],
    "Media Invitation Email": [
        "Invitation to Press Conference",
        "Invitation to Media Briefing",
        "Invitation to Product Launch Event",
        "Invitation to Company Open House",
        "Invitation to Exclusive Media Event",
        "Invitation to Media Roundtable",
        "Invitation to Industry Awards Ceremony"
    ],
    "Op-Ed Submission Email": [
        "Op-Ed on Industry Trends",
        "Op-Ed on Company Vision",
        "Op-Ed on Social Responsibility",
        "Op-Ed on Regulatory Changes",
        "Op-Ed on Economic Impact",
        "Op-Ed on Technological Advancements",
        "Op-Ed on Community Engagement"
    ],
    "Crisis Communication Email": [
        "Initial Crisis Response Email",
        "Update on Crisis Situation",
        "Apology and Action Plan Email",
        "Crisis Resolution Communication",
        "Customer Support during Crisis Email",
        "Stakeholder Communication during Crisis",
        "Crisis Management Follow-Up Email"
    ]
  },

 
};

const EmailSearchCategory = () => {
  const emailGenerationSectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  useEffect(() => {
    if (selectedTemplate && emailGenerationSectionRef.current) {
      emailGenerationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedTemplate]);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
    setSelectedTemplate('');
  };

  const handleSubcategorySelection = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedTemplate('');
  };

  const handleTemplateSelection = (templateName) => {
    setSelectedTemplate(templateName);
  };

  return (
    <div className="container">
      <div>
        <h1 style={{ paddingTop: '8%', color: 'wheat', fontWeight: 'bold', textAlign: 'center' }}>
          View And Generate <span style={{ fontFamily: 'cursive', color: 'red' }}>Emails</span>
        </h1>
      </div>
      <p className="view-download-instructions">
        You can view and generate emails for various purposes below.
      </p>

      <div className="input-group mb-3">
        {/* Main Category Dropdown */}
        <div className="btn-group">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
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
                          onClick={() => handleSubcategorySelection(subcategory)}
                        >
                          {subcategory}
                        </button>
                        {selectedSubcategory === subcategory && categories[mainCategory][subcategory].length > 0 && (
                          <ul className="dropdown-menu-sub">
                            {categories[mainCategory][subcategory].map((template) => (
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

        {/* Input box to display selected category, subcategory, and template */}
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown buttons"
          value={`${selectedCategory} ${selectedSubcategory} ${selectedTemplate}`.trim()}
          readOnly
        />
      </div>

      {/* Email Generation Section */}
      <div ref={emailGenerationSectionRef} className="email-generation-section pt-5">
        {selectedTemplate && (
          <div>
            <h2 className='text-center Generate-your'>Generate Your Email</h2>
            <p className='select-temp'>Selected Template:<span>{selectedTemplate}</span></p> {/* Display selected template */}
            <EmailMaker selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} selectedTemplate={selectedTemplate} />
           
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSearchCategory;