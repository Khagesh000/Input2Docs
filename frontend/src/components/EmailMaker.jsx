import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../EmailMaker.css'

const EmailMaker = ({ selectedTemplate }) => {
  const [emailTemplates, setEmailTemplates] = useState({});
  const [formData, setFormData] = useState({});
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const generatedEmailRef = useRef(null);
  const [networkError, setNetworkError] = useState(false);
  const [validationError, setValidationError] = useState('');

  const quillStyle = {
    backgroundColor: '#ffffff' // White background
  };


  

  useEffect(() => {
    // Fetch email templates
    fetch('/json/templates.json')
      .then(response => response.json())
      .then(data => setEmailTemplates(data))
      .catch(error => {
        console.error('Error fetching templates:', error);
        alert('Error fetching email templates.');
      });
  }, []);

  useEffect(() => {
    const handleOnline = () => setNetworkError(false);
    const handleOffline = () => setNetworkError(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial status
    if (!navigator.onLine) {
      setNetworkError(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (selectedTemplate) {
      const category = Object.keys(emailTemplates).find(cat =>
        Object.keys(emailTemplates[cat]).includes(selectedTemplate)
      );
         
      console.log('Selected template:', selectedTemplate);
      console.log('Category found:', category);

      if (category) {
        setFormData({
          category: category,
          email_type: selectedTemplate,
        });
        setFormSubmitted(false);
        setValidationError('');
      } else {
        console.error(`No category found for selected template: ${selectedTemplate}`);
        setFormData({});
      }
    }
  }, [selectedTemplate, emailTemplates]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (content) => {
    setFormData({ ...formData, EmailBody: content });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    const templateDetails = emailTemplates[formData.category]?.[formData.email_type];
    if (!templateDetails || !templateDetails.fields) {
      console.error(`Template details or fields not found for category '${formData.category}' and template '${formData.email_type}'`);
      return;
    }

    // Validate required fields
    const missingFields = templateDetails.fields.filter(field => field.required && !formData[field.id]);
    if (missingFields.length > 0) {
      setValidationError(`Please fill in the following fields: ${missingFields.map(field => field.label).join(', ')}`);
      return;
    } else {
      setValidationError('');
    }

    let filledTemplate = templateDetails.template;
    templateDetails.fields.forEach(field => {
      const placeholder = `{${field.id}}`;
      filledTemplate = filledTemplate.replace(new RegExp(placeholder, 'g'), formData[field.id] || '');
    });

    // Remove unwanted <p> tags
    filledTemplate = filledTemplate.replace(/<p>/g, ' ').replace(/<\/p>/g, '')
                                   .replace(/<\/?div>/g, ' ') // Remove <div> and </div>
                                   .replace(/<\/?strong>/g, ' ') // Remove <strong> and </strong>
                                   .replace(/<\/?ul>/g, ' ') // Remove <ul> and </ul>
                                   .replace(/<\/?li>/g, ' ') 
                                   .replace(/<\/?br>/g, ' ') // Remove <li> and </li>

     // Include subject in generated email
     const emailSubject = formData.subject || 'No Subject';
     const emailContent = `<h2>Subject: ${emailSubject}</h2><div>${filledTemplate}</div>`;

     
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
    if (networkError) {
      alert('Cannot send email due to network issues.');
      return;
    }

    try {
      setIsSendingEmail(true);
      const controller = new AbortController();
      const timeout = setTimeout(() => {
        controller.abort();
      }, 60000);

      const response = await fetch('http://127.0.0.1:8000/api/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal, 
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error sending email:', errorData);
      
      // Display an alert with the error message
      alert(`Error: ${errorData.message || 'Failed to send email'}`);

      // If there are specific missing fields, display them in the alert as well
      if (errorData.error) {
        alert(`Missing required fields: ${errorData.error}`);
      }

      throw new Error(errorData.message || 'Failed to send email');
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
      }, 10000); // Message visible for 3 seconds

    } catch (error) {
      if (error.name === 'AbortError') {
        console.error('Fetch request was aborted');
        alert('Request timed out. Please try again.');
      } else {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email. Please try again.');
      }
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

  const fields = emailTemplates[formData.category]?.[formData.email_type]?.fields || [];

  return (
    <div className="email-maker">
      <form onSubmit={handleSubmit}>
        {fields.map(field => (
          <div key={field.id} className="form-group">
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === 'text' && (
              <input
                type="text"
                id={field.id}
                name={field.id}
                value={formData[field.id] || ''}
                onChange={handleChange}
                className="form-control"
              />
            )}
             {field.type === 'textarea' && (
            <textarea
              id={field.id}
              name={field.id}
              value={formData[field.id] || ''}
              onChange={handleChange}
              rows="6" // Adjust as needed
              className="form-control"
            />
          )}
          {field.type === 'tel' && (
            <tel
            type="text"
              id={field.id}
              name={field.id}
              value={formData[field.id] || ''}
              onChange={handleChange}
              className="form-control"
            />
          )}
          {field.type === 'date' && (
            <input
              type="date"
              id={field.id}
              name={field.id}
              value={formData[field.id] || ''}
              onChange={handleChange}
              className="form-control"
            />
          )}
            {field.type === 'email' && (
              <input
                type="email"
                id={field.id}
                name={field.id}
                value={formData[field.id] || ''}
                onChange={handleChange}
                className="form-control"
              />
            )}
            {field.type === 'url' && (
            <input
             type="text"
             id={field.id}
             name={field.id}
             value={formData[field.id] || ''}
             onChange={handleChange}
             className="form-control"
             />
             )}
            {field.type === 'quill' && (
              <ReactQuill
                theme="snow"
                value={formData.EmailBody || ''}
                onChange={handleQuillChange}
                placeholder={field.label}
                style={quillStyle}
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn btn-primary" disabled={isSendingEmail}>
          {isSendingEmail ? 'Sending...' : 'Generate Email'}
        </button>
        {validationError && (
          <div className="error-message">
            <p>{validationError}</p>
          </div>
        )}
      </form>

      {formSubmitted && (
        <div className="generated-email" ref={generatedEmailRef}>
          <h2>Generated Email</h2>
          <pre>{generatedEmail}</pre>
          <button onClick={sendEmail} className="btn btn-success" disabled={isSendingEmail}>
            {isSendingEmail ? 'Sending...' : 'Send Email'}
          </button>
          <button onClick={handleEdit} className="btn btn-secondary">
            Edit
          </button>
        </div>
      )}

      {showSuccessMessage && (
        <div className="success-message">
          <p>Email Sent Successfully!</p>
        </div>
      )}

       {validationError && (
        <div className="alert alert-danger" role="alert">
          {validationError}
        </div>
      )}

      {networkError && (
        <div className="network-error">
          <p>Network Error: Please check your internet connection.</p>
        </div>
      )}
    </div>
  );
};

export default EmailMaker;