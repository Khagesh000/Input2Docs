import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import html2canvas from 'html2canvas';
import YearPicker from './YearPicker';

import html2pdf from 'html2pdf.js';

import '../ResumeTemplate.css'; // Ensure this path is correct

// Import images for templates
import img from '../assets/images/cover_letter.png';
import img1 from '../assets/images/cover_letter1.png';
import img2 from '../assets/images/ResumeTemplate3.png';
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
    firstName: '',
    lastName: '',
    jobTitle: '',
    principal: '',
    school: '',
    address: '',
    phone: '',
    email: '',
    linkedin: '',
    googleCloud: '',
    date: '',
    letterContent: '',
    experience: [
      {
        position: 'Senior Project Manager',
        company: 'Seton Hospital, ME',
        dates: '2006',
        details: ['Led a team of 5 developers'] // Ensure this is an array
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
    skills: [
      'Microsoft Project'
    ],
    tools: [{ name: 'Jupyter' }],
    languages: [
      {
        language: 'English',
        level: 'Intermediate'
      }
    ],
    projects: [ // Add the projects section
      {
        title: 'Project Alpha', // Project title
        details: ['Developed a web application using React'] // Array for project details
      }
    ],
    others: [
      'Prompt design'
    ],
    softSkills: [
      'Teamwork'
    ],
    certifications: [
      { course: 'Artificial Intelligence', 
        company: 'Yhills' }
  ]

    

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

  //Addskill Feature
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

  //Experience Feature
  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { position: '', company: '', dates: '', details: '' }]
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
  const handleLanguageChange = (index, field, value) => {
    const newLanguages = formData.languages.map((language, i) => 
      i === index ? { ...language, [field]: value } : language
    );
    setFormData({ ...formData, languages: newLanguages });
  };

  const handleAddLanguage = () => {
    setFormData({
      ...formData,
      languages: [...formData.languages, { language: '', level: '' }]
    });
  };

  const handleRemoveLanguage = (index) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((_, i) => i !== index)
    });
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
      certifications: [...formData.certifications, { course: '', company: '' }]
  });
};

const handleRemoveCertification = (index) => {
  setFormData({
      ...formData,
      certifications: formData.certifications.filter((_, i) => i !== index)
  });
};

const handleCertificationChange = (index, field, value) => {
  const updatedCertifications = formData.certifications.map((cert, i) =>
      i === index ? { ...cert, [field]: value } : cert
  );
  setFormData({
      ...formData,
      certifications: updatedCertifications
  });
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

{/* Experience Section */}
<div className="form-group">
  <label>Experience</label>
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
          <input
            type="text"
            className="form-control"
            placeholder="Detail Point"
            value={point}
            onChange={(e) => handleExperiencePointChange(index, pointIndex, e.target.value)}
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


{/* Projects Section */}
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
          <input
            type="text"
            className="form-control"
            placeholder="Detail Point"
            value={point}
            onChange={(e) => handleProjectPointChange(index, pointIndex, e.target.value)}
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

{/* Certifications Section */}
<div className="form-group">
  <label>Certifications</label>
  {formData.certifications.map((certification, index) => (
    <div key={index} className="form-group row">
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
  ))}
  <div className="form-group row">
    <div className="col-md-12">
      <button
        type="button"
        className="btn icon-button"
        onClick={handleAddCertification}
      >
        <i className="fas fa-plus"></i>Add Certification
      </button>
    </div>
  </div>
</div>




{/* Handle languages */}
<div className="form-group">
    <label>Languages</label>
    {formData.languages.map((lang, index) => (
        <div key={index} className="form-group mb-2">
            <input
                type="text"
                className="form-control mb-1"
                placeholder="Language"
                value={lang.language}
                onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
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