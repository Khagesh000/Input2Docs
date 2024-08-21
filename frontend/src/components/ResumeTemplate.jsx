import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import html2canvas from 'html2canvas';

import html2pdf from 'html2pdf.js';

import '../ResumeTemplate.css'; // Ensure this path is correct

// Import images for templates
import img from '../assets/images/cover_letter.png';
import img1 from '../assets/images/cover_letter1.png';
import img2 from '../assets/images/resumetemplates.png';
import img3 from '../assets/images/cover_letter1.png';
import img4 from '../assets/images/cover_letter.png';
import img5 from '../assets/images/cover_letter1.png';
import img6 from '../assets/images/cover_letter.png';
import img7 from '../assets/images/cover_letter1.png';

import { templateInputFields } from './ResumeTemplateInputFields';
import { generateTemplateContent } from './ResumeGeneralTemplateContent';

export default function ResumeTemplate() {
  const containerRef = useRef(null);
  const selectedImageRef = useRef(null);
  const editorRef = useRef(null); // Define the editorRef
  const [cardWidth, setCardWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [content, setContent] = useState('');
  const [editorKey, setEditorKey] = useState(0); // Add a key for editor
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    principal: '',
    school: '',
    address: '',
    phone: '',
    email: '',
    linkedin: '',
    date: '',
    letterContent: '',
    experience: '',  // Updated to an array
    summary: '', 
    education: '',    // Updated to an array
    skills: '' 
    

  });

  const [selectedTemplateType, setSelectedTemplateType] = useState(1); // Add state for template type
  const [networkError, setNetworkError] = useState(false); // State to manage network error

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

        setTimeout(() => {
          containerRef.current.scrollTo({
            left: Math.max(scrollPosition, 0),
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [selectedImage]);

  useEffect(() => {
    if (content) {
      console.log('Editor Content:', content);
    }
  }, [content]);

  useEffect(() => {
    setContent(generateTemplateContent(formData, selectedTemplateType));
  }, [formData, selectedTemplateType]);

  useEffect(() => {
    const handleOnline = () => setNetworkError(false);
    const handleOffline = () => setNetworkError(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (!navigator.onLine) {
      setNetworkError(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);


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
    setSelectedImage(images[index]);
    const templateType = (index % 3) + 1; 
    setSelectedTemplateType(templateType);
    setContent(generateTemplateContent(formData, templateType));
    setEditorKey(prevKey => prevKey + 1);

    // Scroll to the input and editor section after selecting a template
    setTimeout(() => {
      const editorSection = document.querySelector('.editor-section');
      if (editorSection) {
        window.scrollTo({
          top: editorSection.offsetTop,
          behavior: 'smooth',
        });
      }
    }, 300);
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

 



const handleDownloadPNG = () => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  // Apply global styles to ensure consistent appearance
  tempDiv.style.fontFamily = 'Arial, sans-serif';
  
  // Background color
  tempDiv.style.width = '210mm';
  tempDiv.style.height = '296mm';
  




  document.body.appendChild(tempDiv);

  html2canvas(tempDiv, 
  { scale: 2,
    width: tempDiv.clientWidth,
    height: tempDiv.clientHeight,
    useCORS: true // To handle cross-origin issues with external resources
   }).then((canvas) => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'cover-letter-template.png';
    link.click();
    document.body.removeChild(tempDiv);
  });
};


const handleDownloadPDF = () => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  tempDiv.style.fontFamily = 'Arial, sans-serif';
  



  document.body.appendChild(tempDiv);

  // Add TinyMCE styles if necessary
  const styleSheet = document.createElement('link');
  styleSheet.rel = 'stylesheet';
  styleSheet.href = 'path/to/tinymce-custom-styles.css';
  document.head.appendChild(styleSheet);

  // Set up options for html2pdf
  const options = {
    margin: [10, 10, 10, 10], // Margins in mm
    filename: 'cover-letter-template.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(tempDiv).set(options).toPdf().get('pdf').then((pdf) => {
    pdf.save('cover-letter-template.pdf');
  }).finally(() => {
    document.body.removeChild(tempDiv);
  });
};


  return (
    
    <div className="resume-template">
    <div className="container cov-temp template-container bg-black mb-xxl-5">
      <h2 className="text-center heading-title resume-title">Choose a <span>Resume Template</span></h2>
      <div className="template-row-wrapper">
      <button className="arrow-button left-arrow" onClick={scrollLeft}>&lt;</button>
      <div className="template-row" ref={containerRef}>
        {images.map((image, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="template-card">
              <div className="template-image-wrapper">
                <img
                  src={image}
                  alt={`Resume Template ${index + 1}`}
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
        </div>
        <button className="arrow-button right-arrow" onClick={scrollRight}>&gt;</button>
        
      </div>
    </div>
     
    <section className="m-0 editor-section">
  {selectedImage && (
    <div className="selected-image-wrapper" ref={editorRef}>
      <div className="row">
      {/* Resume Input Fields on the Left Side */}
       <div className='col-lg-8 resume-input'>
        <div className="form-group row">
          {templateInputFields[selectedTemplateType].map((field, index) => (
            <div key={index} className="form-group col-md-6">
              <label>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  className="form-control template-textarea"
                  name={field.name}
                  rows="6"
                  value={formData[field.name]}
                  onChange={handleInputChange}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  className="form-control"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              )}
            </div>
          ))}
        </div>
        </div>
 

        {/* Suggestions content on the right side, visible only on large screens */}
        <div className="resume-suggestions">
        <h5>Resume Writing Tips</h5>
  <ul>
    <li>
      <strong>1. Keep Your Resume Concise:</strong> Aim for a one-page resume if possible. Focus on the most relevant experiences and skills.
    </li>
    <li>
      <strong>2. Highlight Relevant Skills:</strong> Tailor your skills to match the job description. Use keywords that are specific to the job you're applying for.
    </li>
    <li>
      <strong>3. Use Action Verbs:</strong> Start each bullet point with an action verb like "Managed," "Developed," or "Led" to make your achievements stand out.
    </li>
    <li>
      <strong>4. Customize for Each Job:</strong> Modify your resume for each application to include the most relevant experiences and achievements.
    </li>
    <li>
      <strong>5. Proofread Thoroughly:</strong> Double-check for spelling and grammar errors. Consider having someone else review your resume as well.
    </li>
    <li>
      <strong>6. Quantify Achievements:</strong> Whenever possible, include numbers to quantify your achievements, such as "Increased sales by 20%."
    </li>
    <li>
      <strong>7. Include a Professional Summary:</strong> Start your resume with a brief summary that highlights your key skills and experiences.
    </li>
    <li>
      <strong>8. Focus on Layout and Design:</strong> Use a clean and professional layout. Ensure consistent formatting, font sizes, and spacing.
    </li>
    <li>
      <strong>9. Use White Space Wisely:</strong> Don’t overcrowd your resume. Use white space to make it easier to read and more visually appealing.
    </li>
    <li>
      <strong>10. Save as PDF:</strong> Save your resume as a PDF to ensure that the formatting remains consistent across different devices and platforms.
    </li>
  </ul>
        </div>
        </div>

        
        <div className="editor-container">
            <Editor className='key-editor'
              key={editorKey}
              apiKey="xvogh7180w9n8hd8zc53e6dwo44kau08xngyoqlr623byta9"
              init={{
                height: '296mm',
                width: '210mm',
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
              }}
              value={content}
              onEditorChange={(newContent) => setContent(newContent)}
            />
          </div>
          {networkError && (
        <div className="network-error">
          Network issue detected. Some features may not work properly.
        </div>
      )}

          <button className="btn btn-secondary m-2 mb-2 down-temp" onClick={handleDownloadPNG}>
            Download Template as PNG
          </button>
          <button className="btn btn-secondary mb-2 down-temp" onClick={handleDownloadPDF}>
            Download Template as PDF
          </button>
        </div>
      )}
      </section>
    </div>
    
  );
}