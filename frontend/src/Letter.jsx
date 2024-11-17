import React, { useState } from 'react';
import Navbar from './components/navbar';
import './Letter.css';
import SearchCategory from './components/SearchCategory';

import Endbar from './components/Endbar';
import LetterMaker from './components/LetterMaker';
import Process from './components/Process';

import ImportanceLetter from './components/ImportanceLetter';
import LetterMainMoto from './components/Lettermainmoto';

export default function Letter() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  return (
    <div style={{ backgroundColor: '#f3f4f6'}}>
    <div>
      <Navbar />

      <div style={{ backgroundColor: '#f3f4f6'}}>
        <SearchCategory
          handleSubcategoryClick={(subcategory) => setSelectedSubcategory(subcategory)}
          selectedSubcategory={selectedSubcategory}
        />
      </div>

      <div>
        <LetterMaker selectedTemplate={selectedSubcategory} />
      </div>

      <div className='ProcessSection' style={{ backgroundColor: '#f3f4f6'}}>
        <Process />
      </div>
      
      <div className='ProcessSection' style={{ backgroundColor: '#f3f4f6'}}><ImportanceLetter /></div>

      <h1 className="responsive-heading">Comprehensive Letter Templates for All Occasions</h1>

      
      <div  style={{ backgroundColor: '#f3f4f6'}}><LetterMainMoto /></div>
      

     
      <Endbar />
      </div>
    </div>
  );
}
