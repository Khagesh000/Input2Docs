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
import SignupModal from './components/SignupModal'; // Import the Signup Modal

function MainContent() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <HomeImageCarousel />
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
  const [showSignup, setShowSignup] = useState(false);

  const isSpecialPage = ['/letter', '/email', '/about-us', '/cover', '/resume', '/cv', '/contact-us'].includes(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const signedUp = localStorage.getItem('signedUp');
    if (!signedUp) {
      setShowSignup(true); // Show signup if the user has not signed up
    }
  }, []);

  const closeSignupModal = () => {
    setShowSignup(false);
  };

  return (
    <div>
      {!isSpecialPage && <MainContent />}
      {showSignup && <SignupModal onClose={closeSignupModal} />} {/* Show signup modal */}
      <Routes>
        <Route path="/letter" element={<Letter />} />
        <Route path="/email" element={<Email />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/cover" element={<CoverLetter />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
