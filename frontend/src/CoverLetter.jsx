import React from 'react'




import Navbar from './components/navbar'
import CoverLetterIntro from './components/CoverLetterIntro'
import CoverLetterTemplates from './components/CoverLetterTemplates'



export default function CoverLetter() {
  return (
    <div className='bg-black'>
      <Navbar />
      <CoverLetterIntro />
      <CoverLetterTemplates />
    </div>
  )
}
