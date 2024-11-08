import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import html2canvas from 'html2canvas';
import Select from 'react-select';
import DatePicker from 'react-datepicker'; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import the necessary CSS for styling the calendar

import html2pdf from 'html2pdf.js';


import '../Coverlettertemplate-new.css';
import '../CoverLetterTemplates.css'; // Ensure this path is correct

// Import images for templates
import img from '../assets/images/cover_letter.png';
import img1 from '../assets/images/cover_letter1.png';
import img2 from '../assets/images/resumetemplates.png';
import img3 from '../assets/images/cover_letter1.png';
import img4 from '../assets/images/cover_letter.png';
import img5 from '../assets/images/cover_letter1.png';
import img6 from '../assets/images/cover_letter.png';
import img7 from '../assets/images/cover_letter1.png';

import { templateInputFields } from './CoverLetterTemplateInputfields';
import { generateTemplateContent } from './CoverLetterGeneralTemplates';

export default function CoverLetterTemplates({ images: imgList }) {
  const containerRef = useRef(null);
  const selectedImageRef = useRef(null);
  const editorRef = useRef(null); // Define the editorRef
  const [cardWidth, setCardWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleRows, setVisibleRows] = useState(1);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [editorKey, setEditorKey] = useState(0); // Add a key for editor
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    hiringManagerName: '',
    position: '',
    introduction: '',
    experience: '',
    skills: [],
    strengths: [],
    date: '',
    gap: "",
    desiredRole: "",
    previousJobTitle: "",
    workingStyle: "",
    closing: '',
    contactInfo: '',
  });

  const [selectedTemplateType, setSelectedTemplateType] = useState(1); // Add state for template type
  const [networkError, setNetworkError] = useState(false); // State to manage network error

  const handleMultiChange = (selectedOptions, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: selectedOptions ? selectedOptions.map(option => option.value) : [],
    });
  };

  const handleSingleChange = (selectedOption, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: selectedOption ? selectedOption.value : "",
    });
  };



  const skillOptions = [
    { value: "Programming", label: "Programming" },
    { value: "Web Analytics", label: "Web Analytics" },
    { value: "Data Analysis", label: "Data Analysis" },
    { value: "Technical Analysis", label: "Technical Analysis" },
    { value: "Script Development", label: "Script Development" },
    { value: "Technical Support", label: "Technical Support" },
    { value: "Data Collection", label: "Data Collection" },
    { value: "Software Testing", label: "Software Testing" },
    { value: "Layout Design", label: "Layout Design" },
    { value: "Web Development", label: "Web Development" },
    { value: "Quality Control", label: "Quality Control" },
    { value: "Network Administration", label: "Network Administration" },
    { value: "Project Management", label: "Project Management" },
    { value: "Business Analysis", label: "Business Analysis" },
    { value: "Technical Writing", label: "Technical Writing" },
  ];

  const strengthOptions = [
    { value: "Collaboration", label: "Collaboration" },
    { value: "Critical Thinking", label: "Critical Thinking" },
    { value: "Decision Making", label: "Decision Making" },
    { value: "Problem Solving", label: "Problem Solving" },
    { value: "Creativity", label: "Creativity" },
    // Add more strengths options as needed
  ];
  
  const experienceOptions = [
    { value: "Less than 1 year", label: "Less than 1 year" },
    { value: "1-3 years", label: "1-3 years" },
    { value: "3-5 years", label: "3-5 years" },
    { value: "5-10 years", label: "5-10 years" },
    { value: "10+ years", label: "10+ years" },
  ];
  
  const gapOptions = [
    { value: "No Gap", label: "No Gap" },
    { value: "Less than 6 months", label: "Less than 6 months" },
    { value: "6 months - 1 year", label: "6 months - 1 year" },
    { value: "1-2 years", label: "1-2 years" },
    { value: "More than 2 years", label: "More than 2 years" },
  ];

  const workingStyleOptions = [
    { value: "Collaborative", label: "Collaborative" },
    { value: "Independent", label: "Independent" },
    { value: "Team-oriented", label: "Team-oriented" },
    { value: "Flexible", label: "Flexible" },
    { value: "Structured", label: "Structured" },
    { value: "Creative", label: "Creative" },
    { value: "Analytical", label: "Analytical" },
    { value: "Detail-oriented", label: "Detail-oriented" },
  ];
  

  
  const handleSkillsChange = (selectedOptions) => {
    setFormData({
      ...formData,
      skills: selectedOptions ? selectedOptions.map(option => option.value) : [],
    });
  };

  // Custom styles for react-select component
  const customStyles = {
    
    option: (provided, state) => ({
      ...provided,
      color: '#333', // Dark color for better readability
      backgroundColor: state.isSelected ? '#dce8f1' : 'white', // Light blue background when selected
      border: '1px solid #ccc', // Subtle border around each option
      borderRadius: '8px', // Rounded corners for options
      padding: '10px 15px',
      margin: '5px', // Space between options
      width: '100%', // Make each option 1/3rd of the width of the container (three items per row)
      boxSizing: 'border-box', // Ensure padding and borders are included in the width
      ':hover': {
        backgroundColor: '#b8d4f2', // Light blue on hover
        cursor: 'pointer',
        transform: 'scale(1.05)', // Slightly increase size on hover for animation
        transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth background and scale transition
      },
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#333', // Dark color for the selected label
      backgroundColor: '#f1f8ff', // Soft light blue background for multi-value labels
      borderRadius: '4px', // Rounded corners
      padding: '5px 10px',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#007bff', // Blue color for remove icon
      ':hover': {
        backgroundColor: '#007bff', // Blue background when hovering over remove icon
        color: 'white', // White text when hovering
        transition: 'background-color 0.3s ease', // Smooth transition on hover
      },
    }),
    container: (provided) => ({
      ...provided,
      width: '100%', // Ensure the container takes full width
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '8px', // Rounded corners for the dropdown menu
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow to make it pop
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333', // Keep the selected value text color consistent
    }),
    control: (provided) => ({
      ...provided,
      padding: '6px', // Adjust padding as needed
      minHeight: '50px', // Increase the height of the control (the input area)
      fontSize: '16px', // Increase font size
      border: '1px solid grey',
    }),
  };

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
    
    // Map index to template type, assuming each index corresponds to a specific template type.
    const templateType = (index % 3) + 1; // Example: Mapping index to template type (1, 2, or 3)
  
    setSelectedTemplateType(templateType);
    setContent(generateTemplateContent(formData, templateType));

    // Force re-render of the editor
    setEditorKey(prevKey => prevKey + 1);

    

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


    // Handle show more images in the second section
    const handleShowMore = () => {
      setLoading(true); // Set loading to true when showing more images
      setTimeout(() => {
        setVisibleRows((prev) => prev + 1); // Show 1 more row of images
        setLoading(false); // Reset loading after adding more images
      }, 500); // Simulate loading time, adjust as necessary
    };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    if (value) {
      const filteredSuggestions = workingStyleOptions.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };





const handleDownloadPNG = () => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  // Apply global styles to ensure consistent appearance
  tempDiv.style.fontFamily = 'Arial, sans-serif';
  tempDiv.style.color = '#000'; // Text color
  // Background color
  tempDiv.style.width = '210mm';
  tempDiv.style.height = '296mm';


  // Apply specific styles to all child elements
  tempDiv.querySelectorAll('*').forEach(element => {
    element.style.color = '#000'; // Text color
    // Background color
   // Ensure consistent font size
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
  tempDiv.style.boxSizing = 'border-box';
  tempDiv.style.margin = 0;  // Ensuring no margin at the top or around content
  tempDiv.style.padding = 0; // Ensuring no padding around content

  // Add styles to avoid page breaks inside the elements
  tempDiv.style.pageBreakInside = 'avoid'; // Prevent content from breaking within an element
  const children = tempDiv.querySelectorAll('*');
  children.forEach((child) => {
    child.style.pageBreakInside = 'avoid'; // Apply this to every child element
  });

  document.body.appendChild(tempDiv);

  // Add TinyMCE styles if necessary
  const styleSheet = document.createElement('link');
  styleSheet.rel = 'stylesheet';
  styleSheet.href = '/styles/tinymce-custom-styles.css';  // Ensure the path is correct for your CSS
  document.head.appendChild(styleSheet);

  // Set up options for html2pdf
  const options = {
    margin: [10, 10, 10, 10], // Margins in mm
    filename: 'ResumeTemplate.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3, useCORS: true, allowTaint: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: 'css' } // Let html2pdf manage page breaks automatically based on CSS
  };

  // Let html2pdf handle the page splitting automatically
  html2pdf().from(tempDiv).set(options).toPdf().get('pdf').then((pdf) => {
    pdf.save('CoverLetterTemplate.pdf'); // Save the PDF file
  }).finally(() => {
    document.body.removeChild(tempDiv); // Clean up by removing the temporary div
  });
};


  return (
    
    <div className="bg-black cov-lettemp">
    <div className="container cov-temp template-container bg-black mb-xxl-5">
      <h2 className="text-center heading-title resume-title">Choose a <span>CV Templates</span></h2>
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




   {/* Second Template Section */}
   <div className="resume-template-section">
        <div className="container template-container mb-5">
          <h2 className="text-center heading-title resume-title">
            Explore More <span>Templates</span>
          </h2>
          <div className="template-wrapper">
           
            <div className="row template-gallery">
              {images.slice(0, visibleRows * 3).map((image, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 template-column" key={index}>
                  <div className="template-card second-template-card">
                    <div className="template-image-container">
                      <img
                        src={image}
                        alt={`Resume Template ${index + 1}`}
                        className={`img-fluid template-image second-temp-img ${selectedImage === image ? 'selected' : ''}`}
                      />
                      <div className="template-overlay second-temp">
                        <button className="custom-use-template-button" onClick={() => handleUseTemplate(index)}>
                          Use Template
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {visibleRows * 3 < images.length && (
              <div className="text-center mt-3">
                <button className="btn btn-secondary show-more" onClick={handleShowMore}  disabled={loading}>
                  {loading ? 'Loading...' : 'Show More'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
     
      <section className="m-0 editor-section">
      {selectedImage && (
    <div className="selected-image-wrapper" ref={editorRef}>
      <div className="row">
        {/* Resume Input Fields on the Left Side */}
        <div className="col-lg-8 resume-input">
          <div className="form-group row">
            {/* Render template input fields */}
            {templateInputFields[selectedTemplateType].map((field, index) => (
              <div key={index} className="form-group col-md-6">
                <label>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    className="form-control template-textarea"
                    name={field.name}
                    rows="6"
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                  ></textarea>
                ) :
                 field.type === 'date' ? (
                  <DatePicker
                    selected={formData[field.name] ? new Date(formData[field.name]) : null}
                    onChange={(date) => handleInputChange({ target: { name: field.name, value: date } })}
                    className="form-control"
                    placeholderText="Select Date"
                    dateFormat="MMMM d, yyyy"
                  />
                ) : (
                  <input
                    type={field.type}
                    className="form-control"
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}



            {/* Skills Section */}
            <div className="col-12 form-group">
                  <label>Skills</label>
                  <Select
                    isMulti
                    options={skillOptions}
                    value={skillOptions.filter(option =>
                      formData.skills.includes(option.value)
                    )}
                    onChange={handleSkillsChange}
                    styles={customStyles}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select your skills"
                  />
                </div>

                 {/* Top Strengths (Multi-Select) */}
      <div className="col-12 mt-3 mb-2 form-group">
        <label>Top Strengths</label>
        <Select
          isMulti
          options={strengthOptions}
          value={strengthOptions.filter(option => formData.strengths.includes(option.value))}
          onChange={(selectedOptions) => handleMultiChange(selectedOptions, "strengths")}
          styles={customStyles}
          placeholder="Select your top strengths"
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

     {/* Years of Experience */}
  <div className="col-12 mt-3 mb-2 form-group">
    <label>Years of Experience</label>
    <Select
      options={experienceOptions}
      value={experienceOptions.find(option => option.value === formData.experience)}
      onChange={(selectedOption) => handleSingleChange(selectedOption, "experience")}
      placeholder="Select years of experience"
      className="basic-single select" 
      styles={customStyles} 
      classNamePrefix="select"
    />
  </div>

  {/* Conditionally render Previous Job Title based on Experience */}
  {formData.experience !== "Less than 1 year" && (
    <div className="col-12 mt-3 mb-2 form-group">
      <label>Previous Job Title</label>
      <input
        type="text"
        className="form-control"
        name="previousJobTitle"
        value={formData.previousJobTitle}
        onChange={handleInputChange}
        placeholder="Enter your previous job title"
      />
    </div>
  )}



      {/* Gaps in Work History */}
      <div className="col-12 mt-3 mb-2 form-group">
        <label>Gaps In Work History</label>
        <Select
          options={gapOptions}
          value={gapOptions.find(option => option.value === formData.gap)}
          onChange={(selectedOption) => handleSingleChange(selectedOption, "gap")}
          styles={customStyles}
          placeholder="Select gap duration"
          classNamePrefix="select"
        />
      </div>

      <div className="form-group">
      <label>Working Style</label>
      <Select
        isMulti
        options={workingStyleOptions}
        value={workingStyleOptions.find(option => option.value === formData.workingStyle)}
        onChange={(selectedOption) => handleSingleChange(selectedOption, "workingStyle")}
        styles={customStyles}
        placeholder="Select your working style"
        classNamePrefix="select"
        className="basic-multi-select"
      />
    </div>

          </div>
        </div>
      

            


      {/* Suggestions content on the right side, visible only on large screens */}
      <div className="resume-suggestions">
      <h1>Cover Letter Writing Tips</h1>
            <p>Crafting an effective cover letter is crucial for making a great first impression. Here are some tips to help you write a compelling cover letter:</p>
            <h5>Cover Letter Writing Tips</h5>
            <ul>
                <li>
                    <strong>1. Address the Hiring Manager by Name:</strong> If possible, find out the name of the person who will read your cover letter and address it directly to them.
                </li>
                <li>
                    <strong>2. Start with a Strong Opening:</strong> Begin with a captivating opening that grabs the reader’s attention. Mention the position you’re applying for and why you’re excited about it.
                </li>
                <li>
                    <strong>3. Showcase Your Skills and Achievements:</strong> Highlight your key skills and achievements that are relevant to the job. Use specific examples to demonstrate how you’ve successfully applied these skills in the past.
                </li>
                <li>
                    <strong>4. Tailor Your Letter to the Job Description:</strong> Customize your cover letter to match the job description. Use keywords and phrases from the job listing to show that you’ve carefully read the requirements.
                </li>
                <li>
                    <strong>5. Explain Why You’re a Good Fit:</strong> Clearly articulate why you’re the right fit for the role. Explain how your background aligns with the company’s needs and how you can contribute to their goals.
                </li>
                <li>
                    <strong>6. Keep It Concise and Focused:</strong> Your cover letter should be no longer than one page. Be concise and focus on the most important aspects of your experience and qualifications.
                </li>
                <li>
                    <strong>7. Show Enthusiasm:</strong> Demonstrate your enthusiasm for the position and the company. Employers appreciate candidates who are genuinely excited about the opportunity.
                </li>
                <li>
                    <strong>8. Proofread Carefully:</strong> Check for spelling and grammatical errors. A well-written and error-free cover letter reflects professionalism and attention to detail.
                </li>
                <li>
                    <strong>9. Include a Strong Closing:</strong> End with a strong closing statement that reiterates your interest in the role and expresses your eagerness to discuss your application in more detail.
                </li>
                <li>
                    <strong>10. Use a Professional Format:</strong> Ensure that your cover letter follows a professional format with consistent font, margins, and spacing. A clean layout enhances readability and presentation.
                </li>
            </ul>
        </div>
        </div>
            
        <div className="editor-container">
  <Editor
    className='key-editor'
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
        'textcolor' // Add textcolor plugin
      ],
      toolbar:
        'undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
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
