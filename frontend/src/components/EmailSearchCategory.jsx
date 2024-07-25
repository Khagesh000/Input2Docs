import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SearchCategory.css';
import EmailMaker from './EmailMaker';

const categories = {
  "Business Emails": {
    "Sales Emails": [
      "Introduction Email",
      "Follow-Up Email",
    ],
    "Marketing Emails": [
      "Product Launch Email",
      "Newsletter Email",
    ],
    // Add more subcategories as needed
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
            <EmailMaker selectedCategory={selectedCategory} selectedSubcategory={selectedSubcategory} selectedTemplate={selectedTemplate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSearchCategory;
