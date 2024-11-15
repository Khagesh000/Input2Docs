import React, { useRef, useState, useEffect, useCallback  } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import html2canvas from 'html2canvas';
import YearPicker from './YearPicker';

import html2pdf from 'html2pdf.js';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';

import '../ResumeTemplate.css'; // Ensure this path is correct
import '../ResumeTemplate-new.css';

// Import images for templates
import img from '../assets/images/ResumeTemplate1.png';
import img1 from '../assets/images/ResumeTemplate2.png';
import img2 from '../assets/images/ResumeTemplate3.png';
import img3 from '../assets/images/ResumeTemplate4.png';
import img4 from '../assets/images/ResumeTemplate5.png';
import img5 from '../assets/images/ResumeTemplate6.png';
import img6 from '../assets/images/ResumeTemplate7.png';
import img7 from '../assets/images/ResumeTemplate8.png';
import img8 from '../assets/images/ResumeTemplate9.png';
import img9 from '../assets/images/ResumeTemplate10.png';
import img10 from '../assets/images/ResumeTemplate11.png';
import img11 from '../assets/images/ResumeTemplate12.png';
import img12 from '../assets/images/ResumeTemplate13.png';
import img13 from '../assets/images/ResumeTemplate14.png';
import img14 from '../assets/images/ResumeTemplate15.png';
import img15 from '../assets/images/ResumeTemplate16.png';
import img16 from '../assets/images/ResumeTemplate17.png';
import img17 from '../assets/images/ResumeTemplate18.png';
import img18 from '../assets/images/ResumeTemplate19.png';
import img19 from '../assets/images/ResumeTemplate20.png';
import img20 from '../assets/images/ResumeTemplate21.png';





import { templateInputFields } from './ResumeTemplateInputFields';
import { generateTemplateContent } from './ResumeGeneralTemplateContent';




