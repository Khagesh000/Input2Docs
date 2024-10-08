import educationIcon from '../assets/images/education-icon.png';
import skillsIcon from '../assets/images/skills.png';
import summaryIcon from '../assets/images/summary-icon.png';
import experienceIcon from '../assets/images/experience.png';
import personalInfoIcon from '../assets/images/experience.png';
import languagesIcon from '../assets/images/summary-icon.png';
import hobbiesIcon from '../assets/images/hobbies-icon.png'; // Replace this with the actual path to your hobbies icon


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
            <p style="margin: 0; color: black;">Google Cloud: ${googleCloud || 'googlecloud.com/user'}</p>
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

        <!-- Experience Section -->
        <div style="margin-bottom: 5px; color: black;">
          <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">INTERNSHIP</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
          ${formData.experience.length > 0 ? formData.experience.map(exp => `
            <div style="margin-bottom: 10px;">
              <p style="margin: 0; color: black;"><strong>${exp.position || 'Position not provided'}</strong> [${exp.company || 'Company not provided'}]</p>
              <ul style="margin: 0; padding-left: 20px;">
                ${Array.isArray(exp.details) && exp.details.length > 0 ? exp.details.map(point => `
                  <li style="margin: 0; color: black;">${point || 'Detail point not provided'}</li>
                `).join('') : '<li style="color: black;">No details listed.</li>'}
              </ul>
            </div>
          `).join('') : '<p style="color: black;">No experience listed.</p>'}
          
          </div>
        </div>

        <!-- Projects Section -->
        <div style="margin-bottom: 5px; color: black;">
          <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">PROJECTS</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${formData.projects.length > 0 ? formData.projects.map(project => `
              <div style="margin-bottom: 10px;">
                <strong style="color: black;">${project.title || 'Project title not provided'}</strong>
                <ul style="margin: 0; padding-left: 20px;">
                  ${project.details.length > 0 ? project.details.map(detail => `
                    <li style="margin: 0; color: black;">${detail || 'Detail point not provided'}</li>
                  `).join('') : '<li style="color: black;">No details listed.</li>'}
                </ul>
              </div>
            `).join('') : '<p style="color: black;">No projects listed.</p>'}
          </div>
        </div>

        <!-- Technical Skills -->
        <div style="margin-bottom: 5px; color: black;">
          <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">TECHNICAL SKILLS</h3>
          <div style="display: flex; flex-direction: column; margin-top: 5px;">
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

        <!-- CERTIFICATIONS -->
        <div style="margin-bottom: 5px; color: black;">
          <h3 style="font-size: 18px; background-color: wheat; padding: 5px; margin: 0; color: black;">CERTIFICATIONS</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${formData.certifications.length > 0 ? formData.certifications.map(certification => `
              <div style="margin-bottom: 1px; display: flex;">
                <strong style="margin-right: 70px;">${certification.course || 'Course not provided'}</strong>
                <div style="flex: 1;">
                  <span style="margin-right: 5px;">by</span>
                  <span>${certification.company || 'Company not provided'}</span>
                </div>
              </div>
            `).join('') : '<p style="color: black;">No certifications listed.</p>'}
          </div>
        </div>
      </div>
    `;
} else if (templateType === 2) {
  // Use the cropped image URL if available, otherwise use the original image URL or placeholder.
  const imageURL = croppedImage || (formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/140');
   // Helper function to clean up the HTML string
   const cleanHtml = (html) => {
    return html.replace(/<br[^>]*data-mce-bogus="1"[^>]*>/g, ''); // Remove <br data-mce-bogus="1">
  };
  return `
    <div style="display: flex; height: 100%; width: 100%; box-sizing: border-box; margin-left: 20px; margin-right: 20px;">
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

        <!-- Education Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">EDUCATION</label>
          ${formData.education.map(edu => `
            <div style="margin: 10px 0; display: flex; justify-content: space-between; align-items: flex-start;">
              <div style="flex: 1;">
                <h4 style="color: #000; margin: 0;">${edu.level || 'Degree Level'}</h4>
                ${edu.level === 'Class 10th' ? `
                  <span style="font-size: 14px; color: #000;">${edu.schoolName || 'School Name'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Medium: </strong>${edu.medium || 'Medium Not Provided'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Duration: </strong>${edu.endYear || 'End Year'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Percentage: </strong>${edu.percentage || 'Percentage Not Provided'}</span>
                ` : ''}
                ${edu.level === 'Class 12th' ? `
                  <span style="font-size: 14px; color: #000;">${edu.college || 'College Name'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Medium: </strong>${edu.medium || 'Medium Not Provided'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Duration: </strong>${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Percentage: </strong>${edu.percentage || 'Percentage Not Provided'}</span>
                ` : ''}
                ${edu.level === 'Graduate' || edu.level === 'Postgraduate' ? `
                  <span style="font-size: 14px; color: #000;">${edu.college || 'College Name'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Course: </strong>${edu.course || 'Course Name'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Duration: </strong>${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</span><br>
                  <span style="font-size: 14px; color: #000;"><strong>Percentage: </strong>${edu.percentage || 'Percentage Not Provided'}</span>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
        <!-- Languages Section -->
<div style="margin-top: 20px;">
  <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">LANGUAGES</label>
  ${formData.languages.map(lang => `
    <div style="margin: 0px 0;">
      <span style="font-size: 14px; color: #000;">${lang || 'Language Name'}</span>
    </div>
  `).join('')}
</div>
      </div>


      
      
      <div style="flex: 2; padding: 20px; background-color: #fff; color: #000; display: flex; flex-direction: column; justify-content: flex-start;">
        <h1 style="font-size: 28px; font-weight: bold; font-family: Arial, sans-serif; margin: 0; text-align: left; color: #0d0565c4;">
          ${formData.firstName || 'JOHN'} ${formData.lastName || 'SMITH'}
        </h1>
        <h2 style="font-size: 20px; font-family: Arial, sans-serif; margin: 5px 0; text-align: left;">
          ${formData.jobTitle || 'IT Project Manager'}
        </h2>

        <!-- Summary Section -->
        <p style="font-size: 14px; line-height: 1.5; text-align: left; margin: 5px 0; margin-top: 35px; color: #000;">
          <strong style="color: #0d0565c4; font-size: 20px;">ABOUT ME</strong><br>
          ${formData.summary || 'This is a placeholder for your summary content.'}
        </p>

        

        <!-- Experience Section -->
        <p style="font-size: 14px; line-height: 1.5; text-align: left; margin: 5px 0; margin-top: 25px;">
          <strong style="color: #0d0565c4; font-size: 20px;">EXPERIENCE</strong><br>
          ${formData.experience.map(exp => `
            <div style="margin-bottom: 0px;">
              <strong style="font-size: 16px; color: #000;">${exp.company || 'Company Name'}</strong><br>
              <span style="font-size: 14px; color: #000; margin-right: 5px;">${exp.position || 'Position'}</span>
              <span style="font-size: 14px; color: #000;">[${exp.dates || 'Year Range'}]</span>
              <ul style="list-style-type: disc; margin: 3px 0 0 20px; padding-left: 20px; font-size: 14px;">
                ${exp.details.map(detail => `<li>${detail || 'Responsibility/Achievement'}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </p>


        <!-- Skills Section -->
        <p style="font-size: 14px; line-height: 1.5; text-align: left; margin: 5px 0; margin-top: 0px;">
          <strong style="color: #0d0565c4; font-size: 20px;">SKILLS</strong><br>
        </p>

        <div style="display: flex; flex-wrap: wrap; margin-top: 0px;">
          ${formData.skills.map(skill => `
            <div style="flex: 1 1 50%; margin-bottom: 5px;">
              <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px;">
                <li>${skill || 'Skill'}</li>
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      
    </div>`;
} else if (templateType === 3) {
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
        <div style="margin-top: 30px; margin-left: 55px;">
            <h3 style="font-size: 20px; display: flex; align-items: center;">
                <img src="${summaryIcon}" alt="summary-icon" style="width: 24px; margin-right: 10px;">
                Summary
            </h3>
            <p style="font-size: 14px; color: #333; margin-left: 20px; display: flex; align-items: center;">
                <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
                ${formData.summary || 'Oversaw all major hospital IT projects for 10+ years, focusing on cost reduction.'}
            </p>
        </div>

        <!-- Experience Section -->
        <div style="margin-top: 30px; margin-left: 55px;">
            <h3 style="font-size: 20px; display: flex; align-items: center;">
                <img src="${experienceIcon}" alt="experience-icon" style="width: 24px; margin-right: 10px;">
                Experience
            </h3>
            ${formData.experience && formData.experience.length > 0 ? formData.experience.map(exp => `
                <div style="margin-left: 20px; margin-bottom: 15px; position: relative;">
                    <p style="font-size: 12px; color: #555; position: absolute; left: -75px; top: 0;">${exp.dates || 'Date not provided'}</p>
                    <strong>${exp.position || 'Position not provided'}</strong>  
                    <p style="font-size: 14px; font-weight: bold; color: #333; display: flex; align-items: center;">
                        <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
                        ${exp.company || 'Company not provided'}
                    </p>
                    <p style="font-size: 14px; color: #333;">
                        <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
                        ${Array.isArray(exp.details) && exp.details.length > 0 
                            ? exp.details.join(', ') 
                            : 'Details not provided'}
                    </p>
                </div>
            `).join('<br>') : '<p style="font-size: 14px; color: #777;">No experience listed.</p>'}
        </div>

      <!-- Education Section -->
<div style="margin-top: 30px; margin-left: 55px;">
  <h3 style="font-size: 20px; display: flex; align-items: center;">
    <img src="${educationIcon}" alt="education-icon" style="width: 24px; margin-right: 10px;">
    Education
  </h3>
  ${formData.education.length > 0 ? formData.education.map(edu => `
    <div style="margin-left: 20px; margin-bottom: 10px;">
      <div style="display: flex; flex-direction: column; margin-bottom: 5px;">
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <strong>${edu.level || 'Level not provided'}</strong>
        </div>

        <!-- Conditional Fields Based on Education Level -->
        ${edu.level === 'Graduate' || edu.level === 'Postgraduate' ? `
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Course:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.course || 'Course not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">College:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.college || 'College not provided'}</p>
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
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">College:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.college || 'College not provided'}</p>
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
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">School Name:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.schoolName || 'School Name not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Medium:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.medium || 'Medium not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Year:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.endYear || 'End Year not provided'}</p>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 2px;">
            <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Percentage:</p>
            <p style="margin: 0; font-size: 14px; color: #333;">${edu.percentage || 'Not provided'}</p>
          </div>
        ` : null}
      </div>
    </div>
  `).join('') : '<p style="font-size: 14px; color: #777;">No education listed.</p>'}
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
<h3 style="font-size: 20px; margin-top: 30px; margin-bottom: 10px; display: flex; align-items: center;">
    <img src="${languagesIcon}" alt="languages-icon" style="width: 24px; margin-right: 10px;">
    Languages
</h3>
<div style="font-size: 14px; color: #333; margin-left: 30px;">
    ${formData.languages.length > 0 ? formData.languages.map((lang, index) => `
        <p style="margin: 0; padding: 0; line-height: 1.5; color: #333;">${lang.language || 'Language not provided'}</p>
    `).join('') : '<p style="font-size: 14px; color: #777; margin: 0;">No languages listed.</p>'}
</div>

      <!-- Skills Section -->
      <div style="margin-top: 30px;">
        <h3 style="font-size: 20px; display: flex; align-items: center;">
          <img src="${skillsIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
          Skills
        </h3>
        <ul style="font-size: 14px; color: #333;">
          ${formData.skills.length > 0 ? formData.skills.map(skill => `<li>${skill}</li>`).join('') : '<li>No skills listed.</li>'}
        </ul>
      </div>

      <!-- Hobbies Section -->
      <div style="margin-top: 30px;">
        <h3 style="font-size: 20px; display: flex; align-items: center;">
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
  } else if (templateType === 4) {
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

        <!-- Horizontal Line -->
        <hr style="border: 0; height: 2.5px; background-color: #121111; margin: 10px 0;" />
  
        <!-- Experience Heading Section -->
          <div style="text-align: center; margin-bottom: 1px; font-size: 18px; font-weight: bold; color: #003366;">
            WORK EXPERIENCE
          </div>

        <!-- Experience Section -->
        <div style="background-color: #fff; padding-left: 0px; padding-top: 3px; color: black;"> 
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${formData.experience.length > 0 ? formData.experience.map(exp => `
            <div style="margin-bottom: 10px;">
              <p style="margin: 0; color: black;"><strong>${exp.position || 'Position not provided'}</strong><strong>  |  ${exp.company || 'Company not provided'}</strong></p>
              <ul style="margin: 0; padding-left: 20px;">
                ${Array.isArray(exp.details) && exp.details.length > 0 ? exp.details.map(point => `
                  <li style="margin: 0; color: black;">${point || 'Detail point not provided'}</li>
                `).join('') : '<li style="color: black;">No details listed.</li>'}
              </ul>
            </div>
          `).join('') : '<p style="color: black;">No experience listed.</p>'}
          
          </div>

           <!-- Horizontal Line -->
        <hr style="border: 0; height: 2.5px; background-color: #121111; margin: 10px 0;" />
  
        <!-- Projects Heading Section -->
          <div style="text-align: center; margin-bottom: 1px; font-size: 18px; font-weight: bold; color: #003366;">
            PROJECTS
          </div>

        <!-- Projects Section -->
        <div style="background-color: #fff; padding-left: 0px; padding-top: 3px; color: black;"> 
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${formData.projects.length > 0 ? formData.projects.map(project => `
              <div style="margin-bottom: 10px;">
                <strong style="color: black;">${project.title || 'Project title not provided'}</strong>
                <ul style="margin: 0; padding-left: 20px;">
                  ${project.details.length > 0 ? project.details.map(detail => `
                    <li style="margin: 0; color: black;">${detail || 'Detail point not provided'}</li>
                  `).join('') : '<li style="color: black;">No details listed.</li>'}
                </ul>
              </div>
            `).join('') : '<p style="color: black;">No projects listed.</p>'}
          </div>
        </div>


         <!-- Horizontal Line -->
        <hr style="border: 0; height: 2.5px; background-color: #121111; margin: 10px 0;" />
  
        <!-- Certificate Heading Section -->
          <div style="text-align: center; margin-bottom: 1px; font-size: 18px; font-weight: bold; color: #003366;">
            CERTIFICATES
          </div>

        <!-- Certificates Section -->
    <div style="background-color: #fff; padding-left: 0px; padding-top: 3px; color: black;">
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${formData.certifications.length > 0 ? formData.certifications.map(certification => `
          <div style="margin-bottom: 1px;">
            <!-- Certification Course and Company on Same Line -->
            <strong style="margin-right: 10px;">${certification.course || 'Course not provided'}</strong>
            <strong> | ${certification.company || 'Company not provided'}</strong>

            <!-- Certification Details as Bullet Points -->
            <div style="margin-top: 5px; margin-bottom: 10px;">
              <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
                ${certification.details.length > 0 ? certification.details.map(detail => `
                  <li style="margin: 0 0 5px 0; color: black;">${detail || 'Detail point not provided'}</li>
                `).join('') : '<li style="color: black;">No details listed.</li>'}
              </ul>
            </div>
          </div>
        `).join('') : '<p style="color: black;">No certifications listed.</p>'}
      </div>
    </div>

       
      </div>
      
    `;
  }else if (templateType === 5) {
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
            - ${hobbies || 'Language'}
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
      ${(formData.education || []).map(edu => `
        <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px 0; background-color: #f9f9f9;">
          <div style="font-size: 16px; font-weight: bold; color: #333;">
            ${edu.level || 'Degree Level'}
          </div>
          <div style="font-size: 14px; color: #555;">
            <strong>Institute:</strong> ${edu.college || edu.schoolName || 'Institution Name'}<br>
            <strong>Duration:</strong> ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}<br>
            <strong>CPI:</strong> ${edu.percentage || 'CPI Not Provided'}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Experience Section -->
    <div style="margin-top: 0px; padding-left: 20px;">
      <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">EXPERIENCE</h3>
      ${(formData.experience || []).map(exp => `
        <div style="margin: 10px 0; font-size: 14px; color: black;">
          <strong>${exp.company || 'Company Name'}</strong><br>
          <span>${exp.position || 'Position'}</span> (${exp.dates || 'Year Range'})<br>
          <ul style="list-style-type: disc; margin-left: 20px; padding: 0; margin-bottom: 0; margin-top: 0;">
            ${(exp.details || []).map(detail => `<li style="margin: 0;">${detail || 'Responsibility/Achievement'}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>

    <!-- Projects Section -->
<div style="margin-top: 0px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">PROJECTS</h3>
   ${formData.projects.length > 0 ? formData.projects.map(project => `
              <div style="margin-bottom: 10px;">
                <strong style="color: black;">${project.title || 'Project title not provided'}</strong>
                <ul style="margin: 0; padding-left: 20px;">
                  ${project.details.length > 0 ? project.details.map(detail => `
                    <li style="margin: 0; color: black;">${detail || 'Detail point not provided'}</li>
                  `).join('') : '<li style="color: black;">No details listed.</li>'}
                </ul>
              </div>
            `).join('') : '<p style="color: black;">No projects listed.</p>'}
</div>

<!-- Certificates Section -->
<div style="margin-top: 0px; padding-left: 20px;">
  <h3 style="font-size: 20px; font-weight: bold; text-align: center; color: black; margin-bottom: 5px;">CERTIFICATES</h3>
  ${formData.certifications.length > 0 ? formData.certifications.map(certification => `
    <div style="margin-bottom: 1px;">
      <!-- Certification Course and Company on Same Line -->
      <strong style="margin-right: 10px;">${certification.course || 'Course not provided'}</strong>
      <strong> | ${certification.company || 'Company not provided'}</strong>

      <!-- Certification Details as Bullet Points -->
      <div style="margin-top: 5px; margin-bottom: 10px;">
        <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
          ${certification.details.length > 0 ? certification.details.map(detail => `
            <li style="margin: 0 0 5px 0; color: black;">${detail || 'Detail point not provided'}</li>
          `).join('') : '<li style="color: black;">No details listed.</li>'}
        </ul>
      </div>
    </div>
  `).join('') : '<p style="color: black;">No certifications listed.</p>'}
</div>
</div>



  </div>
</div>

      `;
  } else if (templateType === 6) {
    return `
      <div style="display: flex; flex-direction: column; height: 100%; color: #000; margin-left: 20px; margin-right: 20px;">
  
        <!-- Name Section (Left-Aligned, Large Font) -->
        <div style="display: flex; justify-content: flex-start; align-items: center; background-color: #778eb8c4 margin-bottom: 5px; padding-top: 15px;">
          <h1 style="text-align: left; margin: 0; color: #000;" font-size: 32px; flex: 1;">${formData.firstName || 'John'} ${formData.lastName || 'Smith'}</h1>
        </div>
  
        <!-- Contact Information Section -->
        <div style="background-color: #fff; margin-bottom: 7px;  justify-content: space-between; align-items: flex-start; color: black;">
  
          <!-- Left Side (LinkedIn, GitHub) -->
          <div style="display: flex; flex-direction: column; flex: 1; padding: 5px 0;">
            <div style="display: flex; justify-content: flex-start;">
              <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;"><span style="color: #000;">Email:</span></p>
              <p style="margin: 0; color: #3a4f74c4; font-weight: 500;">${email || 'email@example.com'}</p>
            </div>
            <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
              <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;"><span style="color: #000;">Mobile:</span></p>
              <p style="margin: 0; color: #333; font-weight: 500;">${phone || '(123) 456-7890'}</p>
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
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; margin-bottom: 10px; color: black;">EDUCATION DETAILS :</h3>

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
          <td style="padding: 8px; border: 1px solid black;">${edu.level === 'Class 10th' ? edu.schoolName : edu.college || 'Institute not provided'}</td>
          <td style="padding: 8px; border: 1px solid black;">${edu.percentage || 'Percentage not provided'}</td>
          <td style="padding: 8px; border: 1px solid black;">${edu.level === 'Class 10th' ? edu.endYear : `${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}`}</td>
        </tr>
      `).join('') : '<tr><td colspan="4" style="padding: 8px; text-align: center; border: 1px solid black;">No education listed.</td></tr>'}
    </tbody>
  </table>
</div>

       <!-- Experience Section -->
        <div style="margin-bottom: 5px; color: black;">
          <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">INTERNSHIP :</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
          ${formData.experience.length > 0 ? formData.experience.map(exp => `
            <div style="margin-bottom: 10px;">
              <p style="margin: 0; color: black;"><strong>${exp.position || 'Position not provided'}</strong> | ${exp.company || 'Company not provided'}</p>
              <ul style="margin: 0; padding-left: 20px;">
                ${Array.isArray(exp.details) && exp.details.length > 0 ? exp.details.map(point => `
                  <li style="margin: 0; color: black;">${point || 'Detail point not provided'}</li>
                `).join('') : '<li style="color: black;">No details listed.</li>'}
              </ul>
            </div>
          `).join('') : '<p style="color: black;">No experience listed.</p>'}
          
          </div>
        </div>

        <!-- Technical Skills -->
        <div style="margin-bottom: 10px; color: black;">
          <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">TECHNICAL SKILLS :</h3>
          <div style="display: flex; flex-direction: column; margin-top: 5px;">
            <div style="display: flex; margin-bottom: 6px; margin-left: 30px;">
              <strong style="margin-right: 8px;">Programming Languages: </strong>
              <div style="color: black;">
                ${formData.skills.length > 0 ? formData.skills.join(', ') : 'No skills listed.'}
              </div>
            </div>
            
            <div style="display: flex; margin-bottom: 6px; margin-left: 30px;">
              <strong style="margin-right: 8px;">Tools:</strong>
              <div style="color: black;">
                ${formData.tools.length > 0 ? formData.tools.map(tool => tool.name).join(', ') : 'No tools listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 30px;">
              <strong style="margin-right: 8px;">Others: </strong>
              <div style="color: black;">
                ${formData.others.length > 0 ? formData.others.join(', ') : 'No skills listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 30px;">
              <strong style="margin-right: 8px;">Soft Skills:</strong>
              <div style="color: black;">
                ${formData.softSkills.length > 0 ? formData.softSkills.join(', ') : 'No soft skills listed.'}
              </div>
            </div>

            <div style="display: flex; margin-bottom: 6px; margin-left: 30px;">
              <strong style="margin-right: 8px;">Languages:</strong>
              <div style="color: black;">
                ${formData.languages.length > 0 ? formData.languages.join(', ') : 'No soft skills listed.'}
              </div>
            </div>
          </div>
        </div>

        <!-- CERTIFICATIONS -->
<div style="margin-bottom: 5px; color: black;">
  <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">CERTIFICATIONS :</h3>
  <div style="display: flex; flex-direction: column; gap: 0px;"> <!-- Removed gap between certifications -->
    ${formData.certifications.length > 0 ? formData.certifications.map(certification => `
      <div style="display: flex; margin-left: 30px;"> <!-- Removed margin-bottom -->
        <strong style="margin-right: 10px;">${certification.course || 'Course not provided'}</strong>
        <div style="flex: 1;">
          <span style="margin-right: 3px;">by</span>
          <span>${certification.company || 'Company not provided'}</span>
        </div>
      </div>
    `).join('') : '<p style="color: black;">No certifications listed.</p>'}
  </div>
</div>

     <!-- Projects Section -->
        <div style="margin-bottom: 5px; color: black;">
          <h3 style="font-size: 18px; background-color: #778eb8c4; padding: 5px; margin: 0; color: black;">PROJECTS :</h3>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-left: 30px;">
            ${formData.projects.length > 0 ? formData.projects.map(project => `
              <div style="margin-bottom: 10px;">
                <strong style="color: black;">${project.title || 'Project title not provided'}</strong>
                <ul style="margin: 0; padding-left: 20px;">
                  ${project.details.length > 0 ? project.details.map(detail => `
                    <li style="margin: 0; color: black;">${detail || 'Detail point not provided'}</li>
                  `).join('') : '<li style="color: black;">No details listed.</li>'}
                </ul>
              </div>
            `).join('') : '<p style="color: black;">No projects listed.</p>'}
          </div>
        </div>


          
  
        </div>
  

`;
} else if (templateType === 7) {
    const imageURL = croppedImage || (formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/140');

    return `
      <!-- Top Flex: Name, Profile, and Job Title -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; height: auto; width: 100%; padding: 10px; box-sizing: border-box; margin-right: 40px; background-color: #ddd; border-radius: 15px;">
        
        <!-- Left Side: Name and Job Title -->
        <div style="flex: 0 0 60%; display: flex; flex-direction: column;">
          <h1 style="font-size: 36px; font-weight: bold; font-family: Arial, sans-serif; margin: 0; letter-spacing: 4px; padding-left: 30px; padding-top: 20px;">
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

          <!-- Skills Section -->
          <div style="margin-bottom: 20px;">
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">SKILLS</h3>
            ${(formData.skills || []).map(skill => `
              <p style="font-size: 14px; margin: 0; color:black;">&#8226; ${skill || 'Skill'}</p>
            `).join('')}
          </div>

          <!-- Education Section -->
          <div>
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">EDUCATION</h3>
            ${formData.education.length > 0 ? formData.education.map(edu => `
              <div style="margin-bottom: 10px;">
                <p style="font-size: 14px; margin: 0; color:black;">
                  <strong>${edu.level || 'Level not provided'}</strong> - ${edu.college || edu.schoolName || 'Institution not provided'}
                </p>
                
                ${edu.level === 'Class 10th' ? `
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Medium: ${edu.medium || 'Medium not provided'}</p>
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Year: ${edu.endYear || 'End Year not provided'}</p>
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
                ` : edu.level === 'Class 12th' ? `
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Medium: ${edu.medium || 'Course not provided'}</p>
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Year: ${edu.startYear || 'Start Year not provided'} - ${edu.endYear || 'End Year not provided'}</p>
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
                ` : (edu.level === 'Graduate' || edu.level === 'Postgraduate') ? `
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Course: ${edu.course || 'Course not provided'}</p>
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">College: ${edu.college || 'College not provided'}</p>
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Year: ${edu.startYear || 'Start Year not provided'} - ${edu.endYear || 'End Year not provided'}</p>
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
                ` : `
                  <p style="font-size: 14px; margin: 0; margin-bottom:2px; color:black;">Year: ${edu.startYear || 'Start Year not provided'} - ${edu.endYear || 'End Year not provided'}</p>
                `}
              </div>
            `).join('') : '<p style="font-size: 14px; margin: 0;">No education details provided.</p>'}
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
                <p style="font-size: 14px; margin: 0; color:black;"><strong>${exp.company || 'Company Name'}</strong> - ${exp.position || 'Position'} (${exp.dates || 'Year Range'})</p>
                <ul style="margin: 0; padding-left: 20px;">
                  ${(exp.details || []).map(detail => `<li style="font-size: 14px; margin: 0; color:black;">${detail || 'Responsibility/Achievement'}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <!-- Projects Section -->
          <div>
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">PROJECTS</h3>
            ${formData.projects.length > 0 ? formData.projects.map(project => `
              <div style="margin-bottom: 10px;">
                <p style="font-size: 14px; margin: 0; color:black;"><strong>${project.title || 'Project Title'}</strong></p>
                <ul style="margin: 0; padding-left: 20px; color:black;">
                  ${project.details.length > 0 ? project.details.map(detail => `<li style="font-size: 14px; margin: 0; color:black;">${detail || 'Project Detail'}</li>`).join('') : '<li style="font-size: 14px; margin: 0;">No details provided.</li>'}
                </ul>
              </div>
            `).join('') : '<p style="font-size: 14px; margin: 0;">No projects listed.</p>'}
          </div>

          <!-- Certifications Section -->
          <div>
            <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">CERTIFICATIONS</h3>
            ${formData.certifications.length > 0 ? formData.certifications.map(certification => `
              <div style="margin-bottom: 10px;">
                <p style="font-size: 14px; margin: 0; color:black;"><strong>${certification.course || 'Certification Course'} | ${certification.company || 'Issuing Company'}</strong></p>
                <ul style="margin: 0; padding-left: 20px; color:black;">
                  ${certification.details.length > 0 ? certification.details.map(detail => `<li style="font-size: 14px; margin: 0; color:black;">${detail || 'Project Detail'}</li>`).join('') : '<li style="font-size: 14px; margin: 0;">No details provided.</li>'}
                </ul>
              </div>
            `).join('') : '<p style="font-size: 14px; margin: 0;">No certification listed.</p>'}
          </div>



        </div>
      </div>
    `;
} else if (templateType === 8) {
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
            <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px;  margin: 0px;">
              <h4 style="font-size: 17px; color: #333;  margin: 0px; margin-bottom: 4px;">${exp.position || 'Position'} @ ${exp.company || 'Company Name'} <span style="font-size: 14px; color: #aaa;">(${exp.dates || 'Year Range'})</span></h4>
              <p style="font-size: 15px; color: #555;  margin: 0px; margin-bottom: 4px;">${exp.details.join(', ') || 'Responsibilities and achievements'}</p>
            </div>
          `).join('')}
        </section>



        <!-- Section: Education -->
<section style="margin-bottom: 30px; margin: 0px;">
  <h3 style="font-size: 22px; color: #007bff; margin-bottom: 10px; margin: 0px;">Education</h3>
  
  ${formData.education.length > 0 ? formData.education.map(edu => `
    <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin: 0px;">
      
      <!-- Class 10th -->
      ${edu.level === 'Class 10th' ? `
        <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
          ${edu.level || 'Class 10th'} @ ${edu.schoolName || 'School Name not provided'} 
          <span style="font-size: 14px; color: #aaa;">(${edu.endYear || 'Year'})</span>
        </h4>
        <p style="font-size: 15px; color: #555; margin: 0px;">Medium: ${edu.medium || 'Medium not provided'}</p>
        <p style="font-size: 15px; color: #555; margin: 0px;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
      ` : ''}

      <!-- Class 12th -->
      ${edu.level === 'Class 12th' ? `
        <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
          ${edu.level || 'Class 12th'} @ ${edu.college || 'School Name not provided'} 
          <span style="font-size: 14px; color: #aaa;">(${edu.startYear || 'Year'} - ${edu.endYear || 'Year'})</span>
        </h4>
        <p style="font-size: 15px; color: #555; margin: 0px;">Medium: ${edu.medium || 'Course not provided'}</p>
        <p style="font-size: 15px; color: #555; margin: 0px;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
      ` : ''}

      <!-- Graduate -->
      ${edu.level === 'Graduate' ? `
        <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
          ${edu.level || 'Graduate'} in ${edu.course || 'Course not provided'} @ ${edu.college || 'College Name not provided'} 
          <span style="font-size: 14px; color: #aaa;">(${edu.startYear || 'Year'} - ${edu.endYear || 'Year'})</span>
        </h4>
        <p style="font-size: 15px; color: #555; margin: 0px;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
      ` : ''}

      <!-- Postgraduate -->
      ${edu.level === 'Postgraduate' ? `
        <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
          ${edu.level || 'Postgraduate'} in ${edu.course || 'Course not provided'} @ ${edu.college || 'College Name not provided'} 
          <span style="font-size: 14px; color: #aaa;">(${edu.startYear || 'Year'} - ${edu.endYear || 'Year'})</span>
        </h4>
        <p style="font-size: 15px; color: #555; margin: 0px;">Percentage: ${edu.percentage || 'Percentage not provided'}</p>
      ` : ''}

      <!-- Other Levels -->
      ${edu.level !== 'Class 10th' && edu.level !== 'Class 12th' && edu.level !== 'Graduate' && edu.level !== 'Postgraduate' ? `
        <h4 style="font-size: 17px; color: #333; margin: 0px; margin-bottom: 4px;">
          ${edu.level || 'Degree'} in ${edu.field || 'Field of Study'} @ ${edu.college || edu.schoolName || 'Institution Name not provided'} 
          <span style="font-size: 14px; color: #aaa;">(${edu.startYear || 'Year'} - ${edu.endYear || 'Year'})</span>
        </h4>
        <p style="font-size: 15px; color: #555; margin: 0px;">CPI: ${edu.percentage || 'CPI Not Provided'}</p>
      ` : ''}
      
    </div>
  `).join('') : '<p style="font-size: 14px; margin: 0;">No education details provided.</p>'}
</section>



        <!-- Section: Projects -->
        <section style="margin-bottom: 0px; margin: 0px;">
          <h3 style="font-size: 22px; color: #007bff; margin-bottom: 10px; margin: 0px;">Projects</h3>
          ${formData.projects.length > 0 ? formData.projects.map(project => `
            <div style="margin-bottom: 0px; margin: 0px;">
              <h4 style="font-size: 17px; color: #333; margin: 0px;">${project.title || 'Project Title'}</h4>
              <p style="font-size: 15px; color: #555; margin: 0px;">${project.details.join(', ') || 'Project details not provided.'}</p>
            </div>
          `).join('') : '<p style="color: #555;">No projects listed.</p>'}
        </section>

        <!-- Section: Certifications -->
        <section style="margin-bottom: 0px; margin: 0px;">
          <h3 style="font-size: 22px; color: #007bff; margin-bottom: 10px; margin: 0px;">Certifications</h3>
          ${formData.certifications.length > 0 ? formData.certifications.map(certification => `
            <div style="margin-bottom: 20px;">
              <h4 style="font-size: 17px; color: #333; margin: 0px;">${certification.course || 'Certification Title'} @ ${certification.company || 'Issuing Company'}</h4>
              <p style="font-size: 15px; color: #555; margin: 0px;">${certification.details.join(', ') || 'Certification details not provided.'}</p>
            </div>
          `).join('') : '<p style="color: #555;">No certifications listed.</p>'}
        </section>



      </div>
    </div>
  `;
}








  





  
  
  
  
  
  
  
  

  return '';
};



