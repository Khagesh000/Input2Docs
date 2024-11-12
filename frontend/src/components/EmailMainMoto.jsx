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
    { title: "Artificial Intelligence Emails", description: "AI-driven templates for automated responses and intelligent outreach." },
    { title: "Coming Soon", description: "Stay tuned for more templates coming soon!" },
  ];

  return (
    <div>
    <div className="emailmain-section">
      <div className='ProcessHeading'><h1 className="emailmain-title">Explore Our <span>Email Templates</span></h1></div>
      <div className="emailmain-grid">
        {emailTypes.map((type, index) => (
          <div key={index} className={`emailmain-card ${index % 2 === 0 ? 'alt-layout' : ''}`}>
            <h3 className="emailmain-card-title">{type.title}</h3>
            <p className="emailmain-card-description">{type.description}</p>
          </div>
        ))}
      </div>
      </div>
      {/* Bottom content section */}
      <div className="emailmain-bottom-content">
        <div className='ProcessHeading'><h1 className="bottom-heading">Why Choose Our <span>Email Templates?</span></h1></div>
        <p className="bottom-intro">
          Save time and ensure professionalism with our expertly crafted email templates. Whether you’re connecting with a new client, following up with a customer, or sending an event invitation, we have a range of templates designed to meet your needs.
        </p>
        
        <h4 className="bottom-subheading">Explore the Benefits:</h4>
        <ul className="benefits-list">
          <li><strong>Business Efficiency:</strong> Create clear, professional emails quickly with minimal effort.</li>
          <li><strong>Customer-Centric Design:</strong> Templates designed to improve customer engagement and satisfaction.</li>
          <li><strong>Networking Made Easy:</strong> Build relationships with ease using templates optimized for networking and collaboration.</li>
          <li><strong>Event Success:</strong> Send polished invitations and reminders to keep your events organized and well-attended.</li>
          <li><strong>AI-Driven Automation:</strong> Utilize AI email templates to automate responses, freeing up your time for what matters most.</li>
        </ul>
        
        <p className="closing-remark">
          Ready to elevate your communication? Explore our templates to find the perfect match for your needs and make every email count!
        </p>
      </div>
      </div>
    
  );
}