export default function ResumeTemplate({ images: imgList }) {
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
    name: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    principal: '',
    image: null,
    school: '',
    address: '',
    phone: '',
    email: '',
    linkedin: '',
    Github: 'GithubName',
    googleCloud: '',
    date: '',
    letterContent: '',
    hobbies: ['cricket'],
    experience: [
        {
            position: 'Senior Project Manager',
            company: 'Infrawide',
            dates: '2006',
            details: ['Led a team of 5 developers'] // This is an array
        }
    ],
    education: [
        {
            level: '', // 'Postgraduate', 'Graduate', 'Class 12th', 'Class 10th'
            course: '',
            college: '',
            board: '',
            medium: '',
            yearOfPassing: '',
            percentage: '',
        }
    ],
    skills: ['Python'],
    tools: ['Jupyter' ],
    languages: ['English'],
    projects: [
        {
            title: 'Project Alpha', // Project title
            details: ['Developed a web application using React'] // This is an array
        }
    ],
    others: ['Prompt design'],
    softSkills: ['Teamwork'],
    certifications: [
        { 
            course: 'Artificial Intelligence', 
            company: 'Yhills',
            details: ['Developed a web application using React'] 
        }
    ]
});

  
  

  const [selectedTemplateType, setSelectedTemplateType] = useState(1); // Add state for template type
  const [networkError, setNetworkError] = useState(false); // State to manage network error

  //Profile Image size adjust
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  
  const images = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
  ];

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
    setContent(generateTemplateContent(formData, selectedTemplateType, croppedImage));
  }, [formData, selectedTemplateType, croppedImage]);

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
    const templateType = (index % 21) + 1; 
    setSelectedTemplateType(templateType);
    setContent(generateTemplateContent(formData, templateType, croppedImage));
    setEditorKey(prevKey => prevKey + 1);

    // Scroll to the input and editor section after selecting a template
    setTimeout(() => {
      const editorSection = document.querySelector('.editor-section');
      if (editorSection) {
        window.scrollTo({
          top: editorSection.offsetTop,
          behavior: 'smooth',
        });
      } else {
        console.warn('Editor section not found'); // Optional: log a warning if the section is missing
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
  };

  //skill Feature
  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ''],
    });
  };

  const handleRemoveSkill = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  const handleSkillChange = (index, value) => {
    const newSkills = formData.skills.map((skill, i) =>
      i === index ? value : skill
    );
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  //Experience section

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience, 
        { position: '', company: '', dates: '', details: [] } // Initialize details as an array
      ]
    });
  };
  
  
  const handleRemoveExperience = (index) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExperience });
  };
  
  const handleExperienceChange = (index, key, value) => {
    const newExperience = [...formData.experience];
    newExperience[index][key] = value || ''; // Ensure value is not null or undefined
    setFormData({ ...formData, experience: newExperience });
  };

  const handleRemovePoint = (experienceIndex, pointIndex) => {
    const newExperience = [...formData.experience];
    newExperience[experienceIndex].details = newExperience[experienceIndex].details.filter((_, i) => i !== pointIndex);
    setFormData({ ...formData, experience: newExperience });
  };
  
  const handleExperiencePointChange = (experienceIndex, pointIndex, value) => {
    const newExperience = [...formData.experience];
    newExperience[experienceIndex].details[pointIndex] = value || ''; // Ensure value is not null or undefined
    setFormData({ ...formData, experience: newExperience });
  };
  

  const handleAddPoint = (experienceIndex) => {
    const newExperience = [...formData.experience];
    newExperience[experienceIndex].details.push(''); // Add an empty string for the new point
    setFormData({ ...formData, experience: newExperience });
  };
  

  //Education Feature
  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { degree: '', institution: '', dates: '', details: '' }]
    });
  };

  const handleRemoveEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };
  
  const handleEducationChange = (index, key, value) => {
    const newEducation = [...formData.education];
    newEducation[index][key] = value || ''; // Ensure value is not null or undefined
    setFormData({ ...formData, education: newEducation });
  };

  //Projects Feature 

  const handleAddProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: '', details: [] }]
    });
  };
  
  const handleRemoveProject = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
  };
  
  const handleProjectChange = (index, key, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][key] = value || ''; // Ensure value is not null or undefined
    setFormData({ ...formData, projects: newProjects });
  };
  
  const handleAddProjectPoint = (index) => {
    const newProjects = [...formData.projects];
    newProjects[index].details.push(''); // Add an empty point
    setFormData({ ...formData, projects: newProjects });
  };
  
  const handleRemoveProjectPoint = (projectIndex, pointIndex) => {
    const newProjects = [...formData.projects];
    newProjects[projectIndex].details = newProjects[projectIndex].details.filter((_, i) => i !== pointIndex);
    setFormData({ ...formData, projects: newProjects });
  };
  
  const handleProjectPointChange = (projectIndex, pointIndex, value) => {
    const newProjects = [...formData.projects];
    newProjects[projectIndex].details[pointIndex] = value || ''; // Ensure value is not null or undefined
    setFormData({ ...formData, projects: newProjects });
  };
  
  
  //Handle Language
  const handleAddLanguage = () => {
    setFormData({
        ...formData,
        languages: [...formData.languages, ''] // Add an empty string for the new language
    });
};

const handleRemoveLanguage = (index) => {
    const newLanguages = formData.languages.filter((_, i) => i !== index);
    setFormData({ ...formData, languages: newLanguages });
};

const handleLanguageChange = (index, value) => {
    const newLanguages = [...formData.languages];
    newLanguages[index] = value; // Update the language string directly
    setFormData({ ...formData, languages: newLanguages });
};


  

  //Tools Section 

  const handleAddTool = () => {
    setFormData({
      ...formData,
      tools: [...formData.tools, { name: '', level: '' }]
    });
  };
  
  const handleRemoveTool = (index) => {
    setFormData({
      ...formData,
      tools: formData.tools.filter((_, i) => i !== index)
    });
  };
  
  const handleToolChange = (index, field, value) => {
    const updatedTools = formData.tools.map((tool, i) => 
      i === index ? { ...tool, [field]: value } : tool
    );
    setFormData({ ...formData, tools: updatedTools });
  };
  
  //Others section

  const handleAddOther = () => {
    setFormData({
      ...formData,
      others: [...formData.others, '']
    });
  };
  
  const handleRemoveOther = (index) => {
    setFormData({
      ...formData,
      others: formData.others.filter((_, i) => i !== index)
    });
  };
  
  const handleOtherChange = (index, value) => {
    const updatedOthers = [...formData.others];
    updatedOthers[index] = value;
    setFormData({
      ...formData,
      others: updatedOthers
    });
  };
  
//Softskills section

const handleAddSoftSkill = () => {
  setFormData({
    ...formData,
    softSkills: [...formData.softSkills, ''] // Add a new empty string for a new skill
  });
};

