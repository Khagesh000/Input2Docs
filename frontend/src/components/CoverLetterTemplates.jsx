import React, { useRef, useState, useEffect } from 'react';
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
      <div style="display: flex; height: 100%;">
        <div style="flex: 1; padding-left: 4px; background-color: lightblue; min-height: 1120px;">
          <h1>${formData.name}</h1>
          <h2>${formData.jobTitle}</h2>
          <h3>Personal Info</h3>
          <p>${formData.principal}<br>${formData.school}<br>${formData.address}</p>
          <h3>Address</h3>
          <p>${formData.address}</p>
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
          <p><strong>Address:</strong><br>${formData.address}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
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
  const [selectedTemplateType, setSelectedTemplateType] = useState(1); // Add state for template type

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
    setSelectedTemplateType(index % 2 === 0 ? 1 : 2); // Toggle between template types
    setContent(generateTemplateContent(formData, index % 2 === 0 ? 1 : 2));

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
      const content = editorRef.current.getContent({ format: 'html' });
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      document.body.appendChild(tempDiv);
  
      html2canvas(tempDiv).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'template_content.png';
        link.click();
      }).catch(error => {
        console.error('Error capturing the editor content:', error);
      }).finally(() => {
        document.body.removeChild(tempDiv);
      });
    }
  };
  
  const handleDownloadPDF = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent({ format: 'html' });
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      document.body.appendChild(tempDiv);
  
      html2canvas(tempDiv).then(canvas => {
        const pdf = new jsPDF('p', 'pt', 'a4');
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('template_content.pdf');
      }).catch(error => {
        console.error('Error generating PDF:', error);
      }).finally(() => {
        document.body.removeChild(tempDiv);
      });
    }
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setContent(generateTemplateContent({
      ...formData,
      [name]: value
    }, selectedTemplateType));
  };

  const inputFields = templateInputFields[selectedTemplateType].map((field, index) => (
    <div key={index} className="form-group template-input">
      <label>{field.label}</label>
      {field.type === 'textarea' ? (
        <textarea
          className="form-control template-textarea"
          name={field.name}
          rows="6"
          value={formData[field.name] || ''}
          onChange={handleInputChange}
        ></textarea>
      ) : (
        <input
          type={field.type}
          className="form-control"
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleInputChange}
        />
      )}
    </div>
  ));

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
              value={generateTemplateContent(formData, selectedTemplateType)}
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
