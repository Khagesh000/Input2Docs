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

// Template contents for TinyMCE
const templateContents = [
  `<div style="display: flex; height: 100%;">
    <!-- Left Side -->
    <div style="flex: 1; padding-left: 4px; background-color: lightblue; min-height: 1120px;">
      <h1>Yeragana Mani</h1>
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
    <div style="flex: 2; padding: 10px;">
      <p>Dear Principal Sanchez,</p>
      <p>As an experienced high school teacher and accomplished private tutor, I was excited to see the opening for a twelfth-grade Math teacher at Franklin High School...</p>
      <p>Obtaining the Math teaching position at Franklin High School would be a dream come true...</p>
      <p>Sincerely,<br>Claire Schmidt</p>
      <p>P.S. I'd love the opportunity to sit down with you...</p>
    </div>
  </div>`,
  // Add other template contents here similarly
];

export default function CoverLetterTemplates() {
  const containerRef = useRef(null);
  const selectedImageRef = useRef(null);
  const editorRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [content, setContent] = useState('');
  const [editorKey, setEditorKey] = useState(0); // Add a key for editor

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
    setContent(templateContents[index]);

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
          <div className="selected-image-wrapper" ref={editorRef}>
            <button className="btn btn-secondary mb-2 down-temp" onClick={handleDownloadPNG}>
              Download Template as PNG
            </button>
            <button className="btn btn-secondary mb-2 down-temp" onClick={handleDownloadPDF}>
              Download Template as PDF
            </button>
            <div className="editor-container">
              <Editor
                apiKey="xvogh7180w9n8hd8zc53e6dwo44kau08xngyoqlr623byta9"
                key={editorKey} // Ensures editor is re-rendered
                initialValue={content}
                init={{
                  height: '296mm',
                  width: '210mm',
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar: 'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
                onInit={(evt, editor) => (editorRef.current = editor)}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
