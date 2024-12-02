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

import InFeedAd from './components/InFeedAd';

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
  <meta name="keywords" content="email templates, professional email designs, Input2Docs email generator" />

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
        <InFeedAd />

        {/* ImportanceEmail component */}
      <div  style={{ backgroundColor: '#f3f4f6'}}><ImportanceEmail /></div>
      {/* Email Signature Maker Section for SEO */}
      <div className="search-letterhead-section">
      <h1 className="search-letterhead-heading">Create Professional Email Templates Online</h1>

      <p className="search-letterhead-description" >
  With Input2Docs, you can create stunning and professional **email templates** and **email signatures** in minutes. Choose from a variety of customizable templates to suit your business or personal needs. Start designing now and download your **email templates** and **email signatures** instantly.
</p>


        <h2>Why Use Our Email Maker?</h2>
        <ul>
          <li>Free and easy-to-use templates</li>
          <li>Customizable designs to match your branding</li>
          <li>Instant downloads in multiple formats</li>
        </ul>
        <a href="/email" className="search-cta-button">
          Get Started with Email Design
        </a>
       
      </div>


      </div>

    

      
      <EmailMainMoto />
      

      
      {/* Endbar component */}
      <Endbar />
      </div>
 
  );
};

export default Email;
