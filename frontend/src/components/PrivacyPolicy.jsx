import React from "react";
import "../PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container mt-5">
      <div className="privacy-content">
        <h1 className="privacy-heading">Privacy Policy</h1>
        <p className="privacy-text">
          Welcome to <span className="privacy-highlight">Input2Docs</span>! Your trust is our priority. This Privacy Policy outlines how we collect, use, and protect your information while ensuring transparency and compliance with data protection laws.
        </p>

        <h2 className="privacy-subheading">Information We Collect</h2>
        <p className="privacy-text">
          We gather various types of information to provide you with seamless and personalized services:
        </p>
        <table className="privacy-table">
          <thead>
            <tr>
              <th className="privacy-table-header">Type</th>
              <th className="privacy-table-header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="privacy-table-cell">Personal Information</td>
              <td className="privacy-table-cell">
                Name, email, phone number, LinkedIn profile, GitHub username,
                and profile picture.
              </td>
            </tr>
            <tr>
              <td className="privacy-table-cell">Professional Details</td>
              <td className="privacy-table-cell">
                Job title, education history, skills, certifications, and
                language proficiencies.
              </td>
            </tr>
            <tr>
              <td className="privacy-table-cell">Generated Content</td>
              <td className="privacy-table-cell">
                Resumes, cover letters, letters, and other templates you create
                using our services.
              </td>
            </tr>
            <tr>
              <td className="privacy-table-cell">Usage Data</td>
              <td className="privacy-table-cell">
                Information about how you interact with our platform, including
                IP address, browser type, and device details.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="privacy-subheading">Purpose of Data Collection</h2>
        <ul className="privacy-list">
          <li>
            <strong>Service Delivery:</strong> To create and manage
            professional documents such as resumes and cover letters.
          </li>
          <li>
            <strong>User Experience:</strong> Enhance platform functionality,
            customize your experience, and improve overall usability.
          </li>
          <li>
            <strong>Communication:</strong> Provide updates, respond to queries,
            and notify you about platform changes.
          </li>
          <li>
            <strong>Legal Compliance:</strong> Fulfill any legal obligations or
            regulatory requirements.
          </li>
        </ul>

        <h2 className="privacy-subheading">Data Protection</h2>
        <p className="privacy-text">
          We are committed to safeguarding your data. Here’s how we ensure your
          information remains secure:
        </p>
        <ul className="privacy-list">
          <li>
            All personal data is encrypted during transmission and storage.
          </li>
          <li>
            Access to your data is restricted to authorized personnel only.
          </li>
          <li>
            Regular security audits are conducted to identify and address
            vulnerabilities.
          </li>
        </ul>

        <h2 className="privacy-subheading">User Rights</h2>
        <p className="privacy-text">
          You have the following rights regarding your personal data:
        </p>
        <ol className="privacy-ordered-list">
          <li>Access your data and request a copy.</li>
          <li>Update or correct inaccurate information.</li>
          <li>Request deletion of your data.</li>
          <li>Restrict processing of your data.</li>
          <li>Withdraw consent at any time.</li>
        </ol>

        <h2 className="privacy-subheading">Data Retention Policy</h2>
        <p className="privacy-text">
          We retain your data only for as long as necessary:
        </p>
        <table className="privacy-table">
          <thead>
            <tr>
              <th className="privacy-table-header">Data Type</th>
              <th className="privacy-table-header">Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="privacy-table-cell">Account Information</td>
              <td className="privacy-table-cell">
                As long as your account is active.
              </td>
            </tr>
            <tr>
              <td className="privacy-table-cell">Generated Documents</td>
              <td className="privacy-table-cell">
                Until manually deleted by the user or after account closure.
              </td>
            </tr>
            <tr>
              <td className="privacy-table-cell">Usage Data</td>
              <td className="privacy-table-cell">6 months.</td>
            </tr>
          </tbody>
        </table>

        <h2 className="privacy-subheading">Third-Party Services</h2>
        <p className="privacy-text">
          We may share data with third-party services to improve our platform.
          These services adhere to strict data protection standards and include:
        </p>
        <ul className="privacy-list">
          <li>Cloud storage providers for secure data storage.</li>
          <li>Email providers to facilitate communication.</li>
          <li>Analytics tools to enhance platform performance.</li>
        </ul>

        <h2 className="privacy-subheading">Cookies and Tracking</h2>
        <p className="privacy-text">
          Our platform uses cookies to:
        </p>
        <ul className="privacy-list">
          <li>Analyze user behavior to improve the platform.</li>
          <li>Store user preferences for a personalized experience.</li>
          <li>Ensure smooth and secure operation of the website.</li>
        </ul>

        <h2 className="privacy-subheading">Contact Information</h2>
        <p className="privacy-text">
          If you have questions or concerns about our privacy practices, please
          contact us at <span className="privacy-highlight">support@input2docs.com</span>.
        </p>
      </div>
    </div>
  );
}
