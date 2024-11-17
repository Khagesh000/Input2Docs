import React from 'react';
import { FaCheckCircle, FaUserTie, FaLightbulb, FaChartLine, FaHandshake, FaGlobe, FaWallet, FaClipboardCheck, FaAddressBook } from 'react-icons/fa';
import '../ResumeMainMoto.css';

export default function ResumeMainMoto() {
  return (
    <div className="resumemain-container">
      <ul className="resumemain-points">
        <li className="resumemain-point">
          <FaUserTie className="resumemain-icon" />
          <span>Showcases your professionalism, skills, and unique qualities in a structured format.</span>
        </li>
        <li className="resumemain-point">
          <FaLightbulb className="resumemain-icon" />
          <span>Demonstrates your problem-solving abilities and adaptability to different job roles.</span>
        </li>
        <li className="resumemain-point">
          <FaChartLine className="resumemain-icon" />
          <span>Helps employers quickly assess your career growth and track record.</span>
        </li>
        <li className="resumemain-point">
          <FaHandshake className="resumemain-icon" />
          <span>Builds a positive first impression that increases your chances of landing interviews.</span>
        </li>
        <li className="resumemain-point">
          <FaGlobe className="resumemain-icon" />
          <span>Gives you a competitive edge in a global job market with consistent and clear formatting.</span>
        </li>
        <li className="resumemain-point">
          <FaWallet className="resumemain-icon" />
          <span>Highlights accomplishments that demonstrate your value and justify salary expectations.</span>
        </li>
        <li className="resumemain-point">
          <FaClipboardCheck className="resumemain-icon" />
          <span>Ensures consistency, accuracy, and organization, essential for applicant tracking systems (ATS).</span>
        </li>
        <li className="resumemain-point">
          <FaAddressBook className="resumemain-icon" />
          <span>Serves as a reference point for future job applications, providing a foundation to build upon.</span>
        </li>
      </ul>
    </div>
  );
}
