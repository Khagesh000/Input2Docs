import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import html2pdf from 'html2pdf.js';
import '../Letter.css';

const emailTemplates = {
  "Business Emails": {
    "Introduction Email": {
      template: `
        Subject: Introduction

        Dear {RecipientName},

        I hope this email finds you well. My name is {YourName}, and I am reaching out to introduce {YourCompany}. We specialize in {Product/Service}, and I believe there could be a beneficial partnership between our companies.

        Please let me know if you would be interested in scheduling a brief call or meeting to discuss this further.

        Best regards,
        {YourName}
      `,
      fields: [
        { id: 'YourName', label: 'Your Name', type: 'text' },
        { id: 'YourCompany', label: 'Your Company', type: 'text' },
        { id: 'Product/Service', label: 'Product/Service', type: 'text' },
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' }
      ]
    },
    "Follow-Up Email": {
      template: `
        Subject: Follow-Up

        Dear {RecipientName},

        I hope this message finds you well. I wanted to follow up on our recent conversation regarding {Product/Service}. Do you have any further questions or thoughts on how we can move forward?

        Looking forward to your response.

        Best regards,
        {YourName}
      `,
      fields: [
        { id: 'YourName', label: 'Your Name', type: 'text' },
        { id: 'Product/Service', label: 'Product/Service', type: 'text' },
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' }
      ]
    }
  },
  // Add more categories and templates as needed
};

const EmailMaker = ({ selectedTemplate }) => {
  const [formData, setFormData] = useState({});
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const generatedEmailRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setFormData({ ...formData, emailBody: content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateDetails = emailTemplates["Business Emails"][selectedTemplate];
    let filledTemplate = templateDetails.template;
    templateDetails.fields.forEach(field => {
      const placeholder = `{${field.id}}`;
      filledTemplate = filledTemplate.replace(new RegExp(placeholder, 'g'), formData[field.id] || '');
    });
    setGeneratedEmail(filledTemplate);
    setFormSubmitted(true);
    setTimeout(() => {
      if (generatedEmailRef.current) {
        generatedEmailRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const downloadAsPDF = () => {
    const element = document.getElementById('generated-email');
    const opt = {
      margin: 0.5,
      filename: `${selectedTemplate}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  if (!selectedTemplate || !emailTemplates["Business Emails"][selectedTemplate]) {
    return null;
  }

  const fields = emailTemplates["Business Emails"][selectedTemplate].fields;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h3 className='selected-template'>Selected Template: {selectedTemplate}</h3>
          <div className="card">
            <div className="card-body generate">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {fields.map(field => (
                    <div className="mb-3" key={field.id}>
                      <label htmlFor={field.id} className="form-label">{field.label}</label>
                      {field.type === 'quill' ? (
                        <ReactQuill
                          value={formData.emailBody || ''}
                          onChange={handleQuillChange}
                          modules={EmailMaker.modules}
                          formats={EmailMaker.formats}
                          className="quill-editor"
                        />
                      ) : (
                        <input
                          type={field.type}
                          className="form-control"
                          id={field.id}
                          name={field.id}
                          value={formData[field.id] || ''}
                          onChange={handleChange}
                          required
                        />
                      )}
                    </div>
                  ))}
                  <button type="submit" className="btn btn-primary generate-button">Generate Email</button>
                </form>
              ) : (
                <div className='GenEmailSection'>
                  <h5>Generated Email</h5>
                  <div id="generated-email" ref={generatedEmailRef}>
                    <pre>{generatedEmail}</pre>
                  </div>
                  <button className="btn btn-success mt-3" onClick={downloadAsPDF}>Download as PDF</button>
                  <button className="btn btn-secondary mt-3" onClick={() => setFormSubmitted(false)}>Edit</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EmailMaker.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  }
};

EmailMaker.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default EmailMaker;
