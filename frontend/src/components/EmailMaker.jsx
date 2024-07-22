import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const emailTemplates = {
  "Sales Emails": {
    "Introduction Email": {
      template: `
        Hi {RecipientName},

        My name is {SenderName}, and I am the {SenderPosition} at {SenderCompany}.
        I am writing to introduce our company and the services we offer.

        {EmailBody}

        Looking forward to hearing from you.

        Best regards,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' },
        { id: 'SenderPosition', label: 'Sender Position', type: 'text' },
        { id: 'SenderCompany', label: 'Sender Company', type: 'text' },
        { id: 'SenderEmail', label: 'Your Email', type: 'email' },
        { id: 'RecipientEmail', label: 'Recipient Email', type: 'email' },
        { id: 'EmailBody', label: 'Email Body', type: 'quill' },
      ]
    },
    "Follow-Up Email": {
      template: `
        Hi {RecipientName},

        I hope this email finds you well. I wanted to follow up on our previous conversation regarding.

        {EmailBody}

        Looking forward to your response.

        Best regards,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' },
        { id: 'SenderEmail', label: 'Your Email', type: 'email' },
        { id: 'RecipientEmail', label: 'Recipient Email', type: 'email' },
        { id: 'EmailBody', label: 'Email Body', type: 'quill' },
      ]
    }
  },
  "Marketing Emails": {
    "Product Launch Email": {
      template: `
        Hi {RecipientName},

        We are excited to announce the launch of our new product, {ProductName}!

        {EmailBody}

        Please visit our website to learn more about {ProductName}.

        Best regards,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'ProductName', label: 'Product Name', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' },
        { id: 'SenderEmail', label: 'Your Email', type: 'email' },
        { id: 'RecipientEmail', label: 'Recipient Email', type: 'email' },
        { id: 'EmailBody', label: 'Email Body', type: 'quill' },
      ]
    },
    "Newsletter Email": {
      template: `
        Hi {RecipientName},

        Welcome to our latest newsletter! Here are some updates and news from {CompanyName}:

        {EmailBody}

        Stay tuned for more updates in our upcoming newsletters.

        Best regards,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'CompanyName', label: 'Company Name', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' },
        { id: 'SenderEmail', label: 'Your Email', type: 'email' },
        { id: 'RecipientEmail', label: 'Recipient Email', type: 'email' },
        { id: 'EmailBody', label: 'Email Body', type: 'quill' },
      ]
    }
  }
};

const EmailMaker = ({ selectedTemplate }) => {
  const [formData, setFormData] = useState({});
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const generatedEmailRef = useRef(null);

  useEffect(() => {
    if (selectedTemplate) {
      const category = Object.keys(emailTemplates).find(cat =>
        Object.keys(emailTemplates[cat]).includes(selectedTemplate)
      );

      if (category) {
        setFormData({
          category: category,
          email_type: selectedTemplate,
        });
        setFormSubmitted(false);
      } else {
        setFormData({});
      }
    }
  }, [selectedTemplate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (content) => {
    setFormData({ ...formData, EmailBody: content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateDetails = emailTemplates[formData.category]?.[formData.email_type];
    if (!templateDetails || !templateDetails.fields) {
      console.error(`Template details or fields not found for category '${formData.category}' and template '${formData.email_type}'`);
      return;
    }

    let filledTemplate = templateDetails.template;
    templateDetails.fields.forEach(field => {
      const placeholder = `{${field.id}}`;
      filledTemplate = filledTemplate.replace(new RegExp(placeholder, 'g'), formData[field.id] || '');
    });

    // Remove unwanted <p> tags
    filledTemplate = filledTemplate.replace(/<p>/g, '').replace(/<\/p>/g, '');

    setGeneratedEmail(filledTemplate);
    setFormSubmitted(true);
    setShowSuccessMessage(false);
    setTimeout(() => {
      if (generatedEmailRef.current) {
        generatedEmailRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const sendEmail = async () => {
    try {
      setIsSendingEmail(true);
      const controller = new AbortController();
      const timeout = setTimeout(() => {
        controller.abort();
      }, 60000);

      const response = await fetch('https://input2docs.onrender.com/api/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      alert("Email Sent Successfully!!!");
      setShowSuccessMessage(true);
      localStorage.setItem('emailSent', 'true');

      // Reset the form and states
      setFormData({});
      setGeneratedEmail('');
      setFormSubmitted(false);
      setIsSendingEmail(false);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 100); // Message visible for 10 seconds

    } catch (error) {
      console.error('Error sending email:', error);
      setIsSendingEmail(false);
    }
  };

  const handleEdit = () => {
    setFormSubmitted(false);
    setGeneratedEmail('');
    setShowSuccessMessage(false);
  };

  if (!selectedTemplate) {
    return null;
  }

  const fields = emailTemplates[formData.category]?.[formData.email_type]?.fields;
  if (!fields) {
    console.error(`Fields not found for template '${formData.email_type}' in category '${formData.category}'`);
    return null;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h3 className='selected-template'>Selected Template: {formData.email_type}</h3>
          <div className="card">
            <div className="card-body generate">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {fields.map(field => (
                    <div className="mb-3" key={field.id}>
                      <label htmlFor={field.id} className="form-label">{field.label}</label>
                      {field.type === 'quill' ? (
                        <ReactQuill
                          value={formData.EmailBody || ''}
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
                  <div id="generatedEmail" ref={generatedEmailRef}>
                    <pre>{generatedEmail}</pre>
                  </div>
                  <div className="button-container">
                    <button className="btn btn-primary edit-button" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-success send-button" onClick={sendEmail} disabled={isSendingEmail}>
                      {isSendingEmail ? 'Sending...' : 'Send Email'}
                    </button>
                  </div>
                </div>
              )}
              {showSuccessMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  Email sent successfully!
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
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
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