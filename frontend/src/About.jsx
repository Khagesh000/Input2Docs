import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/navbar';
import AboutImage from './components/AboutImage';
import AboutMainMoto from './components/AboutMainMoto';
import Feedback from './components/Feedback';
import Endbar from './components/Endbar';
import AboutChoose from './components/AboutChoose';


export default function About() {
  

  return (
    <div style={{ backgroundColor: 'black'}}>
      <Helmet>
        <title>About Us | Learn About Input2Docs</title>
        <meta name="description" content="Discover Input2Docs' mission, vision, and how we help users with professional templates for emails, cover letters, resume, cv and more." />
        <meta name="keywords" content="About-Us Input2docs" />
        {/* JSON-LD Metadata */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": "https://input2docs.com/about-us/innovative-team-working.webp",
            "description": "Innovative team working together on cutting-edge solutions",
            "name": "Innovative Team Working",
          })}
        </script>
      </Helmet>
    <div>
      <Navbar />
      <AboutImage />
   
        <h1 className="responsive-heading-black">ABOUT US</h1>
      
      <AboutChoose />
      <AboutMainMoto />
      <Feedback />
      
      </div>
    </div>
  );
}
