import React from 'react'




import Navbar from './components/navbar'
import Feedback from './components/Feedback'
import Endbar from './components/Endbar'
import CoverLetterTemplates from './components/CoverLetterTemplates'
import CoverLetterIntro from './components/CoverLetterIntro'
import CoverLetterImportance from './components/CoverLetterImportance'
import CoverLetterAbout from './components/CoverLetterAbout'

export default function CoverLetter() {
  return (
    <div className='bg-black'>
      <Navbar />
      <CoverLetterIntro />
      <CoverLetterImportance />
      <CoverLetterTemplates />
      <CoverLetterAbout />
      <div>
      <div style={{ backgroundColor: 'black'}}>
      <Feedback />
      </div>
      </div>
      
      <Endbar />
    </div>
  )
}
