import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import HomeImageCarousel from './components/HomeImageCaurosel'; // Assuming this is correctly imported
import CardArrange from './components/CardArrange'; // Assuming this is correctly imported
import Process from './components/Process'; // Assuming this is correctly imported
import FormatLetters from './components/FormatLetters';
import ImageView from './components/imageview'; // Assuming this is correctly imported
import Feedback from './components/Feedback';
import Endbar from './components/Endbar'; // Assuming this is correctly imported
import Letter from './Letter'; // Make sure this is correctly imported
import Email from './Email'; // Make sure this is correctly imported
import About from './About';
import CoverLetter from './CoverLetter';
import Resume from './Resume'
import Cv from './Cv';



function MainContent() {
  return (
    <>
      <Navbar />
      <HomeImageCarousel />
      <div className='CardSection'>
        <CardArrange />
      </div>
      <div className='ProcessSection'>
        <Process />
      </div>
      <div className='FormatLettersSection bg-black'>
        <FormatLetters />
      </div>
      <ImageView />
      <Feedback />
      <Endbar />
    </>
  );
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const isSpecialPage = ['/letter', '/email', '/about', '/cover', '/resume', '/cv'].includes(location.pathname);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isSpecialPage && <MainContent />} {/* Hide MainContent on special pages */}
      <Routes>
        <Route path="/letter" element={<Letter />} />
        <Route path="/email" element={<Email />} />
        <Route path="/about" element={<About />} />
        <Route path="/cover" element={<CoverLetter />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </div>
  );
}

export default App;
