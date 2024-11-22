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
import Resume from './Resume'
import Cv from './Cv';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndConditions from './TermsAndConditions'

import { Helmet } from 'react-helmet';

function MainContent() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Helmet>
  <title>Welcome | Input2Docs Template Generator</title>
  <meta name="description" content="Welcome to Input2Docs! Create professional email and letter templates with ease." />
  <meta name="keywords" content="Input2Docs, Template Generator, Email Templates, Letter Templates" />
</Helmet>

      <Navbar />
      <HomeImageCarousel />
      <div>
        <h1 className="responsive-heading">Welcome To Our Template Generator</h1>
      </div>
      <Websitemainmoto />
      <div className='CardSection'>
        <CardArrange />
      </div>
      <div>
        <Process />
      </div>
      <ImageView />
      <Feedback />
      <Endbar />
    </div>
  );
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
 

  const isSpecialPage = ['/letter', '/email', '/about-us', '/cover', '/resume', '/cv', '/contact-us', '/privacy-policy', '/terms-and-conditions' ].includes(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  

 
  return (
    <div >
     


      {!isSpecialPage && <MainContent />}

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
    </div>
  );
}

export default App;
