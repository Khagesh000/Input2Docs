import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import HomeImageCarousel from './components/HomeImageCaurosel'; // Assuming this is correctly imported
import CardArrange from './components/CardArrange'; // Assuming this is correctly imported
import Process from './components/Process'; // Assuming this is correctly imported
import FormatLetters from './components/FormatLetters'; // Assuming this is correctly imported
import Feedback from './components/Feedback';
import Endbar from './components/Endbar'; // Assuming this is correctly imported
import Letter from './Letter'; // Make sure this is correctly imported
import Email from './Email'; // Make sure this is correctly imported
import About from './About';
import CoverLetter from './CoverLetter';
import Resume from './Resume'



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
      <Feedback />
      <Endbar />
    </>
  );
}

function App() {
  const location = useLocation();
  const isLetterPage = location.pathname === '/letter';
  const isEmailPage = location.pathname === '/email';
  const isAboutPage = location.pathname === '/about';
  const isCoverLetterPage = location.pathname === '/cover';
  const isResumePage = location.pathname === '/resume';



  return (
    <div>
      {!isLetterPage && !isEmailPage && !isAboutPage && !isCoverLetterPage && !isResumePage && <MainContent />} {/* Hide MainContent on both /letter and /email pages */}
      <Routes>
        <Route path="/letter" element={<Letter />} />
        <Route path="/email" element={<Email />} />
        <Route path="/about" element={<About />}/>
        <Route path="/cover" element={<CoverLetter />}/>
        <Route path='resume' element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;
