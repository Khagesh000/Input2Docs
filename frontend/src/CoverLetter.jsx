import React from 'react'

import { Helmet } from 'react-helmet';


import Navbar from './components/navbar'

import Endbar from './components/Endbar'
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
  <title>Cover Letter Templates | Input2Docs</title>
  <meta name="description" content="Browse our cover letter templates and craft the perfect first impression." />
  <meta name="keywords" content="Cover Letter Templates, Professional Cover Letters, Input2Docs Templates" />
</Helmet>

      <Navbar />
      <CoverLetterIntro />
      <h1 className="responsive-heading-black"> Cover Letter Templates</h1>
      <CoverLetterImportance />
      <CoverLetterTemplates />
      <MultiplyAd />
      <CoverLetterAbout />
      <div>
        <CoverletterMainMoto />
      
      </div>
      
      <Endbar />
    </div>
  )
}
