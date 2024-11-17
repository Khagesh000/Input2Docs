import React from 'react'




import Navbar from './components/navbar'

import Endbar from './components/Endbar'
import CoverLetterTemplates from './components/CoverLetterTemplates'
import CoverLetterIntro from './components/CoverLetterIntro'
import CoverLetterImportance from './components/CoverLetterImportance'
import CoverletterMainMoto from './components/CoverletterMainMoto'
import CoverLetterAbout from './components/CoverLetterAbout'

export default function CoverLetter() {
  return (
    <div className='bg-black'>
      <Navbar />
      <CoverLetterIntro />
      <h1 className="responsive-heading-black"> Cover Letter Templates</h1>
      <CoverLetterImportance />
      <CoverLetterTemplates />
      <CoverLetterAbout />
      <div>
        <CoverletterMainMoto />
      
      </div>
      
      <Endbar />
    </div>
  )
}
