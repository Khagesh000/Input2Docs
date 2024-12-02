import React from 'react'
import Navbar from './components/navbar'
import CvDescription from './components/CvDescription'
import CvImportance from './components/CvImportance'
import CvTemplates from './components/CvTemplates'
import Endbar from './components/Endbar'

import CvAbout from './components/CvAbout'
import CvMainMoto from './components/CvMainMoto'

import { Helmet } from 'react-helmet';

import ArticalAd from './components/AriticalAd'

export default function Cv() {
  return (
    <div style={{ backgroundColor: 'black'}}>
      <Helmet>
  <title>Free CV Templates - Cv Templates | Professional CV Designs | Input2Docs</title>
  <meta 
    name="description" 
    content="Create professional CV templates online with Input2Docs. Choose from a wide range of customizable CV designs to make your job application stand out." 
  />
  <meta 
    name="keywords" 
    content="CV templates, professional CV templates, free CV template, ATS CV templates, customizable CV designs, create CV online, free CV templates, job application CV templates, best CV template" 
  />
</Helmet>


    <div>
      <Navbar />
      
      <div style={{ backgroundColor: 'black'}}>
        
      <CvDescription />
      </div>
      <div style={{ backgroundColor: 'black'}}>
      <CvTemplates />
      </div>
      <ArticalAd />
      


      {/* CV Design Section (For SEO and content) */}
<div className="search-letterhead-section" style={{backgroundColor: 'black'}}>
  <h1 className="search-letterhead-heading">Create Professional CV Templates Online</h1>
  <p className="search-letterhead-description">
    With Input2Docs, you can create stunning and professional CV templates in minutes. Choose from a variety of customizable CV templates designed to make your job application stand out. Start designing now and download your CV template instantly in multiple formats.
  </p>

  <h2 style={{ color: 'grey' }}>Why Use Our Online CV Maker?</h2>
  <ul style={{ color: 'gray' }}>
    <li>Free and easy-to-use templates</li>
    <li>Customizable designs tailored to your career needs</li>
    <li>Instant downloads in multiple formats (PDF, Word, etc.)</li>
    <li>Professional layouts designed to impress recruiters</li>
    <li>ATS-friendly CV templates to increase your chances of landing your job</li>
  </ul>
  <a href="/cv" className="search-cta-button">
    Get Started with CV Template Design
  </a>
</div>



      <div style={{ backgroundColor: 'black'}}>
      <CvImportance />
      </div>
      <div style={{ backgroundColor: 'black'}}>
      <CvAbout />
      </div>
      <CvMainMoto />
      
      <Endbar />
      </div>
    </div>
  )
}
