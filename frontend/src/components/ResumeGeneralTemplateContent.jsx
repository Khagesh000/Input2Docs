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

        <!-- Hobbies Section -->
        <p style="font-size: 14px; line-height: 1.5; text-align: left; margin: 5px 0; margin-top: 0px;">
          <strong style="color: #0d0565c4; font-size: 20px;">HOBBIES</strong><br>
        </p>

        <div style="display: flex; flex-wrap: wrap; margin-top: 0px;">
          ${formData.hobbies.map(hobbies => `
            <div style="flex: 1 1 50%; margin-bottom: 5px;">
              <ul style="list-style-type: disc; margin: 0; padding-left: 20px; font-size: 14px;">
                <li>${hobbies || 'Cricket'}</li>
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
            - ${hobbies || 'Cricket'}
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
          <div style="display: flex; justify-content: space-between; padding: 10px;">

  <!-- Left Side (Email, Mobile) -->
  <div style="display: flex; flex-direction: column; flex: 1; padding-right: 20px;">
    <div style="display: flex; justify-content: flex-start;">
      <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;"><span style="color: #000;">Email:</span></p>
      <p style="margin: 0; color: #3a4f74c4; font-weight: 500; margin-left: 8px;">${email || 'email@example.com'}</p>
    </div>
    <div style="display: flex; justify-content: flex-start; margin-top: 5px;">
      <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;"><span style="color: #000;">Mobile:</span></p>
      <p style="margin: 0; color: #333; font-weight: 500; margin-left: 8px;">${phone || '(123) 456-7890'}</p>
    </div>
  </div>

  <!-- Right Side (LinkedIn, GitHub) -->
  <div style="display: flex; flex-direction: column; flex: 1; padding-left: 20px;">
    <div style="display: flex; justify-content: flex-start;">
      <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;"><span style="color: #000;">LinkedIn:</span></p>
      <p style="margin: 0; color: #3a4f74c4; font-weight: 500; margin-left: 8px;">${linkedin || 'linkedin.com/in/username'}</p>
    </div>
    <div style="display: flex; justify-content: flex-start; margin-top: 5px;">
      <p style="margin: 0; color: #333; font-weight: 500; min-width: 70px;"><span style="color: #000;">GitHub:</span></p>
      <p style="margin: 0; color: #333; font-weight: 500; margin-left: 8px;">${Github || 'github.com/username'}</p>
    </div>
  </div>

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
} else if (templateType === 9) {
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
            <div style="margin-bottom: 15px;">
              <h4 style="font-size: 18px; color: #333; margin: 0;">${exp.position || 'Position'} @ ${exp.company || 'Company'}</h4>
              <p style="font-size: 14px; color: #777; margin: 0px;">${exp.dates || 'Date Range'}</p>
              <p style="font-size: 16px; color: #555; margin: 0px;">${exp.details.join(', ') || 'Responsibilities and achievements'}</p>
            </div>
          `).join('') || '<p style="font-size: 16px; color: #555; margin: 0px;">No experience listed.</p>'}
        </section>

        <!-- Section: Education -->
<section style="margin-top: 0px; margin: 0; padding: 0;">
  <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 0px; margin-top: 0; margin-bottom: 5px; margin: 0px;">Education</h3>
  ${(formData.education || []).map(edu => `
    <div style="margin-bottom: 5px; margin: 0px;">
      <!-- Class 10th -->
      ${edu.level === 'Class 10th' ? `
        <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.level || 'Class 10th'} @ ${edu.schoolName || 'School Name'}</h4>
        <p style="font-size: 14px; color: #777; margin: 0px;">Year: ${edu.endYear || 'Year not provided'}</p>
        <p style="font-size: 16px; color: #555; margin: 0px;">Percentage: ${edu.percentage || 'Not provided'}</p>
      ` : ''}

      <!-- Class 12th -->
      ${edu.level === 'Class 12th' ? `
        <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.level || 'Class 12th'} @ ${edu.college || 'School Name'}</h4>
        <p style="font-size: 14px; color: #777; margin: 0px;">Year:  ${edu.startYear || 'Year not provided'} - ${edu.endYear || 'Year not provided'}</p>
        <p style="font-size: 16px; color: #555; margin: 0px;">Percentage: ${edu.percentage || 'Not provided'}</p>
      ` : ''}

      <!-- Graduate -->
      ${edu.level === 'Graduate' ? `
        <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.level || 'Graduate'} in ${edu.course || 'Course'} @ ${edu.college || 'Institution'}</h4>
        <p style="font-size: 14px; color: #777; margin: 0px;">Year:  ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</p>
        <p style="font-size: 16px; color: #555; margin: 0px;">Percentage: ${edu.percentage || 'Not provided'}</p>
      ` : ''}

      <!-- Postgraduate -->
      ${edu.level === 'Postgraduate' ? `
        <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.level || 'Postgraduate'} in ${edu.course || 'Course'} @ ${edu.institution || 'Institution'}</h4>
        <p style="font-size: 14px; color: #777; margin: 0px;">${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</p>
        <p style="font-size: 16px; color: #555; margin: 0px;">Percentage: ${edu.percentage || 'Not provided'}</p>
      ` : ''}

      <!-- Other Education Levels -->
      ${edu.level !== 'Class 10th' && edu.level !== 'Class 12th' && edu.level !== 'Graduate' && edu.level !== 'Postgraduate' ? `
        <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.degree || 'Degree'} in ${edu.field || 'Field of Study'} @ ${edu.institution || 'Institution'}</h4>
        <p style="font-size: 14px; color: #777; margin: 0px;">${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</p>
        <p style="font-size: 16px; color: #555; margin: 0px;">${edu.details || 'Details about education'}</p>
      ` : ''}
    </div>
  `).join('') || '<p style="font-size: 16px; color: #555;">No education listed.</p>'}
