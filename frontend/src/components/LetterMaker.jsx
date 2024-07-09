import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import html2pdf from 'html2pdf.js';
import '../Letter.css';

// Define your letter templates for each subcategory
const letterTemplates = {
  "Permission Letters": {
    "Field Trip Permission Letter": {
      template: `
         {YourName}
         {YourAddress}
         {City}, {State} , {ZIP Code}
         {Date}
   
         {RecipientsName}
         {SchoolsName}
         {SchoolsAddress}
         {City}, {State} , {ZIP Code}
   
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
        { id: 'YourAddress', label: "Your Address", type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIP Code', label: "Zip Code", type: 'text' },
        { id: 'Date', label: "Date", type: 'text' },
        { id: 'RecipientsName', label: "Recipients Name", type: 'text' },
        { id: 'SchoolsName', label: "School Name", type: 'text' },
        { id: 'SchoolsAddress', label: "School Address", type: 'text' },
        { id: 'ChildsName', label: "Childs Name", type: 'text' },
        { id: 'letterBody', label: 'Destination', type: 'quill' },
      ]
    },

    "Medical Treatment Permission": {
      template: `
        {YourName}
        {YourAddress}
        {City}, {State} , {ZIP Code}
        {Date}

        {RecipientsName}
        {SchoolsName}
        {SchoolsAddress}
        {City}, {State} , {ZIP Code}

        Dear {RecipientsName},

        I am writing to grant permission for {ChildsName} to receive {Treatment}
        at {TreatmentLocation} on {Date}. This treatment is necessary for {Reason}.

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
        { id: 'RecipientsName', label: 'Recipient\'s Name', type: 'text' },
        { id: 'SchoolsName', label: 'School\'s Name', type: 'text' },
        { id: 'SchoolsAddress', label: 'School\'s Address', type: 'text' },
        { id: 'ChildsName', label: 'Child\'s Name', type: 'text' },
        { id: 'Treatment', label: 'Treatment', type: 'text' },
        { id: 'TreatmentLocation', label: 'Treatment Location', type: 'text' },
        { id: 'Reason', label: 'Reason for Treatment', type: 'text' },
      ]
    },

  },
  // Excuse Letter Format
  "Excuse Letters": {
    template: `
    {YourName}
    {YourAddress}
    {City}, {State} , {ZIP Code}
    {EmailAddress}
    {PhoneNumber}
    {Date}

    {RecipientsName}
    {SchoolsName}
    {SchoolsAddress}
    {City}, {State} , {ZIP Code}

    Dear {RecipientsName},

    Please excuse my child, {ChildsName}, 
    from school on {Date} due to {letterBody}.
                I appreciate your understanding.

                                                  Sincerely,
                                                  {YourName}
 `,
    fields: [
      { id: 'YourName', label: 'Your Name', type: 'text' },
      { id: 'YourAddress', label: "Your Address", type: 'text' },
      { id: 'City', label: 'City', type: 'text' },
      { id: 'State', label: 'State', type: 'text' },
      { id: 'ZIP Code', label: "Zip Code", type: 'text' },
      { id: 'EmailAddress', label: "EmailAddress", type: 'text' },
      { id: 'PhoneNumber', label: "PhoneNumber", type: 'text' },
      { id: 'Date', label: "Date", type: 'text' },
      { id: 'RecipientsName', label: "Recipients Name", type: 'text' },
      { id: 'SchoolsName', label: "School Name", type: 'text' },
      { id: 'SchoolsAddress', label: "School Address", type: 'text' },
      { id: 'ChildsName', label: "Childs Name", type: 'text' },
      { id: 'letterBody', label: 'Reason, e.g., illness, family emergency', type: 'quill' },
    ]
  },
  // Communication Letter Format
  "Communication Letters": {
    template: `
    {YourName}
    {YourAddress}
    {City}, {State} , {ZIP Code}
    {EmailAddress}
    {PhoneNumber}
    {Date}

    {RecipientsName}
    {SchoolsName}
    {SchoolsAddress}
    {City}, {State} , {ZIP Code}

    Dear {RecipientsName},

       I am writing to inform you about [specific matter,
        e.g., parent-teacher meeting, changes in school policy]. 
        We believe this will [explain the impact].

                Thank you for your attention to this matter.

                                        Sincerely,
                                       {YourName}
 `,
    fields: [
      { id: 'YourName', label: 'Your Name', type: 'text' },
      { id: 'YourAddress', label: "Your Address", type: 'text' },
      { id: 'City', label: 'City', type: 'text' },
      { id: 'State', label: 'State', type: 'text' },
      { id: 'ZIP Code', label: "Zip Code", type: 'text' },
      { id: 'EmailAddress', label: "EmailAddress", type: 'text' },
      { id: 'PhoneNumber', label: "PhoneNumber", type: 'text' },
      { id: 'Date', label: "Date", type: 'text' },
      { id: 'RecipientsName', label: "Recipients Name", type: 'text' },
      { id: 'SchoolsName', label: "School Name", type: 'text' },
      { id: 'SchoolsAddress', label: "School Address", type: 'text' },
      { id: 'letterBody', label: 'Reason, e.g., illness, family emergency', type: 'quill' },
    ]
  },

  

  
};
const LetterMaker = ({ selectedTemplate }) => {
  const [formData, setFormData] = useState({});
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const generatedLetterRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setFormData({ ...formData, letterBody: content });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the selected template details
    const templateDetails = letterTemplates["Permission Letters"][selectedTemplate];

    // Replace placeholders in the template with form data
    let filledTemplate = templateDetails.template;
    const replacedFields = new Set();
    templateDetails.fields.forEach(field => {
      const placeholder = `{${field.id}}`;
      if (!replacedFields.has(field.id)) {
        filledTemplate = filledTemplate.replace(new RegExp(placeholder, 'g'), formData[field.id] || '');
        replacedFields.add(field.id);
      } else {
        filledTemplate = filledTemplate.replace(new RegExp(placeholder, 'g'), '');
      }
    });

    setGeneratedLetter(filledTemplate);
    setFormSubmitted(true);

    // Scroll to the generated letter section after a slight delay
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

  // Render nothing if no subcategory is selected or template does not exist
  if (!selectedTemplate || !letterTemplates["Permission Letters"][selectedTemplate]) {
    return null;
  }

  // Render the form based on selected subcategory and template
  const fields = letterTemplates["Permission Letters"][selectedTemplate].fields;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
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
                  <button type="submit" className="btn btn-primary">Generate Letter</button>
                </form>
              ) : (
                <div className='GenLetterSection'>
                  <h5>Generated Letter</h5>
                  <div id="generated-letter" ref={generatedLetterRef}>
                    <pre>{stripHtmlTags(generatedLetter)}</pre>
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