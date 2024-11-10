import React, { useState } from 'react';
import Navbar from './components/navbar';
import './Letter.css';
import SearchCategory from './components/SearchCategory';
import ImageCarousel from './components/ImageCaurosel';
import Endbar from './components/Endbar';
import LetterMaker from './components/LetterMaker';
import Process from './components/Process';

import Feedback from './components/Feedback';
import ImportanceLetter from './components/ImportanceLetter';
import LetterMainMoto from './components/Lettermainmoto';

export default function Letter() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  return (
    <div style={{ backgroundColor: 'black'}}>
    <div>
      <Navbar />
      <ImageCarousel />
      <div className='SearchCategorySection bg-black text-light'>
        <SearchCategory
          handleSubcategoryClick={(subcategory) => setSelectedSubcategory(subcategory)}
          selectedSubcategory={selectedSubcategory}
        />
      </div>

      <div className='LetterMakerSection'>
        <LetterMaker selectedTemplate={selectedSubcategory} />
      </div>

      <div className='ProcessSection' style={{ backgroundColor: '#f3f4f6'}}>
        <Process />
      </div>
      
      <div className='ProcessSection' style={{ backgroundColor: '#f3f4f6'}}><ImportanceLetter /></div>
      
      <div  style={{ backgroundColor: '#f3f4f6'}}><LetterMainMoto /></div>
      
      <div style={{ backgroundColor: '#f3f4f6'}}>
      <Feedback />
      </div>
     
      <Endbar />
      </div>
    </div>
  );
}