const handleRemoveSoftSkill = (index) => {
  setFormData({
    ...formData,
    softSkills: formData.softSkills.filter((_, i) => i !== index) // Remove the skill at the given index
  });
};

const handleSoftSkillChange = (index, value) => {
  const updatedSkills = [...formData.softSkills];
  updatedSkills[index] = value; // Update the specific skill
  setFormData({
    ...formData,
    softSkills: updatedSkills
  });
};


//Certifications section

const handleAddCertification = () => {
  setFormData({
    ...formData,
    certifications: [...formData.certifications, { course: '', company: '', details: [] }]
  });
};

// Function to remove a certification
const handleRemoveCertification = (index) => {
  setFormData({
    ...formData,
    certifications: formData.certifications.filter((_, i) => i !== index)
  });
};

// Function to handle changes in certification fields
const handleCertificationChange = (index, field, value) => {
  const updatedCertifications = formData.certifications.map((cert, i) =>
    i === index ? { ...cert, [field]: value } : cert
  );
  setFormData({
    ...formData,
    certifications: updatedCertifications
  });
};


// Function to handle adding a detail point to a certification
const handleAddCertificationPoint = (index) => {
  const updatedCertifications = [...formData.certifications];
  updatedCertifications[index].details.push(''); // Add an empty string for the new point
  setFormData({ ...formData, certifications: updatedCertifications });
};

// Function to handle changes in certification detail points
const handleCertificationPointChange = (certIndex, pointIndex, value) => {
  const updatedCertifications = formData.certifications.map((cert, i) => {
    if (i === certIndex) {
      const updatedDetails = cert.details.map((point, j) => (j === pointIndex ? value : point));
      return { ...cert, details: updatedDetails };
    }
    return cert;
  });
  setFormData({ ...formData, certifications: updatedCertifications });
};

// Function to remove a specific detail point
const handleRemoveCertificationPoint = (certIndex, pointIndex) => {
  const updatedCertifications = formData.certifications.map((cert, i) => {
    if (i === certIndex) {
      return { ...cert, details: cert.details.filter((_, j) => j !== pointIndex) };
    }
    return cert;
  });
  setFormData({ ...formData, certifications: updatedCertifications });
};


// Existing handleImageUpload function
// Inside your ResumeTemplate component

const handleImageUpload = (e) => {
  const file = e.target.files[0]; // Get the first file
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageFile(reader.result); // Set the image URL for cropping
      setFormData((prevData) => ({
        ...prevData,
        image: file, // Update the image in the state
      }));
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  } else {
    console.warn("No file selected.");
  }
};



// Handle cropping completion
const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  setCroppedAreaPixels(croppedAreaPixels);
}, []);

// Handle image cropping
const handleCropImage = async () => {
  try {
    if (!imageFile || !croppedAreaPixels) {
      console.warn("No image file or cropped area pixels defined.");
      return;
    }

    const croppedImageUrl = await getCroppedImg(imageFile, croppedAreaPixels);
    setCroppedImage(croppedImageUrl); // Set the cropped image URL
    setFormData((prevData) => ({
      ...prevData,
      image: croppedImageUrl, // Update the formData with the cropped image URL
    }));

    // Ensure that the content updates with the new image
    setContent(generateTemplateContent({ ...formData, image: croppedImageUrl }, selectedTemplateType));
  } catch (error) {
    console.error("Error during image cropping:", error);
  }
};




//Hobbies Section

// Function to handle hobbies changes
const handleHobbyChange = (index, value) => {
  const newHobbies = [...formData.hobbies];
  newHobbies[index] = value;
  setFormData({ ...formData, hobbies: newHobbies });
};

// Function to add a new hobby
const handleAddHobby = () => {
  setFormData({ ...formData, hobbies: [...formData.hobbies, ''] });
};

// Function to remove a hobby
const handleRemoveHobby = (index) => {
  const newHobbies = formData.hobbies.filter((_, i) => i !== index);
  setFormData({ ...formData, hobbies: newHobbies });
};



