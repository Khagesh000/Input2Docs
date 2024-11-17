import React from 'react'
import Navbar from './components/navbar'
import Contactform from './components/Contactform'
import ContactMainMoto from './components/ContactMainMoto'
import Endbar from './components/Endbar'


export default function Cv() {
  return (
  
    <div>
      <Navbar />
      <div>
        <h1 className="responsive-heading">Get In Touch Us</h1>
      </div>

      <Contactform />
      <ContactMainMoto />
      <Endbar />
      </div>
 
  )
}
