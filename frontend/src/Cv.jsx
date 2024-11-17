import React from 'react'
import Navbar from './components/navbar'
import CvDescription from './components/CvDescription'
import CvImportance from './components/CvImportance'
import CvTemplates from './components/CvTemplates'
import Endbar from './components/Endbar'

import CvAbout from './components/CvAbout'
import CvMainMoto from './components/CvMainMoto'



export default function Cv() {
  return (
    <div style={{ backgroundColor: 'black'}}>
    <div>
      <Navbar />
      
      <div style={{ backgroundColor: 'black'}}>
        
      <CvDescription />
      </div>
      <div style={{ backgroundColor: 'black'}}>
      <CvTemplates />
      </div>
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
