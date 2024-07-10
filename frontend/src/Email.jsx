// Email.jsx

import React, { useState } from 'react';
import Navbar from './components/navbar'; // Importing Navbar component
import Endbar from './components/Endbar'; // Importing Endbar component
import ImportanceEmail from './components/importanceEmail'; // Importing ImportanceEmail component
import EmailProcess from './components/EmailProcess'; // Importing EmailProcess component
import EmailImageCaurosel from './components/EmailImageCaurosel'; // Importing EmailImageCaurosel component
import EmailSearchCategory from './components/EmailSearchCategory'; // Importing EmailSearchCategory component
import EmailMaker from './components/EmailMaker'; // Importing EmailMaker component
import Feedback from './components/Feedback'; // Importing Feedback component

const Email = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  // Handler function to update selectedSubcategory
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      
      {/* EmailImageCaurosel component */}
      <EmailImageCaurosel />

      <div className='SearchCategorySection bg-black text-light'>
        {/* EmailSearchCategory component */}
        <EmailSearchCategory
          handleSubcategoryClick={handleSubcategoryClick}
          selectedSubcategory={selectedSubcategory}
        />
      </div>

      {/* Conditional rendering of EmailMaker component */}
      {selectedSubcategory && (
        <div className='LetterMakerSection'>
          <EmailMaker selectedTemplate={selectedSubcategory} />
        </div>
      )}

      {/* EmailProcess component */}
      <div className='ProcessSection'>
        <EmailProcess />
      </div>

      {/* ImportanceEmail component */}
      <ImportanceEmail />

      {/* Feedback component */}
      <Feedback/>

      {/* Endbar component */}
      <Endbar />
    </div>
  );
};

export default Email;
