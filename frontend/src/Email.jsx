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
import EmailMainMoto from './components/EmailMainMoto';

const Email = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  // Handler function to update selectedSubcategory
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div style={{ backgroundColor: 'black'}}>
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
          <EmailMaker selectedTemplate={selectedSubcategory}  />
        </div>
      )}

      {/* EmailProcess component */}
      <div className='ProcessSection' style={{ backgroundColor: '#f3f4f6'}}>
        <EmailProcess />
      </div>

      {/* ImportanceEmail component */}
      <div className='ProcessSection' style={{ backgroundColor: '#f3f4f6'}}><ImportanceEmail /></div>
      
      <EmailMainMoto />
      
      <div className='ProcessSection' style={{ backgroundColor: '#f3f4f6'}}>
        {/* Feedback component */}
      <Feedback/>
      </div>
      
      {/* Endbar component */}
      <Endbar />
      </div>
    </div>
  );
};

export default Email;
