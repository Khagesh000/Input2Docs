import educationIcon from '../assets/images/education-icon.png';
import skillsIcon from '../assets/images/skills.png';
import summaryIcon from '../assets/images/summary-icon.png';
import experienceIcon from '../assets/images/experience.png';
import personalInfoIcon from '../assets/images/experience.png';
import languagesIcon from '../assets/images/summary-icon.png';
import hobbiesIcon from '../assets/images/hobbies-icon.png'; // Replace this with the actual path to your hobbies icon
import projectsIcon from '../assets/images/projects-icon.png';
import certificateIcon from '../assets/images/certificate-icon.png'
import publicationsIcon from '../assets/images/publication-icon.png'
import awardsIcon from '../assets/images/awards-icon.png';
import membershipsIcon from '../assets/images/profession-icon.png';
import toolsIcon from '../assets/images/tools-icon.png';
import othersIcon from '../assets/images/others-icon.png';
import softskillsIcon from '../assets/images/softskills-icon.png';



export const generateTemplateContent = (formData, templateType, croppedImage) => {

  const {
    name = 'John Smith',
    jobTitle = 'IT Project Manager',
    principal = 'Principal Name',
    school = 'School Name',
    address = '123 Main St, City, State, ZIP',
    phone = '(123) 456-7890',
    email = 'email@example.com',
    linkedin = 'linkedin.com/in/username',
    googleCloud = 'googlecloud.com/username',
    Github = 'GithubName',
    date = 'August 21, 2024',
    letterContent = 'Dear [Recipient],\n\nThis is a placeholder for your letter content.',
    summary = 'IT Professional with over 10 years of experience specializing in IT department management for international logistics companies. I can implement effective IT strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications. Striving to leverage my skills at SanCorp Inc.',
    experience = [
      `<strong>Senior Project Manager</strong><br>2006-12 - Present<br>Seton Hospital, ME<br>Oversaw all major hospital IT projects for 10+ years, focusing on cost reduction.`,
      `<strong>Junior Project Manager</strong><br>2004-09 - 2006-12<br>Seton Hospital, ME<br>Streamlined IT logistics and administration operation, cutting costs by 25%.`,
      `<strong>IT Support Officer</strong><br>1999-09 - 2001-05<br>Seton Hospital, ME<br>Provided support for project managers and hospital staff for 2 years.`
    ],
    education = [
      `<strong>Master of Computer Science</strong>, University of Maryland<br>Graduated Summa Cum Laude.<br>Andersen Postgraduate Fellowship to study advanced techniques.`,
      `<strong>Bachelor of Computer Science</strong>, University of Maryland<br>Graduated Summa Cum Laude.<br>Member of Student Association of Computer Science.`
    ],
    skills = [
      'Microsoft Project: Excellent',
      'MS Windows Server: Very Good',
      'Linux/Unix: Very Good',
      'Microsoft Excel: Good',
      'French: Intermediate',
      'Spanish: Basic'
    ]
  } = formData;

  if (templateType === 1) {
    // Use the cropped image URL if available, otherwise use the original image URL or placeholder.
    const imageURL = croppedImage || (formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/140');
  
    // Helper function to clean up the HTML string
    const cleanHtml = (html) => {
      return html.replace(/<br[^>]*data-mce-bogus="1"[^>]*>/g, ''); // Remove <br data-mce-bogus="1">
    };
  
    return `
      <div style="display: flex; height: 100%; width: 100%; box-sizing: border-box; margin: 20px;">
        <!-- Left Side: Profile Picture, Personal Info, Skills, Languages -->
        <div style="flex: 1; padding: 20px; background-color: #a8a89c; color: #f5e5e5; min-height: 1120px; box-sizing: border-box;">
          <!-- Circular Image -->
          <div style="display: inline-block; width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 10px;">
            <img src="${imageURL}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover; object-position: top;">
          </div>
  
          <!-- Personal Information -->
          <div style="margin-top: 10px;">
            <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PERSONAL INFO</label>
            <div style="margin: 5px 0;">
              <strong style="color: #000;">Address:</strong><br>
              <span style="font-size: 14px; color: #000;">${formData.address || '123 Main St, City, State, ZIP'}</span>
            </div>
            <div style="margin: 5px 0;">
              <strong style="color: #000;">Phone:</strong><br>
              <span style="font-size: 14px; color: #000;">${formData.phone || '(123) 456-7890'}</span>
            </div>
            <div style="margin: 5px 0;">
              <strong style="color: #000;">Email:</strong><br>
              <span style="font-size: 14px; color: #000;">${formData.email || 'email@example.com'}</span>
            </div>
            <div style="margin: 5px 0;">
              <strong style="color: #000;">LinkedIn:</strong><br>
              <span style="font-size: 14px; color: #000;">${formData.linkedin || 'linkedin.com/in/username'}</span>
            </div>
          </div>
  
          <!-- Skills Section -->
          <div style="margin-top: 20px;">
            <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">SKILLS</label>
            <div style="display: flex; flex-wrap: wrap;">
              ${(formData.skills || []).map(skill => `
                <div style="flex: 1 1 50%; margin-bottom: 5px;">
                  <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                    <li>${skill || 'Skill'}</li>
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
  
          <!-- Languages Section -->
          <div style="margin-top: 20px;">
            <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">LANGUAGES</label>
            ${(formData.languages || []).map(lang => `
              <div style="margin: 0px 0;">
                <span style="font-size: 14px; color: #000;">${lang || 'Language Name'}</span>
              </div>
            `).join('')}
          </div>
  
  
          <!-- Hobbies Section -->
          <div style="margin-top: 20px;">
            <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">HOBBIES</label>
            <div style="display: flex; flex-wrap: wrap;">
              ${(formData.hobbies || []).map(hobbies => `
                <div style="flex: 1 1 50%; margin-bottom: 5px;">
                  <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                    <li>${hobbies || 'cricket'}</li>
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Tools Section -->
          <div style="margin-top: 20px;">
            <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">TOOLS</label>
            <div style="display: flex; flex-wrap: wrap;">
              ${(formData.tools || []).map(tools => `
                <div style="flex: 1 1 50%; margin-bottom: 5px;">
                  <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                    <li>${tools || 'MS EXCEL'}</li>
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- OTHERS Section -->
          <div style="margin-top: 20px;">
            <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">OTHERS</label>
            <div style="display: flex; flex-wrap: wrap;">
              ${(formData.others || []).map(others => `
                <div style="flex: 1 1 50%; margin-bottom: 5px;">
                  <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                    <li>${others || 'Prompt design'}</li>
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>


          <!-- SOFTSKILLS Section -->
          <div style="margin-top: 20px;">
            <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">SOFT SKILLS</label>
            <div style="display: flex; flex-wrap: wrap;">
              ${(formData.softSkills || []).map(softSkills => `
                <div style="flex: 1 1 50%; margin-bottom: 5px;">
                  <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                    <li>${softSkills || 'Prompt design'}</li>
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>


        </div>
  
        
  
        <!-- Right Side: Name, Job Title, Education, Experience, Projects, Certificates -->
        <div style="flex: 2; padding: 20px; background-color: #fff; color: #000; display: flex; flex-direction: column; justify-content: flex-start;">
          <h1 style="font-size: 28px; font-weight: bold; font-family: Arial, sans-serif; margin: 0; text-align: left; color: #0d0565c4;">
            ${formData.firstName || 'JOHN'} ${formData.lastName || 'SMITH'}
          </h1>
          <h2 style="font-size: 20px; font-family: Arial, sans-serif; margin: 5px 0; text-align: left;">
            ${formData.jobTitle || 'IT Project Manager'}
          </h2>
  
          <!-- Education Section -->
<div style="margin-top: 20px;">
  <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">EDUCATION</label>
  ${(formData.education || []).map(edu => `
    <div style="margin-bottom: 15px;">
      <!-- Postgraduate -->
      ${edu.level === 'Postgraduate' ? `
        <strong style="color: #000;">${edu.level || 'Postgraduate'} in ${edu.course || 'Course'}</strong><br>
        <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Graduation Year:</strong> ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Thesis Topic:</strong> ${edu.thesis || 'Not provided'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
      ` : ''}

      <!-- Graduate -->
      ${edu.level === 'Graduate' ? `
        <strong style="color: #000;">${edu.level || 'Graduate'} in ${edu.course || 'Course'}</strong><br>
        <span style="font-size: 14px; color: #777;"><strong>Thesis Topic:</strong> ${edu.thesis || 'Not provided'}</span><br>
        <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Thesis Topic:</strong> ${edu.thesis || 'Not provided'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Graduation Year:</strong> ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
      ` : ''}

      <!-- Class 12th -->
      ${edu.level === 'Class 12th' ? `
        <strong style="color: #000;">${edu.level || 'Class 12th'}</strong><br>
        <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Board:</strong> ${edu.board || 'Board Not Provided'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Medium:</strong> ${edu.medium || 'Not provided'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>End Year:</strong> ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
      ` : ''}

      <!-- Class 10th -->
      ${edu.level === 'Class 10th' ? `
        <strong style="color: #000;">${edu.level || 'Class 10th'}</strong><br>
        <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Medium:</strong> ${edu.medium || 'Not provided'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>End Year:</strong> ${edu.endYear || 'Year not provided'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
      ` : ''}

      <!-- Other Education Levels -->
      ${edu.level !== 'Class 10th' && edu.level !== 'Class 12th' && edu.level !== 'Graduate' && edu.level !== 'Postgraduate' ? `
        <strong style="color: #000;">${edu.level || 'Other Level'} in ${edu.course || 'Course'}</strong><br>
        <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Duration:</strong> ${edu.startYear || 'Year not provided'} - ${edu.endYear || 'Year not provided'}</span><br>
        <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
      ` : ''}
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555;">No education listed.</p>'}
</div>


  
     <!-- Experience Section -->      
<div style="margin-top: 20px;">
  <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">EXPERIENCE</label>
  ${(formData.experience || []).map(exp => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
      <strong style="font-size: 16px; color: #000;">${exp.jobTitle || 'Job Title'}</strong> at 
      <span style="font-size: 16px; color: #333;">${exp.organization || 'Organization Name'}</span>
      <br>
      <span style="font-size: 14px; color: #555;">${exp.location || 'Location (City, Country)'}</span>
      <br>
      <span style="font-size: 14px; color: #000;">${exp.dates || 'Month, Year – Month, Year'}</span>
      

      ${(exp.responsibilities || []).length > 0 ? `
        <label style="font-weight: bold; margin-top: 10px; display: block; font-size: 14px; color: #0d0565c4;">Key Responsibilities and Achievements:</label>
        <ul style="list-style-type: disc; margin: 5px 0 0 20px; padding-left: 20px; font-size: 14px; color: #000;">
          ${exp.responsibilities.map(detail => `<li>${detail || 'Responsibility/Achievement'}</li>`).join('')}
        </ul>
      ` : ''}
 
      ${(exp.projects || []).length > 0 ? `
        <label style="font-weight: bold; margin-top: 10px; display: block; font-size: 14px; color: #0d0565c4;">Relevant Projects/Contributions:</label>
        <ul style="list-style-type: disc; margin: 5px 0 0 20px; padding-left: 20px; font-size: 14px; color: #000;">
          ${exp.projects.map(project => `<li>${project || 'Project/Contribution'}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('')}
</div>

  
   
<div style="margin-top: 20px;">
  <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PROJECTS</label>
  ${(formData.projects || []).map(project => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">

      <strong style="font-size: 16px; color: #000;">${project.title || 'Project Title'}</strong><br>


      <span style="font-size: 14px; color: #555; display: block; margin-top: 5px;">
        ${project.description || 'Brief Description (focus on scope and impact)'}
      </span>

      
      ${project.role ? `
        <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
          <strong>Role:</strong> ${project.role}
        </span>
      ` : ''}


      ${project.tools ? `
        <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
          <strong>Tools/Technologies:</strong> ${project.tools}
        </span>
      ` : ''}

      
      ${project.link ? `
        <span style="font-size: 14px; color: #0066cc; display: block; margin-top: 5px;">
          <strong>Link:</strong> <a href="${project.link}" target="_blank" style="color: #0066cc; text-decoration: underline;">View Project</a>
        </span>
      ` : ''}
    </div>
  `).join('')}
</div>

  
          <!-- Certificates Section -->
          <div style="margin-top: 20px;">
  <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">CERTIFICATES</label>
  ${(formData.certifications || []).map(cert => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
      <strong style="font-size: 16px; color: #000;">${cert.name || 'Certification Name'}</strong><br>

      <span style="font-size: 14px; color: #555; display: block; margin-top: 5px;">
        <strong>Issuing Organization:</strong> ${cert.organization || 'Issuing Organization'}
      </span>

    
      ${cert.issuedDate ? `
        <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
          <strong>Issued Date:</strong> ${new Date(cert.issuedDate).toLocaleDateString()}
        </span>
      ` : ''}

    
      ${cert.expirationDate ? `
        <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
          <strong>Expiration Date:</strong> ${new Date(cert.expirationDate).toLocaleDateString()}
        </span>
      ` : ''}
    </div>
  `).join('')}
</div>

     <!-- Publications  Section -->
          <div style="margin-top: 20px;">
  <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PUBLICATIONS</label>
  ${(formData.publications || []).map(pub => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
      
      <strong style="font-size: 16px; color: #000;">${pub.title || 'Title of Publication'}</strong><br>

      ${pub.authors ? `
        <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
          <strong>Authors:</strong> ${pub.authors}
        </span>
      ` : ''}

      ${pub.date ? `
        <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
          <strong>Publication Date:</strong> ${new Date(pub.date).toLocaleDateString()}
        </span>
      ` : ''}

      ${pub.journal ? `
        <span style="font-size: 14px; color: #555; display: block; margin-top: 5px;">
          <strong>Journal/Conference:</strong> ${pub.journal}
        </span>
      ` : ''}

      ${pub.link ? `
        <span style="font-size: 14px; color: #0066cc; display: block; margin-top: 5px;">
          <a href="${pub.link}" target="_blank" style="text-decoration: none;">View Publication</a>
        </span>
      ` : ''}
    </div>
  `).join('')}
</div>

       <!-- Awards & Honors Section -->
<div style="margin-top: 20px;">
  <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">AWARDS & HONORS</label>
<div className="form-group">
  ${(formData.awards || []).map((award, index) => `
    <div key="${index}" className="form-group" style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
      <div className="row">
        <div className="col-md-6">
          <strong style="font-size: 16px; color: #000;">${award.title || 'Award Title'}</strong>
        </div>
        <div className="col-md-6">
          <strong style="font-size: 16px; color: #000;">${award.body || 'Awarding Body'}</strong>
        </div>
        <div className="col-md-6 mt-2">
          <label style="font-size: 14px;">Date Received:</label>
          <span>${award.dateReceived ? new Date(award.dateReceived).toLocaleDateString() : 'Not Specified'}</span>
        </div>
        <div>
          <label style="font-size: 14px;">Description or Criteria: <span>${award.description || 'No Description Provided'}</span></label>
        </div>
      </div>
    </div>
  `).join('')}
  </div>
</div>
   
        <!-- Professional Memberships Section -->
<div style="margin-top: 20px;">
  <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PROFESSIONAL MEMBERSHIPS</label>
</div>
<div className="form-group">
  ${(formData.memberships || []).map((membership, index) => `
    <div key="${index}" className="form-group" style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
      <div className="row">
        <div className="col-md-6">
          <strong style="font-size: 16px; color: #000;">${membership.organization || 'Organization Name'}</strong>
        </div>
        <div className="col-md-6">
          <strong style="font-size: 16px; color: #000;">${membership.role || 'Membership Role'}</strong>
        </div>
        <div className="col-md-6 mt-2">
          <label style="font-size: 14px;">Membership Dates:</label>
          <span>${membership.dates || 'Not Specified'}</span>
        </div>
      </div>
    </div>
  `).join('')}
</div>
<hr className="custom-line" />



        </div>
      </div>`;
  } else if (templateType === 2){
    return `
    <!-- Modern Resume Template -->
    <div style="width: 100%; padding: 15px; box-sizing: border-box;">

      <!-- Main Container -->
      <div style="max-width: 850px; background-color: #fff; font-family: 'Helvetica', sans-serif; padding: 0px; margin: 0px;">

        <!-- Header -->
        <header style="display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #00aaff; padding-bottom: 5px; margin: 0px;">
          <div style="flex: 1;">
            <h1 style="font-size: 34px; color: #333; margin: 0;">${formData.firstName || 'Jane'} ${formData.lastName || 'Doe'}</h1>
            <h2 style="font-size: 18px; color: #777; margin: 5px 0;">${formData.jobTitle || 'UX/UI Designer'}</h2>
          </div>
          <div style="text-align: right; color: #555; flex: 1;">
            <p style="margin: 0; color: #333;">${formData.email || 'janedoe@example.com'}</p>
            <p style="margin: 0; color: #333;">${formData.phone || '(123) 456-7890'}</p>
            <p style="margin: 0; color: #333;">${formData.linkedin || 'linkedin.com/in/janedoe'}</p>
          </div>
        </header>

        <!-- Section: Profile -->
        <section style="margin-top: 20px; margin: 0px;">
          <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 0px; margin: 0px; margin-top: 4px;">About Me</h3>
          <p style="font-size: 16px; color: #555; margin: 0px;">${formData.summary || 'Creative and detail-oriented professional with 5+ years of experience in designing and improving user experiences across various platforms.'}</p>
        </section>

        <!-- Section: Skills -->
<section style="margin-bottom: 0px; margin: 0px;">
  

  <!-- Technical Skills -->
  <div style="margin-bottom: 5px; color: black;">
    <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0px; margin-top: 4px;">Technical Skills</h3>
    <div style="display: flex; flex-direction: column; margin-top: 5px;">

      <!-- Programming Languages -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px; color: #333;">Programming Languages: </strong>
        <div style="color: #555;">
          ${formData.skills.length > 0 ? formData.skills.join(', ') : 'No skills listed.'}
        </div>
      </div>

      <!-- Tools -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px; color: #333;">Tools:</strong>
        <div style="color: #555;">
          ${formData.tools.length > 0 ? formData.tools.map(tool => tool.name).join(', ') : 'No tools listed.'}
        </div>
      </div>

      <!-- Others -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px; color: #333;">Others: </strong>
        <div style="color: #555;">
          ${formData.others.length > 0 ? formData.others.join(', ') : 'No skills listed.'}
        </div>
      </div>

      <!-- Soft Skills -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px; color: #333;">Soft Skills:</strong>
        <div style="color: #555;">
          ${formData.softSkills.length > 0 ? formData.softSkills.join(', ') : 'No soft skills listed.'}
        </div>
      </div>

      <!-- Languages -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px; color: #333;">Languages:</strong>
        <div style="color: #555;">
          ${formData.languages.length > 0 ? formData.languages.join(', ') : 'No languages listed.'}
        </div>
      </div>

    </div>
  </div>
</section>

        <!-- Section: Experience -->
<section style="margin-top: 20px;">
  <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0px; margin-top: 4px;">Experience</h3>
  ${(formData.experience || []).map(exp => `
    <div style="margin-bottom: 3px;">
      <h4 style="font-size: 18px; color: #333; margin: 0;">
        ${exp.jobTitle || 'Job Title'} @ ${exp.organization || 'Organization Name'}
      </h4>
       <div style="display: flex; justify-content: space-between; font-size: 14px; color: #777; margin: 0;">
        <p style="margin: 0;">Location: ${exp.location || 'Location'}</p>
        <p style="margin: 0;">${exp.dates || 'Employment Dates'}</p>
      </div>

      
      ${exp.responsibilities.length > 0 ? `
        <ul style="font-size: 16px; color: #555; margin: 5px 0; padding-left: 20px;"> <!-- Reduced top and bottom margin -->
          ${exp.responsibilities.map(responsibility => `
            <li style="margin-bottom: 2px;">${responsibility || 'Responsibility or Achievement'}</li>
          `).join('')}
        </ul>
      ` : '<p style="font-size: 16px; color: #555; margin: 2px 0;">No responsibilities listed.</p>'}
      
      ${exp.projects.length > 0 ? `
        <p style="font-size: 16px; color: #333; margin: 5px 0; font-weight: bold;">Projects:</p> <!-- Reduced margin-top -->
        <ul style="font-size: 16px; color: #555; margin: 0; padding-left: 20px;"> <!-- Removed extra margin -->
          ${exp.projects.map(project => `
            <li style="margin-bottom: 2px;">${project || 'Project or Contribution'}</li>
          `).join('')}
        </ul>
      ` : '<p style="font-size: 16px; color: #555; margin: 2px 0;">No projects listed.</p>'}
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555; margin: 0;">No experience listed.</p>'}
</section>



        <!-- Section: Education -->
<section style="margin-top: 0; padding: 0;">
  <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 0; margin-top: 0; margin-bottom: 5px;">Education</h3>
  ${(formData.education || []).map(edu => `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
      <div>
        <!-- Class 10th -->
        ${edu.level === 'Class 10th' ? `
          <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.level || 'Class 10th'} @ ${edu.institution || 'School Name'}</h4>
          <p style="font-size: 14px; color: #777; margin: 0;">Location: ${edu.location || 'City, Country'}</p>
          <p style="font-size: 16px; color: #555; margin: 0;">Percentage: ${edu.percentage || 'Not provided'}</p>
        ` : ''}

        <!-- Class 12th -->
        ${edu.level === 'Class 12th' ? `
          <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.level || 'Class 12th'} @ ${edu.institution || 'School Name'}</h4>
          <p style="font-size: 14px; color: #777; margin: 0;">Location: ${edu.location || 'City, Country'}</p>
          <p style="font-size: 16px; color: #555; margin: 0;">Percentage: ${edu.percentage || 'Not provided'}</p>
        ` : ''}

        <!-- Graduate -->
        ${edu.level === 'Graduate' ? `
          <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.level || 'Graduate'} in ${edu.course || 'Course'} @ ${edu.institution || 'Institution'}</h4>
          <span style="font-size: 14px; color: #777;"><strong>Thesis Topic:</strong> ${edu.thesis || 'Not provided'}</span>
          <p style="font-size: 14px; color: #777; margin: 0;">Location: ${edu.location || 'City, Country'}</p>
          <p style="font-size: 16px; color: #555; margin: 0;">Percentage: ${edu.percentage || 'Not provided'}</p>
        ` : ''}

        <!-- Postgraduate -->
        ${edu.level === 'Postgraduate' ? `
          <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.level || 'Postgraduate'} in ${edu.course || 'Course'} @ ${edu.institution || 'Institution'}</h4>
          <span style="font-size: 14px; color: #777;"><strong>Thesis Topic:</strong> ${edu.thesis || 'Not provided'}</span>
          <p style="font-size: 14px; color: #777; margin: 0;">Location: ${edu.location || 'City, Country'}</p>
          <p style="font-size: 16px; color: #555; margin: 0;">Percentage: ${edu.percentage || 'Not provided'}</p>
        ` : ''}
      </div>
      <div style="text-align: right; font-size: 14px; color: #777;">
        ${edu.startYear ? `${edu.startYear} - ${edu.endYear || 'Present'}` : `${edu.endYear || 'Year not provided'}`}
      </div>
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555;">No education listed.</p>'}
</section>



       <!-- Projects Section -->
<section style="margin-top: 10px;">
  <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0;">Projects</h3>
  ${(formData.projects || []).map(project => `
    <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e0e0e0;">
      <!-- Project Title -->
      <h4 style="font-size: 18px; color: #333; margin: 0;">${project.title || 'Project Title'}</h4>

      <!-- Brief Description -->
      <p style="font-size: 14px; color: #555; margin: 5px 0;">${project.description || 'Brief description of the project, focusing on scope and impact.'}</p>

      <!-- Role in Project -->
      ${project.role ? `<p style="font-size: 14px; color: #777; margin: 5px 0;"><strong>Role:</strong> ${project.role}</p>` : ''}

      <!-- Tools/Technologies Used -->
      ${project.tools ? `<p style="font-size: 14px; color: #777; margin: 5px 0;"><strong>Tools/Technologies:</strong> ${project.tools}</p>` : ''}

      <!-- Link to Project -->
      ${project.link ? `<p style="font-size: 14px; color: #0066cc; margin: 5px 0;"><a href="${project.link}" target="_blank" style="text-decoration: none; color: #0066cc;">View Project</a></p>` : ''}
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555; margin: 0;">No projects listed.</p>'}
</section>


<!-- Certifications Section -->
<section style="margin-top: 10px;">
  <h3 style="font-size: 20px; color: #00aaff;  padding-bottom: 5px; margin: 0;">Certifications & Licenses</h3>
  ${(formData.certifications || []).map(certification => `
    <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e0e0e0;">
      <!-- Certification Title and Organization -->
      <h4 style="font-size: 18px; color: #333; margin: 0;">${certification.name || 'Certification Title'} @ ${certification.organization || 'Issuing Organization'}</h4>

      <!-- Issued and Expiration Dates -->
      <p style="font-size: 14px; color: #555; margin: 5px 0;">
        <strong>Issued Date:</strong> ${certification.issuedDate ? new Date(certification.issuedDate).toLocaleDateString() : 'N/A'}
        ${certification.expirationDate ? `<strong> | Expiration Date:</strong> ${new Date(certification.expirationDate).toLocaleDateString()}` : ''}
      </p>
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555; margin: 0;">No certifications listed.</p>'}
</section>

<!-- Publications Section -->
<section style="margin-top: 10px;">
  <h3 style="font-size: 20px; color: #00aaff; padding-bottom: 5px; margin: 0;">Publications (if applicable)</h3>
  ${(formData.publications || []).map(publication => `
    <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e0e0e0;">
      <!-- Title of the Publication -->
      <h4 style="font-size: 18px; color: #333; margin: 0;">${publication.title || 'Publication Title'}</h4>

      <!-- Authors -->
      ${publication.authors ? `
      <p style="font-size: 14px; color: #555; margin: 5px 0;">
        <strong>Authors:</strong> ${publication.authors}
      </p>
      ` : ''}

      <!-- Publication Date -->
      ${publication.date ? `
      <p style="font-size: 14px; color: #555; margin: 5px 0;">
        <strong>Publication Date:</strong> ${new Date(publication.date).toLocaleDateString()}
      </p>
      ` : ''}

      <!-- Journal/Conference Name -->
      ${publication.journal ? `
      <p style="font-size: 14px; color: #555; margin: 5px 0;">
        <strong>Journal/Conference:</strong> ${publication.journal}
      </p>
      ` : ''}

      <!-- Link to Publication -->
      ${publication.link ? `
      <p style="font-size: 14px; color: #007bff; margin: 5px 0;">
        <strong>Link:</strong> <a href="${publication.link}" target="_blank">${publication.link}</a>
      </p>
      ` : ''}
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555; margin: 0;">No publications listed.</p>'}
</section>


<!-- Awards & Honors Section -->
<section style="margin-top: 10px;">
  <h3 style="font-size: 20px; color: #00aaff; padding-bottom: 5px; margin: 0;">Awards & Honors</h3>
  ${(formData.awards || []).map(award => `
    <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e0e0e0;">
      <!-- Title and Awarding Body -->
      <h4 style="font-size: 18px; color: #333; margin: 0;">${award.title || 'Award Title'} ${award.body ? `@ ${award.body}` : ''}</h4>

      <!-- Date Received -->
      ${award.dateReceived ? `
      <p style="font-size: 14px; color: #555; margin: 5px 0;">
        <strong>Date Received:</strong> ${new Date(award.dateReceived).toLocaleDateString()}
      </p>
      ` : ''}

      <!-- Description or Criteria -->
      ${award.description ? `
      <p style="font-size: 14px; color: #555; margin: 5px 0;">
        <strong>Description:</strong> ${award.description}
      </p>
      ` : ''}
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555; margin: 0;">No awards or honors listed.</p>'}
</section>

   <!-- Professional Memberships Section -->
<section style="margin-top: 10px;">
  <h3 style="font-size: 20px; color: #00aaff; padding-bottom: 5px; margin: 0;">Professional Memberships</h3>
  ${(formData.memberships || []).map(membership => `
    <div style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e0e0e0;">
      <!-- Organization Name -->
      <h4 style="font-size: 18px; color: #333; margin: 0;">${membership.organization || 'Organization Name'}</h4>
      
      <!-- Membership Role -->
      ${membership.role ? `
      <p style="font-size: 14px; color: #555; margin: 5px 0;">
        <strong>Role:</strong> ${membership.role}
      </p>
      ` : ''}
      
      <!-- Membership Dates -->
      ${membership.dates ? `
      <p style="font-size: 14px; color: #555; margin: 5px 0;">
        <strong>Membership Dates:</strong> ${membership.dates}
      </p>
      ` : ''}
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555; margin: 0;">No professional memberships listed.</p>'}
</section>

<!-- Hobbies & Interests Section -->
<section style="margin-top: 10px;">
  <h3 style="font-size: 20px; color: #00aaff; padding-bottom: 5px; margin: 0;">Hobbies & Interests</h3>
  <div style="display: flex; flex-wrap: wrap; gap: 10px;">
    ${(formData.hobbies || []).map((hobby, index) => `
      <div style="flex: 1 1 30%; max-width: 30%; padding: 5px; border: 1px solid #ddd; border-radius: 5px; text-align: center;">
        <p style="font-size: 16px; color: #333; margin: 0;">${hobby || 'Hobby'}</p>
      </div>
    `).join('') || '<p style="font-size: 16px; color: #555; margin: 0;">No hobbies listed.</p>'}
  </div>
</section>




      </div>
    </div>
  `;
 } else if (templateType === 3) {
  return `
    <!-- Resume Template -->
    <div style="width: 100%; padding: 8px; box-sizing: border-box; background-color: #e6f7ff;">
  
      <!-- Main Container -->
      <div style="max-width: 800px; margin: auto; background-color: #fff; border-radius: 10px;   padding: 4px; font-family: 'Arial', sans-serif;">

        <!-- Header -->
        <header style="text-align: center; margin-bottom: 0px;">
          <h1 style="font-size: 38px; color: #007bff; margin: 0px;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
          <h2 style="font-size: 24px; color: #555; margin: 0px;">${formData.jobTitle || 'Web Developer'}</h2>
          <p style="font-size: 16px; color: #777; margin: 0px;">${formData.email || 'email@example.com'} | ${formData.phone || '(123) 456-7890'} | ${formData.linkedin || 'linkedin.com/in/username'}</p>
        </header>

        <!-- Divider -->
        <hr style="border: 1px solid #007bff; margin: 0; margin-top: 6px;">

        <!-- Section: Summary -->
        <section style="margin-bottom: 0px; margin: 0px;">
          <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px; margin: 0px; margin-top: 10px;">Summary</h3>
          <p style="font-size: 15px; color: #555; margin: 0px;">${formData.summary || 'A dedicated professional with X years of experience in ...'}</p>
        </section>

        <!-- Section: Skills -->
<section style="margin-bottom: 0px; margin: 0px;">
  

  <!-- Technical Skills -->
  <div style="margin-bottom: 5px; color: black;">
    <h3 style="font-size: 22px; color: #007bff; margin-bottom: 4px; margin-top: 10px;">Technical Skills</h3>
    <div style="display: flex; flex-direction: column; margin-top: 5px;">

      <!-- Programming Languages -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px;">Programming Languages: </strong>
        <div style="color: #555;">
          ${formData.skills.length > 0 ? formData.skills.join(', ') : 'No skills listed.'}
        </div>
      </div>

      <!-- Tools -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px;">Tools:</strong>
        <div style="color: #555;">
          ${formData.tools.length > 0 ? formData.tools.map(tool => tool.name).join(', ') : 'No tools listed.'}
        </div>
      </div>

      <!-- Others -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px;">Others: </strong>
        <div style="color: #555;">
          ${formData.others.length > 0 ? formData.others.join(', ') : 'No skills listed.'}
        </div>
      </div>

      <!-- Soft Skills -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px;">Soft Skills:</strong>
        <div style="color: #555;">
          ${formData.softSkills.length > 0 ? formData.softSkills.join(', ') : 'No soft skills listed.'}
        </div>
      </div>

      <!-- Languages -->
      <div style="display: flex; margin-bottom: 6px;">
        <strong style="margin-right: 5px;">Languages:</strong>
        <div style="color: #555;">
          ${formData.languages.length > 0 ? formData.languages.join(', ') : 'No languages listed.'}
        </div>
      </div>

    </div>
  </div>
</section>


<!-- Section: Experience -->
<section style="margin-bottom: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px; margin: 0px;">Experience</h3>
  ${(formData.experience || []).map(exp => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin: 0px;">
      <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
        ${exp.jobTitle || 'Job Title'} @ ${exp.organization || 'Organization Name'} 
        <span style="font-size: 14px; color: #aaa;">(${exp.location || 'Location (City, Country)'} | ${exp.dates || 'Year Range'})</span>
      </h4>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Key Responsibilities and Achievements:</strong> 
        ${(Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 ? exp.responsibilities.join(', ') : 'Responsibilities and achievements not listed')}
      </p>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Relevant Projects/Contributions:</strong> 
        ${(Array.isArray(exp.projects) && exp.projects.length > 0 ? exp.projects.join(', ') : 'No projects listed')}
      </p>
    </div>
  `).join('') || '<p style="font-size: 15px; color: #555;">No experience listed.</p>'}
</section>


<!-- Section: Education -->
<section style="margin-bottom: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px; margin: 0px;">Education</h3>
  ${(formData.education || []).map(edu => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin: 0px;">
      <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
        ${edu.degree || 'Degree'} @ ${edu.institution || 'Institution Name'} 
        <span style="font-size: 14px; color: #aaa;">(${edu.location || 'Location (City, Country)'} | ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'})</span>
      </h4>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Thesis/Dissertation Topic:</strong> 
        ${edu.thesis || 'No thesis or dissertation topic listed'}
      </p>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Percentage/Grade:</strong> 
        ${edu.percentage || 'Percentage not provided'}
      </p>
    </div>
  `).join('') || '<p style="font-size: 15px; color: #555;">No education listed.</p>'}
</section>

   <!-- Section: Research and Projects -->
<section style="margin-bottom: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px; margin: 0px;">Research and Projects</h3>
  ${(formData.projects || []).map(project => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin: 0px;">
      <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
        ${project.title || 'Project Title'}
      </h4>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Brief Description:</strong> 
        ${project.description || 'Brief description of the project not provided.'}
      </p>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Role in Project:</strong> 
        ${project.role || 'Role not specified.'}
      </p>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Tools/Technologies Used:</strong> 
        ${project.tools || 'Tools/technologies not listed.'}
      </p>
      ${project.link ? `
        <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
          <strong>Link to Project:</strong> 
          <a href="${project.link}" target="_blank" style="color: #007bff; text-decoration: underline;">
            ${project.link}
          </a>
        </p>
      ` : ''}
    </div>
  `).join('') || '<p style="font-size: 15px; color: #555;">No research or projects listed.</p>'}
</section>
     
<!-- Section: Certifications & Licenses -->
<section style="margin-bottom: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px; margin: 0px;">Certifications & Licenses</h3>
  ${(formData.certifications || []).map(certification => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin: 0px;">
      <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
        ${certification.name || 'Certification Name'}
      </h4>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Issuing Organization:</strong> 
        ${certification.organization || 'Issuing organization not provided.'}
      </p>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Issued Date:</strong> 
        ${certification.issuedDate || 'Issued date not provided.'}
      </p>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Expiration Date:</strong> 
        ${certification.expirationDate || 'No expiration date.'}
      </p>
    </div>
  `).join('') || '<p style="font-size: 15px; color: #555;">No certifications or licenses listed.</p>'}
</section>

<!-- Section: Publications -->
<section style="margin-bottom: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px; margin: 0px;">Publications</h3>
  ${(formData.publications || []).map(pub => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin: 0px;">
      <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
        ${pub.title || 'Title of Publication'}
      </h4>
      ${pub.authors ? `
        <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
          <strong>Authors:</strong> ${pub.authors}
        </p>` : ''}
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Publication Date:</strong> 
        ${pub.date || 'Publication date not provided.'}
      </p>
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Journal/Conference Name:</strong> 
        ${pub.journal || 'Journal/conference name not provided.'}
      </p>
      ${pub.link ? `
        <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
          <strong>Link to Publication:</strong> 
          <a href="${pub.link}" target="_blank" style="color: #007bff; text-decoration: underline;">
            ${pub.link}
          </a>
        </p>
      ` : ''}
    </div>
  `).join('') || '<p style="font-size: 15px; color: #555;">No publications listed.</p>'}
</section>

<!-- Section: Awards & Honors -->
<section style="margin-bottom: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px; margin: 0px;">Awards & Honors</h3>
  ${(formData.awards || []).map(award => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin: 0px;">
      <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
        ${award.title || 'Award Title'}
      </h4>
      ${award.body ? `
        <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
          <strong>Awarding Body:</strong> ${award.body}
        </p>` : ''}
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Date Received:</strong> 
        ${award.dateReceived || 'Date not provided.'}
      </p>
      ${award.description ? `
        <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
          <strong>Description:</strong> ${award.description}
        </p>` : ''}
    </div>
  `).join('') || '<p style="font-size: 15px; color: #555;">No awards or honors listed.</p>'}
</section>

 <!-- Section: Professional Memberships -->
<section style="margin-bottom: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px; margin: 0px;">Professional Memberships</h3>
  ${(formData.memberships || []).map(membership => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin: 0px;">
      <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
        ${membership.organization || 'Organization Name'}
      </h4>
      ${membership.role ? `
        <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
          <strong>Role:</strong> ${membership.role}
        </p>` : ''}
      <p style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 4px;">
        <strong>Membership Dates:</strong> 
        ${membership.dates || 'Dates not provided.'}
      </p>
    </div>
  `).join('') || '<p style="font-size: 15px; color: #555;">No professional memberships listed.</p>'}
</section>
      
<!-- Section: Hobbies & Interests -->
<section style="margin-bottom: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 0px;">Hobbies & Interests</h3>
  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    ${(formData.hobbies || []).map((hobby, index) => `
      <div style="flex: 1 1 calc(33.33% - 20px); padding-bottom: 2px;">
        <span style="font-size: 15px; color: #555; margin: 0px; margin-bottom: 0px;">
          ${hobby || 'Hobby not specified'}
        </span>
      </div>
    `).join('') || '<p style="font-size: 15px; color: #555;">No hobbies listed.</p>'}
  </div>
</section>

      </div>
    </div>
  `;
}else if (templateType === 4) {
  const imageURL = croppedImage || (formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/140');

  return `
    <!-- Top Flex: Name, Profile, and Job Title -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; height: auto; width: 100%; padding: 10px; box-sizing: border-box; margin-right: 40px; background-color: #ddd; border-radius: 15px;">
      
      <!-- Left Side: Name and Job Title -->
      <div style="flex: 0 0 60%; display: flex; flex-direction: column;">
        <h1 style="font-size: 30px; font-weight: bold; font-family: Arial, sans-serif; margin: 0; letter-spacing: 4px; padding-left: 30px; padding-top: 20px;">
          ${formData.firstName || 'JOHN'} ${formData.lastName || 'SMITH'}
        </h1>
        <h2 style="font-size: 22px; font-family: Arial, sans-serif; margin: 0; letter-spacing: 2px; padding-bottom: 9px; padding-left: 30px;">
          ${formData.jobTitle || 'IT Project Manager'}
        </h2>
      </div>

      <!-- Right Side: Profile Picture -->
      <div style="flex: 0 0 40%; display: flex; justify-content: flex-end; padding-right: 30px;">
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; background-color: #ddd;">
          <img src="${imageURL}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover; object-position: top;">
        </div>
      </div>
    </div>

    <!-- Main Flex: Content Section -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%; padding: 20px 10px; box-sizing: border-box;">
      
      <!-- Left Side: Personal Information, Skills, and Education -->
      <div style="flex: 0 0 50%; padding-right: 20px;">
        
        <!-- Personal Information -->
        <div style="margin-bottom: 20px;">
          <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">PERSONAL INFORMATION</h3>
          <p style="font-size: 14px; margin: 0; color:black;">${formData.address || '123 Main St, City, State, ZIP'}</p>
          <p style="font-size: 14px; margin: 0; color:black;">${formData.phone || '(123) 456-7890'}</p>
          <p style="font-size: 14px; margin: 0; color:black;">${formData.email || 'email@example.com'}</p>
          <p style="font-size: 14px; margin: 0; color:black;">${formData.linkedin || 'linkedin.com/in/username'}</p>
        </div>


  <!-- Education Section -->
<div>
  <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">EDUCATION</h3>
  ${formData.education.length > 0 ? formData.education.map(edu => `
    <div style="margin-bottom: 10px;">
      <p style="font-size: 14px; margin: 0; color:black;">
        <strong>${edu.level || 'Level not provided'}</strong> - ${edu.institution || 'Institution not provided'}
      </p>
      ${edu.level === 'Class 10th' ? `
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Medium: ${edu.medium || 'Medium not provided'}</p>
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Year: ${edu.endYear || 'End Year not provided'}</p>
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
      ` : edu.level === 'Class 12th' ? `
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Board: ${edu.board || 'Board not provided'}</p>
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Medium: ${edu.medium || 'Medium not provided'}</p>
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Years: ${edu.startYear || 'Start Year not provided'} - ${edu.endYear || 'End Year not provided'}</p>
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
      ` : `
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Years: ${edu.startYear || 'Start Year not provided'} - ${edu.endYear || 'End Year not provided'}</p>
        <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
        ${edu.level === 'Postgraduate' || edu.level === 'Graduate' ? `<p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Thesis: ${edu.thesis || 'Thesis not provided'}</p>` : ''}
      `}
    </div>
  `).join('') : `<p>No education details provided.</p>`}
</div>




        <!-- Skills Section -->
        <div style="margin-bottom: 10px;">
          <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">SKILLS</h3>
          ${(formData.skills || []).map(skill => `
            <p style="font-size: 14px; margin: 0; color:black;">&#8226; ${skill || 'Skill'}</p>
          `).join('')}
        </div>

        <!-- Tools Section -->
        <div style="margin-bottom: 10px;">
          <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">TOOLS</h3>
          ${(formData.tools || []).map(tool => `
            <p style="font-size: 14px; margin: 0; color:black;">&#8226; ${tool.name || 'tools'}</p>
          `).join('')}
        </div>

        <!-- Others Section -->
        <div style="margin-bottom: 10px;">
          <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">OTHERS</h3>
          ${(formData.others || []).map(other => `
            <p style="font-size: 14px; margin: 0; color:black;">&#8226; ${other || 'Prompt Design'}</p>
          `).join('')}
        </div>

        <!-- SOFTSKILLS Section -->
        <div style="margin-bottom: 10px;">
          <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">SOFT SKILLS</h3>
          ${(formData.softSkills || []).map(softSkill => `
            <p style="font-size: 14px; margin: 0; color:black;">&#8226; ${softSkill || 'tools'}</p>
          `).join('')}
        </div>

        <!-- Languages Section -->
        <div style="margin-bottom: 10px;">
          <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">LANGUAGES</h3>
          ${(formData.languages || []).map(language => `
            <p style="font-size: 14px; margin: 0; color:black;">&#8226; ${language || 'tools'}</p>
          `).join('')}
        </div>

        <!-- Languages Section -->
        <div style="margin-bottom: 10px;">
          <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">HOBBIES</h3>
          ${(formData.hobbies || []).map(hobbie => `
            <p style="font-size: 14px; margin: 0; color:black;">&#8226; ${hobbie || 'tools'}</p>
          `).join('')}
        </div>


      </div>

      <!-- Right Side: About Me, Experience, and Projects -->
      <div style="flex: 0 0 50%; padding-left: 20px;">

        <!-- About Me Section -->
        <div style="margin-bottom: 20px;">
          <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">ABOUT ME</h3>
          <p style="font-size: 14px; line-height: 1.5; margin: 0; color:black;">${formData.summary || 'This is a placeholder for your summary content.'}</p>
        </div>

      
<!-- Experience Section -->
<div style="margin-bottom: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">EXPERIENCE</h3>
  ${(formData.experience || []).map(exp => `
    <div style="margin-bottom: 10px;">
      <p style="font-size: 14px; margin: 0; color: black;">
        <strong>${exp.jobTitle || 'Job Title'}</strong> - ${exp.organization || 'Organization Name'}
        (${exp.dates || 'Year Range'})
      </p>
      <p style="font-size: 14px; margin: 0; color: black;">
        Location: ${exp.location || 'Location'}
      </p>
      
      <!-- Responsibilities -->
      <ul style="margin: 0; padding-left: 20px;">
        ${(exp.responsibilities || []).map(responsibility => `
          <li style="font-size: 14px; margin: 0; color: black;">
            ${responsibility || 'Responsibility/Achievement'}
          </li>
        `).join('')}
      </ul>
      
      <!-- Projects -->
      <ul style="margin: 0; padding-left: 20px;">
        ${(exp.projects || []).map(project => `
          <li style="font-size: 14px; margin: 0; color: black;">
            ${project || 'Project or Contribution'}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('')}
</div>

<!-- Research and Projects Section -->
<div style="margin-bottom: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">RESEARCH AND PROJECTS</h3>
  ${(formData.projects || []).map(project => `
    <div style="margin-bottom: 10px;">
      <!-- Project Title -->
      <p style="font-size: 16px; font-weight: bold; color: black; margin: 0;">
        ${project.title || 'Project Title'}
      </p>
      
      <!-- Brief Description -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        ${project.description || 'Brief Description (focus on scope and impact)'}
      </p>
      
      <!-- Role in Project -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Role:</strong> ${project.role || 'Role in Project (e.g., Lead Researcher)'}
      </p>
      
      <!-- Tools/Technologies Used -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Tools/Technologies:</strong> ${project.tools || 'Tools/Technologies Used'}
      </p>
      
      <!-- Link to Project (if applicable) -->
      ${project.link ? `
        <p style="font-size: 14px; color: black; margin: 5px 0;">
          <strong>Link:</strong> <a href="${project.link}" style="color: blue;" target="_blank">${project.link}</a>
        </p>
      ` : ''}
    </div>
  `).join('')}
</div>

<!-- Certifications Section -->
<div style="margin-bottom: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">CERTIFICATIONS & LICENSES</h3>
  ${(formData.certifications || []).map(certification => `
    <div style="margin-bottom: 10px;">
      <!-- Certification Name -->
      <p style="font-size: 16px; font-weight: bold; color: black; margin: 0;">
        ${certification.name || 'Certification Name'}
      </p>
      
      <!-- Issuing Organization -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Issuing Organization:</strong> ${certification.organization || 'Issuing Organization'}
      </p>
      
      <!-- Issued Date -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Issued Date:</strong> ${certification.issuedDate || 'Issued Date'}
      </p>
      
      <!-- Expiration Date (if applicable) -->
      ${certification.expirationDate ? `
        <p style="font-size: 14px; color: black; margin: 5px 0;">
          <strong>Expiration Date:</strong> ${certification.expirationDate}
        </p>
      ` : ''}
    </div>
  `).join('')}
</div>

<!-- Publications Section -->
<div style="margin-bottom: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">PUBLICATIONS</h3>
  ${(formData.publications || []).map(publication => `
    <div style="margin-bottom: 10px;">
      <!-- Title of Publication -->
      <p style="font-size: 16px; font-weight: bold; color: black; margin: 0;">
        ${publication.title || 'Title of Publication'}
      </p>
      
      <!-- Authors (optional) -->
      ${publication.authors ? `
        <p style="font-size: 14px; color: black; margin: 5px 0;">
          <strong>Authors:</strong> ${publication.authors}
        </p>
      ` : ''}

      <!-- Publication Date -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Publication Date:</strong> ${publication.date || 'Publication Date'}
      </p>
      
      <!-- Journal/Conference Name -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Journal/Conference Name:</strong> ${publication.journal || 'Journal/Conference Name'}
      </p>
      
      <!-- Link to Publication (if applicable) -->
      ${publication.link ? `
        <p style="font-size: 14px; color: blue; margin: 5px 0;">
          <strong>Link:</strong> <a href="${publication.link}" style="color: blue;" target="_blank">${publication.link}</a>
        </p>
      ` : ''}
    </div>
  `).join('')}
</div>

<!-- Awards & Honors Section -->
<div style="margin-bottom: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">AWARDS & HONORS</h3>
  ${(formData.awards || []).map(award => `
    <div style="margin-bottom: 10px;">
      <!-- Award Title -->
      <p style="font-size: 16px; font-weight: bold; color: black; margin: 0;">
        ${award.title || 'Award Title'}
      </p>
      
      <!-- Awarding Body -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Awarding Body:</strong> ${award.body || 'Awarding Body'}
      </p>
      
      <!-- Date Received -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Date Received:</strong> ${award.dateReceived || 'Date Received'}
      </p>
      
      <!-- Description (optional) -->
      ${award.description ? `
        <p style="font-size: 14px; color: black; margin: 5px 0;">
          <strong>Description:</strong> ${award.description}
        </p>
      ` : ''}
    </div>
  `).join('')}
</div>

 <!-- Professional Memberships Section -->
<div style="margin-bottom: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">PROFESSIONAL MEMBERSHIPS</h3>
  ${(formData.memberships || []).map(membership => `
    <div style="margin-bottom: 10px;">
      <!-- Organization Name -->
      <p style="font-size: 16px; font-weight: bold; color: black; margin: 0;">
        ${membership.organization || 'Organization Name (e.g., IEEE, ACM)'}
      </p>
      
      <!-- Membership Role -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Role:</strong> ${membership.role || 'Membership Role (e.g., Member, Board Member)'}
      </p>
      
      <!-- Membership Dates -->
      <p style="font-size: 14px; color: black; margin: 5px 0;">
        <strong>Membership Dates:</strong> ${membership.dates || 'Dates (e.g., Jan 2020 - Present)'}
      </p>
    </div>
  `).join('')}
</div>
       



      </div>
    </div>
  `;
}else if (templateType === 5) {
  return `
    <div style="display: flex; flex-direction: column; height: 100%; color: #000; margin-left: 20px; margin-right: 20px;">

      <!-- Name Section (Left-Aligned, Large Font) -->
      <div style="display: flex; justify-content: flex-start; align-items: center; background-color: #778eb8c4 margin-bottom: 5px; padding-top: 15px;">
        <h1 style="text-align: left; margin: 0; color: #000;" font-size: 32px; flex: 1;">${formData.firstName || 'John'} ${formData.lastName || 'Smith'}</h1>
      </div>

      <!-- Contact Information Section -->
      <div style="background-color: #fff; margin-bottom: 7px;  justify-content: space-between; align-items: flex-start; color: black;">

        <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 5px 0;">
  <!-- Left Side (Email, Mobile) -->
  <div style="display: flex; flex-direction: column; flex: 1; padding: 5px;">
    <div style="display: flex; justify-content: flex-start; margin-bottom: 5px;">
      <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;">
        <span style="color: #000;">Email:</span>
      </p>
      <p style="margin: 0; color: #3a4f74c4; font-weight: 500; margin-left: 5px;">
        ${email || 'email@example.com'}
      </p>
    </div>
    <div style="display: flex; justify-content: flex-start; margin-bottom: 5px;">
      <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;">
        <span style="color: #000;">Mobile:</span>
      </p>
      <p style="margin: 0; color: #333; font-weight: 500; margin-left: 5px;">
        ${phone || '(123) 456-7890'}
      </p>
    </div>
  </div>

  <!-- Right Side (LinkedIn, GitHub) -->
  <div style="display: flex; flex-direction: column; flex: 1; padding: 5px;">
    <div style="display: flex; justify-content: flex-end; margin-bottom: 5px;">
      <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px; text-align: right;">
        <span style="color: #000;">LinkedIn:</span>
      </p>
      <p style="margin: 0; color: #3a4f74c4; font-weight: 500; margin-left: 5px;">
        <a href="${linkedin || '#'}" target="_blank" style="color: #3a4f74c4; text-decoration: none;">
          ${linkedin || 'linkedin.com/in/username'}
        </a>
      </p>
    </div>
    <div style="display: flex; justify-content: flex-end; margin-bottom: 5px;">
      <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px; text-align: right;">
        <span style="color: #000;">GitHub:</span>
      </p>
      <p style="margin: 0; color: #3a4f74c4; font-weight: 500; margin-left: 5px;">
        <a href="${Github || '#'}" target="_blank" style="color: #3a4f74c4; text-decoration: none;">
          ${Github || 'github.com/username'}
        </a>
      </p>
    </div>
  </div>
</div>


          <!-- Horizontal Line -->
      <hr style="border: 0; height: 2px; background-color: #121111; margin: 2px 0; margin-left: 12px; margin-right: 12px;" />
      <!-- Horizontal Line -->
      <hr style="border: 0; height: 2px; background-color: #121111; margin: 0px 0; margin-left: 12px; margin-right: 12px;" />
        </div>

        <!-- Summary Section -->
      <div style="color: #000; margin-bottom: 5px;">
        <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">OBJECTIVE :</h3>
        <p style="margin: 0; color: black;">${summary || 'This is a summary of the applicant’s experience, skills, and other key information.'}</p>
      </div>

     <!-- Education Section -->
<div style="margin-bottom: 15px;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; margin-bottom: 10px; color: black;">
    EDUCATION DETAILS :
  </h3>

  <!-- Table for Education -->
  <table style="width: 100%; border-collapse: collapse; color: black;">
    <!-- Table Header -->
    <thead>
      <tr style="border: 1px solid black;">
        <th style="padding: 8px; border: 1px solid black;">Qualification / Board</th>
        <th style="padding: 8px; border: 1px solid black;">Institute</th>
        <th style="padding: 8px; border: 1px solid black;">Percentage</th>
        <th style="padding: 8px; border: 1px solid black;">Year Of Passing</th>
      </tr>
    </thead>

    <!-- Table Body with Dynamic Data -->
    <tbody>
      ${formData.education.length > 0 ? formData.education.map(edu => `
        <tr style="border: 1px solid black;">
          <td style="padding: 8px; border: 1px solid black;">${edu.level || 'Degree not provided'}</td>
          <td style="padding: 8px; border: 1px solid black;">
            ${edu.level === 'Class 10th' ? edu.schoolName : edu.institution || 'Institute not provided'}
          </td>
          <td style="padding: 8px; border: 1px solid black;">
            ${edu.percentage || 'Percentage not provided'}
          </td>
          <td style="padding: 8px; border: 1px solid black;">
            ${edu.level === 'Class 10th' ? edu.endYear : `${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}`}
          </td>
        </tr>
      `).join('') : '<tr><td colspan="4" style="padding: 8px; text-align: center; border: 1px solid black;">No education listed.</td></tr>'}
    </tbody>
  </table>
</div>

<!-- Experience Section-->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">INTERNSHIP :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${formData.experience && formData.experience.length > 0 
        ? formData.experience.map(exp => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${exp.jobTitle || 'Position not provided'}</strong> 
              | ${exp.organization || 'Organization not provided'} 
              (${exp.location || 'Location not provided'}) 
              ${exp.dates ? `- ${exp.dates}` : ''}
            </p>
            <ul style="margin: 0; padding-left: 20px;">
              ${
                Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 
                  ? exp.responsibilities.map(point => `
                    <li style="margin: 0; color: black;">${point || 'Responsibility not provided'}</li>
                  `).join('') 
                  : '<li style="color: black;">No responsibilities listed.</li>'
              }
            </ul>

            <p style="margin: 0; color: black;"><strong>Projects:</strong></p>
            <ul style="margin: 0; padding-left: 20px;">
              ${
                Array.isArray(exp.projects) && exp.projects.length > 0 
                  ? exp.projects.map(proj => `
                    <li style="margin: 0; color: black;">${proj || 'Project not provided'}</li>
                  `).join('') 
                  : '<li style="color: black;">No projects listed.</li>'
              }
            </ul>
          </div>
        `).join('')
        : '<p style="color: black;">No experience listed.</p>'
    }
  </div>
</div>

<!-- Research and projects -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">RESEARCH AND PROJECTS :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.projects && formData.projects.length > 0 
        ? formData.projects.map(project => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${project.title || 'Project Title not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;">${project.description || 'Description not provided'}</p>
            <p style="margin: 0; color: black;"><strong>Role:</strong> ${project.role || 'Role not provided'}</p>
            <p style="margin: 0; color: black;"><strong>Tools/Technologies:</strong> ${project.tools || 'Tools/Technologies not provided'}</p>
            ${
              project.link 
                ? `<p style="margin: 0; color: black;"><a href="${project.link}" target="_blank" style="color: #007bff;">Project Link</a></p>`
                : '<p style="margin: 0; color: black;">No link provided</p>'
            }
          </div>
        `).join('')
        : '<p style="color: black;">No research or projects listed.</p>'
    }
  </div>
</div>
       
<!-- Certificates Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">CERTIFICATIONS & LICENSES :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.certifications && formData.certifications.length > 0 
        ? formData.certifications.map(certification => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${certification.name || 'Certification Name not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;"><strong>Issuing Organization:</strong> ${certification.organization || 'Organization not provided'}</p>
            <p style="margin: 0; color: black;">
              <strong>Issued Date:</strong> ${certification.issuedDate || 'Not provided'}
            </p>
            <p style="margin: 0; color: black;">
              <strong>Expiration Date:</strong> ${certification.expirationDate || 'No expiration'}
            </p>
          </div>
        `).join('')
        : '<p style="color: black;">No certifications or licenses listed.</p>'
    }
  </div>
</div>

<!-- PUblication Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">PUBLICATIONS :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.publications && formData.publications.length > 0
        ? formData.publications.map(publication => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${publication.title || 'Publication Title not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;"><strong>Authors:</strong> ${publication.authors || 'Authors not provided'}</p>
            <p style="margin: 0; color: black;">
              <strong>Publication Date:</strong> ${publication.date || 'Not provided'}
            </p>
            <p style="margin: 0; color: black;">
              <strong>Journal/Conference:</strong> ${publication.journal || 'Journal/Conference not provided'}
            </p>
            ${
              publication.link 
                ? `<p style="margin: 0; color: #007bff;"><a href="${publication.link}" target="_blank" style="color: #007bff;">View Publication</a></p>`
                : '<p style="margin: 0; color: black;">No link provided</p>'
            }
          </div>
        `).join('')
        : '<p style="color: black;">No publications listed.</p>'
    }
  </div>
</div>

<!-- Awards Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">AWARDS & HONORS :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.awards && formData.awards.length > 0
        ? formData.awards.map(award => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${award.title || 'Award Title not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;"><strong>Awarding Body:</strong> ${award.body || 'Awarding Body not provided'}</p>
            <p style="margin: 0; color: black;">
              <strong>Date Received:</strong> ${award.dateReceived || 'Date not provided'}
            </p>
            <p style="margin: 0; color: black;">
              <strong>Description:</strong> ${award.description || 'No description provided'}
            </p>
          </div>
        `).join('')
        : '<p style="color: black;">No awards or honors listed.</p>'
    }
  </div>
</div>

<!-- Proffessional Members Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">PROFESSIONAL MEMBERSHIPS :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.memberships && formData.memberships.length > 0
        ? formData.memberships.map(membership => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${membership.organization || 'Organization not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;"><strong>Role:</strong> ${membership.role || 'Role not provided'}</p>
            <p style="margin: 0; color: black;">
              <strong>Membership Dates:</strong> ${membership.dates || 'Dates not provided'}
            </p>
          </div>
        `).join('')
        : '<p style="color: black;">No professional memberships listed.</p>'
    }
  </div>
</div>

<!-- Technical Skills -->
        <div style="margin-bottom: 5px; color: black;">
          <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">TECHNICAL SKILLS :</h3>
          <div style="display: flex; flex-direction: column; margin-top: 5px;">
            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 8px;">Programming Languages: </strong>
              <div style="color: black;">
                ${formData.skills.length > 0 ? formData.skills.join(', ') : 'No skills listed.'}
              </div>
            </div>
            
            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 8px;">Tools:</strong>
              <div style="color: black;">
                ${formData.tools.length > 0 ? formData.tools.map(tool => tool.name).join(', ') : 'No tools listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 8px;">Others: </strong>
              <div style="color: black;">
                ${formData.others.length > 0 ? formData.others.join(', ') : 'No skills listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 8px;">Soft Skills:</strong>
              <div style="color: black;">
                ${formData.softSkills.length > 0 ? formData.softSkills.join(', ') : 'No soft skills listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 0px;">Languages:</strong>
              <div style="color: black;">
                ${formData.languages.length > 0 ? formData.languages.join(', ') : 'No soft skills listed.'}
              </div>
            </div>
          </div>
        </div>

<!-- Hobbies Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">HOBBIES & INTERESTS :</h3>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
    ${
      formData.hobbies && formData.hobbies.length > 0
        ? formData.hobbies.map(hobby => `
            <div style="flex: 1 1 30%; min-width: 150px; padding: 5px; background-color: #f8f9fa; border: 1px solid #ddd; color: black; text-align: center;">
              ${hobby || 'Hobby not provided'}
            </div>
          `).join('')
        : '<p style="color: black;">No hobbies or interests listed.</p>'
    }
  </div>
</div>



      </div>


`;
}else if (templateType === 6) {
  return `
    <!-- Resume Template -->
<div style="display: flex; height: 100%; width: 100%; box-sizing: border-box; margin-left: 20px; margin-right: 20px;">

<!-- Left side content -->
<div style="flex: 1; padding: 20px; background-color: #4b5d67; color: white; min-height: 1120px; box-sizing: border-box;">
  
  <!-- Full Name and Job Title -->
<h1 style="font-size: 32px; font-weight: 700; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-top: 30px; margin-bottom: 3px; color: white; text-align: left;">
${formData.firstName || 'JOHN'} ${formData.lastName || 'SMITH'}
</h1>
<h2 style="font-size: 24px; font-weight: 400; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 5px 0; color: white; text-align: left;">
${formData.jobTitle || 'IT Project Manager'}
</h2>


  <!-- Personal Information -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: lightwhite; padding: 0px;">PERSONAL INFO</label>
    <div style="margin: 0;">
      <strong style="color: white;">Address:</strong><br>
      <span style="font-size: 14px; color: white;">${formData.address || '123 Main St, City, State, ZIP'}</span>
    </div>
    <div style="margin: 0;">
      <strong style="color: white;">Phone:</strong><br>
      <span style="font-size: 14px; color: white;">${formData.phone || '(123) 456-7890'}</span>
    </div>
    <div style="margin: 0;">
      <strong style="color: white;">Email:</strong><br>
      <span style="font-size: 14px; color: white;">${formData.email || 'email@example.com'}</span>
    </div>
    <div style="margin: 0;">
      <strong style="color: white;">LinkedIn:</strong><br>
      <span style="font-size: 14px; color: white;">${formData.linkedin || 'linkedin.com/in/username'}</span>
    </div>
  </div>

  <!-- Skills Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: white;">SKILLS</label>
    <div style="margin-top: 10px;">
      ${(formData.skills || []).map(skill => `
        <div style="font-size: 14px; color: white;">
          - ${skill || 'Skill'}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Languages Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: white;">LANGUAGES</label>
    <div style="margin-top: 10px;">
      ${(formData.languages || []).map(lang => `
        <div style="font-size: 14px; color: white;">
          - ${lang || 'Language'}
        </div>
      `).join('')}
    </div>
  </div>


  <!-- Hobbies Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: white;">HOBBIES</label>
    <div style="margin-top: 10px;">
      ${(formData.hobbies || []).map(hobbies => `
        <div style="font-size: 14px; color: white;">
          - ${hobbies || 'Cricket'}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Tools Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: white;">TOOLS</label>
    <div style="margin-top: 10px;">
      ${(formData.tools || []).map(tool => `
        <div style="font-size: 14px; color: white;">
          - ${tool || 'Cricket'}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- OTHERS Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: white;">OTHERS</label>
    <div style="margin-top: 10px;">
      ${(formData.others || []).map(other => `
        <div style="font-size: 14px; color: white;">
          - ${other || 'Prompt design'}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- SOFTSKILLS Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: white;">SOFT SKILLS</label>
    <div style="margin-top: 10px;">
      ${(formData.softSkills || []).map(softSkill => `
        <div style="font-size: 14px; color: white;">
          - ${softSkill || 'Prompt design'}
        </div>
      `).join('')}
    </div>
  </div>

</div>

<!-- Right side content -->
<div style="flex: 2; padding: 0; background-color: white; color: black;">
  
<!-- Education Section -->
<div style="margin-top: 20px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">EDUCATION</h3>
  ${formData.education.map(edu => `
    <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px 0; background-color: #f9f9f9;">
      <div style="font-size: 16px; font-weight: bold; color: #333;">
        ${edu.level || 'Degree Level'}
      </div>
      <div style="font-size: 14px; color: #555;">
        <strong>Institute:</strong> ${edu.institution || 'Institution Name'}<br>
        <strong>Location:</strong> ${edu.location || 'Location (City, Country)'}<br>
        <strong>Duration:</strong> ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}<br>
        <strong>CPI:</strong> ${edu.percentage || 'CPI Not Provided'}<br>
        ${edu.level === 'Postgraduate' || edu.level === 'Graduate' ? `
          <strong>Degree:</strong> ${edu.course || 'Degree'}<br>
          <strong>Thesis Topic:</strong> ${edu.thesis || 'Thesis/Dissertation Topic'}
        ` : ''}
        ${edu.level === 'Class 12th' ? `
          <strong>Board:</strong> ${edu.board || 'Board'}<br>
          <strong>Medium:</strong> ${edu.medium || 'Medium'}
        ` : ''}
        ${edu.level === 'Class 10th' ? `
          <strong>Medium:</strong> ${edu.medium || 'Medium'}
        ` : ''}
      </div>
    </div>
  `).join('')}
</div>

<!-- Experience Section -->
<div style="margin-top: 10px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">EXPERIENCE</h3>
  ${formData.experience.map(exp => `
    <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px 0; background-color: #f9f9f9;">
      <div style="font-size: 16px; font-weight: bold; color: #333;">
        ${exp.jobTitle || 'Job Title'}
      </div>
      <div style="font-size: 14px; color: #555;">
        <strong>Organization:</strong> ${exp.organization || 'Organization Name'}<br>
        <strong>Location:</strong> ${exp.location || 'Location (City, Country)'}<br>
        <strong>Employment Dates:</strong> ${exp.dates || 'Month, Year – Month, Year'}<br>
      </div>
      <div style="margin: 0;">
        <strong style="margin: 0;">Key Responsibilities and Achievements:</strong>
        <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
          ${exp.responsibilities.map(responsibility => `
            <li style="font-size: 14px; color: #555; margin: 0;">${responsibility || 'Responsibility or Achievement'}</li>
          `).join('')}
        </ul>
      </div>
      <div style="margin: 0;">
        <strong style="margin: 0;">Relevant Projects/Contributions:</strong>
        <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
          ${exp.projects.map(project => `
            <li style="font-size: 14px; color: #555; margin: 0;">${project || 'Project or Contribution'}</li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('')}
</div>

<!-- Research and Projects Section -->
<div style="margin-top: 10px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">RESEARCH AND PROJECTS</h3>
  
  ${formData.projects.map(project => `
    <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px 0; background-color: #f9f9f9;">
      <div style="font-size: 16px; font-weight: bold; color: #333;">
        ${project.title || 'Project Title'}
      </div>
      <div style="font-size: 14px; color: #555;">
        <strong>Brief Description:</strong> ${project.description || 'Description of the project, focusing on scope and impact.'}<br>
        <strong>Role in Project:</strong> ${project.role || 'Role in the project (e.g., Lead Researcher)'}<br>
        <strong>Tools/Technologies Used:</strong> ${project.tools || 'List of tools or technologies used'}<br>
        <strong>Link to Project:</strong> <a href="${project.link || '#'}" style="color: blue;">${project.link ? project.link : 'Link not provided'}</a>
      </div>
    </div>
  `).join('')}
</div>

<!-- Certifications & Licenses Section -->
<div style="margin-top: 10px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">CERTIFICATIONS & LICENSES</h3>
  
  ${formData.certifications.map(certification => `
    <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px 0; background-color: #f9f9f9;">
      <div style="font-size: 16px; font-weight: bold; color: #333;">
        ${certification.name || 'Certification Name'}
      </div>
      <div style="font-size: 14px; color: #555;">
        <strong>Issuing Organization:</strong> ${certification.organization || 'Organization Name'}<br>
        <strong>Issued Date:</strong> ${certification.issuedDate || 'Date of Issue'}<br>
        <strong>Expiration Date:</strong> ${certification.expirationDate || 'Expiration Date (if applicable)'}
      </div>
    </div>
  `).join('')}
</div>

<!-- Publications Section -->
<div style="margin-top: 10px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">PUBLICATIONS</h3>
  
  ${formData.publications.map(pub => `
    <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px 0; background-color: #f9f9f9;">
      <div style="font-size: 16px; font-weight: bold; color: #333;">
        ${pub.title || 'Title of Publication'}
      </div>
      <div style="font-size: 14px; color: #555;">
        <strong>Authors:</strong> ${pub.authors || 'Author(s) Name'}<br>
        <strong>Publication Date:</strong> ${pub.date || 'Publication Date'}<br>
        <strong>Journal/Conference Name:</strong> ${pub.journal || 'Journal/Conference Name'}<br>
        <strong>Link to Publication:</strong> <a href="${pub.link || '#'}" style="color: blue;">${pub.link ? pub.link : 'Link not provided'}</a>
      </div>
    </div>
  `).join('')}
</div>

<!-- Awards & Honors Section -->
<div style="margin-top: 10px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">AWARDS & HONORS</h3>
  
  ${formData.awards.map(award => `
    <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px 0; background-color: #f9f9f9;">
      <div style="font-size: 16px; font-weight: bold; color: #333;">
        ${award.title || 'Award Title'}
      </div>
      <div style="font-size: 14px; color: #555;">
        <strong>Awarding Body:</strong> ${award.body || 'Awarding Body Name'}<br>
        <strong>Date Received:</strong> ${award.dateReceived || 'Date Received'}<br>
        <strong>Description/Critera:</strong> ${award.description || 'Description not provided'}
      </div>
    </div>
  `).join('')}
</div>

<!-- Professional Memberships Section -->
<div style="margin-top: 10px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">PROFESSIONAL MEMBERSHIPS</h3>
  
  ${formData.memberships.map(membership => `
    <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px 0; background-color: #f9f9f9;">
      <div style="font-size: 16px; font-weight: bold; color: #333;">
        ${membership.organization || 'Organization Name (e.g., IEEE, ACM)'}
      </div>
      <div style="font-size: 14px; color: #555;">
        <strong>Membership Role:</strong> ${membership.role || 'Membership Role (e.g., Member, Board Member)'}<br>
        <strong>Membership Dates:</strong> ${membership.dates || 'Membership Dates (e.g., Jan 2020 - Present)'}
      </div>
    </div>
  `).join('')}
</div>



</div>
</div>

    `;
}else if (templateType === 7) {
  return `
    <div style="display: flex; flex-direction: column; height: 100%; color: #000; margin-left: 20px; margin-right: 20px;">

      <!-- Name Section (Left-Aligned, Large Font) -->
      <div style="display: flex; justify-content: flex-start; align-items: center; background-color: #fff; margin-bottom: 5px; padding-top: 15px;">
        <h1 style="text-align: left; margin: 0; color: #003366;" font-size: 32px; flex: 1;">${formData.firstName || 'John'} ${formData.lastName || 'Smith'}</h1>
      </div>

      <!-- Contact Information Section -->
      <div style="background-color: #fff; margin-bottom: 5px; display: flex; justify-content: space-between; align-items: flex-start; color: black;">

        <!-- Left Side (LinkedIn, GitHub) -->
        <div style="display: flex; flex-direction: column; flex: 1; padding: 5px 0;">
          <p style="margin: 0; color: #333; font-weight: 500;">${linkedin || 'linkedin.com/in/username'}|Linkedin</p>
          <p style="margin: 0; color: #333; font-weight: 500;">${Github || 'github.com/username'}|Github</p>
        </div>

        <!-- Right Side (Email and Mobile Aligned Left) -->
        <div style="display: flex; flex-direction: column; flex: 1; padding: 0;">
          <div style="display: flex; justify-content: flex-start;">
            <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;"><span style="color: #000;">Email:</span></p>
            <p style="margin: 0; color: #333; font-weight: 500;">${email || 'email@example.com'}</p>
          </div>
          <div style="display: flex; justify-content: flex-start;">
            <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;"><span style="color: #000;">Mobile:</span></p>
            <p style="margin: 0; color: #333; font-weight: 500;">${phone || '(123) 456-7890'}</p>
          </div>
        </div>

      </div>

      <!-- Horizontal Line -->
        <hr style="border: 0; height: 2px; background-color: #121111; margin: 10px 0;" />
  
        <!-- SUMMARY Section -->
        <div style="text-align: center; margin-bottom: 1px; font-size: 18px; font-weight: bold; color: #003366;">
          OBJECTIVE
        </div>
        <p style="margin: 0; color: black;">${summary || 'This is a summary of the applicant’s experience, skills, and other key information.'}</p>

      <!-- Horizontal Line -->
      <hr style="border: 0; height: 2px; background-color: #121111; margin: 10px 0;" />

      <!-- Education Heading Section -->
      <div style="text-align: center; margin-bottom: 1px; font-size: 18px; font-weight: bold; color: #003366;">
        EDUCATION
      </div>

      <!-- Education Section -->
      <div style="background-color: #fff; padding: 10px; color: black;">


        <!-- Top Education Headings -->
<div style="margin-bottom: 0px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; color: black;">
    <p style="flex: 1; margin: 0; color: black;"><strong>Degree</strong></p>
    <p style="flex: 1; margin: 0; color: black;"><strong>Institute</strong></p>
    <p style="flex: 1; margin: 0; color: black;"><strong>Year</strong></p>
    <p style="flex: 1; margin: 0; color: black;"><strong>Percentage</strong></p>
  </div>

  <!-- Education Fields -->
  <div style="display: flex; flex-direction: column; gap: 5px;">
    ${formData.education.length > 0 ? formData.education.map(edu => `
      <div style="display: flex; justify-content: space-between; align-items: center; color: black;">
        <p style="flex: 1; margin: 0; color: black;">${edu.level || 'Degree not provided'}</p>
        <p style="flex: 1; margin: 0; color: black;">${edu.level === 'Class 10th' ? edu.institution || 'School not provided' : edu.institution || 'Institute not provided'}</p>
        <p style="flex: 1; margin: 0; color: black;">${edu.level === 'Class 10th' ? edu.endYear : `${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}`}</p>
        <p style="flex: 1; margin: 0; color: black;">${edu.percentage || 'Percentage not provided'}</p>
      </div>
    `).join('') : '<p style="margin: 0; color: black;">No education listed.</p>'}
  </div>
</div>

      </div>

      

      <!-- Horizontal Line -->
      <hr style="border: 0; height: 2.5px; background-color: #121111; margin: 10px 0; color: #000" />

      <!-- Skills Heading Section -->
      <div style="text-align: center; margin-bottom: 1px; font-size: 18px; font-weight: bold; color: #003366;">
        SKILLS SUMMARY
      </div>

      <!-- Skills Section -->
      <div style="background-color: #fff; padding-left: 10px; padding-top: 3px; color: black;">

      <div style="display: flex; flex-direction: column; margin-top: 0px;">
          <div style="display: flex; margin-bottom: 6px;">
            <strong style="margin-right: 5px;">Programming Languages: </strong>
            <div style="color: black;">
              ${formData.skills.length > 0 ? formData.skills.join(', ') : 'No skills listed.'}
            </div>
          </div>
          
          <div style="display: flex; margin-bottom: 6px;">
            <strong style="margin-right: 5px;">Tools:</strong>
            <div style="color: black;">
              ${formData.tools.length > 0 ? formData.tools.map(tool => tool.name).join(', ') : 'No tools listed.'}
            </div>
          </div>

          <div style="display: flex; margin-bottom: 6px;">
            <strong style="margin-right: 5px;">Others: </strong>
            <div style="color: black;">
              ${formData.others.length > 0 ? formData.others.join(', ') : 'No skills listed.'}
            </div>
          </div>

          <div style="display: flex; margin-bottom: 6px;">
            <strong style="margin-right: 5px;">Soft Skills:</strong>
            <div style="color: black;">
              ${formData.softSkills.length > 0 ? formData.softSkills.join(', ') : 'No soft skills listed.'}
            </div>
          </div>

          <div style="display: flex; margin-bottom: 6px;">
            <strong style="margin-right: 5px;">Languages:</strong>
            <div style="color: black;">
              ${formData.languages.length > 0 ? formData.languages.join(', ') : 'No soft skills listed.'}
            </div>
          </div>

      </div>

      

     
    </div>
    
  `;
}else if (templateType === 8) {
  return `
  <div style="background-color: #ffffff; font-family: Arial, sans-serif; padding: 20px; max-width: 900px; margin: auto; display: flex;">

  <!-- Left Section: Name, Summary, Experience, Education -->
  <div style="width: 60%; padding-right: 20px;">

      <!-- Name and Circle Section -->
<div style="display: flex; align-items: center; margin-bottom: 20px; margin-left: 15px;">
  <div style="background-color: #2c3e50; color: white; width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px;">
      ${formData.firstName ? formData.firstName[0] : 'J'}${formData.lastName ? formData.lastName[0] : 'S'}
  </div>
  <div style="margin-left: 20px;">
      <h1 style="margin: 0; font-size: 22px;">${formData.firstName} ${formData.lastName || 'Smith'}</h1>
      <h2 style="margin: 0; font-size: 18px; color: #555;">${formData.jobTitle || 'IT Project Manager'}</h2>
  </div>
</div>

      <!-- Summary Section -->
      <div style="margin-top: 20px; margin-left: 55px; border-bottom: 4px solid lightblue;">
          <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 0;">
              <img src="${summaryIcon}" alt="summary-icon" style="width: 24px; margin-right: 10px;">
              Summary
          </h3>
          <p style="font-size: 14px; color: #333; margin-left: 20px; display: flex; align-items: center;">
              <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
              ${formData.summary || 'Oversaw all major hospital IT projects for 10+ years, focusing on cost reduction.'}
          </p>
      </div>

      <!-- Experience Section -->
      <div style="margin-left: 55px; border-bottom: 4px solid lightblue;">
  <h3 style="font-size: 20px; display: flex; align-items: center;">
    <img src="${experienceIcon}" alt="experience-icon" style="width: 24px; margin-right: 10px;">
    Experience
  </h3>

  ${formData.experience && formData.experience.length > 0 ? formData.experience.map(exp => `
    <div style="margin-left: 20px; position: relative;">
      <!-- Employment Dates -->
      <p style="font-size: 12px; color: #555; position: absolute; left: -75px; top: 0;">
        ${exp.dates || 'Date not provided'}
      </p>

      <!-- Job Title -->
      <strong style="font-size: 16px; color: #003366;">
        ${exp.jobTitle || 'Job Title not provided'}
      </strong>

      <!-- Organization Name and Location -->
      <p style="font-size: 14px; font-weight: bold; color: #333; display: flex; align-items: center; margin: 0; margin-bottom: 3px;">
        <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
        ${exp.organization || 'Organization not provided'}${exp.location ? `, ${exp.location}` : ''}
      </p>

      <!-- Key Responsibilities and Achievements -->
      ${Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 ? `
        <h6 style="font-size: 14px; color: #003366; margin: 0;">Key Responsibilities and Achievements:</h6>
        <ul style="list-style-type: disc; margin-left: 0px; color: #333; margin-top: 0; margin-bottom: 0;">
          ${exp.responsibilities.map(responsibility => `
            <li style="margin: 0;">${responsibility || 'Responsibility not provided'}</li>
          `).join('')}
        </ul>
      ` : ''}

      <!-- Relevant Projects or Contributions -->
      ${Array.isArray(exp.projects) && exp.projects.length > 0 ? `
        <h6 style="font-size: 14px; color: #003366; margin: 0;">Relevant Projects/Contributions:</h6>
        <ul style="list-style-type: disc; margin-left: 0px; color: #333; margin-top: 0;">
          ${exp.projects.map(project => `
            <li style="margin: 0;">${project || 'Project not provided'}</li>
          `).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('<br>') : '<p style="font-size: 14px; color: #777;">No experience listed.</p>'}
</div>

    <!-- Education Section -->
<div style="margin-top: 10px; margin-left: 55px; border-bottom: 4px solid lightblue; margin-bottom: 2px;">
  <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 5px;">
    <img src="${educationIcon}" alt="education-icon" style="width: 24px; margin-right: 10px;">
    Education
  </h3>
  ${formData.education.length > 0 ? formData.education.map(edu => `
    <div style="margin-left: 20px; margin-bottom: 10px;">
      <div style="display: flex; flex-direction: column; margin-bottom: 5px;">
        <div style="display: flex; align-items: center; margin-bottom: 5px;">
          <strong>${edu.level || 'Level not provided'}</strong>
        </div>

        <!-- Conditional Fields Based on Education Level -->
        ${edu.level === 'Graduate' || edu.level === 'Postgraduate' ? `
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Course:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.course || 'Course not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Institution:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.institution || 'Institution not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Location:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.location || 'Location not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Year:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.startYear || 'Start Year not provided'} - ${edu.endYear || 'End Year not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Percentage:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.percentage || 'Not provided'}</p>
          </div>
        ` : edu.level === 'Class 12th' ? `
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Institution:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.institution || 'Institution not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Location:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.location || 'Location not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Medium:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.medium || 'Medium not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Year:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.startYear || 'Start Year not provided'} - ${edu.endYear || 'End Year not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Percentage:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.percentage || 'Not provided'}</p>
          </div>
        ` : edu.level === 'Class 10th' ? `
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">School:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.institution || 'School not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Medium:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.medium || 'Medium not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">End Year:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.endYear || 'End Year not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Percentage:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.percentage || 'Not provided'}</p>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('') : '<p>No education records available.</p>'}
</div>

<!-- Research and Projects Section -->
<div style="margin-top: 10px; margin-left: 55px; border-bottom: 4px solid lightblue; margin-bottom: 10px;">
  <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 5px;">
    <img src="${projectsIcon}" alt="projects-icon" style="width: 24px; margin-right: 10px;">
    Research and Projects
  </h3>

  ${formData.projects.length > 0 ? formData.projects.map(project => `
    <div style="margin-left: 20px; margin-bottom: 15px;">
      <!-- Project Title -->
      <div style="display: flex; align-items: center; margin-bottom: 5px;">
        <strong style="font-size: 16px; color: #333;">${project.title || 'Project Title Not Provided'}</strong>
      </div>

      <!-- Project Description -->
      <div style="margin-bottom: 5px;">
        <p style="font-size: 14px; color: #333; margin: 0;">${project.description || 'Description not provided.'}</p>
      </div>

      <!-- Role in Project -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 120px; margin: 0; font-size: 14px; color: #333;">Role:</p>
        <p style="margin: 0; font-size: 14px; color: #333;">${project.role || 'Role not specified'}</p>
      </div>

      <!-- Tools/Technologies Used -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 120px; margin: 0; font-size: 14px; color: #333;">Technologies:</p>
        <p style="margin: 0; font-size: 14px; color: #333;">${project.tools || 'Technologies not specified'}</p>
      </div>

      <!-- Link to Project -->
      ${project.link ? `
        <div style="display: flex; align-items: center; margin-bottom: 2px;">
          <p style="width: 120px; margin: 0; font-size: 14px; color: #333;">Project Link:</p>
          <a href="${project.link}" target="_blank" style="font-size: 14px; color: blue; text-decoration: underline;">${project.link}</a>
        </div>
      ` : ''}
    </div>
  `).join('') : '<p>No project records available.</p>'}
</div>


<!-- Certifications & Licenses Section -->
<div style="margin-top: 10px; margin-left: 55px; border-bottom: 4px solid lightblue; margin-bottom: 10px;">
  <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 5px;">
    <img src="${certificateIcon}" alt="certifications-icon" style="width: 24px; margin-right: 10px;">
    Certifications & Licenses
  </h3>

  ${formData.certifications.length > 0 ? formData.certifications.map(certification => `
    <div style="margin-left: 20px; margin-bottom: 15px;">
      <!-- Certification Name -->
      <div style="display: flex; align-items: center; margin-bottom: 5px;">
        <strong style="font-size: 16px; color: #333;">Certification Name:</strong>
        <span style="margin-left: 5px;">${certification.name || 'Certification Name Not Provided'}</span>
      </div>

      <!-- Issuing Organization -->
      <div style="margin-bottom: 5px;">
        <p style="font-size: 14px; color: #333; margin: 0;">
          <strong>Issuing Organization:</strong> ${certification.organization || 'Organization not provided.'}
        </p>
      </div>

      <!-- Issued Date -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 150px; margin: 0; font-size: 14px; color: #333;"><strong>Issued Date:</strong></p>
        <p style="margin: 0; font-size: 14px; color: #333;">${certification.issuedDate || 'Issued Date not specified'}</p>
      </div>

      <!-- Expiration Date -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 150px; margin: 0; font-size: 14px; color: #333;"><strong>Expiration Date:</strong></p>
        <p style="margin: 0; font-size: 14px; color: #333;">${certification.expirationDate || 'Expiration Date not specified'}</p>
      </div>
    </div>
  `).join('') : '<p>No certification records available.</p>'}
</div>


  <!-- Publications Section -->
<div style="margin-top: 10px; margin-left: 55px; border-bottom: 4px solid lightblue; margin-bottom: 10px;">
  <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 5px;">
    <img src="${publicationsIcon}" alt="publications-icon" style="width: 24px; margin-right: 10px;">
    Publications
  </h3>

  ${formData.publications.length > 0 ? formData.publications.map(publication => `
    <div style="margin-left: 20px; margin-bottom: 15px;">
      <!-- Title of Publication -->
      <div style="display: flex; align-items: center; margin-bottom: 5px;">
        <strong style="font-size: 16px; color: #333;">Title of Publication:</strong>
        <span style="margin-left: 5px;">${publication.title || 'Title Not Provided'}</span>
      </div>

      <!-- Authors -->
      <div style="margin-bottom: 5px;">
        <p style="font-size: 14px; color: #333; margin: 0;">
          <strong>Authors:</strong> ${publication.authors || 'Authors not provided.'}
        </p>
      </div>

      <!-- Publication Date -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 150px; margin: 0; font-size: 14px; color: #333;"><strong>Publication Date:</strong></p>
        <p style="margin: 0; font-size: 14px; color: #333;">${publication.date || 'Publication Date not specified'}</p>
      </div>

      <!-- Journal/Conference Name -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 150px; margin: 0; font-size: 14px; color: #333;"><strong>Journal Name:</strong></p>
        <p style="margin: 0; font-size: 14px; color: #333;">${publication.journal || 'Journal/Conference Name not specified'}</p>
      </div>

      <!-- Link to Publication -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 150px; margin: 0; font-size: 14px; color: #333;"><strong>Link to Publication:</strong></p>
        <p style="margin: 0; font-size: 14px; color: #333;"><a href="${publication.link}" target="_blank">${publication.link || 'Link not provided'}</a></p>
      </div>
    </div>
  `).join('') : '<p>No publication records available.</p>'}
</div>

<!-- Awards & Honors Section -->
<div style="margin-top: 10px; margin-left: 55px; border-bottom: 4px solid lightblue; margin-bottom: 10px;">
  <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 5px;">
    <img src="${awardsIcon}" alt="awards-icon" style="width: 24px; margin-right: 10px;">
    Awards & Honors
  </h3>

  ${formData.awards.length > 0 ? formData.awards.map(award => `
    <div style="margin-left: 20px; margin-bottom: 15px;">
      <!-- Award Title -->
      <div style="display: flex; align-items: center; margin-bottom: 5px;">
        <strong style="font-size: 16px; color: #333;">Award Title:</strong>
        <span style="margin-left: 5px;">${award.title || 'Award Title Not Provided'}</span>
      </div>

      <!-- Awarding Body -->
      <div style="margin-bottom: 5px;">
        <p style="font-size: 14px; color: #333; margin: 0;">
          <strong>Awarding Body:</strong> ${award.body || 'Awarding Body not provided.'}
        </p>
      </div>

      <!-- Date Received -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 150px; margin: 0; font-size: 14px; color: #333;"><strong>Date Received:</strong></p>
        <p style="margin: 0; font-size: 14px; color: #333;">${award.dateReceived || 'Date Received not specified'}</p>
      </div>

      <!-- Description or Criteria -->
      <div style="margin-bottom: 5px;">
        <p style="font-size: 14px; color: #333; margin: 0;">
          <strong>Description or Criteria:</strong> ${award.description || 'Description not provided.'}
        </p>
      </div>
    </div>
  `).join('') : '<p>No award records available.</p>'}
</div>

<!-- Professional Memberships Section -->
<div style="margin-top: 10px; margin-left: 55px; border-bottom: 4px solid lightblue; margin-bottom: 10px;">
  <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 5px;">
    <img src="${membershipsIcon}" alt="memberships-icon" style="width: 24px; margin-right: 10px;">
    Professional Memberships
  </h3>

  ${formData.memberships.length > 0 ? formData.memberships.map(membership => `
    <div style="margin-left: 20px; margin-bottom: 15px;">
      <!-- Organization Name -->
      <div style="display: flex; align-items: center; margin-bottom: 5px;">
        <strong style="font-size: 16px; color: #333;">Organization Name:</strong>
        <span style="margin-left: 5px;">${membership.organization || 'Organization Name Not Provided'}</span>
      </div>

      <!-- Membership Role -->
      <div style="margin-bottom: 5px;">
        <p style="font-size: 14px; color: #333; margin: 0;">
          <strong>Membership Role:</strong> ${membership.role || 'Membership Role not provided.'}
        </p>
      </div>

      <!-- Membership Dates -->
      <div style="display: flex; align-items: center; margin-bottom: 2px;">
        <p style="width: 150px; margin: 0; font-size: 14px; color: #333;"><strong>Membership Dates:</strong></p>
        <p style="margin: 0; font-size: 14px; color: #333;">${membership.dates || 'Membership Dates not specified'}</p>
      </div>
    </div>
  `).join('') : '<p>No membership records available.</p>'}
</div>



      
  </div>

  <!-- Right Section: Personal Info, Software, Languages, Skills -->
  <div style="width: 32%; padding-left: 20px; padding: 0px;">
      
    <!-- Personal Info Section -->
    <h3 style="font-size: 20px; margin-bottom: 20px; display: flex; align-items: center;">
        <img src="${personalInfoIcon}" alt="personal-info-icon" style="width: 24px; margin-right: 10px;">
        Personal Info
    </h3>
    <div style="font-size: 14px; color: #333;">
        <div style="margin-bottom: 10px;">
            <strong style="display: block; margin-left: 20px;">Address:</strong>
            <div style="margin-left: 20px;">${formData.address || '134 Rightward Way, Portland, ME, 04019'}</div>
        </div>
        <div style="margin-bottom: 10px;">
            <strong style="display: block; margin-left: 20px;">Phone:</strong>
            <div style="margin-left: 20px;">${formData.phone || '774-987-4009'}</div>
        </div>
        <div style="margin-bottom: 10px;">
            <strong style="display: block; margin-left: 20px;">E-mail:</strong>
            <div style="margin-left: 20px;">${formData.email || 'j.smith@zety.com'}</div>
        </div>
       <div style="margin-bottom: 10px;">
      <strong style="display: block; margin-left: 20px;">LinkedIn:</strong>
      <div style="margin-left: 20px;">
          <a
              href="${formData.linkedin ? `https://${formData.linkedin}` : 'https://linkedin.com/in/johnutw'}"
              target="_blank"
              rel="noopener noreferrer"
              style="color: inherit; text-decoration: none;"
          >
              ${formData.linkedin || 'linkedin.com/in/johnutw'}
          </a>
      </div>
  </div>
    </div>

    <!-- Languages Section -->
    <div style="margin-top: 20px; margin-bottom: 0;">
      <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 0;">
        <img src="${languagesIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
        Languages
      </h3>
      <ul style="font-size: 14px; color: #333;">
        ${formData.languages.length > 0 ? formData.languages.map(language => `<li>${language}</li>`).join('') : '<li>No skills listed.</li>'}
      </ul>
    </div>

    <!-- Skills Section -->
    <div style="margin-top: 20px; margin-bottom: 0;">
      <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 0;">
        <img src="${skillsIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
        Skills
      </h3>
      <ul style="font-size: 14px; color: #333;">
        ${formData.skills.length > 0 ? formData.skills.map(skill => `<li>${skill}</li>`).join('') : '<li>No skills listed.</li>'}
      </ul>
    </div>

    <!-- Tools Section -->
    <div style="margin-top: 20px;">
      <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 0;">
        <img src="${toolsIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
        Tools
      </h3>
      <ul style="font-size: 14px; color: #333;">
        ${formData.tools.length > 0 ? formData.tools.map(tools => `<li>${tools}</li>`).join('') : '<li>No Hobbies listed.</li>'}
      </ul>
    </div>

    <!-- Others Section -->
    <div style="margin-top: 20px;">
      <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 0;">
        <img src="${othersIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
        Others
      </h3>
      <ul style="font-size: 14px; color: #333;">
        ${formData.others.length > 0 ? formData.others.map(others => `<li>${others}</li>`).join('') : '<li>No Hobbies listed.</li>'}
      </ul>
    </div>


    <!-- Softskills Section -->
    <div style="margin-top: 20px;">
      <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 0;">
        <img src="${softskillsIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
        Soft Skills
      </h3>
      <ul style="font-size: 14px; color: #333;">
        ${formData.softSkills.length > 0 ? formData.softSkills.map(softSkills => `<li>${softSkills}</li>`).join('') : '<li>No Hobbies listed.</li>'}
      </ul>
    </div>

    <!-- Hobbies Section -->
    <div style="margin-top: 20px;">
      <h3 style="font-size: 20px; display: flex; align-items: center; margin-bottom: 0;">
        <img src="${hobbiesIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
        Hobbies
      </h3>
      <ul style="font-size: 14px; color: #333;">
        ${formData.hobbies.length > 0 ? formData.hobbies.map(hobbies => `<li>${hobbies}</li>`).join('') : '<li>No Hobbies listed.</li>'}
      </ul>
    </div>
    
  </div>
</div>

  `;
}else if (templateType === 9) {
  // Use the cropped image URL if available, otherwise use the original image URL or placeholder.
  const imageURL = croppedImage || (formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/140');

  // Helper function to clean up the HTML string
  const cleanHtml = (html) => {
    return html.replace(/<br[^>]*data-mce-bogus="1"[^>]*>/g, ''); // Remove <br data-mce-bogus="1">
  };

  return `
    <div style="display: flex; height: 100%; width: 100%; box-sizing: border-box; margin: 20px;">
      <!-- Left Side: Profile Picture, Personal Info, Skills, Languages -->
      <div style="flex: 1; padding: 20px; background-color: #778eb8c4; color: #f5e5e5; min-height: 1120px; box-sizing: border-box;">
        <!-- Circular Image -->
        <div style="display: inline-block; width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 10px;">
          <img src="${imageURL}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover; object-position: top;">
        </div>

        <!-- Personal Information -->
        <div style="margin-top: 10px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PERSONAL INFO</label>
          <div style="margin: 5px 0;">
            <strong style="color: #000;">Address:</strong><br>
            <span style="font-size: 14px; color: #000;">${formData.address || '123 Main St, City, State, ZIP'}</span>
          </div>
          <div style="margin: 5px 0;">
            <strong style="color: #000;">Phone:</strong><br>
            <span style="font-size: 14px; color: #000;">${formData.phone || '(123) 456-7890'}</span>
          </div>
          <div style="margin: 5px 0;">
            <strong style="color: #000;">Email:</strong><br>
            <span style="font-size: 14px; color: #000;">${formData.email || 'email@example.com'}</span>
          </div>
          <div style="margin: 5px 0;">
            <strong style="color: #000;">LinkedIn:</strong><br>
            <span style="font-size: 14px; color: #000;">${formData.linkedin || 'linkedin.com/in/username'}</span>
          </div>
        </div>

        <!-- Skills Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">SKILLS</label>
          <div style="display: flex; flex-wrap: wrap;">
            ${(formData.skills || []).map(skill => `
              <div style="flex: 1 1 50%; margin-bottom: 5px;">
                <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                  <li>${skill || 'Skill'}</li>
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Languages Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">LANGUAGES</label>
          ${(formData.languages || []).map(lang => `
            <div style="margin: 0px 0;">
              <span style="font-size: 14px; color: #000;">${lang || 'Language Name'}</span>
            </div>
          `).join('')}
        </div>


        <!-- Hobbies Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">HOBBIES</label>
          <div style="display: flex; flex-wrap: wrap;">
            ${(formData.hobbies || []).map(hobbies => `
              <div style="flex: 1 1 50%; margin-bottom: 5px;">
                <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                  <li>${hobbies || 'cricket'}</li>
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tools Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">TOOLS</label>
          <div style="display: flex; flex-wrap: wrap;">
            ${(formData.tools || []).map(tools => `
              <div style="flex: 1 1 50%; margin-bottom: 5px;">
                <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                  <li>${tools || 'MS EXCEL'}</li>
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- OTHERS Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">OTHERS</label>
          <div style="display: flex; flex-wrap: wrap;">
            ${(formData.others || []).map(others => `
              <div style="flex: 1 1 50%; margin-bottom: 5px;">
                <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                  <li>${others || 'Prompt design'}</li>
                </ul>
              </div>
            `).join('')}
          </div>
        </div>


        <!-- SOFTSKILLS Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">SOFT SKILLS</label>
          <div style="display: flex; flex-wrap: wrap;">
            ${(formData.softSkills || []).map(softSkills => `
              <div style="flex: 1 1 50%; margin-bottom: 5px;">
                <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px; color: black;">
                  <li>${softSkills || 'Prompt design'}</li>
                </ul>
              </div>
            `).join('')}
          </div>
        </div>


      </div>

      

      <!-- Right Side: Name, Job Title, Education, Experience, Projects, Certificates -->
      <div style="flex: 2; padding: 20px; background-color: #fff; color: #000; display: flex; flex-direction: column; justify-content: flex-start;">
        <h1 style="font-size: 28px; font-weight: bold; font-family: Arial, sans-serif; margin: 0; text-align: left; color: #0d0565c4;">
          ${formData.firstName || 'JOHN'} ${formData.lastName || 'SMITH'}
        </h1>
        <h2 style="font-size: 20px; font-family: Arial, sans-serif; margin: 5px 0; text-align: left;">
          ${formData.jobTitle || 'IT Project Manager'}
        </h2>

        <!-- Education Section -->
<div style="margin-top: 20px;">
<label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">EDUCATION</label>
${(formData.education || []).map(edu => `
  <div style="margin-bottom: 15px;">
    <!-- Postgraduate -->
    ${edu.level === 'Postgraduate' ? `
      <strong style="color: #000;">${edu.level || 'Postgraduate'} in ${edu.course || 'Course'}</strong><br>
      <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Graduation Year:</strong> ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Thesis Topic:</strong> ${edu.thesis || 'Not provided'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
    ` : ''}

    <!-- Graduate -->
    ${edu.level === 'Graduate' ? `
      <strong style="color: #000;">${edu.level || 'Graduate'} in ${edu.course || 'Course'}</strong><br>
      <span style="font-size: 14px; color: #777;"><strong>Thesis Topic:</strong> ${edu.thesis || 'Not provided'}</span><br>
      <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Thesis Topic:</strong> ${edu.thesis || 'Not provided'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Graduation Year:</strong> ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
    ` : ''}

    <!-- Class 12th -->
    ${edu.level === 'Class 12th' ? `
      <strong style="color: #000;">${edu.level || 'Class 12th'}</strong><br>
      <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Board:</strong> ${edu.board || 'Board Not Provided'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Medium:</strong> ${edu.medium || 'Not provided'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>End Year:</strong> ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
    ` : ''}

    <!-- Class 10th -->
    ${edu.level === 'Class 10th' ? `
      <strong style="color: #000;">${edu.level || 'Class 10th'}</strong><br>
      <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Medium:</strong> ${edu.medium || 'Not provided'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>End Year:</strong> ${edu.endYear || 'Year not provided'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
    ` : ''}

    <!-- Other Education Levels -->
    ${edu.level !== 'Class 10th' && edu.level !== 'Class 12th' && edu.level !== 'Graduate' && edu.level !== 'Postgraduate' ? `
      <strong style="color: #000;">${edu.level || 'Other Level'} in ${edu.course || 'Course'}</strong><br>
      <span style="font-size: 14px; color: #777;">${edu.institution || 'Institution Name'}, ${edu.location || 'Location'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Duration:</strong> ${edu.startYear || 'Year not provided'} - ${edu.endYear || 'Year not provided'}</span><br>
      <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
    ` : ''}
  </div>
`).join('') || '<p style="font-size: 16px; color: #555;">No education listed.</p>'}
</div>



   <!-- Experience Section -->      
<div style="margin-top: 20px;">
<label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">EXPERIENCE</label>
${(formData.experience || []).map(exp => `
  <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
    <strong style="font-size: 16px; color: #000;">${exp.jobTitle || 'Job Title'}</strong> at 
    <span style="font-size: 16px; color: #333;">${exp.organization || 'Organization Name'}</span>
    <br>
    <span style="font-size: 14px; color: #555;">${exp.location || 'Location (City, Country)'}</span>
    <br>
    <span style="font-size: 14px; color: #000;">${exp.dates || 'Month, Year – Month, Year'}</span>
    

    ${(exp.responsibilities || []).length > 0 ? `
      <label style="font-weight: bold; margin-top: 10px; display: block; font-size: 14px; color: #0d0565c4;">Key Responsibilities and Achievements:</label>
      <ul style="list-style-type: disc; margin: 5px 0 0 20px; padding-left: 20px; font-size: 14px; color: #000;">
        ${exp.responsibilities.map(detail => `<li>${detail || 'Responsibility/Achievement'}</li>`).join('')}
      </ul>
    ` : ''}

    ${(exp.projects || []).length > 0 ? `
      <label style="font-weight: bold; margin-top: 10px; display: block; font-size: 14px; color: #0d0565c4;">Relevant Projects/Contributions:</label>
      <ul style="list-style-type: disc; margin: 5px 0 0 20px; padding-left: 20px; font-size: 14px; color: #000;">
        ${exp.projects.map(project => `<li>${project || 'Project/Contribution'}</li>`).join('')}
      </ul>
    ` : ''}
  </div>
`).join('')}
</div>


 
<div style="margin-top: 20px;">
<label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PROJECTS</label>
${(formData.projects || []).map(project => `
  <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">

    <strong style="font-size: 16px; color: #000;">${project.title || 'Project Title'}</strong><br>


    <span style="font-size: 14px; color: #555; display: block; margin-top: 5px;">
      ${project.description || 'Brief Description (focus on scope and impact)'}
    </span>

    
    ${project.role ? `
      <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
        <strong>Role:</strong> ${project.role}
      </span>
    ` : ''}


    ${project.tools ? `
      <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
        <strong>Tools/Technologies:</strong> ${project.tools}
      </span>
    ` : ''}

    
    ${project.link ? `
      <span style="font-size: 14px; color: #0066cc; display: block; margin-top: 5px;">
        <strong>Link:</strong> <a href="${project.link}" target="_blank" style="color: #0066cc; text-decoration: underline;">View Project</a>
      </span>
    ` : ''}
  </div>
`).join('')}
</div>


        <!-- Certificates Section -->
        <div style="margin-top: 20px;">
<label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">CERTIFICATES</label>
${(formData.certifications || []).map(cert => `
  <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
    <strong style="font-size: 16px; color: #000;">${cert.name || 'Certification Name'}</strong><br>

    <span style="font-size: 14px; color: #555; display: block; margin-top: 5px;">
      <strong>Issuing Organization:</strong> ${cert.organization || 'Issuing Organization'}
    </span>

  
    ${cert.issuedDate ? `
      <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
        <strong>Issued Date:</strong> ${new Date(cert.issuedDate).toLocaleDateString()}
      </span>
    ` : ''}

  
    ${cert.expirationDate ? `
      <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
        <strong>Expiration Date:</strong> ${new Date(cert.expirationDate).toLocaleDateString()}
      </span>
    ` : ''}
  </div>
`).join('')}
</div>

   <!-- Publications  Section -->
        <div style="margin-top: 20px;">
<label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PUBLICATIONS</label>
${(formData.publications || []).map(pub => `
  <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
    
    <strong style="font-size: 16px; color: #000;">${pub.title || 'Title of Publication'}</strong><br>

    ${pub.authors ? `
      <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
        <strong>Authors:</strong> ${pub.authors}
      </span>
    ` : ''}

    ${pub.date ? `
      <span style="font-size: 14px; color: #333; display: block; margin-top: 5px;">
        <strong>Publication Date:</strong> ${new Date(pub.date).toLocaleDateString()}
      </span>
    ` : ''}

    ${pub.journal ? `
      <span style="font-size: 14px; color: #555; display: block; margin-top: 5px;">
        <strong>Journal/Conference:</strong> ${pub.journal}
      </span>
    ` : ''}

    ${pub.link ? `
      <span style="font-size: 14px; color: #0066cc; display: block; margin-top: 5px;">
        <a href="${pub.link}" target="_blank" style="text-decoration: none;">View Publication</a>
      </span>
    ` : ''}
  </div>
`).join('')}
</div>

     <!-- Awards & Honors Section -->
<div style="margin-top: 20px;">
<label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">AWARDS & HONORS</label>
<div className="form-group">
${(formData.awards || []).map((award, index) => `
  <div key="${index}" className="form-group" style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
    <div className="row">
      <div className="col-md-6">
        <strong style="font-size: 16px; color: #000;">${award.title || 'Award Title'}</strong>
      </div>
      <div className="col-md-6">
        <strong style="font-size: 16px; color: #000;">${award.body || 'Awarding Body'}</strong>
      </div>
      <div className="col-md-6 mt-2">
        <label style="font-size: 14px;">Date Received:</label>
        <span>${award.dateReceived ? new Date(award.dateReceived).toLocaleDateString() : 'Not Specified'}</span>
      </div>
      <div>
        <label style="font-size: 14px;">Description or Criteria: <span>${award.description || 'No Description Provided'}</span></label>
      </div>
    </div>
  </div>
`).join('')}
</div>
</div>
 
      <!-- Professional Memberships Section -->
<div style="margin-top: 20px;">
<label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PROFESSIONAL MEMBERSHIPS</label>
</div>
<div className="form-group">
${(formData.memberships || []).map((membership, index) => `
  <div key="${index}" className="form-group" style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 15px;">
    <div className="row">
      <div className="col-md-6">
        <strong style="font-size: 16px; color: #000;">${membership.organization || 'Organization Name'}</strong>
      </div>
      <div className="col-md-6">
        <strong style="font-size: 16px; color: #000;">${membership.role || 'Membership Role'}</strong>
      </div>
      <div className="col-md-6 mt-2">
        <label style="font-size: 14px;">Membership Dates:</label>
        <span>${membership.dates || 'Not Specified'}</span>
      </div>
    </div>
  </div>
`).join('')}
</div>
<hr className="custom-line" />



      </div>
    </div>`;
}else if (templateType === 10) {
  return `
    <div style="display: flex; flex-direction: column; height: 100%; color: #000; margin-left: 20px; margin-right: 20px;">

      <!-- Name Section -->
        <div style="display: flex; justify-content: center; background-color: #fff; margin-bottom: 5px;">
          <h1 style="text-align: center; margin: 0; color: black;">${formData.firstName || 'John'} ${formData.lastName || 'Smith'}</h1>
        </div>
  
        <!-- Contact Information Section -->
        <div style="background-color: #fff; margin-bottom: 5px; color: black;">
          <div style="display: flex; justify-content: space-between; padding: 5px 0;">
            <p style="margin: 0; color: black;">${email || 'email@example.com'}</p>
            <p style="margin: 0; color: black;">${phone || '(123) 456-7890'}</p>
            <p style="margin: 0; color: black;">${linkedin || 'linkedin.com/in/username'}</p>
            <p style="margin: 0; color: black;">${Github || 'Github.com/in/username'}</p>
          </div>
        </div>

       <!-- Summary Section -->
        <div style="color: #000; margin-bottom: 5px;">
          <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">OBJECTIVE</h3>
          <p style="margin: 0; color: black;">${summary || 'This is a summary of the applicant’s experience, skills, and other key information.'}</p>
        </div>


    <!-- Education Section -->
        <div style="margin-bottom: 5px;">
          <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">EDUCATION</h3>
          <hr style="border: 1px solid black; margin: 5px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; color: black;">
            <p style="flex: 1; margin: 0; color: black;"><strong>Degree</strong></p>
            <p style="flex: 1; margin: 0; color: black;"><strong>Institute</strong></p>
            <p style="flex: 1; margin: 0; color: black;"><strong>Year</strong></p>
            <p style="flex: 1; margin: 0; color: black;"><strong>CPI</strong></p>
          </div>
  
          <!-- Education Fields -->
          <div style="display: flex; flex-direction: column; gap: 5px;">
            ${formData.education.length > 0 ? formData.education.map(edu => `
              <div style="display: flex; justify-content: space-between; align-items: center; color: black;">
                <p style="flex: 1; margin: 0; color: black;">${edu.level || 'Degree not provided'}</p>
                <p style="flex: 1; margin: 0; color: black;">${edu.level === 'Class 10th' ? edu.schoolName : edu.college || 'Institute not provided'}</p>
                <p style="flex: 1; margin: 0; color: black;">${edu.level === 'Class 10th' ? edu.endYear : `${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}`}</p>
                <p style="flex: 1; margin: 0; color: black;">${edu.percentage || 'Percentage not provided'}</p>
              </div>
            `).join('') : '<p style="margin: 0; color: black;">No education listed.</p>'}
          </div>
          <hr style="border: 1px solid black; margin: 5px 0;">
        </div>

<!-- Experience Section-->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">INTERNSHIP :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${formData.experience && formData.experience.length > 0 
        ? formData.experience.map(exp => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${exp.jobTitle || 'Position not provided'}</strong> 
              | ${exp.organization || 'Organization not provided'} 
              (${exp.location || 'Location not provided'}) 
              ${exp.dates ? `- ${exp.dates}` : ''}
            </p>
            <ul style="margin: 0; padding-left: 20px;">
              ${
                Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 
                  ? exp.responsibilities.map(point => `
                    <li style="margin: 0; color: black;">${point || 'Responsibility not provided'}</li>
                  `).join('') 
                  : '<li style="color: black;">No responsibilities listed.</li>'
              }
            </ul>

            <p style="margin: 0; color: black;"><strong>Projects:</strong></p>
            <ul style="margin: 0; padding-left: 20px;">
              ${
                Array.isArray(exp.projects) && exp.projects.length > 0 
                  ? exp.projects.map(proj => `
                    <li style="margin: 0; color: black;">${proj || 'Project not provided'}</li>
                  `).join('') 
                  : '<li style="color: black;">No projects listed.</li>'
              }
            </ul>
          </div>
        `).join('')
        : '<p style="color: black;">No experience listed.</p>'
    }
  </div>
</div>

<!-- Research and projects -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">RESEARCH AND PROJECTS :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.projects && formData.projects.length > 0 
        ? formData.projects.map(project => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${project.title || 'Project Title not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;">${project.description || 'Description not provided'}</p>
            <p style="margin: 0; color: black;"><strong>Role:</strong> ${project.role || 'Role not provided'}</p>
            <p style="margin: 0; color: black;"><strong>Tools/Technologies:</strong> ${project.tools || 'Tools/Technologies not provided'}</p>
            ${
              project.link 
                ? `<p style="margin: 0; color: black;"><a href="${project.link}" target="_blank" style="color: #007bff;">Project Link</a></p>`
                : '<p style="margin: 0; color: black;">No link provided</p>'
            }
          </div>
        `).join('')
        : '<p style="color: black;">No research or projects listed.</p>'
    }
  </div>
</div>
       
<!-- Certificates Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">CERTIFICATIONS & LICENSES :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.certifications && formData.certifications.length > 0 
        ? formData.certifications.map(certification => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${certification.name || 'Certification Name not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;"><strong>Issuing Organization:</strong> ${certification.organization || 'Organization not provided'}</p>
            <p style="margin: 0; color: black;">
              <strong>Issued Date:</strong> ${certification.issuedDate || 'Not provided'}
            </p>
            <p style="margin: 0; color: black;">
              <strong>Expiration Date:</strong> ${certification.expirationDate || 'No expiration'}
            </p>
          </div>
        `).join('')
        : '<p style="color: black;">No certifications or licenses listed.</p>'
    }
  </div>
</div>

<!-- PUblication Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">PUBLICATIONS :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.publications && formData.publications.length > 0
        ? formData.publications.map(publication => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${publication.title || 'Publication Title not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;"><strong>Authors:</strong> ${publication.authors || 'Authors not provided'}</p>
            <p style="margin: 0; color: black;">
              <strong>Publication Date:</strong> ${publication.date || 'Not provided'}
            </p>
            <p style="margin: 0; color: black;">
              <strong>Journal/Conference:</strong> ${publication.journal || 'Journal/Conference not provided'}
            </p>
            ${
              publication.link 
                ? `<p style="margin: 0; color: #007bff;"><a href="${publication.link}" target="_blank" style="color: #007bff;">View Publication</a></p>`
                : '<p style="margin: 0; color: black;">No link provided</p>'
            }
          </div>
        `).join('')
        : '<p style="color: black;">No publications listed.</p>'
    }
  </div>
</div>

<!-- Awards Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">AWARDS & HONORS :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.awards && formData.awards.length > 0
        ? formData.awards.map(award => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${award.title || 'Award Title not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;"><strong>Awarding Body:</strong> ${award.body || 'Awarding Body not provided'}</p>
            <p style="margin: 0; color: black;">
              <strong>Date Received:</strong> ${award.dateReceived || 'Date not provided'}
            </p>
            <p style="margin: 0; color: black;">
              <strong>Description:</strong> ${award.description || 'No description provided'}
            </p>
          </div>
        `).join('')
        : '<p style="color: black;">No awards or honors listed.</p>'
    }
  </div>
</div>

<!-- Proffessional Members Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">PROFESSIONAL MEMBERSHIPS :</h3>
  <div style="display: flex; flex-direction: column; gap: 10px;">
    ${
      formData.memberships && formData.memberships.length > 0
        ? formData.memberships.map(membership => `
          <div style="margin-bottom: 10px;">
            <p style="margin: 0; color: black;">
              <strong>${membership.organization || 'Organization not provided'}</strong>
            </p>
            <p style="margin: 0; color: black;"><strong>Role:</strong> ${membership.role || 'Role not provided'}</p>
            <p style="margin: 0; color: black;">
              <strong>Membership Dates:</strong> ${membership.dates || 'Dates not provided'}
            </p>
          </div>
        `).join('')
        : '<p style="color: black;">No professional memberships listed.</p>'
    }
  </div>
</div>

<!-- Technical Skills -->
        <div style="margin-bottom: 5px; color: black;">
          <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">TECHNICAL SKILLS :</h3>
          <div style="display: flex; flex-direction: column; margin-top: 5px;">
            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 8px;">Programming Languages: </strong>
              <div style="color: black;">
                ${formData.skills.length > 0 ? formData.skills.join(', ') : 'No skills listed.'}
              </div>
            </div>
            
            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 8px;">Tools:</strong>
              <div style="color: black;">
                ${formData.tools.length > 0 ? formData.tools.map(tool => tool.name).join(', ') : 'No tools listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 8px;">Others: </strong>
              <div style="color: black;">
                ${formData.others.length > 0 ? formData.others.join(', ') : 'No skills listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 8px;">Soft Skills:</strong>
              <div style="color: black;">
                ${formData.softSkills.length > 0 ? formData.softSkills.join(', ') : 'No soft skills listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 3px;">
              <strong style="margin-right: 0px;">Languages:</strong>
              <div style="color: black;">
                ${formData.languages.length > 0 ? formData.languages.join(', ') : 'No soft skills listed.'}
              </div>
            </div>
          </div>
        </div>

<!-- Hobbies Section -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">HOBBIES & INTERESTS :</h3>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
    ${
      formData.hobbies && formData.hobbies.length > 0
        ? formData.hobbies.map(hobby => `
            <div style="flex: 1 1 30%; min-width: 150px; padding: 5px;  color: black;">
              ${hobby || 'Hobby not provided'}
            </div>
          `).join('')
        : '<p style="color: black;">No hobbies or interests listed.</p>'
    }
  </div>
</div>



      </div>


`;
}


    return '';
  };

