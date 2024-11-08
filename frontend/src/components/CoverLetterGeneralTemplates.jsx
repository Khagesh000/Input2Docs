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

// Define the formatDate function
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

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
  const formattedDate = formatDate(date);
  
  if (templateType === 1) {
    return `
      <div style="padding: 20px; font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 700px; margin: 0 auto;">
        <p style="font-size: 14px; color: #888;">${formattedDate}</p>
        
        <h2 style="color: #007bff;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h2>
        <p style="font-size: 16px; color: #555;">${formData.jobTitle || 'Senior Developer'}</p>
        <p style="font-size: 14px; color: #555;">Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #007bff;">${formData.email || 'johndoe@example.com'}</a></p>
        <p style="font-size: 14px; color: #555;">Company: ${formData.companyName || 'Acme Corp'}</p>
  
        <p style="font-size: 16px; color: #333; margin-top: 20px;">Dear Hiring Manager,</p>
  
        <p style="font-size: 16px; color: #333;">
          I am writing to express my interest in the ${formData.jobTitle || 'Senior Developer'} position at ${formData.companyName || 'Acme Corp'}. With over ${formData.experienceYears || 'X'} years of experience in ${formData.jobTitle || 'software development'}, I am confident that my skills and experience make me a strong candidate for this role. I am particularly drawn to your company due to its reputation for innovative solutions and growth in the industry.
        </p>
  
        <p style="font-size: 16px; color: #333;">
          In my previous positions, I have developed a strong set of technical skills, including expertise in programming, data analysis, and problem-solving. I have worked with tools like JavaScript, Python, and SQL to solve complex challenges and drive business growth. Additionally, I have cultivated a collaborative and results-driven work style, consistently delivering projects on time and to the highest standard.
        </p>
  
        ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ?
          `<p style="font-size: 16px; color: #333;">In my most recent role as a ${formData.previousJobTitle}, I successfully led several initiatives, including increasing system performance by 20% and optimizing business processes. This experience allowed me to develop a deep understanding of software development and how to apply these skills to meet organizational goals.</p>` : ''}
  
        ${formData.gap ?
          `<p style="font-size: 16px; color: #333;">While I have had a gap in my work history from ${formData.gap || 'X'} to ${formData.gap || 'X'}, this period allowed me to focus on personal development, including attending courses in programming and data analysis, which have made me even more passionate about this field and ready for new challenges.</p>` : ''}
  
        <p style="font-size: 16px; color: #333;">
          My approach to work is results-oriented and flexible. Whether working independently or as part of a team, I strive to bring out the best in everyone I collaborate with, ensuring that each project is successful. I am confident that my combination of skills, experience, and passion will make a valuable contribution to your team.
        </p>
  
        <p style="font-size: 16px; color: #333;">Thank you for considering my application. I look forward to the opportunity to further discuss my qualifications with you.</p>
  
        <p style="font-size: 16px; color: #333;">Sincerely,</p>
        <h3 style="color: #007bff;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h3>
      </div>
    `;
  }
  
  
  
  
  

}