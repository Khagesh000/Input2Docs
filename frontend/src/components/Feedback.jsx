import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Feedback.css'; // Ensure this path is correct

export default function Feedback() {
  const [feedbackStatus, setFeedbackStatus] = useState(null); // State for feedback status

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ehxnoe9', 'template_6t00rzh', e.target, 'T8nts_zoFTnKltu_k')
      .then((result) => {
        console.log(result.text);
        setFeedbackStatus({ type: 'success', message: "Your feedback has been sent successfully!" });
      }, (error) => {
        console.log(error.text);
        setFeedbackStatus({ type: 'error', message: "There was an error sending your feedback. Please try again later." });
      });
    e.target.reset();

    // Hide the feedback message after 30 seconds
    setTimeout(() => {
      setFeedbackStatus(null);
    }, 30000);
  }

  return (
    <div className='bg-wheat'>
      <div className="container py-5 bg-wheat text-black">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="feedback-content p-4 shadow bg-wheat rounded d-flex flex-column justify-content-between w-100">
              <div>
                <h2 className="text-center mb-4">We Value Your Feedback!</h2>
                <p className="text-center text-black-50">
                  If you have any feedback or queries regarding our projects, please feel free to reach out to us.
                  You can easily send us your thoughts using our feedback form. Just fill in your details and message,
                  and we'll get back to you as soon as possible. Your input is invaluable in helping us improve and
                  provide better services.
                </p>
                <p className="text-center text-black-50">
    We strive to create a community where your opinions matter. By sharing your feedback, you help us to
    innovate and tailor our solutions to better meet your needs. We appreciate your time and effort in
    communicating with us.
  </p>
  <p className="text-center text-black-50">
    Your satisfaction is our priority. If there are any aspects of our projects that you think could be
    improved or if you have suggestions for new features, we are eager to hear from you. Together, we can
    achieve more.
  </p>

              </div>
              <div className="text-center">
                <h3>Send Us Your Feedback</h3>
                <p className="mb-4 text-black-50">
                  We’re here to help and answer any questions you might have. Please use the form below to contact us,
                  and we'll respond promptly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="feedback-form p-4 shadow bg-wheat text-white rounded d-flex flex-column justify-content-between w-100">
              <form onSubmit={sendEmail} className="w-100">
                <div className="form-group">
                  <label className="font-weight-bold text-danger">Name</label>
                  <input type="text" className="form-control" name="name" required />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold text-danger">Email</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold text-danger">WhatsApp Number</label>
                  <input type="text" className="form-control" name="whatsapp_number" />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold text-danger">Message</label>
                  <textarea className="form-control" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-block" style={{ backgroundColor: '#ff6600' }}>
                  Send Enquiry <span className="arrow-right">→</span>
                </button>
              </form>
              {feedbackStatus && (
                <div className={`mt-3 alert ${feedbackStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {feedbackStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
