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
  <title>Resume Templates | Input2Docs</title>
  <meta name="description" content="Create stunning resumes with Input2Docs' easy-to-use templates." />
  <meta name="keywords" content="Resume Templates, Professional Resumes, Input2Docs Templates" />
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
      <h1 className='responsive-heading-black' style={{margin: '0'}}> Our Easy-To-Use Templates</h1>

      <ResumeMainMoto />

      <Endbar />
      </div>
    </div>
  )
}