const handleDownloadPNG = () => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  // Set up basic styling to control appearance and A4 dimensions
  tempDiv.style.fontFamily = 'Arial, sans-serif';
  tempDiv.style.color = '#000';
  tempDiv.style.backgroundColor = '#fff';
  tempDiv.style.width = '210mm'; // Set width for A4 page
  tempDiv.style.height = '310mm'; // Set height for A4 page
  tempDiv.style.padding = '10px';
  tempDiv.style.boxSizing = 'border-box';

  // Temporarily append to body to calculate dimensions
  document.body.appendChild(tempDiv);

  // Use html2canvas to capture the content as a scaled PNG
  html2canvas(tempDiv, {
    scale: 3, // High-quality scale
    useCORS: true,
    allowTaint: true,
    width: tempDiv.offsetWidth,
    height: tempDiv.offsetHeight,
    windowWidth: tempDiv.scrollWidth,
    windowHeight: tempDiv.scrollHeight
  }).then((canvas) => {
    // Create a download link for the PNG file
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png', 1.0); // Generate PNG data URL
    link.download = 'ResumeTemplate1.png'; // Set the file name
    link.click(); // Trigger the download

    // Clean up by removing the temporary div from the DOM
    document.body.removeChild(tempDiv);
  }).catch(error => {
    console.error("Error capturing content as PNG:", error);
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
    pdf.save('ResumeTemplate.pdf'); // Save the PDF file
  }).finally(() => {
    document.body.removeChild(tempDiv); // Clean up by removing the temporary div
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
                    style={{
                      backgroundColor: '#ff6600',
                      marginBottom: '15%',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease, transform 0.2s ease',
                      fontWeight: 'bold'
                    }}
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
              <button
                className="btn btn-secondary show-more animated-btn"
                onClick={handleShowMore}
                disabled={loading}
                style={{
                  backgroundColor: '#ff6600',
                  color: 'white',
                  padding: '12px 24px',
                  fontWeight: 'bold',
                  borderRadius: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                }}
              >
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
       <div className='m-2 resume-input'>
        <div className="form-group row">
          {templateInputFields[selectedTemplateType].map((field, index) => (
            <div key={index} className="form-group col-md-6">
              <label>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  className="form-control template-textarea"
                  name={field.name}
                  rows="4"
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
          
           


{(selectedTemplateType === 2 || selectedTemplateType === 7 || selectedTemplateType === 10 || selectedTemplateType === 14 ||
  selectedTemplateType === 15
 )&& (
  <>
    {/* Profile Image Upload */}
    <div className="form-group">
            <label>Upload Profile Image</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleImageUpload}
            />
          </div>

          {/* Image Cropper */}
          {imageFile && (
            <div style={{ position: 'relative', height: '300px' }}>
              <Cropper
                image={imageFile}
                crop={crop}
                zoom={zoom}
                aspect={1} // Circular crop
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={handleCropComplete}
              />
            </div>
          )}

          {/* Cropped Image Preview */}
          {croppedImage && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #1049b4',
                  display: 'inline-block',
                }}
              >
                <img
                  src={croppedImage}
                  alt="Profile Preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              </div>
            </div>
          )}

          <button onClick={handleCropImage} className='btn'>Crop Image</button>

          <hr className="custom-line" />
        </>
      )}


 



{/* Experience Section */}
<div className="form-group">
  <label>Experience/Internship</label>
  {formData.experience.map((exp, index) => (
    <div key={index} className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Position"
        value={exp.position}
        onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Company"
        value={exp.company}
        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
      />

      {/* Points for Experience */}
      <label>Details (Point by Point)</label>
      {exp.details.map((point, pointIndex) => (
        <div key={pointIndex} className="form-group">
          <textarea
            className="form-control"
            placeholder="Detail Point"
            value={point}
            onChange={(e) => handleExperiencePointChange(index, pointIndex, e.target.value)}
            rows={3} // Controls the initial height of the textarea
            style={{ resize: 'vertical', width: '100%' }} // Allows height to be adjustable, but width fixed
          />
          <button
            type="button"
            className="btn btn-danger icon-button mt-2" // Add margin for spacing
            onClick={() => handleRemovePoint(index, pointIndex)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      ))}
      
      {/* Add Point Button */}
      <button
        type="button"
        className="btn btn-secondary icon-button mt-2"
        onClick={() => handleAddPoint(index)}
      >
        <i className="fas fa-plus"></i> Add Point
      </button>
      
      {/* YearPicker below points */}
      <label>Year</label>
      <YearPicker
        selectedYear={exp.dates}
        onChange={(year) => handleExperienceChange(index, 'dates', year)}
        placeholder="Select Year"
        className="form-control mt-2" // Add margin for spacing
        style={{ width: '100%' }} // Ensures full width
      />
      
      <button
        type="button"
        className="btn btn-danger icon-button"
        onClick={() => handleRemoveExperience(index)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  ))}

  {/* Add Experience Button */}
  <button
    type="button"
    className="btn btn-primary icon-button"
    onClick={handleAddExperience}
  >
    <i className="fas fa-plus"></i> Add Experience
  </button>
</div>
<hr className='custom-line'></hr>






{/* Education Section */}
<div className="form-group">
  <label>Education</label>
  {formData.education.map((edu, index) => (
    <div key={index} className="form-group" style={{ marginBottom: '10px' }}>
      {/* Education Level Selection */}
      <select
        className="form-control"
        value={edu.level}
        onChange={(e) => handleEducationChange(index, 'level', e.target.value)}
      >
        <option value="">Select Education Level</option>
        <option value="Postgraduate">Postgraduate</option>
        <option value="Graduate">Graduate</option>
        <option value="Class 12th">Class 12th</option>
        <option value="Class 10th">Class 10th</option>
      </select>

      {/* Conditionally Render Fields Based on Level */}
      {edu.level === 'Graduate' || edu.level === 'Postgraduate' ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>Course:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Course"
              value={edu.course}
              onChange={(e) => handleEducationChange(index, 'course', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>College:</label>
            <input
              type="text"
              className="form-control"
              placeholder="College"
              value={edu.college}
              onChange={(e) => handleEducationChange(index, 'college', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>Start Year:</label>
            <YearPicker
              selectedYear={edu.startYear}
              onChange={(year) => handleEducationChange(index, 'startYear', year)}
              placeholder="Start Year"
              className="form-control"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>End Year:</label>
            <YearPicker
              selectedYear={edu.endYear}
              onChange={(year) => handleEducationChange(index, 'endYear', year)}
              placeholder="End Year"
              className="form-control"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>Percentage:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Percentage"
              value={edu.percentage}
              onChange={(e) => handleEducationChange(index, 'percentage', e.target.value)}
            />
          </div>
        </>
      ) : edu.level === 'Class 12th' ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>College:</label>
            <input
              type="text"
              className="form-control"
              placeholder="College"
              value={edu.college}
              onChange={(e) => handleEducationChange(index, 'college', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>Medium:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Medium"
              value={edu.medium}
              onChange={(e) => handleEducationChange(index, 'medium', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>Start Year:</label>
            <YearPicker
              selectedYear={edu.startYear}
              onChange={(year) => handleEducationChange(index, 'startYear', year)}
              placeholder="Start Year"
              className="form-control"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>End Year:</label>
            <YearPicker
              selectedYear={edu.endYear}
              onChange={(year) => handleEducationChange(index, 'endYear', year)}
              placeholder="End Year"
              className="form-control"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>Percentage:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Percentage"
              value={edu.percentage}
              onChange={(e) => handleEducationChange(index, 'percentage', e.target.value)}
            />
          </div>
        </>
      ) : edu.level === 'Class 10th' ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>School:</label>
            <input
              type="text"
              className="form-control"
              placeholder="School Name"
              value={edu.schoolName}
              onChange={(e) => handleEducationChange(index, 'schoolName', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>Medium:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Medium"
              value={edu.medium}
              onChange={(e) => handleEducationChange(index, 'medium', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>End Year:</label>
            <YearPicker
              selectedYear={edu.endYear}
              onChange={(year) => handleEducationChange(index, 'endYear', year)}
              placeholder="End Year"
              className="form-control"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '100px' }}>Percentage:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Percentage"
              value={edu.percentage}
              onChange={(e) => handleEducationChange(index, 'percentage', e.target.value)}
            />
          </div>
        </>
      ) : null}

      {/* Remove Button */}
      <button
        type="button"
        className="btn btn-danger icon-button"
        onClick={() => handleRemoveEducation(index)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  ))}

  {/* Add Education Button */}
  <button
    type="button"
    className="btn btn-primary icon-button"
    onClick={handleAddEducation}
  >
    <i className="fas fa-plus"></i> Add Education
  </button>
</div>
<hr className='custom-line'></hr>


 {/* Skills Section */}
 <div className="form-group">
  <label>Skills</label>
  {formData.skills.map((skill, index) => (
    <div key={index} className="form-group row">
      <div className="col-md-10">
        <input
          type="text"
          className="form-control"
          value={skill || ''}
          onChange={(e) => handleSkillChange(index, e.target.value)}
        />
      </div>
      <div className="col-md-2 d-flex align-items-center">
        <button
          type="button"
          className="btn icon-button btn-icon"
          onClick={() => handleRemoveSkill(index)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  ))}
  <div className="form-group row">
    <div className="col-md-12">
      <button
        type="button"
        className="btn icon-button"
        onClick={handleAddSkill}
      >
        <i className="fas fa-plus"></i>Add Skills
      </button>
    </div>
  </div>
</div>
<hr className='custom-line'></hr> 


{/* Projects Section */}
{(selectedTemplateType === 1 || selectedTemplateType === 4 || selectedTemplateType === 5 || selectedTemplateType === 6 || selectedTemplateType === 7 || selectedTemplateType === 8 || selectedTemplateType === 9 || selectedTemplateType === 10 || 
  selectedTemplateType === 11 || selectedTemplateType === 13 || selectedTemplateType === 14 || selectedTemplateType === 15 || selectedTemplateType === 16 || selectedTemplateType === 17 || selectedTemplateType === 18 || selectedTemplateType === 20
 )&& (
  <>
<div className="form-group">
  <label>Projects</label>
  {formData.projects.map((project, index) => (
    <div key={index} className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Project Title"
        value={project.title}
        onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
      />
      
      {/* Points for Project Details */}
      <label>Details (Point by Point)</label>
      {project.details.map((point, pointIndex) => (
        <div key={pointIndex} className="form-group">
          <textarea
            className="form-control"
            placeholder="Detail Point"
            value={point}
            onChange={(e) => handleProjectPointChange(index, pointIndex, e.target.value)}
            rows={3} // Controls the initial height of the textarea
            style={{ resize: 'vertical', width: '100%' }} // Allows height to be adjustable, but width fixed
          />
          <button
            type="button"
            className="btn btn-danger icon-button mt-2"
            onClick={() => handleRemoveProjectPoint(index, pointIndex)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      ))}

      {/* Add Point Button */}
      <button
        type="button"
        className="btn btn-secondary icon-button mt-2"
        onClick={() => handleAddProjectPoint(index)}
      >
        <i className="fas fa-plus"></i> Add Point
      </button>

      <button
        type="button"
        className="btn btn-danger icon-button mt-2"
        onClick={() => handleRemoveProject(index)}
      >
        <i className="fas fa-trash-alt"></i> Remove Project
      </button>
    </div>
  ))}

  {/* Add Project Button */}
  <button
    type="button"
    className="btn btn-primary icon-button"
    onClick={handleAddProject}
  >
    <i className="fas fa-plus"></i> Add Project
  </button>
</div>
<hr className='custom-line'></hr>
</>
)}



{/* Tools Section */}
{(selectedTemplateType === 1 || selectedTemplateType === 2 || selectedTemplateType === 3 || selectedTemplateType === 4 || selectedTemplateType === 5 || selectedTemplateType === 6 || selectedTemplateType === 8 || selectedTemplateType === 9 || selectedTemplateType === 10 ||
  selectedTemplateType === 11 || selectedTemplateType === 13 || selectedTemplateType === 16 || selectedTemplateType === 17 || selectedTemplateType === 18 || selectedTemplateType === 19 || selectedTemplateType === 20
)&& (
  <>
<div className="form-group">
  <label>Tools</label>
  {formData.tools.map((tool, index) => (
    <div key={index} className="form-group row">
      <div className="col-md-10">
        <input
          type="text"
          className="form-control"
          value={tool.name || ''} // Ensure that tool.name is properly initialized
          placeholder="Tool name (e.g., Jupyter)"
          onChange={(e) => handleToolChange(index, 'name', e.target.value)}
        />
      </div>
      <div className="col-md-2 d-flex align-items-center">
        <button
          type="button"
          className="btn icon-button btn-icon"
          onClick={() => handleRemoveTool(index)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  ))}
  <div className="form-group row">
    <div className="col-md-12">
      <button
        type="button"
        className="btn icon-button"
        onClick={handleAddTool}
      >
        <i className="fas fa-plus"></i>Add Tools
      </button>
    </div>
  </div>
</div>
<hr className='custom-line'></hr>
</>
)}


{/* Others Section */}
{(selectedTemplateType === 1 || selectedTemplateType === 2 || selectedTemplateType === 3 || selectedTemplateType === 4 || selectedTemplateType === 5 || selectedTemplateType === 6 || selectedTemplateType === 8 || selectedTemplateType === 9 || selectedTemplateType === 10 ||
  selectedTemplateType === 11 || selectedTemplateType === 13 || selectedTemplateType === 16 || selectedTemplateType === 17 || selectedTemplateType === 18 || selectedTemplateType === 19 || selectedTemplateType === 20
)&& (
  <>
<div className="form-group">
  <label>Others</label>
  {formData.others.map((other, index) => (
    <div key={index} className="form-group row">
      <div className="col-md-10">
        <input
          type="text"
          className="form-control"
          value={other || ''}
          onChange={(e) => handleOtherChange(index, e.target.value)}
          placeholder="Enter other detail"
        />
      </div>
      <div className="col-md-2 d-flex align-items-center">
        <button
          type="button"
          className="btn icon-button btn-icon"
          onClick={() => handleRemoveOther(index)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  ))}
  <div className="form-group row">
    <div className="col-md-12">
      <button
        type="button"
        className="btn icon-button"
        onClick={handleAddOther}
      >
        <i className="fas fa-plus"></i>Add Others
      </button>
    </div>
  </div>
</div>
<hr className='custom-line'></hr>
</>
)}


{/* Soft Skills Section */}
{(selectedTemplateType === 1 || selectedTemplateType === 2 || selectedTemplateType === 3 || selectedTemplateType === 4 || selectedTemplateType === 5 || selectedTemplateType === 6 || selectedTemplateType === 8 || selectedTemplateType === 9 || selectedTemplateType === 10 ||
  selectedTemplateType === 11 || selectedTemplateType === 13 || selectedTemplateType === 16 || selectedTemplateType === 18 || selectedTemplateType === 19 || selectedTemplateType === 20
)&& (
  <>
<div className="form-group">
  <label>Soft Skills</label>
  {formData.softSkills.map((skill, index) => (
    <div key={index} className="form-group row">
      <div className="col-md-10">
        <input
          type="text"
          className="form-control"
          value={skill || ''}
          onChange={(e) => handleSoftSkillChange(index, e.target.value)}
          placeholder="Enter soft skill"
        />
      </div>
      <div className="col-md-2 d-flex align-items-center">
        <button
          type="button"
          className="btn icon-button btn-icon"
          onClick={() => handleRemoveSoftSkill(index)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  ))}
  <div className="form-group row">
    <div className="col-md-12">
      <button
        type="button"
        className="btn icon-button"
        onClick={handleAddSoftSkill}
      >
        <i className="fas fa-plus"></i>Add Soft Skill
      </button>
    </div>
  </div>
</div>
<hr className='custom-line'></hr>
</>
)}


{/* Certifications Section */}
{(selectedTemplateType === 1 || selectedTemplateType === 4 || selectedTemplateType === 5 || selectedTemplateType === 6 || selectedTemplateType === 7 || selectedTemplateType === 8 || selectedTemplateType === 9 || selectedTemplateType === 10 || 
  selectedTemplateType === 11 || selectedTemplateType === 12 || selectedTemplateType === 13 || selectedTemplateType === 14 || selectedTemplateType === 15 || selectedTemplateType === 16 || selectedTemplateType === 17 || selectedTemplateType === 18 || selectedTemplateType === 20
) && (
  <>
    <div className="form-group">
      <label>Certifications</label>
      {formData.certifications.map((certification, index) => (
        <div key={index} className="form-group">
          <div className="row">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                value={certification.course || ''}
                placeholder="Certificate Course"
                onChange={(e) => handleCertificationChange(index, 'course', e.target.value)}
              />
            </div>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                value={certification.company || ''}
                placeholder="Company Name"
                onChange={(e) => handleCertificationChange(index, 'company', e.target.value)}
              />
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <button
                type="button"
                className="btn icon-button btn-icon"
                onClick={() => handleRemoveCertification(index)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          {/* Only show details points input field for templateType 4 */}
          {(selectedTemplateType === 4 || selectedTemplateType === 5 || selectedTemplateType === 7 || selectedTemplateType === 15 || selectedTemplateType === 8 || selectedTemplateType === 9 || selectedTemplateType === 10 ||
            selectedTemplateType === 12 || selectedTemplateType === 14 || selectedTemplateType === 15 || selectedTemplateType === 18 || selectedImageRef === 20
          )&& (
            <>
              <label>Details (Point by Point)</label>
              {certification.details.map((point, pointIndex) => (
                <div key={pointIndex} className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Detail Point"
                    value={point}
                    onChange={(e) => handleCertificationPointChange(index, pointIndex, e.target.value)}
                    rows={3} // Controls the initial height of the textarea
                    style={{ resize: 'vertical', width: '100%' }} // Allows height to be adjustable, but width fixed
                  />
                  <button
                    type="button"
                    className="btn btn-danger icon-button mt-2"
                    onClick={() => handleRemoveCertificationPoint(index, pointIndex)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))}

              {/* Add Certification Point Button */}
              <button
                type="button"
                className="btn btn-secondary icon-button mt-2"
                onClick={() => handleAddCertificationPoint(index)}
              >
                <i className="fas fa-plus"></i> Add Certification Point
              </button>
            </>
          )}
        </div>
      ))}

      {/* Add Certification Button */}
      <div className="form-group row">
        <div className="col-md-12">
          <button
            type="button"
            className="btn icon-button"
            onClick={handleAddCertification}
          >
            <i className="fas fa-plus"></i> Add Certification
          </button>
        </div>
      </div>
    </div>
    <hr className="custom-line" />
  </>
)}



{/* Conditionally render the Hobbies section only for Template 1 */}
{(selectedTemplateType === 2 || selectedTemplateType === 3 || selectedTemplateType === 5 || selectedTemplateType === 10 || selectedTemplateType === 18 || 
  selectedTemplateType === 19 || selectedTemplateType === 13 || selectedTemplateType === 18 ||  selectedTemplateType === 20
)&& (
  <>
          <div className="form-group">
            <label>Hobbies</label>
            {formData.hobbies.map((hobby, index) => (
              <div key={index} className="form-group row">
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    value={hobby || ''}
                    onChange={(e) => handleHobbyChange(index, e.target.value)}
                    placeholder="Enter hobby"
                  />
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <button
                    type="button"
                    className="btn icon-button btn-icon"
                    onClick={() => handleRemoveHobby(index)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            ))}
            <div className="form-group row">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn icon-button"
                  onClick={handleAddHobby}
                >
                  <i className="fas fa-plus"></i>Add Hobby
                </button>
              </div>
            </div>
            
          </div>
         <hr className='custom-line'></hr>
         </>
        )}





{/* Handle Languages */}
{(selectedTemplateType === 1 || selectedTemplateType === 2 || selectedTemplateType ===3 || selectedTemplateType ===4 || selectedTemplateType === 5 || selectedTemplateType === 7 || selectedTemplateType === 6 || selectedTemplateType === 8 || selectedTemplateType === 9 || selectedTemplateType === 10 || 
  selectedTemplateType === 11 || selectedTemplateType === 13  || selectedTemplateType === 16 || selectedTemplateType === 18 || selectedTemplateType === 19 || selectedTemplateType === 20
)&& (
  <>
<div className="form-group">
    <label>Languages</label>
    {formData.languages.map((lang, index) => (
        <div key={index} className="form-group mb-2">
            <input
                type="text"
                className="form-control mb-1"
                placeholder="Language"
                value={lang} // Directly use the string for value
                onChange={(e) => handleLanguageChange(index, e.target.value)} // Adjust to handle only the language
            />
            <button
                type="button"
                className="btn btn-danger icon-button"
                onClick={() => handleRemoveLanguage(index)}
            >
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    ))}
    <button
        type="button"
        className="btn btn-primary icon-button mt-3"
        onClick={handleAddLanguage}
    >
        <i className="fas fa-plus icon-button"></i> Add Language
    </button>
</div>
</>
)}

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
        'undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat  | help',
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

<div>
  <button className="btn btn-secondary m-2 mb-2 down-temp" onClick={handleDownloadPNG}>
    Download Template as PNG
  </button>
  <button className="btn btn-secondary mb-2 down-temp" onClick={handleDownloadPDF}>
    Download Template as PDF
  </button>
  

  
  {/* Alert message for large content */}
  <div className="alert-container">
  <div className="alert-message">
    Content is too large to download as PNG. Please download it as a PDF.
  </div>
</div>


        </div>
        </div>
      )}
      </section>
    </div>
    
  );
}