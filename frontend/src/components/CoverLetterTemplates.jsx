import React, { useRef, useEffect, useState } from 'react';
import '../CoverLetterTemplates.css'; // Import your external CSS file

import img from '../assets/images/cover_letter.png';
import img1 from '../assets/images/cover_letter1.png';
import img2 from '../assets/images/cover_letter.png';
import img3 from '../assets/images/cover_letter1.png';
import img4 from '../assets/images/cover_letter.png';
import img5 from '../assets/images/cover_letter1.png';
import img6 from '../assets/images/cover_letter.png';
import img7 from '../assets/images/cover_letter1.png';

export default function CoverLetterTemplates() {
  const containerRef = useRef(null);
  const selectedImageRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img, img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    // Function to update card width dynamically
    const updateCardWidth = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector('.template-card');
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth);
        }
      }
    };

    // Initial update and add resize event listener
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  useEffect(() => {
    // Scroll to the selected image smoothly
    if (selectedImage && selectedImageRef.current) {
      // Ensure the selected image is visible
      const { offsetLeft, offsetWidth } = selectedImageRef.current;
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const scrollPosition = offsetLeft - (containerWidth / 2) + (offsetWidth / 2);

        // Delay scroll to ensure image is rendered
        setTimeout(() => {
          containerRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }, 100); // Adjust timeout if necessary
      }
    }
  }, [selectedImage]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -cardWidth, // Scroll by the width of one card
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: cardWidth, // Scroll by the width of one card
        behavior: 'smooth',
      });
    }
  };

  const handleUseTemplate = (image, index) => {
    setSelectedImage(image);
    // Set a reference to the selected image
    const selectedImageElement = containerRef.current.querySelector(`.template-card:nth-child(${index + 1})`);
    selectedImageRef.current = selectedImageElement;

    // Scroll down to the selected image
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-black">
      <div className="container cov-temp template-container bg-black mb-xxl-5">
        <h2 className="text-center heading-title">Choose a Cover Letter Template</h2>
        <div className="template-row" ref={containerRef}>
          {images.map((image, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="template-card">
                <div className="template-image-wrapper">
                  <img
                    src={image}
                    alt={`Cover Letter Template ${index + 1}`}
                    className={`img-fluid sliding-image ${selectedImage === image ? 'selected' : ''}`}
                    ref={selectedImage === image ? selectedImageRef : null}
                  />
                  <div className="template-overlay">
                    <button 
                      className="btn btn-primary" 
                      onClick={() => handleUseTemplate(image, index)}
                    >
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Arrow buttons positioned correctly */}
          <button className="arrow-button left-arrow" onClick={scrollLeft}>&lt;</button>
          <button className="arrow-button right-arrow" onClick={scrollRight}>&gt;</button>
        </div>
      </div>
      <section className='m-0'>
        {/* Display the selected image at the bottom */}
        {selectedImage && (
          <div className="selected-image-wrapper">
            <img src={selectedImage} alt="Selected Template" className="selected-image" />
          </div>
        )}
      </section>
    </div>
  );
}
