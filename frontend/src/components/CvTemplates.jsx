import React, { useRef, useState, useEffect, useCallback  } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import html2canvas from 'html2canvas';
import YearPicker from './YearPicker';
import html2pdf from 'html2pdf.js';

import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';


import '../Coverlettertemplate-new.css';
import '../CoverLetterTemplates.css'; // Ensure this path is correct

// Import images for templates
import img from '../assets/images/cover_letter.png';
import img1 from '../assets/images/cover_letter1.png';
import img2 from '../assets/images/cover_letter1.png';
import img3 from '../assets/images/cover_letter1.png';
import img4 from '../assets/images/cover_letter.png';
import img5 from '../assets/images/cover_letter1.png';
import img6 from '../assets/images/cover_letter.png';
import img7 from '../assets/images/cover_letter1.png';
import img8 from '../assets/images/cover_letter.png';
import img9 from '../assets/images/cover_letter1.png';
import img10 from '../assets/images/cover_letter1.png';
import img11 from '../assets/images/cover_letter.png';
import img12 from '../assets/images/cover_letter1.png';
import img13 from '../assets/images/cover_letter.png';
import img14 from '../assets/images/cover_letter.png';
import img15 from '../assets/images/cover_letter1.png';
import img16 from '../assets/images/cover_letter.png';
import img17 from '../assets/images/cover_letter.png';



import { templateInputFields } from './CvTemplateInputfields';
import { generateTemplateContent } from './CvGeneralTemplate';

export default function CvTemplates({ images: imgList }) {
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
        jobTitle: '',
        organization: '',
        location: '',
        dates: '',
        responsibilities: [],
        projects: [] // Optional field for relevant projects/contributions
      }
    ],
    education: [
        {
          level: '', // 'Postgraduate', 'Graduate', 'Class 12th', 'Class 10th'
          course: '',
          institution: '',
          location: '',
          board: '',
          medium: '',
          startYear: '',
          endYear: '',
          yearOfPassing: '',
          percentage: '',
          thesis: '',
        }
    ],
    publications: [
      {
        title: '',
        authors: '',
        date: '',
        journal: '',
        link: ''
      }
    ],
    skills: ['Python'],
    tools: [ 'Jupyter' ],
    languages: ['English'],
    projects: [
        {
            title: '', description: '', role: '', tools: '', link: '',
        }
    ],
    others: ['Prompt design'],
    softSkills: ['Teamwork'],
    certifications: [
        { 
          name: '',            // Certification Name
          organization: '',    // Issuing Organization
          issuedDate: '',      // Issued Date
          expirationDate: '',
        }
    ],
    awards: [
      {
        title: '',            // Award Title
        body: '',             // Awarding Body
        dateReceived: '',     // Date Received
        description: '',      // Description or Criteria (optional)
      }
    ],
    memberships: [
      {
        organization: '',     // Organization Name
        role: '',              // Membership Role
        dates: '',             // Membership Dates
      }
    ],
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
                  img11, img12, img13, img14, img15, img16, img17
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

  // Effect to update content when formData changes
  useEffect(() => {
    setContent(generateTemplateContent(formData, selectedTemplateType, croppedImage));
  }, [formData, selectedTemplateType, croppedImage]);



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
    const templateType = (index % 18) + 1; // Example: Mapping index to template type (1, 2, or 3)
  
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

//Expereience section

const handleAddExperience = () => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    experience: [
      ...prevFormData.experience,
      {
        jobTitle: '',
        organization: '',
        location: '',
        dates: '',
        responsibilities: [], // Initialize responsibilities as an empty array
        projects: [] // Initialize projects as an empty array (optional field)
      }
    ]
  }));
};


const handleRemoveExperience = (index) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    experience: prevFormData.experience.filter((_, i) => i !== index)
  }));
};

const handleExperienceChange = (index, key, value) => {
  const newExperience = [...formData.experience];
  newExperience[index][key] = value || ''; // Ensure value is not null or undefined
  setFormData({ ...formData, experience: newExperience });
};

const handleAddResponsibility = (experienceIndex) => {
  const newExperience = [...formData.experience];
  newExperience[experienceIndex].responsibilities.push('');
  setFormData({ ...formData, experience: newExperience });
};

