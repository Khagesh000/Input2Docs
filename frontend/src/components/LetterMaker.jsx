import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import html2pdf from 'html2pdf.js';
import '../Letter.css';

const LetterMaker = ({ selectedTemplate }) => {
  const [formData, setFormData] = useState({});
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const generatedLetterRef = useRef(null);
  const [letterTemplates, setLetterTemplates] = useState({});
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    fetch('/json/LetterTemplates.json')
      .then(response => response.json())
      .then(data => setLetterTemplates(data))
      .catch(error => {
        console.error('Error fetching templates:', error);
        alert('Error fetching letter templates.');
      });

    const handleOnline = () => setNetworkError(false);
    const handleOffline = () => setNetworkError(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (!navigator.onLine) {
      setNetworkError(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (content) => {
    setFormData({ ...formData, letterBody: content });
  };

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

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

    element.style.width = '8.5in';
    element.style.maxWidth = '8.5in';
    element.style.boxSizing = 'border-box';
    element.style.overflow = 'hidden';
    element.style.wordWrap = 'break-word';
    element.style.whiteSpace = 'pre-wrap';
    element.style.lineHeight = '1.5';

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: `${selectedTemplate}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        logging: true,
        useCORS: true,
      },
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
        <div className="col-md-12">
          <h3 className="selected-template">Selected Template: {selectedTemplate}</h3>
          <div className="card">
            <div className="card-body generate">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="input-row">
                    {fields.map((field, index) => (
                      <div className="input-col" key={field.id || index}>
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
                  </div>
                  <button type="submit" className="btn btn-primary generate-button">Generate Letter</button>
                </form>
              ) : (
                <div className="GenLetterSection">
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
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
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
