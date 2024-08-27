import educationIcon from '../assets/images/education-icon.png';
import skillsIcon from '../assets/images/skills.png';
import summaryIcon from '../assets/images/summary-icon.png';
import experienceIcon from '../assets/images/experience.png';
import personalInfoIcon from '../assets/images/experience.png';
import languagesIcon from '../assets/images/summary-icon.png';


export const generateTemplateContent = (formData, templateType) => {
  const {
    name = 'John Smith',
    jobTitle = 'IT Project Manager',
    principal = 'Principal Name',
    school = 'School Name',
    address = '123 Main St, City, State, ZIP',
    phone = '(123) 456-7890',
    email = 'email@example.com',
    linkedin = 'linkedin.com/in/username',
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
      <div style="display: flex; height: 100%; background-color: #f5f5f5; color: #000;">
        <div style="flex: 1; padding-left: 4px; background-color: wheat; min-height: 1120px;">
          <h1 style="margin: 0;">${name || 'John Smith'}</h1>
          <h2 style="margin: 10px 0;">${jobTitle || 'IT Project Manager'}</h2>
          <h3 style="margin-top: 20px;">Personal Info</h3>
          <p style="color: #000;">
            ${principal || 'Principal Name'}<br>
            ${school || 'School Name'}<br>
            ${address || '123 Main St, City, State, ZIP'}
          </p>
          <h3 style="margin-top: 20px;">Contact Info</h3>
          <p style="color: #000;">Phone: ${phone || '(123) 456-7890'}</p>
          <p style="color: #000;">Email: ${email || 'email@example.com'}</p>
          <p style="color: #000;">LinkedIn: ${linkedin || 'linkedin.com/in/username'}</p>
          <p style="color: #000;">Date: ${date || 'August 21, 2024'}</p>
        </div>
        <div style="flex: 2; padding: 10px; background-color: #fff;">
          <p>${letterContent || 'Dear [Recipient],\n\nThis is a placeholder for your letter content.'}</p>
        </div>
      </div>`;
  } else if (templateType === 2) {
    return `
      <div style="display: flex; height: 100%;">
        <div style="flex: 1; padding: 20px; background-color: #ea0909; color: #f5e5e5; min-height: 1120px;">
          <h1>${name || 'John Smith'}</h1>
          <h2>${jobTitle || 'IT Project Manager'}</h2>
          <p><strong>Address:</strong><br>${address || '123 Main St, City, State, ZIP'}</p>
          <p><strong>Phone:</strong> ${phone || '(123) 456-7890'}</p>
          <p><strong>Email:</strong> ${email || 'email@example.com'}</p>
          <p><strong>LinkedIn:</strong> ${linkedin || 'linkedin.com/in/username'}</p>
          <p><strong>Date:</strong> ${date || 'August 21, 2024'}</p>
        </div>
        <div style="flex: 2; padding: 20px; background-color: #fff; color: #000;">
          <p>${letterContent || 'Dear [Recipient],\n\nThis is a placeholder for your letter content.'}</p>
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
            ${formData.experience.length > 0 ? formData.experience.map(exp => `
                <div style="margin-left: 20px; margin-bottom: 15px; position: relative;">
                    <p style="font-size: 12px; color: #555; position: absolute; left: -75px; top: 0;">${exp.dates || 'Date not provided'}</p>
                    <strong>${exp.position || 'Position not provided'}</strong>  
                    <p style=" font-size: 14px; font-weight: bold; color: #333; display: flex; align-items: center;">
                        <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
                        ${exp.company || 'Company not provided'}
                    </p>
                    <p style=" font-size: 14px; color: #333; display: flex; align-items: center;">
                        <span style="background-color: #2c3e50; width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 10px;"></span>
                        ${exp.details || 'Details not provided'}
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
      
    </div>
</div>

    `;
  }
  
  

  return '';
};



