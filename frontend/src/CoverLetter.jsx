import React from 'react'

import { Helmet } from 'react-helmet';

import Navbar from './components/navbar'

import CoverLetterTemplates from './components/CoverLetterTemplates'
import CoverLetterIntro from './components/CoverLetterIntro'
import CoverLetterImportance from './components/CoverLetterImportance'
import CoverletterMainMoto from './components/CoverletterMainMoto'
import CoverLetterAbout from './components/CoverLetterAbout'
import MultiplyAd from './components/MultiplyAd';

export default function CoverLetter() {
  return (
    <div className='bg-black'>
      <Helmet>
        <title>Free Cover Letter Maker - Create a cover Letter Online | Input2Docs</title>
        <meta name="description" content="Browse our cover letter templates and craft the perfect first impression. Choose from free and customizable templates to enhance your job application." />
        <meta name="keywords" content="cover letter templates, ATS-friendly cover letters, customizable cover letters, job application letters" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Types of Letters",
            "contentUrl": "https://input2docs.com/cover/CoverLetterImportance.webp",
            "description": "A comprehensive list of Coverletter types provided by Input2Docs.",
            
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Cover Letter Intro Section */}
      <CoverLetterIntro />

      {/* CV Design Section (For SEO and content) */}
<div className="search-letterhead-section" style={{backgroundColor: 'black'}}>
  <h1 className="search-letterhead-heading">Free Cover Letter Maker</h1>
  <p className="search-letterhead-description">
  With Input2Docs, you can create impressive and professional cover letters in minutes. Choose from a variety of customizable cover letter templates designed to make a strong first impression on recruiters. Start designing now and download your cover letter template instantly in multiple formats.
  </p>

  <h2 style={{ color: 'grey' }}>Why Use Our Online Cover Letter Maker?</h2>
  <ul style={{ color: 'gray' }}>
    <li>Free and easy-to-use templates</li>
    <li>Customizable designs tailored to your career needs</li>
    <li>Instant downloads in multiple formats (PDF, Word, etc.)</li>
    <li>Professional layouts designed to impress recruiters</li>
    <li>ATS-friendly CV templates to increase your chances of landing your job</li>
  </ul>
  <a href="/cover" className="search-cta-button">
  Get Started with Cover Letter Template Design
  </a>
</div>

      {/* Cover Letter Importance Section */}
      <CoverLetterImportance />

      {/* Cover Letter Templates Section */}
      <CoverLetterTemplates />

      {/* Advertisements Section */}
      <MultiplyAd />

      {/* About Section */}
      <CoverLetterAbout />

      {/* Main Moto Section */}
      <CoverletterMainMoto />

      
    </div>
  )
}
