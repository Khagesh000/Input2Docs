import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SearchCategory.css'; // Import custom CSS for styling
import LetterMaker from './LetterMaker'; // Assuming this is where your LetterMaker component resides

const categories = {
  "School Letters": {
    "Permission Letters": [
      "Field Trip Permission Letter",
      "Medical Treatment Permission",
    ],
    "Excuse Letters": [
      "Absentee Excuse Letter",
      "Late Arrival Excuse Letter",
    ],
    "Communication Letters": [],
    "Enrollment Letters": [],
    "Fundraising Letters": [],
    "Safety and Emergency Letters": [],
  },
  "Office Letters": {
    "Business Correspondence": [],
    "Internal Communication": [],
    "Employee Letters": [],
    "Client Relations": [],
    "Meeting and Appointment": [],
  },
  "Police Station Letters": {
    "Complaint Letters": [],
    "Request Letters": [],
    "Witness Statements": [],
    "Traffic Violation": [],
    "Victim Assistance": [],
  },
  "Bank Letters": {
    "Account Management": [],
    "Transaction Letters": [],
    "Loan and Mortgage": [],
    "Financial Assistance": [],
    "Security Letters": [],
  },
  "Legal Letters": {
    "Legal Notices": [],
    "Demand Letters": [],
    "Legal Correspondence": [],
    "Contract Letters": [],
    "Dispute Resolution": [],
  },
  "Government Letters": {
    "Public Services": [],
    "Permit and Licensing": [],
    "Regulatory Compliance": [],
    "Public Announcement": [],
    "Government Grant": [],
  },
  "Entertainment Letters": {
    "Love Letters": [],
  },
};

const SearchCategory = ({ handleSubcategoryClick }) => {
  const letterGenerationSectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

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
    <div className="container">
      <div>
        <h1 style={{ paddingTop: '15%', color: 'wheat', fontWeight: 'bold', textAlign: 'center' }}>
          View And Download <span style={{ fontFamily: 'cursive', color: 'red' }}>Letters</span>
        </h1>
      </div>
      <p className="view-download-instructions">
        You can view and download letters for various purposes below.
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

        {/* Input box to display selected category, subcategory, and template */}
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown buttons"
          value={`${selectedCategory} ${selectedSubcategory} ${selectedTemplate}`.trim()}
          readOnly
        />
      </div>

      {/* Letter Generation Section */}
      <div ref={letterGenerationSectionRef} className="letter-generation-section">
        {selectedTemplate && (
          <div>
            <h2 className='Generate-your'>Generate Your Letter</h2>
            <LetterMaker selectedTemplate={selectedTemplate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCategory;
