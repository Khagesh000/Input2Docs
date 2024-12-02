import React from 'react'
import Navbar from './components/navbar'
import Contactform from './components/Contactform'
import ContactMainMoto from './components/ContactMainMoto'
import Endbar from './components/Endbar'
import KeyMetrics from './components/KeyMetrics'
import { Helmet } from 'react-helmet';

import MultiplyAd from './components/MultiplyAd'
export default function Cv() {
  return (
  
    <div>
      <Helmet>
        <title>Contact Us | Contact Input2Docs</title>
        <meta name="description" content="Contact Us" />
        <meta name="keywords" content="contact Input2Docs " />
        
      </Helmet>
      <Navbar />
      <div>
        <h1 className="responsive-heading">Get In Touch Us</h1>
      </div>

      <Contactform />
      <MultiplyAd />
      <KeyMetrics />
      <ContactMainMoto />
      <Endbar />
      </div>
 
  )
}