</section>

       <!-- Projects: -->
        <section style="margin-top: 10px;">
          <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0px;">Projects</h3>
          ${(formData.projects || []).map(project => `
            <div style="margin-bottom: 15px;">
              <h4 style="font-size: 18px; color: #333; margin: 0;">${project.title || 'Certification Title'}</h4>
              <p style="font-size: 16px; color: #555; margin: 0px;">${project.details || 'Certification details'}</p>
            </div>
          `).join('') || '<p style="font-size: 16px; color: #555; margin: 0px;">No certifications listed.</p>'}
        </section>


        <!-- Section: Certifications -->
        <section style="margin-top: 10px;">
          <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0px;">Certifications</h3>
          ${(formData.certifications || []).map(cert => `
            <div style="margin-bottom: 15px;">
              <h4 style="font-size: 18px; color: #333; margin: 0;">${cert.course || 'Certification Title'} @ ${cert.company || 'Issuing Organization'}</h4>
              <p style="font-size: 16px; color: #555; margin: 0px;">${cert.details || 'Certification details'}</p>
            </div>
          `).join('') || '<p style="font-size: 16px; color: #555; margin: 0px;">No certifications listed.</p>'}
        </section>

      </div>
    </div>
  `;
} else if (templateType === 10) {
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
            <div>
              <!-- Class 10th -->
              ${edu.level === 'Class 10th' ? `
                <strong style="color: #000;">${edu.level || 'Class 10th'}</strong><br>
                <span style="font-size: 14px; color: #777;">${edu.schoolName || 'School Name'}</span><br>
                <span style="font-size: 14px; color: #777;"><strong>Duration:</strong> ${edu.endYear || 'Year not provided'}</span><br>
                <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Percentage Not Provided'}</span>
              ` : ''}
        
              <!-- Class 12th -->
              ${edu.level === 'Class 12th' ? `
                <strong style="color: #000;">${edu.level || 'Class 12th'} </strong><br>
                <span style="font-size: 14px; color: #777;">${edu.college || 'College Name'}</span><br>
                <span style="font-size: 14px; color: #777;"><strong>Duration:</strong> ${edu.startYear || 'Year not provided'} - ${edu.endYear || 'Year not provided'}</span><br>
                <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
              ` : ''}
        
              <!-- Graduate -->
              ${edu.level === 'Graduate' ? `
                <strong style="color: #000;">${edu.level || 'Graduate'} in ${edu.course || 'Course'}</strong><br>
                <span style="font-size: 14px; color: #777;">${edu.college || 'College Name'}</span><br>
                <span style="font-size: 14px; color: #777;"><strong>Duration:</strong> ${edu.startYear || 'Year not provided'} - ${edu.endYear || 'Year not provided'}</span><br>
                <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
              ` : ''}
        
              <!-- Postgraduate -->
              ${edu.level === 'Postgraduate' ? `
                <strong style="color: #000;">${edu.level || 'Graduate'} in ${edu.course || 'Course'}</strong><br>
                <span style="font-size: 14px; color: #777;">${edu.college || 'College Name'}</span><br>
                <span style="font-size: 14px; color: #777;"><strong>Duration:</strong> ${edu.startYear || 'Year not provided'} - ${edu.endYear || 'Year not provided'}</span><br>
                <span style="font-size: 14px; color: #777;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</span>
              ` : ''}
        
              <!-- Other Education Levels -->
              ${edu.level !== 'Class 10th' && edu.level !== 'Class 12th' && edu.level !== 'Graduate' && edu.level !== 'Postgraduate' ? `
                <strong style="color: #000;">${edu.level || 'Graduate'} in ${edu.course || 'Course'}</strong><br>
                <span style="font-size: 14px; color: #777;">${edu.college || 'College Name'}</span><br>
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
            <div style="margin-bottom: 10px;">
              <strong style="font-size: 16px; color: #000;">${exp.company || 'Company Name'}</strong><br>
              <span style="font-size: 14px; color: #000; margin-right: 5px;">${exp.position || 'Position'}</span>
              <span style="font-size: 14px; color: #000;">[${exp.dates || 'Year Range'}]</span>
              <ul style="list-style-type: disc; margin: 3px 0 0 20px; padding-left: 20px; font-size: 14px;">
                ${(exp.details || []).map(detail => `<li>${detail || 'Responsibility/Achievement'}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- Projects Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">PROJECTS</label>
          ${(formData.projects || []).map(project => `
            <div style="margin-bottom: 10px;">
              <strong style="font-size: 16px; color: #000;">${project.title || 'Project Title'}</strong><br>
              <span style="font-size: 14px; color: #000;">${project.details || 'Project Description'}</span>
            </div>
          `).join('')}
        </div>

        <!-- Certificates Section -->
        <div style="margin-top: 20px;">
          <label style="font-weight: bold; font-size: 16px; color: #0d0565c4;">CERTIFICATES</label>
          ${(formData.certifications || []).map(cert => `
            <div style="margin-bottom: 10px;">
              <strong style="font-size: 16px; color: #000;">${cert.course || 'Certificate Name'}</strong><br>
              <span style="font-size: 14px; color: #000;">${cert.details || 'Issuing Organization'}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;
} else if (templateType === 11) {
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
          
        </div>
      </div>

      <!-- Summary Section -->
      <div style="color: #000; margin-bottom: 5px;">
        <h3 style="font-size: 18px; background-color: #a8a89c; padding: 5px; margin: 0; color: black;">OBJECTIVE</h3>
        <p style="margin: 0; color: black;">${summary || 'This is a summary of the applicant’s experience, skills, and other key information.'}</p>
      </div>

      <!-- Education Section -->
      <div style="margin-bottom: 5px;">
        <h3 style="font-size: 18px; background-color: #a8a89c; padding: 5px; margin: 0; color: black;">EDUCATION</h3>
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
        <h3 style="font-size: 18px; background-color: #a8a89c; padding: 5px; margin: 0; color: black;">INTERNSHIP</h3>
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
        <h3 style="font-size: 18px; background-color: #a8a89c; padding: 5px; margin: 0; color: black;">PROJECTS</h3>
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
        <h3 style="font-size: 18px; background-color: #a8a89c; padding: 5px; margin: 0; color: black;">TECHNICAL SKILLS</h3>
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
        <h3 style="font-size: 18px; background-color: #a8a89c; padding: 5px; margin: 0; color: black;">CERTIFICATIONS</h3>
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
} else if (templateType === 12) {
  return `
  <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #2b2b2b; padding: 20px; background-color: #f4f4f4;">
    <!-- Header Section (Name + Job Title) -->
    <div style="display: flex; justify-content: space-between; align-items: center; background-color: #2d4059; color: white; padding: 20px; margin-bottom: 15px;">
      <div>
        <h1 style="font-size: 28px; margin: 0;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
        <p style="font-size: 18px; font-weight: normal; margin: 5px 0;">${formData.jobTitle || 'Full Stack Developer'}</p>
      </div>
      <div style="text-align: right;">
        <p style="margin: 0; font-weight: 500;">${email || 'email@example.com'}</p>
        <p style="margin: 0;">${phone || '(123) 456-7890'}</p>
      </div>
    </div>

    <!-- Profile Summary -->
    <div style="background-color: white; padding: 0px; padding-left: 10px;  margin-bottom: 10px; border-left: 5px solid #ea5455;">
      <h2 style="font-size: 22px; margin-bottom: 0px; color: #2d4059;">Profile Summary</h2>
      <p style="margin: 0; color: #000;">${formData.summary || 'Dynamic and detail-oriented software engineer with 5+ years of experience...'}</p>
    </div>

    <!-- Education Section -->
    <div style="background-color: white; padding: 0px; margin-bottom: 10px; padding-left: 10px;  margin-bottom: 10px; border-left: 5px solid #f07b3f;">
      <h2 style="font-size: 22px; margin-bottom: 2px; color: #2d4059;">Education</h2>
      <div style="display: flex; flex-direction: column; gap: 10px; margin: 0px;">
        ${formData.education.length > 0 ? formData.education.map(edu => `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin: 0px;">
            <div style="flex: 1; margin: 0;">
              <p style="margin: 0; color: #ea5455; font-size: 20px; font-weight: 550;">${edu.level || 'Degree not provided'}</p>
              <p style="margin: 0; color: #000;">${edu.level === 'Class 10th' ? edu.schoolName || 'School Name not provided' : edu.college || 'College/University not provided'} - [${edu.percentage || 'Percentage not provided'}%]</p>
            </div>
            <div style="text-align: right; color: #7a7a7a;">
              <p style="margin: 0; color: #000;">${edu.level === 'Class 10th' ? edu.endYear || 'Year not provided' : `${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}`}</p>
            </div>
          </div>
        `).join('') : '<p>No education information provided.</p>'}
      </div>
    </div>

    <!-- Skills Section -->
    <div style="background-color: white; padding: 0px; padding-left: 10px;  margin-bottom: 8px; border-left: 5px solid #46b3e6;">
      <h2 style="font-size: 22px; margin-bottom: 10px; color: #2d4059;">Skills</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 15px;">
        ${formData.skills.length > 0 ? formData.skills.map(skill => `
          <span style="padding: 8px 12px; background-color: #ea5455; color: white; border-radius: 5px; margin-bottom: 5px;">${skill}</span>
        `).join('') : '<p>No skills listed.</p>'}
      </div>
    </div>

    <!-- Experience Section -->
    <div style="background-color: white; padding: 0px; padding-left: 10px;  margin-bottom: 8px; border-left: 5px solid #1b9cfc;">
      <h2 style="font-size: 22px; margin-bottom: 0px; color: #2d4059;">Work Experience</h2>
      ${formData.experience.length > 0 ? formData.experience.map(exp => `
        <div style="margin-bottom: 0px; margin: 0;">
          <p style="margin: 0; color: #ea5455; margin-bottom: 0px; font-size: 20px; font-weight: 550;">${exp.position || 'Software Engineer'}</p>
          <p style="margin: 0px 0; color: #000;">${exp.company || 'Tech Company'}</p>
          <p style="margin: 0; color: #000;">${exp.startYear || '2021'} - ${exp.endYear || 'Present'}</p>
          <ul style="margin-top: 0px; padding-left: 20px;">
            ${exp.details.length > 0 ? exp.details.map(detail => `
              <li>${detail}</li>
            `).join('') : '<li>No details provided.</li>'}
          </ul>
        </div>
      `).join('') : '<p>No experience listed.</p>'}
    </div>

    <!-- Certifications Section -->
    <div style="background-color: white; padding: 0px; padding-left: 10px;  margin-bottom: 8px; border-left: 5px solid #28a745;">
      <h2 style="font-size: 22px; margin-bottom: 0px; color: #2d4059;">Certifications</h2>
      ${formData.certifications.length > 0 ? formData.certifications.map(cert => `
        <div style="margin-bottom: 0px;">
          <p style="margin: 0; color: #ea5455; font-size: 20px; font-weight: 550;">${cert.course || 'Course Name'}</p>
          <p style="margin: 0px 0; color: #000;">${cert.company || 'Certification Company'}</p>
          <ul style="padding-left: 20px; margin: 0;">
            ${cert.details.map(detail => `<li>${detail}</li>`).join('')}
          </ul>
        </div>
      `).join('') : '<p>No certifications listed.</p>'}
    </div>

    <!-- Footer with LinkedIn & GitHub -->
    <div style="background-color: #2d4059; color: white; padding: 15px;">
      <p style="margin: 0;">LinkedIn: ${linkedin || 'linkedin.com/in/username'}</p>
      <p style="margin: 0;">GitHub: ${Github || 'github.com/username'}</p>
    </div>
  </div>
  `;
} else if (templateType === 13) {
  return `
  <div style="background-color: #f4f7f6; font-family: Arial, sans-serif; padding: 20px; max-width: 850px; margin: auto; border: 1px solid #dcdcdc; border-radius: 10px;">

      <!-- Header: Name, Job Title, Contact Info -->
      <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px; letter-spacing: 1px;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
          <p style="font-size: 18px; margin: 5px 0;">${formData.jobTitle || 'Full Stack Developer'}</p>
          <div style="font-size: 14px; margin-top: 10px; display: flex; justify-content: center; gap: 20px;">
              <span>${formData.phone || '123-456-7890'}</span>
              <span>${formData.email || 'john.doe@example.com'}</span>
              <span><a href="${formData.linkedin ? `https://${formData.linkedin}` : 'https://linkedin.com/in/johndoe'}" target="_blank" style="color: white; text-decoration: none;">LinkedIn</a></span>
          </div>
      </div>

      <!-- Main Content: Two Columns -->
      <div style="display: flex; margin-top: 20px;">

          <!-- Left Column: Professional Summary, Experience, Education -->
          <div style="width: 65%; padding-right: 20px;">
              
              <!-- Professional Summary -->
              <section style="margin-bottom: 30px;">
                  <h2 style="font-size: 20px; color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 0px;">Professional Summary</h2>
                  <p style="font-size: 14px; color: #333;">${formData.summary || 'Experienced developer with a passion for coding, skilled in both front-end and back-end technologies. Strong background in building scalable web applications.'}</p>
              </section>

              <!-- Experience Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 20px; color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 5px;">Experience</h2>
                  ${formData.experience && formData.experience.length > 0 ? formData.experience.map(exp => `
                      <div style="margin-bottom: 0px; margin: 0;">
                          <strong style="font-size: 16px; color: #2c3e50; margin: 0;">${exp.position || 'Job Title'} - ${exp.company || 'Company Name'}</strong>
                          <p style="font-size: 12px; color: #666; margin: 0; margin-bottom: 2px;">${exp.dates || 'Jan 2020 - Present'}</p>
                          <ul style="font-size: 14px; margin: 0; margin-bottom: 2px; color: #333; padding-left: 20px;">
                              ${Array.isArray(exp.details) && exp.details.length > 0 ? exp.details.map(detail => `<li>${detail}</li>`).join('') : '<li>No details provided</li>'}
                          </ul>
                      </div>
                  `).join('') : '<p style="font-size: 14px; color: #777;">No experience listed.</p>'}
              </section>

              <!-- Education Section -->
<section style="margin-bottom: 0px;">
    <h2 style="font-size: 20px; color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 5px; margin: 0; margin-bottom: 5px; margin-top: 10px;">Education</h2>
    ${formData.education && formData.education.length > 0 ? formData.education.map(edu => `
        <div style="margin-bottom: 0px; margin: 0;">
            <!-- Handle Class 10th differently -->
            ${edu.level === 'Class 10th' ? `
                <strong style="font-size: 16px; color: #2c3e50; margin: 0;">${edu.level || 'Degree Name'}</strong>- ${edu.schoolName || 'Institution Name'}
                <p style="font-size: 12px; color: #666; margin: 0; margin-bottom: 5px;">${edu.endYear || 'End Year'} - (${edu.percentage ? `${edu.percentage}%` : ''})</p>
            ` : `
                <strong style="font-size: 16px; color: #2c3e50;">${edu.level || 'Degree Name'}</strong> - ${edu.college || 'Institution Name'}
                <p style="font-size: 12px; color: #666; margin: 0; margin-bottom: 5px;">
                    ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'} 
                    ${edu.percentage ? `(${edu.percentage}%)` : ''}
                </p>
            `}
        </div>
    `).join('') : '<p style="font-size: 14px; color: #777;">No education listed.</p>'}
</section>



              <!-- Projects Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 20px; color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 5px;">Projects</h2>
                  ${formData.projects.length > 0 ? formData.projects.map(project => `
                      <div style="margin-bottom: 20px;">
                          <strong style="font-size: 16px; color: #2c3e50;">${project.title || 'Degree Name'}</strong>
                          <ul style="margin: 0; padding-left: 20px;">
                    ${project.details.length > 0 ? project.details.map(detail => `
                      <li style="margin: 0; color: black;">${detail || 'Detail point not provided'}</li>
                    `).join('') : '<li style="color: black;">No details listed.</li>'}
                  </ul>
                      </div>
                  `).join('') : '<p style="font-size: 14px; color: #777;">No education listed.</p>'}
              </section>

             

          </div>

          <!-- Right Column: Skills, Languages, Personal Info -->
          <div style="width: 35%; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">

                 <!-- Personal Info Section -->
              <section>
                  <h2 style="font-size: 20px; color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 5px;">Personal Info</h2>
                  <p style="font-size: 14px; color: #333; margin: 0; margin-bottom: 5px;"><strong>Address:</strong> ${formData.address || '123 Main St, City, Country'}</p>
                  <p style="font-size: 14px; color: #333; margin: 0; margin-bottom: 5px;"><strong>Phone:</strong> ${formData.phone || '123-456-7890'}</p>
                  <p style="font-size: 14px; color: #333; margin: 0; margin-bottom: 5px;"><strong>Email:</strong> ${formData.email || 'john.doe@example.com'}</p>
              </section>
              
              <!-- Skills Section -->
              <section style="margin-bottom: 0px; margin: 0;">
                  <h2 style="font-size: 20px; color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 5px; margin: 0; margin-bottom: 2px;">Skills</h2>
                  <ul style="font-size: 14px; color: #333; padding-left: 20px; margin: 0; margin-bottom: 5px;">
                      ${formData.skills && formData.skills.length > 0 ? formData.skills.map(skill => `<li>${skill}</li>`).join('') : '<li>No skills listed</li>'}
                  </ul>
              </section>

              <!-- Languages Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 20px; color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 5px; margin: 0; margin-top: 15px;">Languages</h2>
                  <ul style="font-size: 14px; color: #333; padding-left: 20px; margin: 0; margin-bottom: 5px;">
                      ${formData.languages && formData.languages.length > 0 ? formData.languages.map(language => `<li>${language}</li>`).join('') : '<li>No languages listed</li>'}
                  </ul>
              </section>

              


              <!-- Certification Section -->
<section style="margin-top: 30px;">
    <h2 style="font-size: 20px; color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 5px;">CERTIFICATIONS</h2>
    ${formData.certifications && formData.certifications.length > 0 ? formData.certifications.map(cert => `
        <div style="margin-bottom: 20px;">
            <strong style="font-size: 16px; color: #2c3e50; margin: 0;">${cert.course || 'Course Name'}</strong>
            <p style="font-size: 14px; color: #666; margin: 0; padding-left: 15px;">@${cert.company || 'Company Name'}</p>
        </div>
    `).join('') : '<p style="font-size: 14px; color: #777;">No certifications listed.</p>'}
</section>

          </div>

      </div>

  </div>
  `;
} else if (templateType === 14) {
  // Use the cropped image URL if available, otherwise use the original image URL or placeholder.
  const imageURL = croppedImage || (formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/140');

  return `
    <!-- Creative Resume Template -->
    <div style="width: 100%; padding: 15px; box-sizing: border-box;">

      <!-- Main Container -->
      <div style="max-width: 850px; background-color: #fff; font-family: 'Helvetica', sans-serif; padding: 20px; margin: 0; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">

        <!-- Header -->
        <header style="display: flex; align-items: center; border-bottom: 3px solid #00aaff; padding-bottom: 15px;">
          <img src="${imageURL}" alt="Profile Image" style="width: 140px; height: 140px; border-radius: 70px; margin-right: 20px; border: 2px solid #00aaff;">
          <div style="flex: 1;">
            <h1 style="font-size: 34px; color: #333; margin: 0;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
            <h2 style="font-size: 20px; color: #777; margin: 5px 0;">${formData.jobTitle || 'Software Developer'}</h2>
          </div>
        </header>

        <!-- Section: Profile Summary -->
        <section style="margin-top: 20px;">
          <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0;">Profile Summary</h3>
          <p style="font-size: 16px; color: #555;">${formData.summary || 'Results-driven software developer with expertise in modern web technologies and a passion for creating user-centric applications.'}</p>
        </section>

        <!-- Section: Experience -->
        <section style="margin-top: 20px;">
          <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0;">Experience</h3>
          ${(formData.experience || []).map(exp => `
            <div style="margin-bottom: 15px;">
              <h4 style="font-size: 18px; color: #333; margin: 0;">${exp.position || 'Position'} @ ${exp.company || 'Company'}</h4>
              <p style="font-size: 14px; color: #777; margin: 0;">${exp.dates || 'Date Range'}</p>
              <p style="font-size: 16px; color: #555; margin: 0;">${exp.details.join(', ') || 'Responsibilities and achievements'}</p>
            </div>
          `).join('') || '<p style="font-size: 16px; color: #555;">No experience listed.</p>'}
        </section>

        <!-- Section: Education -->
        <section style="margin-top: 20px;">
          <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0;">Education</h3>
          ${(formData.education || []).map(edu => `
            <div style="margin-bottom: 15px;">
              <h4 style="font-size: 18px; color: #333; margin: 0;">${edu.degree || 'Degree'} in ${edu.field || 'Field of Study'} @ ${edu.institution || 'Institution'}</h4>
              <p style="font-size: 14px; color: #777; margin: 0;">${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}</p>
              <p style="font-size: 16px; color: #555; margin: 0;">Percentage: ${edu.percentage || 'Not provided'}</p>
            </div>
          `).join('') || '<p style="font-size: 16px; color: #555;">No education listed.</p>'}
        </section>

        <!-- Section: Projects -->
        <section style="margin-top: 20px;">
          <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0;">Projects</h3>
          ${(formData.projects || []).map(project => `
            <div style="margin-bottom: 15px;">
              <h4 style="font-size: 18px; color: #333; margin: 0;">${project.title || 'Project Title'}</h4>
              <p style="font-size: 16px; color: #555; margin: 0;">${project.details || 'Project details'}</p>
            </div>
          `).join('') || '<p style="font-size: 16px; color: #555;">No projects listed.</p>'}
        </section>

        <!-- Section: Certifications -->
        <section style="margin-top: 20px;">
          <h3 style="font-size: 20px; color: #00aaff; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin: 0;">Certifications</h3>
          ${(formData.certifications || []).map(cert => `
            <div style="margin-bottom: 15px;">
              <h4 style="font-size: 18px; color: #333; margin: 0;">${cert.course || 'Certification Title'} @ ${cert.company || 'Issuing Organization'}</h4>
              <p style="font-size: 16px; color: #555; margin: 0;">${cert.details || 'Certification details'}</p>
            </div>
          `).join('') || '<p style="font-size: 16px; color: #555;">No certifications listed.</p>'}
        </section>

      </div>
    </div>
  `;
} else if (templateType === 15) {
  const imageURL = croppedImage || (formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/140');

  return `
    <!-- Top Flex: Name, Profile, and Job Title -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; height: auto; width: 100%; padding: 10px; box-sizing: border-box; margin-right: 40px; background-color: #778eb8c4; border-radius: 15px;">
      
      <!-- Left Side: Name and Job Title -->
      <div style="flex: 0 0 60%; display: flex; flex-direction: column;">
        <h1 style="font-size: 32px; font-weight: bold; font-family: Arial, sans-serif; margin: 0; letter-spacing: 4px; padding-left: 30px; padding-top: 20px;">
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
}else if (templateType === 16) {
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
        <h3 style="font-size: 18px; background-color: lightcoral; padding: 5px; margin: 0; color: black;">OBJECTIVE :</h3>
        <p style="margin: 0; color: black;">${summary || 'This is a summary of the applicant’s experience, skills, and other key information.'}</p>
      </div>

      <!-- Education Section -->
<div style="margin-bottom: 15px;">
<h3 style="font-size: 18px; background-color: lightcoral; padding: 5px; margin: 0; margin-bottom: 10px; color: black;">EDUCATION DETAILS :</h3>

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
        <h3 style="font-size: 18px; background-color: lightcoral; padding: 5px; margin: 0; color: black;">INTERNSHIP :</h3>
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
        <h3 style="font-size: 18px; background-color: lightcoral; padding: 5px; margin: 0; color: black;">TECHNICAL SKILLS :</h3>
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
<h3 style="font-size: 18px; background-color: lightcoral; padding: 5px; margin: 0; color: black;">CERTIFICATIONS :</h3>
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
        <h3 style="font-size: 18px; background-color: lightcoral; padding: 5px; margin: 0; color: black;">PROJECTS :</h3>
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
}if (templateType === 17) {
  return `
    <div style="display: flex; flex-direction: column; height: 100%; background-color: #f4f4f4; color: #333; padding: 10px;">

      <!-- Header Section -->
      <div style="display: flex; justify-content: center; align-items: center; background-color: #0047AB; padding: 0px; margin-bottom: 5px; color: #fff;">
        <h1 style="margin: 0; font-size: 32px;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
      </div>

      <!-- Contact Information Section -->
      <div style="background-color: #E6E6E6; padding: 10px; margin-bottom: 5px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; margin: 0px;">
        <p style="margin: 0; color: #333;">${email || 'email@example.com'}</p>
        <p style="margin: 0; color: #333;">${phone || '(123) 456-7890'}</p>
        <p style="margin: 0; color: #333;">${linkedin || 'linkedin.com/in/username'}</p>
      </div>

      <!-- Objective Section -->
      <div style="margin-bottom: 0px;">
        <h3 style="font-size: 20px; background-color: #F5A623; color: #fff; padding: 8px; margin: 0px; margin-top: 8px;">Objective</h3>
        <p style="margin: 0; padding: 10px; background-color: #fff; color: #333;">${summary || 'A driven professional with expertise in XYZ seeking to contribute and grow in a dynamic organization.'}</p>
      </div>

      <!-- Education Section -->
<!-- Education Section -->
<div style="margin-bottom: 0px; margin: 0px;">
  <h3 style="font-size: 20px; background-color: #F5A623; color: #fff; padding: 8px; margin: 0; margin-top: 8px;">Education</h3>
  <div style="padding: 10px; background-color: #fff;">
    ${formData.education.length > 0 ? formData.education.map(edu => `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; margin: 0;">
        <p style="margin: 0; flex: 2; color: #333;"><strong>${edu.level || 'Degree'}</strong> - ${edu.schoolName || edu.college || 'Institute'}</p>
        <p style="margin: 0; flex: 1; text-align: center; color: #333;"><strong>Percentage:</strong> ${edu.percentage || 'Not provided'}</p>
        <p style="margin: 0; flex: 1; text-align: right; color: #333;">${edu.endYear || 'Year'}</p>
      </div>
    `).join('') : '<p>No education details available.</p>'}
  </div>
</div>



      <!-- Experience Section -->
      <div style="margin-bottom: 0px; margin: 0;">
        <h3 style="font-size: 20px; background-color: #F5A623; color: #fff; padding: 8px; margin : 0; margin-top: 8px;">Internships & Experience</h3>
        <div style="padding: 10px; background-color: #fff;">
          ${formData.experience.length > 0 ? formData.experience.map(exp => `
            <div style="margin-bottom: 10px;">
              <p style="margin: 0; color: #333;"><strong>${exp.position || 'Position'}</strong> at ${exp.company || 'Company'}</p>
              <ul style="margin: 5px 0; padding-left: 20px;">
                ${exp.details && exp.details.length > 0 ? exp.details.map(detail => `<li>${detail}</li>`).join('') : '<li>No details available.</li>'}
              </ul>
            </div>
          `).join('') : '<p>No experience listed.</p>'}
        </div>
      </div>

      <!-- Projects Section -->
      <div style="margin-bottom: 0px; margin: 0;">
        <h3 style="font-size: 20px; background-color: #F5A623; color: #fff; padding: 8px; margin: 0; margin-top: 8px;">Projects</h3>
        <div style="padding: 10px; background-color: #fff;">
          ${formData.projects.length > 0 ? formData.projects.map(project => `
            <div style="margin-bottom: 10px;">
              <p style="margin: 0; color: #333;"><strong>${project.title || 'Project Title'}</strong></p>
              <ul style="margin: 5px 0; padding-left: 20px;">
                ${project.details && project.details.length > 0 ? project.details.map(detail => `<li>${detail}</li>`).join('') : '<li>No details available.</li>'}
              </ul>
            </div>
          `).join('') : '<p>No projects listed.</p>'}
        </div>
      </div>

      <!-- Skills Section -->
      <div style="margin-bottom: 0px; margin: 0;">
        <h3 style="font-size: 20px; background-color: #F5A623; color: #fff; padding: 8px; margin: 0; margin-top: 8px;">Skills</h3>
        <div style="padding-left: 10px; background-color: #fff; margin: 0;">
          <p style="margin: 0; margin-top: 8px; padding-top: 5px; color: #333;"><strong>Programming Languages:</strong> ${formData.skills.length > 0 ? formData.skills.join(', ') : 'Not specified.'}</p>
          <p style="margin: 0; margin-top: 3px; color: #333;"><strong>Tools:</strong> ${formData.tools.length > 0 ? formData.tools.map(tool => tool.name).join(', ') : 'Not specified.'}</p>
          <p style="margin: 0; margin-top: 3px; color: #333;"><strong>Others:</strong> ${formData.others.length > 0 ? formData.others.join(', ') : 'Not specified.'}</p>
        </div>
      </div>

      <!-- Certifications Section -->
      <div style="margin-bottom: 0px; margin: 0px;">
        <h3 style="font-size: 20px; background-color: #F5A623; color: #fff; padding: 8px; margin: 0; margin-top: 8px;">Certifications</h3>
        <div style="padding: 10px; background-color: #fff;">
          ${formData.certifications.length > 0 ? formData.certifications.map(certification => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <p style="margin: 0; color: #333;"><strong>${certification.course || 'Course Name'}</strong></p>
              <p style="margin: 0; color: #333;">${certification.company || 'Institution'}</p>
            </div>
          `).join('') : '<p>No certifications listed.</p>'}
        </div>
      </div>

    </div>
  `;
} else if (templateType === 18) {
  return `
    <!-- Resume Template -->
