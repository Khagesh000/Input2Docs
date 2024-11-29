import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/navbar';
import SearchCategory from './components/SearchCategory';
import LetterMaker from './components/LetterMaker';
import Process from './components/Process';
import ImportanceLetter from './components/ImportanceLetter';
import LetterMainMoto from './components/Lettermainmoto';
import Endbar from './components/Endbar';
import InFeedAd from './components/InFeedAd';
import './Letter.css'; // Existing styles
 // New styles for letterhead section

export default function Letter() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  return (
    <div style={{ backgroundColor: '#f3f4f6' }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Letter Templates | Input2Docs</title>
        <meta
          name="description"
          content="Comprehensive letter templates for all your personal and professional needs. Create letters, letterheads, resumes, and more with ease using Input2Docs."
        />
        <meta
          name="keywords"
          content="letterhead online design, letterhead maker, professional letter templates, Input2Docs templates, customizable letterhead design"
        />
      </Helmet>

      {/* Navbar Component */}
      <Navbar />

      {/* Search Category Component */}
      <div>
        <SearchCategory
          handleSubcategoryClick={(subcategory) => setSelectedSubcategory(subcategory)}
          selectedSubcategory={selectedSubcategory}
        />
      </div>

      {/* Letter Maker Section */}
      <div>
        <LetterMaker selectedTemplate={selectedSubcategory} />
      </div>

      {/* Process Section */}
      <div className="ProcessSection" style={{ backgroundColor: '#f3f4f6' }}>
        <Process />
      </div>

      {/* InFeedAd Component */}
      <InFeedAd />

      {/* Importance Letter Section */}
      <div className="ProcessSection" style={{ backgroundColor: '#f3f4f6' }}>
        <ImportanceLetter />
      </div>

      {/* Letterhead Design Section (For SEO and content) */}
      <div className="search-letterhead-section">
        <h1 className="search-letterhead-heading">Design Professional Letterheads Online</h1>
        <p className="search-letterhead-description">
          With Input2Docs, you can create stunning letterheads online in minutes. Choose from a variety of customizable templates to suit your business or personal needs. Start designing now and download your letterhead instantly.
        </p>

        <h2 style={{color: 'grey'}}>Why Use Our Online Letterhead Maker?</h2>
        <ul style={{color: 'gray'}}>
          <li>Free and easy-to-use templates</li>
          <li>Customizable designs to match your branding</li>
          <li>Instant downloads in multiple formats</li>
        </ul>
        <a href="/letter" className="search-cta-button">
          Get Started with Letterhead Design
        </a>
        
      </div>

      

      {/* LetterMainMoto Section */}
      <div style={{ backgroundColor: '#f3f4f6' }}>
        <LetterMainMoto />
      </div>

      {/* Endbar Component */}
      <Endbar />
    </div>
  );
}
