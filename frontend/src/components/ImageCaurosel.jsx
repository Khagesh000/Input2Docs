import React, { useState, useEffect } from 'react';
import img from '../assets/images/LetterMaker.jpg';
import img1 from '../assets/images/LetterMaker1.jpg';
import img2 from '../assets/images/LetterMaker2.jpg';
import '../App.css'; // Import the CSS file

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src={img} className="d-block w-100" alt="First Slide" />
          <div className="carousel-caption text-black">
            <h2>Letter Interface</h2>
            <p>Streamlined Options</p>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img src={img1} className="d-block w-100" alt="Second Slide" />
          <div className="carousel-caption text-black text-center">
            <h2>Real Time</h2>
            <p>Dynamic Display</p>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img src={img2} className="d-block w-100" alt="Third Slide" />
          <div className="carousel-caption text-black">
            <h2>Customization Options</h2>
            <p>Personalized Edit</p>
          </div>
        </div>
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          className={`btn ${activeIndex === 0 ? 'active' : ''}`}
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to="0"
          onClick={() => setActiveIndex(0)}
        ></button>
        <button
          type="button"
          className={`btn ${activeIndex === 1 ? 'active' : ''}`}
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to="1"
          onClick={() => setActiveIndex(1)}
        ></button>
        <button
          type="button"
          className={`btn ${activeIndex === 2 ? 'active' : ''}`}
          data-bs-target="#carouselExampleControls"
          data-bs-slide-to="2"
          onClick={() => setActiveIndex(2)}
        ></button>
      </div>
    </div>
  );
}
