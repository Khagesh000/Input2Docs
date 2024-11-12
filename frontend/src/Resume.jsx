import React from 'react'
import Navbar from './components/navbar'
import ResumeIntro from './components/ResumeIntro'
import ResumeTemplate from './components/ResumeTemplate'
import ResumeImportance from './components/ResumeImportance'
import ResumeMainMoto from './components/ResumeMainMoto'
import Feedback from './components/Feedback'
import Endbar from './components/Endbar'


export default function Resume() {
  return (
    <div style={{ backgroundColor: 'black'}}>
    <div>
      <Navbar />
      <div style={{ backgroundColor: 'black' }}>
        <ResumeIntro />
      </div>
      <div style={{ backgroundColor: 'black'}}>
        <ResumeTemplate />
      </div>
      <div style={{ backgroundColor: 'black'}}>
        <ResumeImportance />
      </div>
      <ResumeMainMoto />
      <div style={{ backgroundColor: 'black'}}>
        <Feedback />
      </div>
      <Endbar />
      </div>
    </div>
  )
}
