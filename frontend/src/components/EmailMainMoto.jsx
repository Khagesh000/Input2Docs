import React from 'react';
import '../EmailMainMoto.css';

export default function EmailMainMoto() {
  const emailTypes = [
    { title: "Business Emails", description: "Professional emails for sales, marketing, and customer service." },
    { title: "Professional Emails", description: "Job applications, networking, and career growth templates." },
    { title: "Customer Support Emails", description: "Order confirmations, feedback requests, and support emails." },
    { title: "Networking Emails", description: "Connect, collaborate, and expand your professional network." },
    { title: "Event Planning Emails", description: "Invitations, reminders, and confirmations for events." },
    { title: "Public Relations Emails", description: "Media inquiries, press releases, and public statements." },
  ];

  return (
    <div className="emailmain-section">
      <h2 className="emailmain-title">Explore Our Email Templates</h2>
      <div className="emailmain-grid">
        {emailTypes.map((type, index) => (
          <div key={index} className="emailmain-card">
            <h3 className="emailmain-card-title">{type.title}</h3>
            <p className="emailmain-card-description">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
