import React, { useState } from 'react';
import Navbar from './components/navbar';
import Endbar from './components/Endbar';
import ImportanceEmail from './components/importanceEmail';
import EmailProcess from './components/EmailProcess';
import EmailImageCaurosel from './components/EmailImageCaurosel';
import EmailSearchCategory from './components/EmailSearchCategory';
import EmailMaker from './components/EmailMaker';

const Email = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div>
      <Navbar />
      <EmailImageCaurosel />

      <div className='SearchCategorySection bg-black text-light'>
        <EmailSearchCategory
          handleSubcategoryClick={handleSubcategoryClick}
          selectedSubcategory={selectedSubcategory}
        />
      </div>

      {selectedSubcategory && (
        <div className='LetterMakerSection'>
          <EmailMaker selectedTemplate={selectedSubcategory} />
        </div>
      )}

      <div className='ProcessSection'>
        <EmailProcess />
      </div>

      <ImportanceEmail />
      <Endbar />
    </div>
  );
};

export default Email;
