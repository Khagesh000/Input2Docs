import React from "react";
import "../TermsAndConditions.css";

export default function TermsAndConditionsmoto() {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1 className="terms-heading">Terms and Conditions</h1>
        <p className="terms-text">
          Welcome to <span className="terms-highlight">Input2Docs</span>. By accessing or using our website, you agree to be bound by these terms and conditions. Please read them carefully.
        </p>

        <h2 className="terms-subheading">1. Acceptance of Terms</h2>
        <p className="terms-text">
          By using Input2Docs, you confirm that you accept these Terms and
          Conditions and agree to comply with them. If you do not agree, you
          must not use our website.
        </p>

        <h2 className="terms-subheading">2. Use of Our Services</h2>
        <p className="terms-text">
          You are granted a limited, non-exclusive, non-transferable license to
          use our services for personal and professional purposes. You must:
        </p>
        <ul className="terms-list">
          <li>Ensure the information you provide is accurate and up-to-date.</li>
          <li>Use our platform in accordance with applicable laws and regulations.</li>
          <li>Not copy, distribute, or modify any part of our website without prior consent.</li>
        </ul>

        <h2 className="terms-subheading">3. Intellectual Property</h2>
        <p className="terms-text">
          All content on Input2Docs, including text, images, logos, and designs,
          is the intellectual property of Input2Docs. Unauthorized use of this
          content is strictly prohibited.
        </p>

        <h2 className="terms-subheading">4. User-Generated Content</h2>
        <p className="terms-text">
          By uploading or submitting content to our platform, you grant
          Input2Docs a worldwide, non-exclusive, royalty-free license to use,
          reproduce, and distribute your content solely for the purpose of
          operating the website.
        </p>

        <h2 className="terms-subheading">5. Limitation of Liability</h2>
        <p className="terms-text">
          Input2Docs is not liable for any direct, indirect, incidental, or
          consequential damages arising from the use of our services. All
          templates and tools are provided on an "as-is" basis.
        </p>

        <h2 className="terms-subheading">6. Termination</h2>
        <p className="terms-text">
          We reserve the right to suspend or terminate your access to our
          services at any time if you breach these terms.
        </p>

        <h2 className="terms-subheading">7. Privacy Policy</h2>
        <p className="terms-text">
          Your use of Input2Docs is also governed by our{" "}
          <a href="/privacy-policy" className="terms-link">Privacy Policy</a>,
          which details how we collect and use your information.
        </p>

        <h2 className="terms-subheading">8. Modifications to Terms</h2>
        <p className="terms-text">
          We may update these terms from time to time. You are advised to review
          this page periodically for any changes. Continued use of our website
          after modifications indicates your acceptance of the updated terms.
        </p>

        <h2 className="terms-subheading">9. Contact Information</h2>
        <p className="terms-text">
          If you have any questions or concerns about these terms, please
          contact us at <span className="terms-highlight">support@input2docs.com</span>.
        </p>
      </div>
    </div>
  );
}
