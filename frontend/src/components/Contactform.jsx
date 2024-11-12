import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../Contactform.css'; // Ensure this file contains the required styles

export default function Contactform() {
  const [formStatus, setFormStatus] = useState(null); // State for form submission status
  const [networkError, setNetworkError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value; // Capture user's email
    const userName = e.target.name.value;

    if (networkError) {
      alert('Cannot send email due to network issues.');
      return;
    }

    // Validate email format
    if (!validateEmail(userEmail)) {
      setFormStatus({ type: 'error', message: "Invalid email address format." });
      return;
    }

    // Send Contact Form Email
    emailjs.sendForm('service_ehxnoe9', 'template_6t00rzh', e.target, 'T8nts_zoFTnKltu_k')
      .then((result) => {
        setFormStatus({ type: 'success', message: "Your message has been sent successfully!" });
        // Send Thank You Email
        return emailjs.send('service_ehxnoe9', 'template_jwizt59', {
          to_email: userEmail,
          name: userName,
          reply_to: 'your_email@example.com'
        }, 'T8nts_zoFTnKltu_k');
      })
      .then((thankYouResult) => {
        console.log("Thank you email sent:", thankYouResult.text);
      })
      .catch((error) => {
        setFormStatus({ type: 'error', message: "There was an error sending your message. Please try again later." });
      });

    e.target.reset();

    // Hide the form status message after 30 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 30000);
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  useEffect(() => {
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

  return (
    <div className="contactform-bg pb-5">
      <div className="container py-5 contactform-container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="contactform-header text-center">
              <h2>Contact Our Team</h2>
              <p>We'd love to hear from you! Please fill out the form below.</p>
            </div>
            <div className="contactform-form-container p-4 shadow bg-light rounded">
              <form onSubmit={sendEmail} className="contactform-form">
                <div className="contactform-field">
                  <label className="contactform-label">Name</label>
                  <input type="text" className="contactform-input" name="name" required />
                </div>
                <div className="contactform-field">
                  <label className="contactform-label">Email</label>
                  <input type="email" className="contactform-input" name="email" required />
                </div>
                <div className="contactform-field">
                  <label className="contactform-label">WHATSAPP NO (Optional)</label>
                  <input type="text" className="contactform-input" name="whatsapp_number"/>
                </div>
                <div className="contactform-field">
                  <label className="contactform-label">Message</label>
                  <textarea className="contactform-input" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="contactform-btn">
                  Send Message
                </button>
              </form>
              {formStatus && (
                <div className={`mt-3 alert ${formStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {formStatus.message}
                </div>
              )}
              {networkError && (
                <div className="network-error mt-3">
                  Network issue detected. Some features may not work properly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
