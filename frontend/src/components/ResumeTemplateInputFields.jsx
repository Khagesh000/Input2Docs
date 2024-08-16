export const templateInputFields = {
  1: [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Job Title', name: 'jobTitle', type: 'text' },
    { label: 'Principal', name: 'principal', type: 'text' },
    { label: 'School', name: 'school', type: 'text' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'Phone', name: 'phone', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'LinkedIn', name: 'linkedin', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Letter Content', name: 'letterContent', type: 'textarea' },
  ],
  2: [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Job Title', name: 'jobTitle', type: 'text' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'Phone', name: 'phone', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'LinkedIn', name: 'linkedin', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Letter Content', name: 'letterContent', type: 'textarea' },
  ],
  3: [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Job Title', name: 'jobTitle', type: 'text' },
    { label: 'Summary', name: 'summary', type: 'textarea' },
    {
      label: 'Experience',
      name: 'experience',
      type: 'object',
      fields: [
        { label: 'Position', name: 'position', type: 'text' },
        { label: 'Company', name: 'company', type: 'text' },
        { label: 'Location', name: 'location', type: 'text' },
        { label: 'Start Date', name: 'startDate', type: 'text' },
        { label: 'End Date', name: 'endDate', type: 'text' },
        { label: 'Responsibilities', name: 'responsibilities', type: 'textarea' },
      ]
    },
    {
      label: 'Education',
      name: 'education',
      type: 'object',
      fields: [
        { label: 'Degree', name: 'degree', type: 'text' },
        { label: 'School', name: 'school', type: 'text' },
        { label: 'Location', name: 'location', type: 'text' },
        { label: 'Start Date', name: 'startDate', type: 'text' },
        { label: 'End Date', name: 'endDate', type: 'text' },
      ]
    },
    { label: 'Skills', name: 'skills', type: 'textarea' },
  ],
};