const handleResponsibilityChange = (experienceIndex, responsibilityIndex, value) => {
  const newExperience = [...formData.experience];
  newExperience[experienceIndex].responsibilities[responsibilityIndex] = value || '';
  setFormData({ ...formData, experience: newExperience });
};

const handleRemoveResponsibility = (experienceIndex, responsibilityIndex) => {
  const newExperience = [...formData.experience];
  newExperience[experienceIndex].responsibilities = newExperience[experienceIndex].responsibilities.filter((_, i) => i !== responsibilityIndex);
  setFormData({ ...formData, experience: newExperience });
};

const handleExpAddProject = (experienceIndex) => {
  const newExperience = [...formData.experience];
  newExperience[experienceIndex].projects.push('');
  setFormData({ ...formData, experience: newExperience });
};

const handleExpProjectChange = (experienceIndex, projectIndex, value) => {
  const newExperience = [...formData.experience];
  newExperience[experienceIndex].projects[projectIndex] = value || '';
  setFormData({ ...formData, experience: newExperience });
};

const handleExpRemoveProject = (experienceIndex, projectIndex) => {
  const newExperience = [...formData.experience];
  newExperience[experienceIndex].projects = newExperience[experienceIndex].projects.filter((_, i) => i !== projectIndex);
  setFormData({ ...formData, experience: newExperience });
};


 //Education Feature
 const handleAddEducation = () => {
  setFormData({
    ...formData,
    education: [...formData.education, { level: '', // 'Postgraduate', 'Graduate', 'Class 12th', 'Class 10th'
      course: '', institution: '', location: '', board: '', medium: '', startYear: '', endYear: '', yearOfPassing: '', percentage: '', thesis: ''}]
  });
};

// Function to remove an education entry
const handleRemoveEducation = (index) => {
  setFormData((prevFormData) => ({
    ...prevFormData,
    education: prevFormData.education.filter((_, i) => i !== index)
  }));
};

// Function to handle changes in education fields
const handleEducationChange = (index, key, value) => {
  setFormData((prevFormData) => {
    const newEducation = [...prevFormData.education];
    newEducation[index][key] = value || ''; // Ensure value is not null or undefined
    return { ...prevFormData, education: newEducation };
  });
};

//Publications Section

// Function to handle changes in the publication fields
const handlePublicationChange = (index, field, value) => {
  const updatedPublications = [...formData.publications];
  updatedPublications[index][field] = value;
  setFormData({ ...formData, publications: updatedPublications });
};

// Function to add a new publication entry
const handleAddPublication = () => {
  setFormData({
    ...formData,
    publications: [
      ...formData.publications,
      {
        title: '', authors: '', date: '', journal: '', link: ''
      }
    ]
  });
};

