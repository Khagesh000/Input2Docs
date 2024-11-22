// Email.jsx

import React, { useState } from 'react';
import Navbar from './components/navbar'; // Importing Navbar component
import Endbar from './components/Endbar'; // Importing Endbar component
import ImportanceEmail from './components/importanceEmail'; // Importing ImportanceEmail component
import EmailProcess from './components/EmailProcess'; // Importing EmailProcess component
import EmailImageCaurosel from './components/EmailImageCaurosel'; // Importing EmailImageCaurosel component
import EmailSearchCategory from './components/EmailSearchCategory'; // Importing EmailSearchCategory component
import EmailMaker from './components/EmailMaker'; // Importing EmailMaker component

import EmailMainMoto from './components/EmailMainMoto';
import { Helmet } from 'react-helmet';

const Email = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  // Handler function to update selectedSubcategory
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    
    <div style={{ backgroundColor: 'f3f4f6'}}>

<Helmet>
  <title>Email Templates | Input2Docs</title>
  <meta name="description" content="Professional email templates for every occasion. Save time and create impact with Input2Docs." />
  <meta name="keywords" content="Email Templates, Professional Emails, Input2Docs Templates" />
</Helmet>

      
      {/* Navbar component */}
      <Navbar />
      
      {/* EmailImageCaurosel component */}
      <EmailImageCaurosel />
      

      <div style={{backgroundColor: 'f3f4f6'}}>
        
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
      <div style={{ backgroundColor: '#f3f4f6'}}>
        
        <EmailProcess />
      </div>

      {/* ImportanceEmail component */}
      <div  style={{ backgroundColor: '#f3f4f6'}}><ImportanceEmail /></div>
      <h1 className="responsive-heading">Professional Email Templates</h1>
      <EmailMainMoto />
      

      
      {/* Endbar component */}
      <Endbar />
      </div>
 
  );
};

export default Email;
