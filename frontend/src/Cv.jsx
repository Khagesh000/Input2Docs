import React from 'react'
import Navbar from './components/navbar'
import CvDescription from './components/CvDescription'
import CvImportance from './components/CvImportance'
import CvTemplates from './components/CvTemplates'
import Endbar from './components/Endbar'

import CvAbout from './components/CvAbout'
import CvMainMoto from './components/CvMainMoto'

import { Helmet } from 'react-helmet';

import ArticalAd from './components/AriticalAd'

export default function Cv() {
  return (
    <div style={{ backgroundColor: 'black'}}>
      <Helmet>
  <title>CV Templates | Input2Docs</title>
  <meta name="description" content="Discover our professional CV templates designed to make job applications stand out." />
  <meta name="keywords" content="CV Templates, Professional CVs, Input2Docs Templates" />
</Helmet>

    <div>
      <Navbar />
      
      <div style={{ backgroundColor: 'black'}}>
        
      <CvDescription />
      </div>
      <div style={{ backgroundColor: 'black'}}>
      <CvTemplates />
      </div>
      <ArticalAd />
      <h1 className="responsive-heading-black" style={{paddingTop: '10%', margin: '0'}}>Professional CV Templates</h1>
      <div style={{ backgroundColor: 'black'}}>
      <CvImportance />
      </div>
      <div style={{ backgroundColor: 'black'}}>
      <CvAbout />
      </div>
      <CvMainMoto />
      
      <Endbar />
      </div>
    </div>
  )
}
