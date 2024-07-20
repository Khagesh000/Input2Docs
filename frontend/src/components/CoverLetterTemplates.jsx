import React, { useRef, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../CoverLetterTemplates.css'; // Make sure this path is correct

// Import images for templates
import img from '../assets/images/cover_letter.png';
import img1 from '../assets/images/cover_letter1.png';
import img2 from '../assets/images/cover_letter.png';
import img3 from '../assets/images/cover_letter1.png';
import img4 from '../assets/images/cover_letter.png';
import img5 from '../assets/images/cover_letter1.png';
import img6 from '../assets/images/cover_letter.png';
import img7 from '../assets/images/cover_letter1.png';

// Template contents for ReactQuill
const templateContents = [
  `
    <div style="display: flex;">
      <!-- Left Side -->
      <div style="flex: 1; padding: 20px; background-color: lightblue;">
        <h1>Claire Schmidt</h1>
        <h2>High School Teacher</h2>
        <h3>Personal Info</h3>
        <p>Jennifer Sanchez<br>Principal<br>Franklin High School<br>35th Ave<br>Seattle, WA 98115</p>
        <h3>Address</h3>
        <p>108 Pine St<br>Seattle, WA 98101</p>
        <p>Phone<br>345-765-0000</p>
        <p>E-mail<br>claireschmidt@gmail.com</p>
        <p>LinkedIn<br>linkedin.com/in/claireschmidt</p>
        <p>Date<br>October 16th, 2020</p>
      </div>
      <!-- Right Side -->
      <div style="flex: 2; padding: 20px;">
        <p>Dear Principal Sanchez,</p>
        <p>As an experienced high school teacher and accomplished private tutor, I was excited to see the opening for a twelfth-grade Math teacher at Franklin High School. With my experience as a top eleventh and twelfth-grade educator at Johnson High School, I know I can use my teaching skills and knowledge to become an essential member of the Franklin faculty.</p>
        <p>In my previous position with Johnson High, I've had many responsibilities and accomplishments that would serve me well as an educator of Math at Smith High. I created lesson plans at Johnson High using a similar format to the one at Franklin, and formatting improvements I suggested have now been adopted by 18 out of 23 state school districts. Additionally, my 97.5% pass and graduation rates were the best in the school district, and I'm sure that I could create similar successes at Franklin.</p>
        <p>Obtaining the Math teaching position at Franklin High School would be a dream come true. I've long admired your exacting teaching values. In fact, several members of the Franklin HS faculty were the ones who initially encouraged me to pursue a career in education. I love teaching my current students with all my heart, but there is no other school that would make me as happy to work for as Franklin. Should I be honored with the position, I know that I'd be the envy of the school board at Johnson.</p>
        <p>I would welcome the chance to discuss your current math syllabus and show you how my successes at Johnson High can translate into success at Franklin High.</p>
        <p>Sincerely,<br>Claire Schmidt</p>
        <p>P.S. I'd love the opportunity to sit down with you and go over how I can bring improvements such as a 15% increase in average test scores to Franklin High School, as well.</p>
      </div>
    </div>
  `,
  // Add other template contents here similarly
];

export default function CoverLetterTemplates() {
  const containerRef = useRef(null);
  const selectedImageRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [content, setContent] = useState('');

  const images = [img, img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector('.template-card');
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth);
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);

    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  useEffect(() => {
    if (selectedImage && selectedImageRef.current) {
      const { offsetLeft, offsetWidth } = selectedImageRef.current;
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const scrollPosition = offsetLeft - (containerWidth / 2) + (offsetWidth / 2);

        console.log(`Selected image position: ${offsetLeft}, Width: ${offsetWidth}`);
        console.log(`Container width: ${containerWidth}`);
        console.log(`Scroll position: ${scrollPosition}`);

        setTimeout(() => {
          containerRef.current.scrollTo({
            left: Math.max(scrollPosition, 0),
            behavior: 'smooth',
          });
        }, 100);
      } else {
        console.log('Container reference is null');
      }
    } else {
      console.log('Selected image reference is null');
    }
  }, [selectedImage]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleUseTemplate = (index) => {
    console.log(`Template ${index} selected`);
    setSelectedImage(images[index]);
    setContent(templateContents[index]);

    const selectedImageElement = containerRef.current.querySelector(`.template-card:nth-child(${index + 1})`);
    selectedImageRef.current = selectedImageElement;

    console.log('Selected image element:', selectedImageElement);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-black">
      <div className="container cov-temp template-container bg-black mb-xxl-5">
        <h2 className="text-center heading-title text-white">Choose a Cover Letter Template</h2>
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
                      onClick={() => handleUseTemplate(index)}
                    >
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="arrow-button left-arrow" onClick={scrollLeft}>&lt;</button>
          <button className="arrow-button right-arrow" onClick={scrollRight}>&gt;</button>
        </div>
      </div>

      <section className="m-0">
        {selectedImage && (
          <div className="selected-image-wrapper">
            <div className="editor-container">
              <ReactQuill
                value={content}
                onChange={(value) => {
                  console.log('Editor content changed:', value); // Verify the editor content
                  setContent(value);
                }}
                modules={{
                  toolbar: [
                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                    [{size: []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    ['link'],
                    ['clean']
                  ],
                }}
                formats={[
                  'header', 'font', 'size',
                  'bold', 'italic', 'underline', 'strike', 'blockquote',
                  'list', 'bullet',
                  'link'
                ]}
                className="quill-editor"
              />
              <pre>{content}</pre> {/* Debug content */}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
