import React from 'react'
import Navbar from './components/navbar'
import CvDescription from './components/CvDescription'
import CvImportance from './components/CvImportance'
import CoverLetterTemplates from './components/CoverLetterTemplates'
import Endbar from './components/Endbar'

import CvAbout from './components/CvAbout'
import Feedback from './components/Feedback'


export default function Cv() {
  return (
    <div>
      <Navbar />
      <CvDescription />
      <CoverLetterTemplates />
      <CvImportance />
      <CvAbout />
      <Feedback />
      <Endbar />
    </div>
  )
}
