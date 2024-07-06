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
      ...formData,
      selectedTemplate,
      generatedEmail: stripHtmlTags(generatedEmail) // Ensure HTML tags are stripped
    };

    axios.post('http://127.0.0.1:8000/api/send-email/', emailData)
      .then((response) => {
        console.log("Logged data", response);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send email. Please try again later.');
      }).finally(() => {
        setIsSending(false);
      });
  };

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const body = doc.body;
    
    // Remove <p> tags and adjust other formatting
    const textContent = Array.from(body.childNodes)
      .map(node => {
        if (node.nodeName === 'P') {
          return node.textContent.trim(); // Trim spaces for paragraphs
        } else if (node.nodeName === 'BR') {
          return ' '; // Replace <br> tags with space
        } else {
          return node.textContent || ''; // Handle other nodes normally
        }
      })
      .join(''); // Join all text content into a single string
    
    return textContent;
  };
  

  if (!selectedTemplate || !emailTemplates[selectedTemplate]) {
    return null;
  }

  const fields = emailTemplates[selectedTemplate].fields;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h3>Selected Template: {selectedTemplate}</h3>
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
                    <pre>{stripHtmlTags(generatedEmail)}</pre>
                  </div>
                  <button onClick={() => setFormSubmitted(false)} className="btn btn-secondary mt-3">Edit Email</button>
                  <button onClick={sendEmail} className="btn btn-success mt-3 ms-3" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Email'}
                  </button>
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
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

EmailMaker.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link', 'image', 'video'
];

export default EmailMaker;
