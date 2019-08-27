import React from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

function AdminConfirmation() {
  return (
    <div className="thankyou-wrapper">
      <Header />
      <div className="thankyou-text-container">
        <h1>Thank you!</h1>
        <p>
          Our admins will review your application shortly. For any questions or
          concerns, please contact us at example@email.com
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AdminConfirmation;
