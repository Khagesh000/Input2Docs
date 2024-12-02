import React from 'react'
import Navbar from './components/navbar'
import ResumeIntro from './components/ResumeIntro'
import ResumeTemplate from './components/ResumeTemplate'
import ResumeImportance from './components/ResumeImportance'
import ResumeMainMoto from './components/ResumeMainMoto'

import Endbar from './components/Endbar'

import { Helmet } from 'react-helmet';

import ArticalAd from './components/AriticalAd'

export default function Resume() {
  return (
    <div style={{ backgroundColor: 'black'}}>
      <Helmet>
  <title>Free Resume Builder - Online Resume Maker | Input2Docs</title>
  <meta name="description" content="Create stunning resumes with Input2Docs' easy-to-use templates." />
  <meta name="keywords" content="Resume Templates, Professional Resumes, Input2Docs resume generator" />
   {/* JSON-LD Structured Data for SEO */}
   <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Resume Templates | Input2Docs",
            "description": "Create stunning resumes with Input2Docs' easy-to-use templates.",
            "image": {
              "@type": "ImageObject",
              "url": "https://input2docs.com/assets/images/Resume.webp",
              "height": 800,  // Replace with actual height
              "width": 600,   // Replace with actual width
              "caption": "Example of a professional resume template"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://input2docs.com/resume"
            }
          })}
        </script>
</Helmet>

    <div>
      <Navbar />
      <div style={{ backgroundColor: 'black' }}>
        <ResumeIntro />
      </div>
      <div style={{ backgroundColor: 'black'}}>
        <ResumeTemplate />
      </div>
      <ArticalAd />
      <div style={{ backgroundColor: 'black'}}>
        <ResumeImportance />
      </div>
      {/* Resume Design Section (For SEO and content) */}
<div className="search-letterhead-section" style={{backgroundColor: 'black'}}>
  <h1 className="search-letterhead-heading">Create Professional Resumes Online</h1>
  <p className="search-letterhead-description">
    With Input2Docs, you can create stunning and professional resumes in minutes. Choose from a variety of customizable resume templates to suit your job application or career needs. Start designing now and download your resume instantly.
  </p>

  <h2 style={{ color: 'grey' }}>Why Use Our Online Resume Maker?</h2>
  <ul style={{ color: 'gray' }}>
    <li>Free and easy-to-use templates</li>
    <li>Customizable designs to highlight your skills and experience</li>
    <li>Instant downloads in multiple formats (PDF, Word, etc.)</li>
    <li>Professional-looking layouts designed to make you stand out</li>
    <li>ATS-friendly templates to improve your chances of getting hired</li>
  </ul>
  <a href="/resume" className="search-cta-button">
    Get Started with Resume Design
  </a>
</div>


      <ResumeMainMoto />

      <Endbar />
      </div>
    </div>
  )
}
