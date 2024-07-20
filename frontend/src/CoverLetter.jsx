import React from 'react'




import Navbar from './components/navbar'
import Feedback from './components/Feedback'
import Endbar from './components/Endbar'

import CoverLetterIntro from './components/CoverLetterIntro'
import CoverLetterTemplates from './components/CoverLetterTemplates'



export default function CoverLetter() {
  return (
    <div className='bg-black'>
      <Navbar />
      <CoverLetterIntro />
      <CoverLetterTemplates />
      <div>
      <Feedback />
      </div>
      
      <Endbar />
    </div>
  )
}
