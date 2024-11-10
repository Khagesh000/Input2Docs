import React from 'react';

const templateInputFields = {
    1: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
    2: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
    3: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
      4: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
      5: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
      6: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
      7: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
      8: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
      9: [
        { label: 'Date', name: 'date', type: 'date', placeholder: 'Enter the current date', suggestion: 'e.g., January 1, 2024' },
        { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', suggestion: 'e.g., John' },
        { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', suggestion: 'e.g., Doe' },
        { label: 'Job Title', name: 'jobTitle', type: 'text', placeholder: 'Enter your job title', suggestion: 'e.g., Senior Developer' },
        { label: 'Phone', name: 'phone', type: 'text' },
        { label: 'Email', name: 'email', type: 'email' },
        { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'Enter the company name', suggestion: 'e.g., Acme Corp' },
        { label: 'Hiring Manager Name', name: 'hiringManagerName', type: 'text', placeholder: 'Enter hiring manager’s name', suggestion: 'e.g., Jane Smith' },
        { label: 'Experience Years', name: 'experienceYears', type: 'text', placeholder: 'Enter experience in years', suggestion: 'e.g., 5' }
      ],
};

export { templateInputFields };
