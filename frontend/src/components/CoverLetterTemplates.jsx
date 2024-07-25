import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../CoverLetterTemplates.css'; // Ensure this path is correct

// Import images for templates
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
  const editorRef = useRef(null);
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
    if (editorRef.current) {
      editorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [content]);

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
    // Set initial content with placeholder values
    setContent(generateTemplateContent(formData));

    // Force re-render of the editor
    setEditorKey(prevKey => prevKey + 1);

    const selectedImageElement = containerRef.current.querySelector(`.template-card:nth-child(${index + 1})`);
    selectedImageRef.current = selectedImageElement;

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleDownloadPNG = () => {
    if (editorRef.current) {
      // Use the content and styles to generate PNG
      const contentDiv = editorRef.current.querySelector('.tox-edit-area iframe').contentWindow.document.body;
      html2canvas(contentDiv).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'template_content.png';
        link.click();
      }).catch(error => {
        console.error('Error capturing the editor content:', error);
      });
    }
  };

  const handleDownloadPDF = () => {
    if (editorRef.current) {
      const contentDiv = editorRef.current.querySelector('.tox-edit-area iframe').contentWindow.document.body;
      html2canvas(contentDiv).then(canvas => {
        const pdf = new jsPDF('p', 'pt', 'a4');
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position -= pageHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('template_content.pdf');
      }).catch(error => {
        console.error('Error generating the PDF:', error);
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePrev = () => {
    setCurrentInputIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentInputIndex(prevIndex => Math.min(prevIndex + 1, inputFields.length - 1));
  };

  const inputFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'jobTitle', label: 'Job Title', type: 'text' },
    { name: 'principal', label: 'Principal', type: 'text' },
    { name: 'school', label: 'School', type: 'text' },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'phone', label: 'Phone', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'linkedin', label: 'LinkedIn', type: 'text' },
    { name: 'date', label: 'Date', type: 'text' },
    { name: 'letterContent', label: 'Letter Content', type: 'textarea' },
  ];

  const generateTemplateContent = (data) => {
    return `
      <div style="display: flex; height: 100%;">
        <div style="flex: 1; padding-left: 4px; background-color: lightblue; min-height: 1120px;">
          <h2>${data.name}</h2>
          <h3>${data.jobTitle}</h3>
          <h3>Personal Info</h3>
          <p>${data.principal}<br>${data.school}<br>${data.address}</p>
          <h3>Address</h3>
          <p>${data.address}</p>
          <p>Phone<br>${data.phone}</p>
          <p>E-mail<br>${data.email}</p>
          <p>LinkedIn<br>${data.linkedin}</p>
          <p>Date<br>${data.date}</p>
        </div>
        <div style="flex: 2; padding: 10px;">
          <p>Dear Principal Sanchez,</p>
          <p>${data.letterContent}</p>
          <p>Sincerely,<br>${data.name}</p>
        </div>
      </div>`;
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

      {selectedImage && (
        <div className="selected-image-wrapper" ref={editorRef}>
          
          <div className="editor-container">
            <div className="form-group template-input">
              <label>{inputFields[currentInputIndex].label}</label>
              {inputFields[currentInputIndex].type === 'textarea' ? (
                <textarea
                  className="form-control template-textarea"
                  name={inputFields[currentInputIndex].name}
                  rows="6"
                  value={formData[inputFields[currentInputIndex].name]}
                  onChange={handleInputChange}
                ></textarea>
              ) : (
                <input
                  type={inputFields[currentInputIndex].type}
                  className="form-control"
                  name={inputFields[currentInputIndex].name}
                  value={formData[inputFields[currentInputIndex].name]}
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
    disabled={currentInputIndex === inputFields.length - 1}
  >
    Next <i className="fa fa-arrow-right"></i>
  </button>
</div>

            <Editor
              key={editorKey} // Re-render editor on key change
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
                  'undo redo | formatselect | bold italic backcolor | \
                   alignleft aligncenter alignright alignjustify | \
                   bullist numlist outdent indent | removeformat | help',
              }}
              value={generateTemplateContent(formData)} // Dynamically update content
              onEditorChange={(content) => setContent(content)}
            />
          </div>
          <button className="btn btn-secondary m-2 mb-2 down-temp" onClick={handleDownloadPNG}>
            Download Template as PNG
          </button>
          <button className="btn btn-secondary mb-2 down-temp" onClick={handleDownloadPDF}>
            Download Template as PDF
          </button>
        </div>
      )}
    </div>
  );
}
