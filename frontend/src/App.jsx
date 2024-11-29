import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import HomeImageCarousel from './components/HomeImageCaurosel';
import CardArrange from './components/CardArrange';
import Websitemainmoto from './components/Websitemainmoto';
import Process from './components/Process';
import ImageView from './components/imageview';
import Feedback from './components/Feedback';
import Endbar from './components/Endbar';
import Letter from './Letter';
import Email from './Email';
import About from './About';
import CoverLetter from './CoverLetter';
import Resume from './Resume';
import Cv from './Cv';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

import { Helmet } from 'react-helmet';
import DisplayAd from "./components/DisplayAd";

function App() {
  const location = useLocation();

  // Define pages that require special SEO or layout adjustments
  const isSpecialPage = [
    '/letter', '/email', '/about-us', '/cover', 
    '/resume', '/cv', '/contact-us', 
    '/privacy-policy', '/terms-and-conditions'
  ].includes(location.pathname);

  return (
    <div>
      {/* Helmet for Global SEO */}
      <Helmet>
        <title>{isSpecialPage ? "Input2Docs - Templates & Tools" : "Welcome | Input2Docs Template Generator"}</title>
        <meta 
          name="description" 
          content={
            isSpecialPage 
              ? "Discover professional templates and tools for letters, resumes, cover letters, and more at Input2Docs." 
              : "Welcome to Input2Docs! Create professional email and letter templates with ease."
          }
        />
        <meta 
          name="keywords" 
          content="Input2Docs, Templates, Letter Templates, Resume Templates, Cover Letters, Email Templates" 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Types of Letters",
            "description": "A comprehensive list of letter types provided by Input2Docs.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "School Letters",
                "url": "https://input2docs.com/school-letters"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Office Letters",
                "url": "https://input2docs.com/office-letters"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Police Station Letters",
                "url": "https://input2docs.com/police-station-letters"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Bank Letters",
                "url": "https://input2docs.com/bank-letters"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Legal Letters",
                "url": "https://input2docs.com/legal-letters"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Government Letters",
                "url": "https://input2docs.com/government-letters"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Common Navbar */}
      <Navbar />

      {/* Render Main Content Only for Non-Special Pages */}
      {!isSpecialPage && (
        <div style={{ backgroundColor: 'white' }}>
          <HomeImageCarousel />
          <h1 className="responsive-heading">Welcome To Our Template Generator</h1>
          <Websitemainmoto />
          <div className='CardSection'>
            <CardArrange />
          </div>
          <Process />
          <DisplayAd />
          <ImageView />
          <Feedback />
        </div>
      )}

      {/* Page Routes */}
      <Routes>
        <Route path="/letter" element={<Letter />} />
        <Route path="/email" element={<Email />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/cover" element={<CoverLetter />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>

      {/* Common Footer */}
      {!isSpecialPage && <Endbar />}
    </div>
  );
}

export default App;
