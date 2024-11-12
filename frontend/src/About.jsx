import React, { useState } from 'react';
import Navbar from './components/navbar';
import AboutImage from './components/AboutImage';
import AboutMainMoto from './components/AboutMainMoto';
import Feedback from './components/Feedback';
import Endbar from './components/Endbar';
import AboutChoose from './components/AboutChoose';


export default function About() {
  

  return (
    <div style={{ backgroundColor: 'black'}}>
    <div>
      <Navbar />
      <AboutImage />
      <AboutChoose />
      <AboutMainMoto />
      <Feedback />
      <Endbar />
      </div>
    </div>
  );
}
