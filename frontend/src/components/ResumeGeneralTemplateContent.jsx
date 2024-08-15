import React from 'react';

export const generateTemplateContent = (formData, templateType) => {
  if (templateType === 1) {
    return `
      <div style="display: flex; height: 100%; background-color: #f5f5f5; color: #000;">
        <div style="flex: 1; padding-left: 4px; background-color: wheat; min-height: 1120px;">
          <h1>${formData.name}</h1>
          <h2>${formData.jobTitle}</h2>
          <h3>Personal Info</h3>
          <p style="color: #000;">${formData.principal}<br>${formData.school}<br>${formData.address}</p>
          <h3>Address</h3>
          <p style="color: #000;">${formData.address}</p>
          <p>Phone<br>${formData.phone}</p>
          <p>E-mail<br>${formData.email}</p>
          <p>LinkedIn<br>${formData.linkedin}</p>
          <p>Date<br>${formData.date}</p>
        </div>
        <div style="flex: 2; padding: 10px;">
          <p>${formData.letterContent}</p>
        </div>
      </div>`;
  } else if (templateType === 2) {
    return `
      <div style="display: flex; height: 100%;">
        <div style="flex: 1; padding: 20px; background-color: #ea0909; min-height: 1120px;">
          <h1>${formData.name}</h1>
          <h2>${formData.jobTitle}</h2>
          <p style="color: #f5e5e5;"><strong>Address:</strong><br>${formData.address}</p>
          <p style="color: #f5e5e5;"><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>LinkedIn:</strong> ${formData.linkedin}</p>
          <p><strong>Date:</strong> ${formData.date}</p>
        </div>
        <div style="flex: 2; padding: 20px;">
          <p>${formData.letterContent}</p>
        </div>
      </div>`;
  }
  return '';
};
