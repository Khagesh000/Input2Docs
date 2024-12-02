import React from 'react'
import Navbar from './components/navbar'
import PrivacyPolicy from './components/PrivacyPolicy'
import Endbar from './components/Endbar'

import { Helmet } from 'react-helmet';

export default function Cv() {
  return (
  
    <div>
      <Helmet>
        <title>Privacy Policy | Privacy Policy Input2Docs</title>
        <meta name="description" content="Privacy Policy Of Input2docs" />
        <meta name="keywords" content="Privacy Policy - Input2docs " />
        
      </Helmet>
      <Navbar />
      <PrivacyPolicy />
      <Endbar />
      </div>
 
  )
}
