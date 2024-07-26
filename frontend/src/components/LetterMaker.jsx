import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import html2pdf from 'html2pdf.js';
import '../Letter.css';

const letterTemplates = {
  "Permission Letters": {
    "Field Trip Permission Letter": {
      template: `
        {YourName}
        {YourAddress}
        {City}, {State}, {ZIP Code}
        {Date}

        {RecipientsName}
        {SchoolsName}
        {SchoolsAddress}
        {City}, {State}, {ZIP Code}

        Dear {RecipientsName},

        I am writing to request permission for my child, {ChildsName},
        to attend the upcoming field trip to {letterBody} on {Date}.
        This trip is an excellent educational opportunity,
        and I believe it will greatly benefit my child.

        Thank you for considering this request.

        Sincerely,
        {YourName}
      `,
      fields: [
        { id: 'YourName', label: 'Your Name', type: 'text' },
        { id: 'YourAddress', label: 'Your Address', type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIP Code', label: 'ZIP Code', type: 'text' },
        { id: 'Date', label: 'Date', type: 'text' },
        { id: 'RecipientsName', label: "Recipient's Name", type: 'text' },
        { id: 'SchoolsName', label: "School's Name", type: 'text' },
        { id: 'SchoolsAddress', label: "School's Address", type: 'text' },
        { id: 'ChildsName', label: "Child's Name", type: 'text' },
        { id: 'letterBody', label: 'Destination', type: 'quill' },
      ]
    },
  },
  "Excuse Letters": {
    "Absentee Excuse Letter": {
      template: `
        {YourName}
        {YourAddress}
        {City}, {State}, {ZIP Code}
        {Date}

        {RecipientsName}
        {CompanyName}
        {CompanyAddress}
        {City}, {State}, {ZIP Code}

        Dear {RecipientsName},

        I am writing to inform you that I was unable to attend work on {AbsenceDate}
        due to {Reason}. I understand the importance of my role and have taken
        the necessary steps to ensure that my absence did not disrupt the workflow.

        I appreciate your understanding and will ensure that my duties are fulfilled
        promptly upon my return.

        Sincerely,
        {YourName}
      `,
      fields: [
        { id: 'YourName', label: 'Your Name', type: 'text' },
        { id: 'YourAddress', label: 'Your Address', type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIP Code', label: 'ZIP Code', type: 'text' },
        { id: 'Date', label: 'Date', type: 'text' },
        { id: 'RecipientsName', label: "Recipient's Name", type: 'text' },
        { id: 'CompanyName', label: "Company's Name", type: 'text' },
        { id: 'CompanyAddress', label: "Company's Address", type: 'text' },
        { id: 'AbsenceDate', label: 'Absence Date', type: 'text' },
        { id: 'Reason', label: 'Reason for Absence', type: 'text' },
      ]
    },
    "Late Arrival Excuse Letter": {
      template: `
        {YourName}
        {YourAddress}
        {City}, {State}, {ZIP Code}
        {Date}

        {RecipientsName}
        {CompanyName}
        {CompanyAddress}
        {City}, {State}, {ZIP Code}

        Dear {RecipientsName},

        I am writing to apologize for my late arrival on {LateDate}. The delay
        was caused by {Reason}. I understand the importance of punctuality and
        will take necessary steps to prevent such occurrences in the future.

        Thank you for your understanding.

        Sincerely,
        {YourName}
      `,
      fields: [
        { id: 'YourName', label: 'Your Name', type: 'text' },
        { id: 'YourAddress', label: 'Your Address', type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIP Code', label: 'ZIP Code', type: 'text' },
        { id: 'Date', label: 'Date', type: 'text' },
        { id: 'RecipientsName', label: "Recipient's Name", type: 'text' },
        { id: 'CompanyName', label: "Company's Name", type: 'text' },
        { id: 'CompanyAddress', label: "Company's Address", type: 'text' },
        { id: 'LateDate', label: 'Late Arrival Date', type: 'text' },
        { id: 'Reason', label: 'Reason for Late Arrival', type: 'text' },
      ]
    },
  }
};

const LetterMaker = ({ selectedTemplate }) => {
  const [formData, setFormData] = useState({});
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const generatedLetterRef = useRef(null);
  const [networkError, setNetworkError] = useState(false); // State to manage network error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setFormData({ ...formData, letterBody: content });
  };

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };


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



  const handleSubmit = (e) => {
    e.preventDefault();
    const category = Object.keys(letterTemplates).find(category => letterTemplates[category][selectedTemplate]);
    const templateDetails = letterTemplates[category][selectedTemplate];
    let filledTemplate = templateDetails.template;
    templateDetails.fields.forEach(field => {
      const placeholder = `{${field.id}}`;
      filledTemplate = filledTemplate.replace(new RegExp(placeholder, 'g'), formData[field.id] || '');
    });
    setGeneratedLetter(filledTemplate);
    setFormSubmitted(true);
    setTimeout(() => {
      if (generatedLetterRef.current) {
        generatedLetterRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const downloadAsPDF = () => {
    const element = document.getElementById('generated-letter');
    const opt = {
      margin: 0.5,
      filename: `${selectedTemplate}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  if (!selectedTemplate) {
    return null;
  }

  const category = Object.keys(letterTemplates).find(category => letterTemplates[category][selectedTemplate]);
  if (!category) {
    return null;
  }

  const fields = letterTemplates[category][selectedTemplate].fields;

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
                          value={formData.letterBody || ''}
                          onChange={handleQuillChange}
                          modules={LetterMaker.modules}
                          formats={LetterMaker.formats}
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
                  <button type="submit" className="btn btn-primary generate-button" >Generate Letter</button>
                </form>
              ) : (
                <div className='GenLetterSection'>
                  <h5>Generated Letter</h5>
                  <div id="generated-letter" ref={generatedLetterRef}>
                    <pre>{stripHtmlTags(generatedLetter)}</pre>
                  </div>
                  {networkError && (
        <div className="network-error">
          Network issue detected. Some features may not work properly.
        </div>
      )}
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

LetterMaker.modules = {
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

LetterMaker.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default LetterMaker;