<div style="display: flex; height: 100%; width: 100%; box-sizing: border-box; margin-left: 20px; margin-right: 20px;">

<!-- Left side content -->
<div style="flex: 1; padding: 20px; background-color: #ddd; color: white; min-height: 1120px; box-sizing: border-box;">
  
  <!-- Full Name and Job Title -->
<h1 style="font-size: 32px; font-weight: 700; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-top: 30px; margin-bottom: 3px; color: #333; text-align: left;">
${formData.firstName || 'JOHN'} ${formData.lastName || 'SMITH'}
</h1>
<h2 style="font-size: 24px; font-weight: 400; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 5px 0; color: #333; text-align: left;">
${formData.jobTitle || 'IT Project Manager'}
</h2>


  <!-- Personal Information -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: #333; padding: 0px;">PERSONAL INFO</label>
    <div style="margin: 0;">
      <strong style="color: #333;">Address:</strong><br>
      <span style="font-size: 14px; color: #333;">${formData.address || '123 Main St, City, State, ZIP'}</span>
    </div>
    <div style="margin: 0;">
      <strong style="color: #333;">Phone:</strong><br>
      <span style="font-size: 14px; color: #333;">${formData.phone || '(123) 456-7890'}</span>
    </div>
    <div style="margin: 0;">
      <strong style="color: #333;">Email:</strong><br>
      <span style="font-size: 14px; color: #333;">${formData.email || 'email@example.com'}</span>
    </div>
    <div style="margin: 0;">
      <strong style="color: #333;">LinkedIn:</strong><br>
      <span style="font-size: 14px; color: #333;">${formData.linkedin || 'linkedin.com/in/username'}</span>
    </div>
  </div>

  <!-- Skills Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: #333;">SKILLS</label>
    <div style="margin-top: 10px;">
      ${(formData.skills || []).map(skill => `
        <div style="font-size: 14px; color: #333;">
          - ${skill || 'Skill'}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Languages Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: #333;">LANGUAGES</label>
    <div style="margin-top: 10px;">
      ${(formData.languages || []).map(lang => `
        <div style="font-size: 14px; color: #333;">
          - ${lang || 'Language'}
        </div>
      `).join('')}
    </div>
  </div>


  <!-- Hobbies Section -->
  <div style="margin-top: 20px;">
    <label style="font-weight: bold; font-size: 16px; color: #333;">HOBBIES</label>
    <div style="margin-top: 10px;">
      ${(formData.hobbies || []).map(hobbies => `
        <div style="font-size: 14px; color: #333;">
          - ${hobbies || 'Cricket'}
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
      <div style="margin: 10px 0; font-size: 14px; color: black; border: 1px solid #ccc; border-radius: 5px; padding: 10px; background-color: #f9f9f9;">
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
            <div style="margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px; padding: 10px; background-color: #f9f9f9;">
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
  <div style="margin-bottom: 1px; border: 1px solid #ccc; border-radius: 5px; padding: 10px; background-color: #f9f9f9;">
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
} else if (templateType === 19) {
  return `
  <div style="background-color: #f7f7f7; font-family: Arial, sans-serif; padding: 20px; max-width: 900px; margin: auto; display: flex; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
    
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
        <h3 style="font-size: 20px; display: flex; align-items: center; margin: 0;">
          <img src="${summaryIcon}" alt="summary-icon" style="width: 24px; margin-right: 10px;">
          Summary
        </h3>
        <p style="font-size: 14px; color: #333; margin-left: 20px; display: flex; align-items: center; ">
          <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
          ${formData.summary || 'Oversaw all major hospital IT projects for 10+ years, focusing on cost reduction.'}
        </p>
      </div>

      <!-- Experience Section -->
      <div style="margin-top: 30px; margin-left: 55px; ">
        <h3 style="font-size: 20px; display: flex; align-items: center; ">
          <img src="${experienceIcon}" alt="experience-icon" style="width: 24px; margin-right: 10px; ">
          Experience
        </h3>
        ${formData.experience && formData.experience.length > 0 ? formData.experience.map(exp => `
          <div style="margin-left: 20px; margin-bottom: 0px; position: relative; ">
            <p style="font-size: 12px; color: #555; position: absolute; left: -75px; top: 0; margin: 0;">${exp.dates || 'Date not provided'}</p>
            <strong>${exp.position || 'Position not provided'}</strong>  
            <p style="font-size: 14px; font-weight: bold; color: #333; display: flex; align-items: center; margin: 0; margin-top: 3px;">
              <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px; "></span>
              ${exp.company || 'Company not provided'}
            </p>
            <p style="font-size: 14px; color: #333; margin: 0; margin-top: 3px;">
              <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
              ${Array.isArray(exp.details) && exp.details.length > 0 
                ? exp.details.join(', ') 
                : 'Details not provided'}
            </p>
          </div>
        `).join('<br>') : '<p style="font-size: 14px; color: #777;">No experience listed.</p>'}
      </div>

      <!-- Education Section -->
      <div style="margin-top: 10px; margin-left: 55px;">
        <h3 style="font-size: 20px; display: flex; align-items: center; ">
          <img src="${educationIcon}" alt="education-icon" style="width: 24px; margin-right: 10px; ">
          Education
        </h3>
        ${formData.education.length > 0 ? formData.education.map(edu => `
          <div style="margin-left: 20px; margin-bottom: 0px; ">
            <div style="display: flex; flex-direction: column; margin-bottom: 0px;">
              <div style="display: flex; align-items: center; margin-bottom: 0px;">
                <strong>${edu.level || 'Level not provided'}</strong>
              </div>

              <!-- Conditional Fields Based on Education Level -->
              ${edu.level === 'Graduate' || edu.level === 'Postgraduate' ? `
                <div style="display: flex; align-items: center; margin-bottom: 0px;">
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
                  <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">School:</p>
                  <p style="margin: 0; font-size: 14px; color: #333;">${edu.college || 'School not provided'}</p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 2px;">
                  <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Year:</p>
                  <p style="margin: 0; font-size: 14px; color: #333;">${edu.startYear || 'Start Year not provided'} - ${edu.endYear || 'End Year not provided'}</p>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 2px;">
                  <p style="width: 100px; margin: 0; font-size: 14px; color: #333;">Percentage:</p>
                  <p style="margin: 0; font-size: 14px; color: #333;">${edu.percentage || 'Not provided'}</p>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('<br>') : '<p style="font-size: 14px; color: #777;">No education listed.</p>'}
      </div>
    </div>

    <!-- Right Section: Skills and Languages -->
    <div style="width: 40%; padding-left: 20px; border-left: 1px solid #ccc;">



      <!-- Personal Info Section -->
      <h3 style="font-size: 20px; margin-bottom: 20px; display: flex; align-items: center;">
          <img src="${personalInfoIcon}" alt="personal-info-icon" style="width: 24px; margin-right: 10px;">
          Personal Info
      </h3>
      <div style="font-size: 14px; color: #333;">
          <div style="margin-bottom: 0px;">
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


      <!-- Skills Section -->
      <div style="margin-top: 20px;">
        <h3 style="font-size: 20px; display: flex; align-items: center;">
          <img src="${skillsIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
          Skills
        </h3>
        ${formData.skills.length > 0 ? formData.skills.map(skill => `
          <p style="margin: 5px 0; font-size: 14px; color: #333; margin-left: 15px;">
            <span style=" color: black; padding: 5px 10px; border-radius: 5px; margin-bottom: 0px; margin: 0;">${skill || 'Skill not provided'}</span><br>
          </p>
        `).join('') : '<p style="font-size: 14px; color: #777; margin: 0;">No skills listed.</p>'}
      </div>

      <!-- Languages Section -->
      <div style="margin-top: 0px;">
        <h3 style="font-size: 20px; display: flex; align-items: center;">
          <img src="${languagesIcon}" alt="languages-icon" style="width: 24px; margin-right: 10px;">
          Languages
        </h3>
        ${formData.languages.length > 0 ? formData.languages.map(language => `
          <p style="margin: 5px 0; font-size: 14px; color: #333; margin: 0; margin-left: 15px;">
            <span style=" color: black; padding: 5px 10px; border-radius: 5px; margin: 0;">${language || 'Language not provided'}</span>
          </p>
        `).join('') : '<p style="font-size: 14px; color: #777;">No languages listed.</p>'}
      </div>

      <!-- Hobbies Section -->
      <div style="margin-top: 20px;">
        <h3 style="font-size: 20px; display: flex; align-items: center;">
          <img src="${hobbiesIcon}" alt="languages-icon" style="width: 24px; margin-right: 10px;">
          Hobbies
        </h3>
        ${formData.hobbies.length > 0 ? formData.hobbies.map(hobbies => `
          <p style="margin: 0px 0; font-size: 14px; color: #333; margin-left: 15px; margin: 0;">
            <span style=" color: black; padding: 5px 10px; border-radius: 5px;">${hobbies || 'Language not provided'}</span>
          </p>
        `).join('') : '<p style="font-size: 14px; color: #777;">No languages listed.</p>'}
      </div>


    </div>
  </div>
  `;
} else if (templateType === 20) {
  return `
  <div style="background-color: #e6f7ff; font-family: Arial, sans-serif; padding: 30px; max-width: 850px; margin: auto; border: 1px solid #b3d1ff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">

      <!-- Header: Name, Job Title, Contact Info -->
      <div style="background-color: #007bff; color: white; padding: 25px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 30px; letter-spacing: 1px;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
          <p style="font-size: 20px; margin: 5px 0;">${formData.jobTitle || 'Full Stack Developer'}</p>
          <div style="font-size: 14px; margin-top: 10px; display: flex; justify-content: center; gap: 20px;">
              <span>${formData.phone || '123-456-7890'}</span>
              <span>${formData.email || 'john.doe@example.com'}</span>
              <span><a href="${formData.linkedin ? `https://${formData.linkedin}` : 'https://linkedin.com/in/johndoe'}" target="_blank" style="color: white; text-decoration: underline;">LinkedIn</a></span>
          </div>
      </div>

      <!-- Main Content: Two Columns -->
      <div style="display: flex; margin-top: 20px;">

          <!-- Left Column: Professional Summary, Experience, Education -->
          <div style="width: 65%; padding-right: 15px;">
              
              <!-- Professional Summary -->
              <section style="margin-bottom: 30px;">
                  <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Professional Summary</h2>
                  <p style="font-size: 15px; color: #333;">${formData.summary || 'Experienced developer with a passion for coding, skilled in both front-end and back-end technologies. Strong background in building scalable web applications.'}</p>
              </section>

              <!-- Experience Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Experience</h2>
                  ${formData.experience && formData.experience.length > 0 ? formData.experience.map(exp => `
                      <div style="margin-bottom: 20px;">
                          <strong style="font-size: 16px; color: #0056b3;">${exp.position || 'Job Title'} - ${exp.company || 'Company Name'}</strong>
                          <p style="font-size: 12px; color: #666; margin: 0; margin-bottom: 2px;">${exp.dates || 'Jan 2020 - Present'}</p>
                          <ul style="font-size: 14px; margin: 0; padding-left: 20px; color: #333;">
                              ${Array.isArray(exp.details) && exp.details.length > 0 ? exp.details.map(detail => `<li>${detail}</li>`).join('') : '<li>No details provided</li>'}
                          </ul>
                      </div>
                  `).join('') : '<p style="font-size: 14px; color: #777;">No experience listed.</p>'}
              </section>

              <!-- Education Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Education</h2>
                  ${formData.education && formData.education.length > 0 ? formData.education.map(edu => `
                      <div style="margin-bottom: 20px;">
                          ${edu.level === 'Class 10th' ? `
                              <strong style="font-size: 16px; color: #0056b3;">${edu.level || 'Degree Name'}</strong> - ${edu.schoolName || 'Institution Name'}
                              <p style="font-size: 12px; color: #666; margin: 0;">${edu.endYear || 'End Year'} - (${edu.percentage ? `${edu.percentage}%` : ''})</p>
                          ` : `
                              <strong style="font-size: 16px; color: #0056b3;">${edu.level || 'Degree Name'}</strong> - ${edu.college || 'Institution Name'}
                              <p style="font-size: 12px; color: #666; margin: 0;">
                                  ${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'} 
                                  ${edu.percentage ? `(${edu.percentage}%)` : ''}
                              </p>
                          `}
                      </div>
                  `).join('') : '<p style="font-size: 14px; color: #777;">No education listed.</p>'}
              </section>

              <!-- Projects Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Projects</h2>
                  ${formData.projects.length > 0 ? formData.projects.map(project => `
                      <div style="margin-bottom: 20px;">
                          <strong style="font-size: 16px; color: #0056b3;">${project.title || 'Project Title'}</strong>
                          <ul style="margin: 0; padding-left: 20px;">
                              ${project.details.length > 0 ? project.details.map(detail => `
                                  <li style="margin: 0; color: black;">${detail || 'Detail point not provided'}</li>
                              `).join('') : '<li style="color: black;">No details listed.</li>'}
                          </ul>
                      </div>
                  `).join('') : '<p style="font-size: 14px; color: #777;">No projects listed.</p>'}
              </section>


              <!-- certificates Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Certificates</h2>
                  ${formData.certifications.length > 0 ? formData.certifications.map(cert => `
                      <div style="margin-bottom: 20px;">
                          <strong style="font-size: 16px; color: #0056b3;">${cert.course || 'Certificate Course'} @ ${cert.company || 'Issuing Organization'}</strong>
                          <ul style="margin: 0; padding-left: 20px;">
                              ${cert.details.length > 0 ? cert.details.map(detail => `
                                  <li style="margin: 0; color: black;">${detail || 'Detail point not provided'}</li>
                              `).join('') : '<li style="color: black;">No details listed.</li>'}
                          </ul>
                      </div>
                  `).join('') : '<p style="font-size: 14px; color: #777;">No projects listed.</p>'}
              </section>

          </div>

          <!-- Right Column: Skills, Languages, Personal Info -->
          <div style="width: 35%; background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #b3d1ff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);">

              <!-- Skills Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Skills</h2>
                  <ul style="font-size: 14px; color: #333; padding-left: 20px; margin: 0;">
                      ${formData.skills && formData.skills.length > 0 ? formData.skills.map(skill => `<li>${skill}</li>`).join('') : '<li>No skills listed</li>'}
                  </ul>
              </section>

              <!-- Languages Section -->
              <section style="margin-bottom: 0px;">
                  <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px; margin-top: 15px;">Languages</h2>
                  <ul style="font-size: 14px; color: #333; padding-left: 20px; margin: 0;">
                      ${formData.languages && formData.languages.length > 0 ? formData.languages.map(language => `<li>${language}</li>`).join('') : '<li>No languages listed</li>'}
                  </ul>
              </section>

              <!-- Hobbies Section -->
<section style="margin-bottom: 0px;">
    <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px; margin-top: 15px;">Hobbies</h2>
    <ul style="font-size: 14px; color: #333; padding-left: 20px; margin: 0;">
        ${formData.hobbies && formData.hobbies.length > 0 ? formData.hobbies.map(hobby => `<li>${hobby}</li>`).join('') : '<li>No hobbies listed</li>'}
    </ul>
</section>


              <!-- Personal Info Section -->
              <section>
                  <h2 style="font-size: 22px; color: #0056b3; border-bottom: 2px solid #0056b3; padding-bottom: 5px;">Personal Info</h2>
                  <p style="font-size: 14px; color: #333; margin: 0;"><strong>Address:</strong> ${formData.address || '123 Main St, City, Country'}</p>
                  <p style="font-size: 14px; color: #333; margin: 0;"><strong>Phone:</strong> ${formData.phone || '123-456-7890'}</p>
                  <p style="font-size: 14px; color: #333; margin: 0;"><strong>Email:</strong> ${formData.email || 'john.doe@example.com'}</p>
              </section>
          </div>
      </div>
  </div>
  `;
}else if (templateType === 21) {
  return `
  <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #2b2b2b; padding: 20px; background-color: #f4f4f4;">
    <!-- Header Section (Name + Job Title) -->
    <div style="display: flex; justify-content: space-between; align-items: center; background-color: lightcoral; color: white; padding: 20px; margin-bottom: 15px;">
      <div>
        <h1 style="font-size: 28px; margin: 0;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
        <p style="font-size: 18px; font-weight: normal; margin: 5px 0;">${formData.jobTitle || 'Full Stack Developer'}</p>
      </div>
      <div style="text-align: right;">
        <p style="margin: 0; font-weight: 500;">${email || 'email@example.com'}</p>
        <p style="margin: 0;">${phone || '(123) 456-7890'}</p>
      </div>
    </div>

    <!-- Profile Summary -->
    <div style="background-color: white; padding: 0px; padding-left: 10px;  margin-bottom: 10px; border-left: 5px solid #ea5455;">
      <h2 style="font-size: 22px; margin-bottom: 0px; color: #2d4059;">Profile Summary</h2>
      <p style="margin: 0; color: #000;">${formData.summary || 'Dynamic and detail-oriented software engineer with 5+ years of experience...'}</p>
    </div>

    <!-- Education Section -->
    <div style="background-color: white; padding: 0px; margin-bottom: 10px; padding-left: 10px;  margin-bottom: 10px; border-left: 5px solid #f07b3f;">
      <h2 style="font-size: 22px; margin-bottom: 2px; color: #2d4059;">Education</h2>
      <div style="display: flex; flex-direction: column; gap: 10px; margin: 0px;">
        ${formData.education.length > 0 ? formData.education.map(edu => `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin: 0px;">
            <div style="flex: 1; margin: 0;">
              <p style="margin: 0; color: #ea5455; font-size: 20px; font-weight: 550;">${edu.level || 'Degree not provided'}</p>
              <p style="margin: 0; color: #000;">${edu.level === 'Class 10th' ? edu.schoolName || 'School Name not provided' : edu.college || 'College/University not provided'} - [${edu.percentage || 'Percentage not provided'}%]</p>
            </div>
            <div style="text-align: right; color: #7a7a7a;">
              <p style="margin: 0; color: #000;">${edu.level === 'Class 10th' ? edu.endYear || 'Year not provided' : `${edu.startYear || 'Start Year'} - ${edu.endYear || 'End Year'}`}</p>
            </div>
          </div>
        `).join('') : '<p>No education information provided.</p>'}
      </div>
    </div>

    <!-- Skills Section -->
    <div style="background-color: white; padding: 0px; padding-left: 10px;  margin-bottom: 8px; border-left: 5px solid #46b3e6;">
      <h2 style="font-size: 22px; margin-bottom: 10px; color: #2d4059;">Skills</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 15px;">
        ${formData.skills.length > 0 ? formData.skills.map(skill => `
          <span style="padding: 8px 12px; background-color: #ea5455; color: white; border-radius: 5px; margin-bottom: 5px;">${skill}</span>
        `).join('') : '<p>No skills listed.</p>'}
      </div>
    </div>

    <!-- Experience Section -->
    <div style="background-color: white; padding: 0px; padding-left: 10px;  margin-bottom: 8px; border-left: 5px solid #1b9cfc;">
      <h2 style="font-size: 22px; margin-bottom: 0px; color: #2d4059;">Work Experience</h2>
      ${formData.experience.length > 0 ? formData.experience.map(exp => `
        <div style="margin-bottom: 0px; margin: 0;">
          <p style="margin: 0; color: #ea5455; margin-bottom: 0px; font-size: 20px; font-weight: 550;">${exp.position || 'Software Engineer'}</p>
          <p style="margin: 0px 0; color: #000;">${exp.company || 'Tech Company'}</p>
          <p style="margin: 0; color: #000;">${exp.startYear || '2021'} - ${exp.endYear || 'Present'}</p>
          <ul style="margin-top: 0px; padding-left: 20px;">
            ${exp.details.length > 0 ? exp.details.map(detail => `
              <li>${detail}</li>
            `).join('') : '<li>No details provided.</li>'}
          </ul>
        </div>
      `).join('') : '<p>No experience listed.</p>'}
    </div>

    <!-- Certifications Section -->
    <div style="background-color: white; padding: 0px; padding-left: 10px;  margin-bottom: 8px; border-left: 5px solid #28a745;">
      <h2 style="font-size: 22px; margin-bottom: 0px; color: #2d4059;">Certifications</h2>
      ${formData.certifications.length > 0 ? formData.certifications.map(cert => `
        <div style="margin-bottom: 0px;">
          <p style="margin: 0; color: #ea5455; font-size: 20px; font-weight: 550;">${cert.course || 'Course Name'}</p>
          <p style="margin: 0px 0; color: #000;">${cert.company || 'Certification Company'}</p>
          <ul style="padding-left: 20px; margin: 0;">
            ${cert.details.map(detail => `<li>${detail}</li>`).join('')}
          </ul>
        </div>
      `).join('') : '<p>No certifications listed.</p>'}
    </div>

    <!-- Footer with LinkedIn & GitHub -->
    <div style="background-color: lightcoral; color: white; padding: 15px;">
      <p style="margin: 0;">LinkedIn: ${linkedin || 'linkedin.com/in/username'}</p>
      <p style="margin: 0;">GitHub: ${Github || 'github.com/username'}</p>
    </div>
  </div>
  `;
}






























  


  return '';
};



