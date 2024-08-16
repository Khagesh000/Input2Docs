import educationIcon from '../assets/images/education-icon.png';
import skillsIcon from '../assets/images/skills.png';
import summaryIcon from '../assets/images/summary-icon.png';
import experienceIcon from '../assets/images/experience.png';



export const generateTemplateContent = (formData, templateType) => {
  if (templateType === 1) {
    return `
      <div style="display: flex; height: 100%; background-color: #f5f5f5; color: #000;">
        <div style="flex: 1; padding-left: 4px; background-color: wheat; min-height: 1120px;">
          <h1 style="margin: 0;">${formData.name}</h1>
          <h2 style="margin: 10px 0;">${formData.jobTitle}</h2>
          <h3 style="margin-top: 20px;">Personal Info</h3>
          <p style="color: #000;">${formData.principal}<br>${formData.school}<br>${formData.address}</p>
          <h3 style="margin-top: 20px;">Address</h3>
          <p style="color: #000;">${formData.address}</p>
          <p style="color: #000;">Phone<br>${formData.phone}</p>
          <p style="color: #000;">E-mail<br>${formData.email}</p>
          <p style="color: #000;">LinkedIn<br>${formData.linkedin}</p>
          <p style="color: #000;">Date<br>${formData.date}</p>
        </div>
        <div style="flex: 2; padding: 10px; background-color: #fff;">
          <p>${formData.letterContent}</p>
        </div>
      </div>`;
  } else if (templateType === 2) {
    return `
      <div style="display: flex; height: 100%;">
        <div style="flex: 1; padding: 20px; background-color: #ea0909; color: #f5e5e5; min-height: 1120px;">
          <h1>${formData.name}</h1>
          <h2>${formData.jobTitle}</h2>
          <p><strong>Address:</strong><br>${formData.address}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>LinkedIn:</strong> ${formData.linkedin}</p>
          <p><strong>Date:</strong> ${formData.date}</p>
        </div>
        <div style="flex: 2; padding: 20px; background-color: #fff; color: #000;">
          <p style="color: #000;">${formData.letterContent}</p>
        </div>
      </div>`;
  } else if (templateType === 3) {
    return `
      <div style="background-color: #ffffff; font-family: Arial, sans-serif; padding: 40px; max-width: 900px; margin: auto;">
        <!-- Header -->
        <div style="display: flex; align-items: center;">
          <div style="background-color: #2c3e50; color: white; width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px;">
            ${formData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div style="margin-left: 20px;">
            <h1 style="margin: 0; font-size: 24px;">${formData.name}</h1>
            <h2 style="margin: 0; font-size: 18px; color: #555;">${formData.jobTitle}</h2>
          </div>
        </div>

        <!-- Summary -->
        <div style="margin-top: 30px;">
          <h3 style="font-size: 20px; display: flex; align-items: center;">
            <img src="${summaryIcon}" alt="summary-icon" style="width: 24px; margin-right: 10px;">
            Summary
          </h3>
          <p style="font-size: 14px; color: #333;">${formData.summary}</p>
        </div>

        <!-- Experience -->
        <div style="margin-top: 30px;">
          <h3 style="font-size: 20px; display: flex; align-items: center;">
            <img src="${experienceIcon}" alt="experience-icon" style="width: 24px; margin-right: 10px;">
            Experience
          </h3>
          ${formData.experience.map((exp, index) => `
            <div style="margin-top: 15px;">
              <div style="display: flex; justify-content: space-between;">
                <div style="font-size: 14px; font-weight: bold;">${exp.position}</div>
                <div style="font-size: 14px; color: #777;">${exp.startDate} - ${exp.endDate}</div>
              </div>
              <div style="font-size: 14px; color: #555;">${exp.company}, ${exp.location}</div>
              <ul style="font-size: 14px; color: #333; margin-top: 8px; list-style: disc; margin-left: 20px;">
                ${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- Education -->
        <div style="margin-top: 30px;">
          <h3 style="font-size: 20px; display: flex; align-items: center;">
            <img src="${educationIcon}" alt="education-icon" style="width: 24px; margin-right: 10px;">
            Education
          </h3>
          ${formData.education.map((edu, index) => `
            <div style="margin-top: 15px;">
              <div style="display: flex; justify-content: space-between;">
                <div style="font-size: 14px; font-weight: bold;">${edu.degree}</div>
                <div style="font-size: 14px; color: #777;">${edu.startDate} - ${edu.endDate}</div>
              </div>
              <div style="font-size: 14px; color: #555;">${edu.school}, ${edu.location}</div>
            </div>
          `).join('')}
        </div>

        <!-- Skills -->
        <div style="margin-top: 30px;">
          <h3 style="font-size: 20px; display: flex; align-items: center;">
            <img src="${skillsIcon}" alt="skills-icon" style="width: 24px; margin-right: 10px;">
            Skills
          </h3>
          <ul style="font-size: 14px; color: #333; margin-top: 8px; list-style: disc; margin-left: 20px;">
            ${formData.skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>
      </div>`;
  }
  
  return '';
};