// Function to remove a publication entry
const handleRemovePublication = (index) => {
  const updatedPublications = formData.publications.filter((_, i) => i !== index);
  setFormData({ ...formData, publications: updatedPublications });
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

//Projects Feature 

const handleAddProject = () => {
  setFormData({
    ...formData,
    projects: [
      ...formData.projects,
      { title: '', description: '', role: '', tools: '', link: '' }
    ]
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
    certifications: [
      ...formData.certifications,
      {
        name: '',organization: '', issuedDate: '', expirationDate: '',  // Expiration Date
      }
    ]
  });
};

// Function to handle changes in certification fields
const handleCertificationChange = (index, field, value) => {
  const updatedCertifications = formData.certifications.map((cert, i) =>
    i === index ? { ...cert, [field]: value } : cert
  );
  setFormData({ ...formData, certifications: updatedCertifications });
};

// Function to remove a certification
const handleRemoveCertification = (index) => {
  setFormData({
    ...formData,
    certifications: formData.certifications.filter((_, i) => i !== index)
  });
};

//Awards Sectrion
const handleAddAward = () => {
  setFormData({
    ...formData,
    awards: [
      ...formData.awards,
      {
        title: '', body: '', dateReceived: '', description: '',    
      }
    ]
  });
};

// Function to handle changes in award fields
const handleAwardChange = (index, field, value) => {
  const updatedAwards = formData.awards.map((award, i) =>
    i === index ? { ...award, [field]: value } : award
  );
  setFormData({ ...formData, awards: updatedAwards });
};

// Function to remove an award
const handleRemoveAward = (index) => {
  setFormData({
    ...formData,
    awards: formData.awards.filter((_, i) => i !== index)
  });
};

const handleMembershipChange = (index, field, value) => {
  const updatedMemberships = [...formData.memberships];
  updatedMemberships[index][field] = value;
  setFormData({ ...formData, memberships: updatedMemberships });
};

const handleAddMembership = () => {
  setFormData({
    ...formData,
    memberships: [...formData.memberships, { organization: '', role: '', dates: '' }],
  });
};

const handleRemoveMembership = (index) => {
  const updatedMemberships = formData.memberships.filter((_, i) => i !== index);
  setFormData({ ...formData, memberships: updatedMemberships });
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
    pdf.save('CvTemplate.pdf'); // Save the PDF file
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
                <button className="btn btn-secondary show-more" onClick={handleShowMore}  disabled={loading}
                style={{
                  backgroundColor: '#ff6600',
                  color: 'white',
                  padding: '12px 24px',
                  fontWeight: 'bold',
                  borderRadius: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                }}>
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
      <div className='resume-input m-2'>
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

            {(selectedTemplateType === 1 || selectedTemplateType === 4 || selectedTemplateType === 9 || selectedTemplateType === 13
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

      {/* Common Fields */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <label style={{fontSize: '0.8rem' }}>Institution Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Institution Name"
          value={edu.institution}
          onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <label style={{ fontSize: '0.8rem'}}>Location (City, Country):</label>
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          value={edu.location}
          onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
        />
      </div>

      {/* Conditional Fields Based on Level */}
      {edu.level === 'Postgraduate' || edu.level === 'Graduate' ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{fontSize: '0.8rem'}}>Degree (e.g., PhD, Master’s, Bachelor’s):</label>
            <input
              type="text"
              className="form-control"
              placeholder="Degree"
              value={edu.course}
              onChange={(e) => handleEducationChange(index, 'course', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{fontSize: '0.8rem'}}>Start Year:</label>
            <YearPicker
              selectedYear={edu.startYear}
              onChange={(year) => handleEducationChange(index, 'startYear', year)}
              placeholder="Start Year"
              className="form-control"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{fontSize: '0.8rem'}}>End Year:</label>
            <YearPicker
              selectedYear={edu.endYear}
              onChange={(year) => handleEducationChange(index, 'endYear', year)}
              placeholder="End Year"
              className="form-control"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ fontSize: '0.8rem'}}>Thesis/Dissertation Topic:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Thesis/Dissertation Topic"
              value={edu.thesis}
              onChange={(e) => handleEducationChange(index, 'thesis', e.target.value)}
            />
          </div>
        </>
      ) : edu.level === 'Class 12th' ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{fontSize: '0.8rem'}}>Board:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Board"
              value={edu.board}
              onChange={(e) => handleEducationChange(index, 'board', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ fontSize: '0.8rem'}}>Medium:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Medium"
              value={edu.medium}
              onChange={(e) => handleEducationChange(index, 'medium', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{fontSize: '0.8rem'}}>Start Year:</label>
            <YearPicker
              selectedYear={edu.startYear}
              onChange={(year) => handleEducationChange(index, 'startYear', year)}
              placeholder="Start Year"
              className="form-control"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{fontSize: '0.8rem'}}>End Year:</label>
            <YearPicker
              selectedYear={edu.endYear}
              onChange={(year) => handleEducationChange(index, 'endYear', year)}
              placeholder="End Year"
              className="form-control"
            />
          </div>
        </>
      ) : edu.level === 'Class 10th' ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ fontSize: '0.8rem'}}>School Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="School Name"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{fontSize: '0.8rem'}}>Medium:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Medium"
              value={edu.medium}
              onChange={(e) => handleEducationChange(index, 'medium', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{fontSize: '0.8rem'}}>End Year:</label>
            <YearPicker
              selectedYear={edu.endYear}
              onChange={(year) => handleEducationChange(index, 'endYear', year)}
              placeholder="End Year"
              className="form-control"
            />
          </div>
        </>
      ) : null}

      {/* Percentage Field */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <label style={{ fontSize: '0.8rem'}}>Percentage:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Percentage"
          value={edu.percentage}
          onChange={(e) => handleEducationChange(index, 'percentage', e.target.value)}
        />
      </div>

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
<hr className='custom-line' />



      {/* Experience Section */}
<div className="form-group">
  <label>Experience/Internship</label>
  {formData.experience.map((exp, index) => (
    <div key={index} className="form-group mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Job Title"
        value={exp.jobTitle}
        onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Organization Name"
        value={exp.organization}
        onChange={(e) => handleExperienceChange(index, 'organization', e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Location (City, Country)"
        value={exp.location}
        onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
      />
      <label style={{ fontSize: '0.9rem'}}>Employment Dates (Month, Year – Month, Year)</label>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="e.g., Jan 2020 – Dec 2022"
        value={exp.dates}
        onChange={(e) => handleExperienceChange(index, 'dates', e.target.value)}
      />
      
      {/* Responsibilities */}
      <label style={{ fontSize: '0.9rem'}}>Key Responsibilities and Achievements</label>
      {exp.responsibilities.map((responsibility, respIndex) => (
        <div key={respIndex} className="form-group">
          <textarea
            className="form-control mb-2"
            placeholder="Responsibility or Achievement"
            value={responsibility}
            onChange={(e) => handleResponsibilityChange(index, respIndex, e.target.value)}
            rows={3}
          />
          <button
            type="button"
            className="btn btn-danger icon-button mb-2"
            onClick={() => handleRemoveResponsibility(index, respIndex)}
          >
            <i className="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-secondary icon-button mb-3"
        onClick={() => handleAddResponsibility(index)}
      >
        <i className="fas fa-plus"></i> Add Responsibility
      </button>

      {/* Projects (optional) */}
      <label style={{ fontSize: '0.9rem'}}>Relevant Projects/Contributions</label>
      {exp.projects.map((project, projIndex) => (
        <div key={projIndex} className="form-group">
          <textarea
            className="form-control mb-2"
            placeholder="Project or Contribution"
            value={project}
            onChange={(e) => handleExpProjectChange(index, projIndex, e.target.value)}
            rows={3}
          />
          <button
            type="button"
            className="btn btn-danger icon-button mb-2"
            onClick={() => handleExpRemoveProject(index, projIndex)}
          >
            <i className="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-secondary icon-button mb-3"
        onClick={() => handleExpAddProject(index)}
      >
        <i className="fas fa-plus"></i> Add Project
      </button>

      {/* Remove Experience Button */}
      <button
        type="button"
        className="btn btn-danger icon-button"
        onClick={() => handleRemoveExperience(index)}
      >
        <i className="fas fa-trash-alt"></i> Remove Experience
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




{/* Research and Projects Section */}

  
    <div className="form-group">
      <label>Research and Projects</label>
      {formData.projects.map((project, index) => (
        <div key={index} className="form-group">
          {/* Project Title */}
          <input
            type="text"
            className="form-control"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
          />

          {/* Brief Description */}
          <textarea
            className="form-control mt-2"
            placeholder="Brief Description (focus on scope and impact)"
            value={project.description}
            onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
            rows={3}
            style={{ resize: 'vertical', width: '100%' }}
          />

          {/* Role in Project */}
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Role in Project (e.g., Lead Researcher)"
            value={project.role}
            onChange={(e) => handleProjectChange(index, 'role', e.target.value)}
          />

          {/* Tools/Technologies Used */}
          <input
            type="text"
            className="form-control mt-2"
            placeholder="Tools/Technologies Used"
            value={project.tools}
            onChange={(e) => handleProjectChange(index, 'tools', e.target.value)}
          />

          {/* Link to Project */}
          <input
            type="url"
            className="form-control mt-2"
            placeholder="Link to Project or Outcome (if applicable)"
            value={project.link}
            onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
          />

          {/* Remove Project Button */}
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
        className="btn btn-primary icon-button mt-2"
        onClick={handleAddProject}
      >
        <i className="fas fa-plus"></i> Add Project
      </button>
    </div>
    <hr className='custom-line'></hr>



     {/* Certifications Section */}
    <div className="form-group">
      <label>Certifications & Licenses</label>
      {formData.certifications.map((certification, index) => (
        <div key={index} className="form-group">
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Certification Name"
                value={certification.name || ''}
                onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Issuing Organization"
                value={certification.organization || ''}
                onChange={(e) => handleCertificationChange(index, 'organization', e.target.value)}
              />
            </div>
            <div className="col-md-6 mt-2">
              <label>Issued Date</label>
              <input
                type="date"
                className="form-control"
                value={certification.issuedDate || ''}
                onChange={(e) => handleCertificationChange(index, 'issuedDate', e.target.value)}
              />
            </div>
            <div className="col-md-6 mt-2">
              <label>Expiration Date</label>
              <input
                type="date"
                className="form-control"
                value={certification.expirationDate || ''}
                onChange={(e) => handleCertificationChange(index, 'expirationDate', e.target.value)}
              />
            </div>
            <div className="col-md-12 d-flex align-items-center mt-3">
              <button
                type="button"
                className="btn btn-danger icon-button"
                onClick={() => handleRemoveCertification(index)}
              >
                <i className="fas fa-trash-alt"></i> Remove Certification
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Add Certification Button */}
      <div className="form-group row mt-3">
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-primary icon-button"
            onClick={handleAddCertification}
          >
            <i className="fas fa-plus"></i> Add Certification
          </button>
        </div>
      </div>
    </div>
    <hr className="custom-line" />
  


{/* Publications Section */}
<div className="form-group">
  <label>Publications (if applicable)</label>
  {formData.publications.map((pub, index) => (
    <div key={index} className="form-group" style={{ marginBottom: '15px' }}>
      {/* Title of Publication */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <label style={{ width: '160px', fontSize: '0.9rem' }}>Title of Publication:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Title of Publication"
          value={pub.title}
          onChange={(e) => handlePublicationChange(index, 'title', e.target.value)}
        />
      </div>
      
      {/* Authors */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <label style={{ width: '160px', fontSize: '0.9rem' }}>Authors (optional):</label>
        <input
          type="text"
          className="form-control"
          placeholder="Authors"
          value={pub.authors}
          onChange={(e) => handlePublicationChange(index, 'authors', e.target.value)}
        />
      </div>

      {/* Publication Date */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <label style={{ width: '160px', fontSize: '0.9rem' }}>Publication Date:</label>
        <input
          type="date"
          className="form-control"
          value={pub.date}
          onChange={(e) => handlePublicationChange(index, 'date', e.target.value)}
        />
      </div>

      {/* Journal/Conference Name */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <label style={{ width: '160px', fontSize: '0.9rem' }}>Journal/Conference Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Journal/Conference Name"
          value={pub.journal}
          onChange={(e) => handlePublicationChange(index, 'journal', e.target.value)}
        />
      </div>

      {/* Link to Publication */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <label style={{ width: '160px', fontSize: '0.9rem' }}>Link to Publication:</label>
        <input
          type="url"
          className="form-control"
          placeholder="https://example.com"
          value={pub.link}
          onChange={(e) => handlePublicationChange(index, 'link', e.target.value)}
        />
      </div>

      {/* Remove Button */}
 
      <button
        type="button"
        className="btn btn-danger icon-button"
        onClick={() => handleRemovePublication(index)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  ))}

  {/* Add Publication Button */}
  <button
    type="button"
    className="btn btn-primary icon-button"
    onClick={handleAddPublication}
  >
    <i className="fas fa-plus"></i> Add Publication
  </button>
</div>
<hr className='custom-line'></hr>

    {/* Awards  Section */}

    <div className="form-group">
  <label>Awards & Honors</label>
  {formData.awards.map((award, index) => (
    <div key={index} className="form-group">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Award Title"
            value={award.title || ''}
            onChange={(e) => handleAwardChange(index, 'title', e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Awarding Body"
            value={award.body || ''}
            onChange={(e) => handleAwardChange(index, 'body', e.target.value)}
          />
        </div>
        <div className="col-md-6 mt-2">
          <label>Date Received</label>
          <input
            type="date"
            className="form-control"
            value={award.dateReceived || ''}
            onChange={(e) => handleAwardChange(index, 'dateReceived', e.target.value)}
          />
        </div>
        <div className="col-md-12 mt-2">
          <textarea
            className="form-control"
            placeholder="Description or Criteria (optional)"
            value={award.description || ''}
            onChange={(e) => handleAwardChange(index, 'description', e.target.value)}
            rows={3} // Controls the initial height of the textarea
            style={{ resize: 'vertical', width: '100%' }} // Allows height to be adjustable, but width fixed
          />
        </div>
        <div className="col-md-12 d-flex align-items-center mt-3">
          <button
            type="button"
            className="btn btn-danger icon-button"
            onClick={() => handleRemoveAward(index)}
          >
            <i className="fas fa-trash-alt"></i> Remove Award
          </button>
        </div>
      </div>
    </div>
  ))}

  {/* Add Award Button */}
  <div className="form-group row mt-3">
    <div className="col-md-12">
      <button
        type="button"
        className="btn btn-primary icon-button"
        onClick={handleAddAward}
      >
        <i className="fas fa-plus"></i> Add Award
      </button>
    </div>
  </div>
</div>
<hr className="custom-line" />

{/* Professional Memberships section */}

<div className="form-group">
        <label>
          PROFESSIONAL MEMBERSHIPS
        </label>
        {formData.memberships.map((membership, index) => (
          <div key={index} className="form-group">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Organization Name (e.g., IEEE, ACM)"
                  value={membership.organization}
                  onChange={(e) => handleMembershipChange(index, 'organization', e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Membership Role (Member, Board Member)"
                  value={membership.role}
                  onChange={(e) => handleMembershipChange(index, 'role', e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-2">
                <label>Membership Dates</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., Jan 2020 - Present"
                  value={membership.dates}
                  onChange={(e) => handleMembershipChange(index, 'dates', e.target.value)}
                />
              </div>
              <div className="col-md-12 d-flex align-items-center mt-3">
                <button
                  type="button"
                  className="btn btn-danger icon-button"
                  onClick={() => handleRemoveMembership(index)}
                >
                  <i className="fas fa-trash-alt"></i> Remove Membership
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Add Membership Button */}
        <div className="form-group row mt-3">
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-primary icon-button"
              onClick={handleAddMembership}
            >
              <i className="fas fa-plus"></i> Add Membership
            </button>
          </div>
        </div>
      </div>
<hr className="custom-line" />



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



 {/* Tools Section */}
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


       {/* Others Section */}

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



    {/* Soft Skills Section */}
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



        {/* Handle Languages */}
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
<hr className="custom-line" />


{/* Conditionally render the Hobbies section only for Template 1 */}

          <div className="form-group">
            <label>Hobbies & Interests</label>
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
         



            </div>
            


      {/* Suggestions content on the right side, visible only on large screens */}
      <div className="resume-suggestions">
      <h1>CV Writing Tips</h1>
    <p>Creating an effective CV is essential for making a positive first impression. Here are some tips to help you write a compelling CV:</p>
    <h5>CV Writing Tips</h5>
    <ul>
        <li>
            <strong>1. Tailor Your CV to the Job:</strong> Customize your CV for each application to highlight relevant experience and skills that match the job description.
        </li>
        <li>
            <strong>2. Start with a Strong Personal Statement:</strong> Begin with a personal statement that summarizes your skills and career goals, tailored to the specific job you are applying for.
        </li>
        <li>
            <strong>3. Highlight Key Skills:</strong> Include a skills section that showcases your key competencies relevant to the position, ensuring to use keywords from the job listing.
        </li>
        <li>
            <strong>4. List Relevant Work Experience:</strong> Provide detailed information about your work history, focusing on achievements and contributions in previous roles.
        </li>
        <li>
            <strong>5. Include Education and Certifications:</strong> Clearly list your educational background, along with any relevant certifications or training that enhance your qualifications.
        </li>
        <li>
            <strong>6. Use Clear and Professional Formatting:</strong> Ensure your CV has a clean layout with consistent font sizes, bullet points, and spacing for easy readability.
        </li>
        <li>
            <strong>7. Proofread for Errors:</strong> Carefully proofread your CV for spelling and grammatical errors. A polished document reflects your attention to detail.
        </li>
        <li>
            <strong>8. Keep It Concise:</strong> Aim for a maximum of two pages. Be concise and focus on the most relevant and impressive information.
        </li>
        <li>
            <strong>9. Add Volunteer Experience:</strong> If applicable, include any volunteer work that demonstrates your skills, dedication, and involvement in the community.
        </li>
        <li>
            <strong>10. Use Action Verbs:</strong> Start each bullet point in your work experience section with action verbs to convey a sense of accomplishment and impact.
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

          <button className="btn btn-secondary mb-2 down-temp" onClick={handleDownloadPDF}>
            Download Template as PDF
          </button>
        </div>
      )}
      </section>
    </div>
    
  );
}
