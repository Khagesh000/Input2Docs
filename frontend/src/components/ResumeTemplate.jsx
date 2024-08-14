import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';

import '../ResumeTemplate.css'; // Ensure this path is correct

// Import images for templates
import img from '../assets/images/cover_letter.png';
import img1 from '../assets/images/cover_letter1.png';
import img2 from '../assets/images/cover_letter.png';
import img3 from '../assets/images/cover_letter1.png';
import img4 from '../assets/images/cover_letter.png';
import img5 from '../assets/images/cover_letter1.png';
import img6 from '../assets/images/cover_letter.png';
import img7 from '../assets/images/cover_letter1.png';

const templateInputFields = {
  1: [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Job Title', name: 'jobTitle', type: 'text' },
    { label: 'Principal', name: 'principal', type: 'text' },
    { label: 'School', name: 'school', type: 'text' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'Phone', name: 'phone', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'LinkedIn', name: 'linkedin', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Letter Content', name: 'letterContent', type: 'textarea' },
  ],
  2: [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Job Title', name: 'jobTitle', type: 'text' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'Phone', name: 'phone', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'LinkedIn', name: 'linkedin', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Letter Content', name: 'letterContent', type: 'textarea' },
  ],
};

const generateTemplateContent = (formData, templateType) => {
  if (templateType === 1) {
    return `
      <div style="display: flex; height: 100%; background-color: #f5f5f5; color: #000;">
        <div style="flex: 1; padding-left: 4px; background-color: wheat; min-height: 1120px;">
          <h1>${formData.name}</h1>
          <h2>${formData.jobTitle}</h2>
          <h3>Personal Info</h3>
          <p style="color: #000;">${formData.principal}<br>${formData.school}<br>${formData.address}</p>
          <h3>Address</h3>
          <p style="color: #000;">${formData.address}</p>
          <p>Phone<br>${formData.phone}</p>
          <p>E-mail<br>${formData.email}</p>
          <p>LinkedIn<br>${formData.linkedin}</p>
          <p>Date<br>${formData.date}</p>
        </div>
        <div style="flex: 2; padding: 10px;">
          <p>${formData.letterContent}</p>
        </div>
      </div>`;
  } else if (templateType === 2) {
    return `
      <div style="display: flex; height: 100%;">
        <div style="flex: 1; padding: 20px; background-color: #ea0909; min-height: 1120px;">
          <h1>${formData.name}</h1>
          <h2>${formData.jobTitle}</h2>
          <p style="color: #f5e5e5;"><strong>Address:</strong><br>${formData.address}</p>
          <p style="color: #f5e5e5;"><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>LinkedIn:</strong> ${formData.linkedin}</p>
          <p><strong>Date:</strong> ${formData.date}</p>
        </div>
        <div style="flex: 2; padding: 20px;">
          <p>${formData.letterContent}</p>
        </div>
      </div>`;
  }
  return '';
};

export default function CoverLetterTemplates() {
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
  });
  const [currentInputIndex, setCurrentInputIndex] = useState(0); // State for managing input index
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

  // Effect to update content when formData changes
  useEffect(() => {
    setContent(generateTemplateContent(formData, selectedTemplateType));
  }, [formData, selectedTemplateType]);



  useEffect(() => {
    const handleOnline = () => setNetworkError(false);
    const handleOffline = () => setNetworkError(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial status
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
    setSelectedTemplateType(index % 2 === 0 ? 1 : 2); // Toggle between template types
    setContent(generateTemplateContent(formData, index % 2 === 0 ? 1 : 2));

    // Force re-render of the editor
    setEditorKey(prevKey => prevKey + 1);

    const selectedImageElement = containerRef.current.querySelector(`.template-card:nth-child(${index + 1})`);
    selectedImageRef.current = selectedImageElement;

    setTimeout(() => {
      if (selectedImageElement) {
        selectedImageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      window.scrollTo({
        top: document.querySelector('.selected-image-wrapper').offsetTop,
        behavior: 'smooth'
      });
    }, 300); // Delay to ensure content is updated
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handlePrev = () => {
    if (currentInputIndex > 0) {
      setCurrentInputIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentInputIndex < templateInputFields[selectedTemplateType].length - 1) {
      setCurrentInputIndex(prevIndex => prevIndex + 1);
    }
  };



const handleDownloadPNG = () => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  // Apply global styles to ensure consistent appearance
  tempDiv.style.fontFamily = 'Arial, sans-serif';
  
  // Background color
  tempDiv.style.width = '210mm';
  tempDiv.style.height = '296mm';


  // Apply specific styles to all child elements
  tempDiv.querySelectorAll('*').forEach(element => {
   
  });

  document.body.appendChild(tempDiv);

  html2canvas(tempDiv, 
  { scale: 2,
    width: tempDiv.clientWidth,
    height: tempDiv.clientHeight,
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
  

  // Apply specific styles to all child elements
  tempDiv.querySelectorAll('*').forEach(element => {
   
  });

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
        </div>
        <button className="arrow-button right-arrow" onClick={scrollRight}>&gt;</button>
        
      </div>
    </div>
     
      <section className="m-0">
      {selectedImage && (
        
        <div className="selected-image-wrapper" ref={editorRef}>
          <div className="editor-container">
            <div className="form-group template-input">
              <label>{templateInputFields[selectedTemplateType][currentInputIndex].label}</label>
              {templateInputFields[selectedTemplateType][currentInputIndex].type === 'textarea' ? (
                <textarea
                  className="form-control template-textarea"
                  name={templateInputFields[selectedTemplateType][currentInputIndex].name}
                  rows="6"
                  value={formData[templateInputFields[selectedTemplateType][currentInputIndex].name]}
                  onChange={handleInputChange}
                ></textarea>
              ) : (
                <input
                  type={templateInputFields[selectedTemplateType][currentInputIndex].type}
                  className="form-control"
                  name={templateInputFields[selectedTemplateType][currentInputIndex].name}
                  value={formData[templateInputFields[selectedTemplateType][currentInputIndex].name]}
                  onChange={handleInputChange}
                />
              )}
            </div>
            <div className="form-navigation mb-5">
              <button
                type="button"
                className="btn btn-nav btn-prev"
                onClick={handlePrev}
                disabled={currentInputIndex === 0}
              >
                <i className="fa fa-arrow-left"></i> Previous
              </button>
              <button
                type="button"
                className="btn btn-nav btn-next"
                onClick={handleNext}
                disabled={currentInputIndex === templateInputFields[selectedTemplateType].length - 1}
              >
                Next <i className="fa fa-arrow-right"></i>
              </button>
              {networkError && (
        <div className="network-error">
          Network issue detected. Some features may not work properly.
        </div>
      )}
            </div>

            <Editor
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
