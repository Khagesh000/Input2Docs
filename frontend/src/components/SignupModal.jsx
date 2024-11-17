import React, { useState, useEffect } from 'react';
import '../SignupModal.css'; // Ensure correct import

function App() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  
  // Check if user has already signed up
  const hasSignedUp = localStorage.getItem('signedUp') === 'true';

  useEffect(() => {
    if (!hasSignedUp) {
      setShowSignupModal(true); // Show the modal if the user has not signed up
    }
  }, [hasSignedUp]);

  const handleCloseModal = () => {
    setShowSignupModal(false); // Close modal after user interaction
  };

  return (
    <div>
      {/* Conditionally render the SignupModal */}
      {showSignupModal && <SignupModal onClose={handleCloseModal} />}
      
      {/* Your other components here */}
      <h2>Welcome to the Website</h2>
    </div>
  );
}

export default App;
