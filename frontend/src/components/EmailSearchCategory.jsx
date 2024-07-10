import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SearchCategory.css'; // Import custom CSS for styling
import EmailMaker from './EmailMaker'; // Assuming this is where your EmailMaker component resides

const categories = {
  "Business Emails": {
    "Sales Emails": [
      "Introduction Email",
      "Follow-Up Email",
    ],
    "Marketing Emails": [],
    "Customer Service Emails": [],
    "Networking Emails": [],
    "Introduction Emails": [],
    "Follow-Up Emails": [],
  },
  "Professional Emails": {
    "Job Application Emails": [],
    "Resume Emails": [],
    "Meeting Request Emails": [],
    "Recommendation Request Emails": [],
    "Feedback Emails": [],
  },
  // Add more categories as needed
};

const EmailSearchCategory = ({ handleSubcategoryClick, selectedSubcategory }) => {
  const emailGenerationSectionRef = useRef(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  const handleSubcategorySelection = (subcategory) => {
    handleSubcategoryClick(subcategory);
    setSelectedTemplate(null); // Reset selected template when subcategory changes
    setTimeout(() => {
      emailGenerationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    if (selectedTemplate) {
      emailGenerationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedTemplate]);

  const handleTemplateSelection = (templateName) => {
    setSelectedTemplate(templateName);
  };

  return (
    <div className="container">
      <div>
        <h1 style={{ paddingTop: '15%', color: 'wheat', fontWeight: 'bold', textAlign: 'center' }}>
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
            {selectedSubcategory ? selectedSubcategory : 'Select Category'}
          </button>
          <ul className="dropdown-menu">
            {Object.keys(categories).map((mainCategory) => (
              <li key={mainCategory} className="dropdown-item">
                <button
                  className="dropdown-item"
                  onClick={() => handleSubcategorySelection(mainCategory)}
                >
                  {mainCategory}
                </button>
                {/* Subcategory Dropdown */}
                <ul className="dropdown-menu-sub">
                  {Object.keys(categories[mainCategory]).map((subcategory) => (
                    <li key={subcategory}>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSubcategorySelection(subcategory)}
                      >
                        {subcategory}
                      </button>
                      {/* Template Dropdown */}
                      {categories[mainCategory][subcategory].length > 0 && (
                        <ul className="dropdown-menu-sub">
                          {categories[mainCategory][subcategory].map((template) => (
                            <li key={template}>
                              <button
                                className="dropdown-item"
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
              </li>
            ))}
          </ul>
        </div>

        {/* Input box to display selected subcategory and template */}
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown buttons"
          value={selectedTemplate ? selectedTemplate : selectedSubcategory}
          readOnly
        />
      </div>

      {/* Email Generation Section */}
      <div ref={emailGenerationSectionRef} className="email-generation-section pt-5">
        {selectedTemplate && (
          <div>
            <h2 className='Generate-your'>Generate Your Email</h2>
            <EmailMaker selectedTemplate={selectedTemplate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSearchCategory;
