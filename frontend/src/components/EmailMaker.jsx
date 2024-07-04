import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const emailTemplates = {
  "Sales Emails": {
    template: `
      From: {YourName} <{YourEmail}>
      To: {RecipientName} <{RecipientEmail}>

      Subject: {Subject}

      Dear {RecipientName},

      {EmailBody}

      Sincerely,
      {YourName}
    `,
    fields: [
      { id: 'YourName', label: 'Your Name', type: 'text' },
      { id: 'YourEmail', label: 'Your Email', type: 'email' },
      { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
      { id: 'RecipientEmail', label: 'Recipient Email', type: 'email' },
      { id: 'Subject', label: 'Subject', type: 'text' },
      { id: 'EmailBody', label: 'Email Body', type: 'quill' },
    ]
  },
  "Job Application Emails": {
    template: `
      From: {YourName} <{YourEmail}>
      To: {Company} <{CompanyEmail}>

      Subject: Application for {Position}

      Dear {Company},

      {CoverLetterBody}

      Sincerely,
      {YourName}
    `,
    fields: [
      { id: 'YourName', label: 'Your Name', type: 'text' },
      { id: 'YourEmail', label: 'Your Email', type: 'email' },
      { id: 'Company', label: 'Company Name', type: 'text' },
      { id: 'CompanyEmail', label: 'Company Email', type: 'email' },
      { id: 'Position', label: 'Position', type: 'text' },
      { id: 'CoverLetterBody', label: 'Cover Letter Body', type: 'quill' },
    ]
  },
};

const EmailMaker = ({ selectedTemplate }) => {
  const [formData, setFormData] = useState({});
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const quillRefs = useRef({});

  const generatedEmailRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (id, content) => {
    setFormData({ ...formData, [id]: content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateDetails = emailTemplates[selectedTemplate];

    // Validate that all required fields are filled
    const emptyFields = templateDetails.fields.filter(field => !formData[field.id]);
    if (emptyFields.length > 0) {
      const fieldNames = emptyFields.map(field => field.label).join(', ');
      alert(`Please fill in the following fields: ${fieldNames}`);
      return;
    }

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

  const sendEmail = () => {
    setIsSending(true);
  
    // Prepare email data for sending
    const emailData = {
      From: `${formData.YourName} <${formData.YourEmail}>`,
      To: `${formData.RecipientName} <${formData.RecipientEmail}>`,
      Subject: formData.Subject,
      Body: formData.EmailBody,
    };
  
    // Log email data for debugging purposes
    console.log('Sending email data:', emailData);
  
    // Send POST request to server
    axios.post('https://input2docs.onrender.com/api/send-email/', emailData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Email sent successfully!', response);
        alert('Email sent successfully!');
      })
      .catch(error => {
        console.error('Error sending email:', error);
  
        if (error.response) {
          console.error('Error response data:', error.response.data);
          alert('Failed to send email: ' + JSON.stringify(error.response.data));
        } else if (error.request) {
          console.error('Request made but no response received:', error.request);
          alert('Failed to send email. No response received from server.');
        } else {
          console.error('Error:', error.message);
          alert('Failed to send email. Please try again later.');
        }
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  
  
  

  if (!selectedTemplate || !emailTemplates[selectedTemplate]) {
    return null;
  }

  const fields = emailTemplates[selectedTemplate].fields;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {fields.map(field => (
                    <div className="mb-3" key={field.id}>
                      <label htmlFor={field.id} className="form-label">{field.label}</label>
                      {field.type === 'quill' ? (
                        <ReactQuill
                          value={formData[field.id] || ''}
                          onChange={(content) => handleQuillChange(field.id, content)}
                          ref={(el) => (quillRefs.current[field.id] = el)}
                          id={field.id}
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
                  <button type="submit" className="btn btn-primary">Generate Email</button>
                </form>
              ) : (
                <div className='GenLetterSection'>
                  <h5>Generated Email</h5>
                  <div id="generated-email" ref={generatedEmailRef}>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{generatedEmail}</pre>
                  </div>
                  <button
                    className="btn btn-success mt-3"
                    onClick={sendEmail}
                    disabled={isSending}
                  >
                    {isSending ? 'Please wait...' : 'Send Email'}
                  </button>
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
