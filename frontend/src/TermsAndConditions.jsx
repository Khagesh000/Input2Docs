import React from 'react'
import Navbar from './components/navbar'
import TermsAndConditions from './components/TermsAndConditionsmoto'
import Endbar from './components/Endbar'

import { Helmet } from 'react-helmet';

export default function Cv() {
  return (
  
    <div>
      <Helmet>
        <title>Terms and conditions | Terms And Coniditions Input2Docs</title>
        <meta name="description" content="Terms And Conditions" />
        <meta name="keywords" content="Terms And Conidtions" />
        
      </Helmet>
      <Navbar />
      <TermsAndConditions />
      <Endbar />
      </div>
 
  )
}
