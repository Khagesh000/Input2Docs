import React from 'react'
import Navbar from './components/navbar'
import ResumeIntro from './components/ResumeIntro'
import ResumeTemplate from './components/ResumeTemplate'
import ResumeImportance from './components/ResumeImportance'
import Feedback from './components/Feedback'
import Endbar from './components/Endbar'


export default function Resume() {
  return (
    <div>
      <Navbar />
      <ResumeIntro />
      <ResumeTemplate/>
      <ResumeImportance />
      <Feedback />
      <Endbar />
    </div>
  )
}
