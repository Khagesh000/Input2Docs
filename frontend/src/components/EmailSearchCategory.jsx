import React, { useRef, useEffect } from 'react';
import '../SearchCategory.css'; // Import custom CSS for styling

const categories = {
  "Business Emails": [
    "Sales Emails",
    "Marketing Emails",
    "Customer Service Emails",
    "Networking Emails",
    "Introduction Emails",
    "Follow-Up Emails",
  ],
  "Professional Emails": [
    "Job Application Emails",
    "Resume Emails",
    "Meeting Request Emails",
    "Recommendation Request Emails",
    "Feedback Emails",
  ],
  // Add more categories as needed
};

const EmailSearchCategory = ({ handleSubcategoryClick, selectedSubcategory }) => {
  const letterGenerationSectionRef = useRef(null);

  const handleSubcategorySelection = (subcategory) => {
    handleSubcategoryClick(subcategory);
    setTimeout(() => {
      letterGenerationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    if (selectedSubcategory) {
      letterGenerationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedSubcategory]);

  return (
    <div className="container p-4">
      <div>
        <h1 style={{ 
          paddingTop: '15%',
          color: 'wheat', 
          fontWeight: 'bold', 
          textAlign: 'center'
        }}>
          View And Download <span  style={{ fontFamily: 'cursive', color:'red' }}>Emails</span>
        </h1>
      </div>
      <p className="view-download-instructions">
        You can view and download emails for various purposes below.
      </p>

      <div className="input-group mb-3">
        {/* Main Category Dropdown */}
        <div className="btn-group">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded={false}
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
                  {categories[mainCategory].map((subcategory) => (
                    <li key={subcategory}>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSubcategorySelection(subcategory)}
                      >
                        {subcategory}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Input box to display selected subcategory */}
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown buttons"
          value={selectedSubcategory}
          readOnly
        />
      </div>

      {/* Email Generation Section */}
      <div ref={letterGenerationSectionRef} className="letter-generation-section mt-5">
        <h2>Generate Your Email</h2>
        
        {/* This is where you include your EmailMaker component */}
      </div>
    </div>
  );
};

export default EmailSearchCategory;
//clear