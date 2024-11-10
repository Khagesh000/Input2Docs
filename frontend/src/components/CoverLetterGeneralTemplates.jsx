
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
    date = 'August 21, 2024', // Default date value
    letterContent = 'Dear [Recipient],\n\nThis is a placeholder for your letter content.',
    summary = 'IT Professional with over 10 years of experience specializing in IT department management for international logistics companies...',
    experience = [
      `<strong>Senior Project Manager</strong><br>2006-12 - Present<br>Seton Hospital, ME<br>Oversaw all major hospital IT projects for 10+ years, focusing on cost reduction.`,
      `<strong>Junior Project Manager</strong><br>2004-09 - 2006-12<br>Seton Hospital, ME<br>Streamlined IT logistics and administration operation, cutting costs by 25%.`,
      `<strong>IT Support Officer</strong><br>1999-09 - 2001-05<br>Seton Hospital, ME<br>Provided support for project managers and hospital staff for 2 years.`
    ],
    education = [
      `<strong>Master of Computer Science</strong>, University of Maryland<br>Graduated Summa Cum Laude.`,
      `<strong>Bachelor of Computer Science</strong>, University of Maryland<br>Graduated Summa Cum Laude.`
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
      <div style="
        padding: 20px;
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 700px;
        margin: 0 auto;">
        
        <p style="font-size: 14px; color: #888;">
          ${formattedDate}
        </p>
        
        <h2 style="color: #007bff;">
          ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
        </h2>
        
        <p style="font-size: 16px; color: #555;">
          ${formData.jobTitle || 'Senior Developer'}
        </p>
        
        <p style="font-size: 14px; color: #555;">
          Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #007bff;">
            ${formData.email || 'johndoe@example.com'}
          </a>
        </p>
        
        <p style="font-size: 14px; color: #555;">
          Company: ${formData.companyName || 'Acme Corp'}
        </p>
  
        <p style="font-size: 16px; color: #333; margin-top: 20px;">
          Dear ${formData.hiringManagerName || 'Acme Corp'},
        </p>
  
        <p style="font-size: 16px; color: #333;">
          I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. 
          With ${formData.experienceYears || 'several'} years of professional experience, I have honed a skill set tailored to address complex challenges, 
          drive business objectives, and deliver high-quality results. I am drawn to the opportunity to contribute to a company that values innovation and 
          growth as much as I do.
        </p>
  
        <p style="font-size: 16px; color: #333;">
          Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies 
          such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry 
          demands. In addition to my technical proficiency, I am known for my commitment to collaboration, consistently contributing to a team-oriented 
          environment that maximizes productivity and achieves shared goals.
        </p>
  
        ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
          `<p style="font-size: 16px; color: #333;">
            Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% 
            increase in performance. This experience deepened my understanding of software architecture and strengthened my ability to create impactful, 
            efficient solutions.
          </p>` : ''}
  
        ${formData.gap ? 
          `<p style="font-size: 16px; color: #333;">
            During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis. This 
            time allowed me to gain fresh perspectives and enhance my expertise, leaving me well-prepared and eager for new challenges in this field.
          </p>` : ''}
  
        <p style="font-size: 16px; color: #333;">
          I approach my work with a results-driven mindset and an adaptable style, making me equally effective in independent settings and collaborative 
          team environments. I am confident that my unique blend of skills, experience, and enthusiasm will make a positive contribution to your team 
          and further elevate ${formData.companyName || 'Acme Corp'}'s reputation in the industry.
        </p>
  
        <p style="font-size: 16px; color: #333;">
          Thank you for considering my application. I look forward to the opportunity to discuss how my background aligns with your needs.
        </p>
  
        <p style="font-size: 16px; color: #333;">
          Sincerely,
        </p>
        
        <h3 style="color: #007bff; font-family: 'Brush Script MT', cursive; font-size: 24px; margin-top: 5px;">
          ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
        </h3>
      </div>
    `;
}else if (templateType === 2) {
  return `
    <div style="
      padding: 20px;
      font-family: Arial, sans-serif;
      background-color: khaki;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 900px;
      margin: 0 auto;
    ">
    
      <!-- Two Column Layout: Left (Personal Info) and Right (Content) -->
      <div style="display: flex;">

        <!-- Left Side (Personal Info) -->
        <div style="flex: 0 0 30%; padding-right: 20px;">
          <p style="font-size: 14px; color: #333;">
            ${formattedDate}
          </p>
          
          <h2 style="color: #333;">
            ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
          </h2>
          
          <p style="font-size: 16px; color: #555;">
            ${formData.jobTitle || 'Senior Developer'}
          </p>
          
          <p style="font-size: 14px; color: #555;">
            Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #007bff;">
              ${formData.email || 'johndoe@example.com'}
            </a>
          </p>
          
          <p style="font-size: 14px; color: #555;">
            Company: ${formData.companyName || 'Acme Corp'}
          </p>
        </div>

        <!-- Right Side (Content) -->
        <div style="flex: 1; background-color: white; padding: 10px; border-radius: 10px;">
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            Dear ${formData.hiringManagerName || 'Acme Corp'},
          </p>

          <p style="font-size: 16px; color: #333;">
            I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. 
            With ${formData.experienceYears || 'several'} years of professional experience, I have honed a skill set tailored to address complex challenges, 
            drive business objectives, and deliver high-quality results. I am drawn to the opportunity to contribute to a company that values innovation and 
            growth as much as I do.
          </p>

          <p style="font-size: 16px; color: #333;">
            Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies 
            such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry 
            demands. In addition to my technical proficiency, I am known for my commitment to collaboration, consistently contributing to a team-oriented 
            environment that maximizes productivity and achieves shared goals.
          </p>

          ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
            `<p style="font-size: 16px; color: #333;">
              Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% 
              increase in performance. This experience deepened my understanding of software architecture and strengthened my ability to create impactful, 
              efficient solutions.
            </p>` : ''}

          ${formData.gap ? 
            `<p style="font-size: 16px; color: #333;">
              During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis. This 
              time allowed me to gain fresh perspectives and enhance my expertise, leaving me well-prepared and eager for new challenges in this field.
            </p>` : ''}

          <p style="font-size: 16px; color: #333;">
            I approach my work with a results-driven mindset and an adaptable style, making me equally effective in independent settings and collaborative 
            team environments. I am confident that my unique blend of skills, experience, and enthusiasm will make a positive contribution to your team 
            and further elevate ${formData.companyName || 'Acme Corp'}'s reputation in the industry.
          </p>

          <p style="font-size: 16px; color: #333;">
            Thank you for considering my application. I look forward to the opportunity to discuss how my background aligns with your needs.
          </p>

          <p style="font-size: 16px; color: #333;">
            Sincerely,
          </p>
          
          <h3 style="color: #888; font-family: 'Brush Script MT', cursive; font-size: 24px; margin-top: 5px;">
            ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
          </h3>
        </div>

      </div>
    </div>
  `;
}else if (templateType === 3) {
    return `
      <div style="padding: 20px; font-family: 'Helvetica', sans-serif; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); max-width: 800px; color: #333; line-height: 1.6;">
        <p style="font-size: 13px; color: #777; text-align: right; margin: 0 0 15px 0;">${formattedDate}</p>

        <!-- Header Section -->
        <div style="background-color: #ff6f61; color: #fff; padding: 20px; border-radius: 10px; text-align: center; margin: 0;">
          <h2 style="font-size: 28px; margin: 0; font-weight: 700;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h2>
          <p style="font-size: 16px; margin: 5px 0 0 0; font-weight: 500;">${formData.jobTitle || 'Senior Developer'}</p>
        </div>

        <!-- Personal Information Section -->
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ff6f61; border-radius: 10px; margin: 5px 0 0 0;">
          <h3 style="color: #ff6f61; margin: 0 0 5px 0;">Personal Information</h3>
          <p style="font-size: 14px; color: #666; margin: 0 0 4px 0;">Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #ff6f61; text-decoration: none;">${formData.email || 'johndoe@example.com'}</a></p>
          <p style="font-size: 14px; color: #666; margin: 0;">Company: ${formData.companyName || 'Acme Corp'}</p>
        </div>

        <!-- Introduction Section -->
        <div style="background-color: #fef8f3; padding: 20px; border-radius: 10px; margin: 0px 0 0 0;">
          <h3 style="color: #ff6f61; margin: 0;">Introduction</h3>
          <p style="font-size: 16px; color: #444; font-weight: 600; margin: 0;">Dear ${formData.hiringManagerName || 'Mani'},</p>
          <p style="font-size: 15px; color: #444; margin: 0;">
            I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. With ${formData.experienceYears || 'several'} years of professional experience, I have honed a skill set tailored to address complex challenges, drive business objectives, and deliver high-quality results.
          </p>
        </div>

        <!-- Skills and Experience Section -->
        <div style="background-color: #fff7e6; padding: 20px; border-radius: 10px; margin: 0px 0 0 0;">
          <h3 style="color: #ff6f61; margin: 0 0 10px 0;">Skills & Experience</h3>
          <p style="font-size: 15px; color: #444; margin: 0;">
            Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry demands.
          </p>
          ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
            `<p style="font-size: 15px; color: #444; margin: 10px 0 0 0;">Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% increase in performance.</p>` : ''}
          ${formData.gap ? 
            `<p style="font-size: 15px; color: #444; margin: 10px 0 0 0;">During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis.</p>` : ''}
        </div>

        <!-- Closing Statement Section -->
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 0px 0 0 0;">
          <h3 style="color: #ff6f61; margin: 0 0 10px 0;">Closing Statement</h3>
          <p style="font-size: 15px; color: #444; margin: 0;">
            I approach my work with a results-driven mindset and an adaptable style, making me equally effective in independent settings and collaborative team environments. I am confident that my unique blend of skills, experience, and enthusiasm will make a positive contribution to your team.
          </p>
          <p style="font-size: 15px; color: #444; margin: 0;">Thank you for considering my application. I look forward to the opportunity to discuss how my background aligns with your needs.</p>
          <p style="font-size: 15px; color: #444; margin: 0;">Sincerely,</p>
          <h3 style="color: #ff6f61; font-family: 'Brush Script MT', cursive; font-size: 26px; margin: 8px 0 0 0;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h3>
        </div>
      </div>
    `;
}else if (templateType === 4) {
  return `
    <div style="font-family: 'Arial', sans-serif; background-color: #f4f7fb; padding: 40px; border-radius: 10px; max-width: 900px; margin: auto; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">

  <!-- Header Section -->
  <div style="display: flex; justify-content: space-between; padding-bottom: 0px; margin: 0; border-bottom: 2px solid #dddddd;">
    <div>
      <h1 style="font-size: 36px; color: #2b2b2b; font-weight: 700; margin: 0;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
      <h3 style="font-size: 20px; color: #1a73e8; margin-top: 5px;">${formData.jobTitle || 'Senior Developer'}</h3>
    </div>
    <div style="text-align: right;">
      <p style="font-size: 14px; color: #7f7f7f; margin: 0;">${formattedDate}</p>
    </div>
  </div>

  <!-- Contact Information Section -->
  <div style="display: flex; justify-content: space-between; padding-top: 20px; border-top: 2px solid #eeeeee; margin: 0;">
    <div style="flex: 1; padding-right: 20px; margin: 0;">
      <h4 style="font-size: 18px; color: #2b2b2b; margin: 0;">Contact Information</h4>
      <p style="font-size: 16px; color: #333; margin: 0; margin-bottom: 3px;">Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #1a73e8; text-decoration: none;">${formData.email || 'johndoe@example.com'}</a></p>
      <p style="font-size: 16px; color: #333; margin: 0;">Phone: ${formData.phone || '(123) 456-7890'}</p>
    </div>
    <div style="flex: 1; margin: 0;">
      <h4 style="font-size: 18px; color: #2b2b2b; margin: 0;">Company</h4>
      <p style="font-size: 16px; color: #333; margin: 0;">${formData.companyName || 'Acme Corp'}</p>
    </div>
  </div>

  <!-- Introduction Section -->
  <div>
    <h3 style="font-size: 24px; color: #2b2b2b; font-weight: 600; margin: 0; margin-top: 8px;">Introduction</h3>
    <p style="font-size: 16px; color: #555; line-height: 1.7; margin: 0;">
      Hello ${formData.hiringManagerName || 'Hiring Manager'},<br>
      I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. With over ${formData.experienceYears || 'five'} years of experience, I am confident in my ability to contribute to your team. My background in ${formData.expertise || 'software development and project management'} has allowed me to drive results in challenging environments.
    </p>
  </div>

  <!-- Skills and Experience Section -->
  <div style="margin: 0;">
    <h3 style="font-size: 22px; color: #2b2b2b; font-weight: 600; margin: 0; margin-top: 5px;">Skills & Experience</h3>
    <p style="font-size: 16px; color: #444; margin: 0;">
      Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry demands.
    </p>
    ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
      `<p style="font-size: 15px; color: #444; margin: 10px 0 0 0;">Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% increase in performance.</p>` : ''}
    ${formData.gap ? 
      `<p style="font-size: 15px; color: #444; margin: 10px 0 0 0;">During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis.</p>` : ''}
  </div>

  <!-- Closing Statement Section -->
  <div style="background-color: #e9f0f7; padding: 25px; border-radius: 8px; margin: 0;">
    <h3 style="font-size: 24px; color: #2b2b2b; font-weight: 600; margin: 0;">Closing Statement</h3>
    <p style="font-size: 16px; color: #555; line-height: 1.7;">
      I am confident that my expertise and achievements make me a strong candidate for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. I look forward to discussing how my experience aligns with your company's needs.
    </p>
    <p style="font-size: 16px; color: #555; margin-top: 20px;">Thank you for your consideration!</p>
    <p style="font-size: 16px; color: #2b2b2b; font-weight: 600;">Sincerely,<br>${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</p>
  </div>

</div>





  `;
}else if (templateType === 5) {
  return `
    <div style="
      font-family: Arial, sans-serif;
      background-color: #f4f7fb;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      max-width: 900px;
      margin: 0 auto;
    ">

      <!-- Header Section with Two Columns -->
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1;">
          <h1 style="font-size: 32px; color: #2c3e50; font-weight: 700; margin: 0;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h1>
          <h3 style="font-size: 20px; color: #16a085; margin-top: 5px;">${formData.jobTitle || 'Senior Developer'}</h3>
        </div>
        <div style="flex: 1; text-align: right;">
          <p style="font-size: 14px; color: #7f7f7f; margin: 0;">${formattedDate}</p>
        </div>
      </div>

      <!-- Two Columns Layout for Contact and Company Info -->
      <div style="display: flex; justify-content: space-between; margin-top: 10px;">
        <div style="flex: 1; padding-right: 20px;">
          <h4 style="font-size: 18px; color: #2c3e50; margin: 0;">Contact Information</h4>
          <p style="font-size: 16px; color: #34495e; margin: 0;">Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #16a085; text-decoration: none;">${formData.email || 'johndoe@example.com'}</a></p>
          <p style="font-size: 16px; color: #34495e; margin: 0;">Phone: ${formData.phone || '(123) 456-7890'}</p>
        </div>
        <div style="flex: 1;">
          <h4 style="font-size: 18px; color: #2c3e50; margin: 0;">Company</h4>
          <p style="font-size: 16px; color: #34495e; margin: 0;">${formData.companyName || 'Acme Corp'}</p>
        </div>
      </div>

      <!-- Introduction Section -->
      <div style="margin-top: 20px; margin: 0;">
        <h3 style="font-size: 24px; color: #2c3e50; font-weight: 600; margin: 0; margin-top: 16px;">Introduction</h3>
        <p style="font-size: 16px; color: #555; line-height: 1.7; margin: 0;">
          Hello ${formData.hiringManagerName || 'Hiring Manager'},<br>
          I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. With ${formData.experienceYears || 'several'} years of professional experience, I have honed a skill set tailored to address complex challenges, drive business objectives, and deliver high-quality results. I am drawn to the opportunity to contribute to a company that values innovation and growth as much as I do.
        </p>
      </div>

      <!-- Skills and Experience Section with Two Columns -->
      <div style="display: flex; justify-content: space-between; margin-top: 0px; padding: 20px; border-radius: 10px; background-color: #ecf0f1;">
        <div style="flex: 1;">
          <h3 style="color: #e74c3c; margin: 0 0 10px 0;">Skills</h3>
          <p style="font-size: 15px; color: #34495e;">Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry demands.</p>
        </div>
        <div style="flex: 1;">
          <h3 style="color: #e74c3c; margin: 0 0 10px 0;">Experience</h3>
          <p style="font-size: 15px; color: #34495e; margin: 0;">
            ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
              `Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% increase in performance. This experience deepened my understanding of software architecture and strengthened my ability to create impactful, efficient solutions.` : ''}
          </p>
          ${formData.gap ? 
            `<p style="font-size: 15px; color: #34495e; margin-top: 10px;">During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis. This time allowed me to gain fresh perspectives and enhance my expertise, leaving me well-prepared and eager for new challenges in this field.</p>` : ''}
        </div>
      </div>

      <!-- Closing Statement Section -->
      <div style="margin-top: 10px; background-color: #e9f0f7; padding: 25px; border-radius: 8px;">
        <h3 style="font-size: 24px; color: #2c3e50; font-weight: 600;">Closing Statement</h3>
        <p style="font-size: 16px; color: #555; line-height: 1.7;">
          I am confident that my expertise and achievements make me a strong candidate for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. I look forward to discussing how my experience aligns with your company's needs.
        </p>
        <p style="font-size: 16px; color: #555; margin-top: 20px;">Thank you for your consideration!</p>
        <p style="font-size: 16px; color: #2c3e50; font-weight: 600;">Sincerely,<br>${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</p>
      </div>

    </div>
  `;
}else if (templateType === 6) {
  return `
    <div style="
      padding: 20px;
      font-family: Arial, sans-serif;
      color: #333;
      background-color: lightblack;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 700px;
      margin: 0 auto;">
      
      <p style="font-size: 14px; color: #333;">
        ${formattedDate}
      </p>
      
      <h2 style="color: #333;">
        ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
      </h2>
      
      <p style="font-size: 16px; color: #555;">
        ${formData.jobTitle || 'Senior Developer'}
      </p>
      
      <p style="font-size: 14px; color: #555;">
        Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #007bff;">
          ${formData.email || 'johndoe@example.com'}
        </a>
      </p>
      
      <p style="font-size: 14px; color: #555;">
        Company: ${formData.companyName || 'Acme Corp'}
      </p>

      <p style="font-size: 16px; color: #333; margin-top: 20px;">
        Dear ${formData.hiringManagerName || 'Acme Corp'},
      </p>

      <p style="font-size: 16px; color: #333;">
        I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. 
        With ${formData.experienceYears || 'several'} years of professional experience, I have honed a skill set tailored to address complex challenges, 
        drive business objectives, and deliver high-quality results. I am drawn to the opportunity to contribute to a company that values innovation and 
        growth as much as I do.
      </p>

      <p style="font-size: 16px; color: #333;">
        Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies 
        such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry 
        demands. In addition to my technical proficiency, I am known for my commitment to collaboration, consistently contributing to a team-oriented 
        environment that maximizes productivity and achieves shared goals.
      </p>

      ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
        `<p style="font-size: 16px; color: #333;">
          Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% 
          increase in performance. This experience deepened my understanding of software architecture and strengthened my ability to create impactful, 
          efficient solutions.
        </p>` : ''}

      ${formData.gap ? 
        `<p style="font-size: 16px; color: #333;">
          During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis. This 
          time allowed me to gain fresh perspectives and enhance my expertise, leaving me well-prepared and eager for new challenges in this field.
        </p>` : ''}

      <p style="font-size: 16px; color: #333;">
        I approach my work with a results-driven mindset and an adaptable style, making me equally effective in independent settings and collaborative 
        team environments. I am confident that my unique blend of skills, experience, and enthusiasm will make a positive contribution to your team 
        and further elevate ${formData.companyName || 'Acme Corp'}'s reputation in the industry.
      </p>

      <p style="font-size: 16px; color: #333;">
        Thank you for considering my application. I look forward to the opportunity to discuss how my background aligns with your needs.
      </p>

      <p style="font-size: 16px; color: #333;">
        Sincerely,
      </p>
      
      <h3 style="color: #888; font-family: 'Brush Script MT', cursive; font-size: 24px; margin-top: 5px;">
        ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
      </h3>
    </div>
  `;
}else if (templateType === 7) {
  return `
    <div style="padding: 15px; font-family: 'Helvetica', sans-serif; background-color: #fff7e6; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); max-width: 750px; margin: 15px auto; color: #333;">
      <p style="font-size: 13px; color: #777; text-align: right; margin-bottom: 10px;">${formattedDate}</p>

      <!-- Header Section -->
      <div style="background-color: pink; color: #fff; padding: 18px; border-radius: 8px 8px 0 0; text-align: center;">
        <h2 style="font-size: 28px; color: #333; margin: 0; font-weight: 700;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h2>
        <p style="font-size: 16px; color: #333; margin: 5px 0; font-weight: 500;">${formData.jobTitle || 'Senior Developer'}</p>
      </div>

      <!-- Contact Information Section -->
      <div style="background-color: #ffffff; padding: 18px 20px; border-radius: 0 0 8px 8px; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08); margin-top: 8px;">
        <p style="font-size: 14px; color: #666;">Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #ff6f61; text-decoration: none;">${formData.email || 'johndoe@example.com'}</a></p>
        <p style="font-size: 14px; color: #666;">Company: ${formData.companyName || 'Acme Corp'}</p>
      </div>

      <!-- Introduction Section -->
      <div style="margin-top: 15px; color: #333;">
        <p style="font-size: 18px; font-weight: 600;">Dear Hiring Manager,</p>

        <p style="font-size: 15px; line-height: 1.6; color: #444;">
          I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. With ${formData.experienceYears || 'several'} years of professional experience, I have honed a skill set tailored to address complex challenges, drive business objectives, and deliver high-quality results. I am drawn to the opportunity to contribute to a company that values innovation and growth as much as I do.
        </p>

        <p style="font-size: 15px; line-height: 1.6; color: #444;">
          Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry demands. In addition to my technical proficiency, I am known for my commitment to collaboration, consistently contributing to a team-oriented environment that maximizes productivity and achieves shared goals.
        </p>

        ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
          <p style="font-size: 15px; line-height: 1.6; color: #444;">Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% increase in performance. This experience deepened my understanding of software architecture and strengthened my ability to create impactful, efficient solutions.</p> : ''}

        ${formData.gap ? 
          <p style="font-size: 15px; line-height: 1.6; color: #444;">During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis. This time allowed me to gain fresh perspectives and enhance my expertise, leaving me well-prepared and eager for new challenges in this field.</p> : ''}

        <p style="font-size: 15px; line-height: 1.6; color: #444;">
          I approach my work with a results-driven mindset and an adaptable style, making me equally effective in independent settings and collaborative team environments. I am confident that my unique blend of skills, experience, and enthusiasm will make a positive contribution to your team and further elevate ${formData.companyName || 'Acme Corp'}'s reputation in the industry.
        </p>

        <p style="font-size: 15px; line-height: 1.6; color: #444;">Thank you for considering my application. I look forward to the opportunity to discuss how my background aligns with your needs.</p>

        <p style="font-size: 15px; line-height: 1.6; color: #444;">Sincerely,</p>
        <h3 style="color: #ff6f61; font-family: 'Brush Script MT', cursive; font-size: 26px; margin-top: 8px;">${formData.firstName || 'John'} ${formData.lastName || 'Doe'}</h3>
      </div>
    </div>
  `;
}else if (templateType === 8) {
  return `
    <div style="
      padding: 20px;
      font-family: Arial, sans-serif;
      background-color: cadetblue;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 900px;
      margin: 0 auto;
    ">
    
      <!-- Two Column Layout: Left (Personal Info) and Right (Content) -->
      <div style="display: flex;">

        <!-- Left Side (Personal Info) -->
        <div style="flex: 0 0 30%; padding-right: 20px;">
          <p style="font-size: 14px; color: white;">
            ${formattedDate}
          </p>
          
          <h2 style="color: white;">
            ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
          </h2>
          
          <p style="font-size: 16px; color: white;">
            ${formData.jobTitle || 'Senior Developer'}
          </p>
          
          <p style="font-size: 14px; color: white;">
            Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: wheat;">
              ${formData.email || 'johndoe@example.com'}
            </a>
          </p>
          
          <p style="font-size: 14px; color: white;">
            Company: ${formData.companyName || 'Acme Corp'}
          </p>
        </div>

        <!-- Right Side (Content) -->
        <div style="flex: 1; background-color: white; padding: 10px; border-radius: 10px;">
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            Dear ${formData.hiringManagerName || 'Acme Corp'},
          </p>

          <p style="font-size: 16px; color: #333;">
            I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}. 
            With ${formData.experienceYears || 'several'} years of professional experience, I have honed a skill set tailored to address complex challenges, 
            drive business objectives, and deliver high-quality results. I am drawn to the opportunity to contribute to a company that values innovation and 
            growth as much as I do.
          </p>

          <p style="font-size: 16px; color: #333;">
            Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies 
            such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry 
            demands. In addition to my technical proficiency, I am known for my commitment to collaboration, consistently contributing to a team-oriented 
            environment that maximizes productivity and achieves shared goals.
          </p>

          ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
            `<p style="font-size: 16px; color: #333;">
              Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% 
              increase in performance. This experience deepened my understanding of software architecture and strengthened my ability to create impactful, 
              efficient solutions.
            </p>` : ''}

          ${formData.gap ? 
            `<p style="font-size: 16px; color: #333;">
              During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis. This 
              time allowed me to gain fresh perspectives and enhance my expertise, leaving me well-prepared and eager for new challenges in this field.
            </p>` : ''}

          <p style="font-size: 16px; color: #333;">
            I approach my work with a results-driven mindset and an adaptable style, making me equally effective in independent settings and collaborative 
            team environments. I am confident that my unique blend of skills, experience, and enthusiasm will make a positive contribution to your team 
            and further elevate ${formData.companyName || 'Acme Corp'}'s reputation in the industry.
          </p>

          <p style="font-size: 16px; color: #333;">
            Thank you for considering my application. I look forward to the opportunity to discuss how my background aligns with your needs.
          </p>

          <p style="font-size: 16px; color: #333;">
            Sincerely,
          </p>
          
          <h3 style="color: #888; font-family: 'Brush Script MT', cursive; font-size: 24px; margin-top: 5px;">
            ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
          </h3>
        </div>

      </div>
    </div>
  `;
}else if (templateType === 9) {
  return `
    <div style="
      padding: 30px;
      font-family: 'Arial', sans-serif;
      background-color: #e0f7fa;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 0 auto;
    ">

      <!-- Top Section -->
      <div style="background-color: #00796b; padding: 10px; border-radius: 8px 8px 0 0; margin: 0;">
        <h2 style="color: white; text-align: center; font-size: 24px;">
          Application for the ${formData.jobTitle || 'Senior Developer'} Role
        </h2>
      </div>

      <!-- Main Section (Personal Info + Content) -->
      <div style="padding: 20px; background-color: #ffffff; border-radius: 0 0 8px 8px; margin: 0;">
        <!-- Personal Info Section -->
        <div style="margin-bottom: 20px; border-bottom: 2px solid #00796b; padding-bottom: 20px;">
          <p style="font-size: 14px; color: #333; margin: 0;">
            ${formattedDate}
          </p>

          <h3 style="color: #00796b; margin: 0;">
            ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
          </h3>

          <p style="font-size: 16px; color: #555; margin: 0;">
            ${formData.jobTitle || 'Senior Developer'}
          </p>

          <p style="font-size: 14px; color: #555; margin: 0;">
            Email: <a href="mailto:${formData.email || 'johndoe@example.com'}" style="color: #007bff;">
              ${formData.email || 'johndoe@example.com'}
            </a>
          </p>

          <p style="font-size: 14px; color: #555; margin: 0;">
            Company: ${formData.companyName || 'Acme Corp'}
          </p>
        </div>

        <!-- Content Section -->
        <div>
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            Dear ${formData.hiringManagerName || 'Hiring Manager'},
          </p>

          <p style="font-size: 16px; color: #333;">
            I am excited to submit my application for the ${formData.jobTitle || 'Senior Developer'} role at ${formData.companyName || 'Acme Corp'}.
            With ${formData.experienceYears || 'several'} years of professional experience, I have honed a skill set tailored to address complex challenges, 
            drive business objectives, and deliver high-quality results. I am drawn to the opportunity to contribute to a company that values innovation and 
            growth as much as I do.
          </p>

          <p style="font-size: 16px; color: #333;">
            Throughout my career, I have demonstrated expertise in programming, data analysis, and strategic problem-solving. My experience with technologies 
            such as JavaScript, Python, and SQL has empowered me to develop scalable solutions that enhance operational efficiency and meet evolving industry 
            demands. In addition to my technical proficiency, I am known for my commitment to collaboration, consistently contributing to a team-oriented 
            environment that maximizes productivity and achieves shared goals.
          </p>

          ${formData.experience !== "Less than 1 year" && formData.previousJobTitle ? 
            `<p style="font-size: 16px; color: #333;">
              Most recently, in my role as a ${formData.previousJobTitle}, I led multiple successful projects, including optimizing systems to achieve a 20% 
              increase in performance. This experience deepened my understanding of software architecture and strengthened my ability to create impactful, 
              efficient solutions.
            </p>` : ''}

          ${formData.gap ? 
            `<p style="font-size: 16px; color: #333;">
              During a recent gap in my career, I took the opportunity to further my skills through intensive courses in programming and data analysis. This 
              time allowed me to gain fresh perspectives and enhance my expertise, leaving me well-prepared and eager for new challenges in this field.
            </p>` : ''}

          <p style="font-size: 16px; color: #333;">
            I approach my work with a results-driven mindset and an adaptable style, making me equally effective in independent settings and collaborative 
            team environments. I am confident that my unique blend of skills, experience, and enthusiasm will make a positive contribution to your team 
            and further elevate ${formData.companyName || 'Acme Corp'}'s reputation in the industry.
          </p>

          <p style="font-size: 16px; color: #333;">
            Thank you for considering my application. I look forward to the opportunity to discuss how my background aligns with your needs.
          </p>

          <p style="font-size: 16px; color: #333;">
            Sincerely,
          </p>

          <h3 style="color: #00796b; font-family: 'Brush Script MT', cursive; font-size: 24px; margin-top: 2px;">
            ${formData.firstName || 'John'} ${formData.lastName || 'Doe'}
          </h3>
        </div>
      </div>

      <!-- Bottom Section -->
      <div style="background-color: #00796b; padding: 10px; border-radius: 0 0 8px 8px; margin: 0;">
        <p style="color: white; text-align: center; font-size: 14px;">
          Thank you for your time and consideration.
        </p>
      </div>
    </div>
  `;
}








  

  
  

  
  
  
  
  

}