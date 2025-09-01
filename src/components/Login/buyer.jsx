import React from 'react';
import './buyer.css';

const BuyerLogin = () => {
  const handleGoogleSignIn = () => {
    // Handle Google Sign In Logic
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Continue as Buyer</h2>
        
        <div className="auth-methods">
          <button className="google-auth-btn" onClick={handleGoogleSignIn}>
            <img src="https://accounts.google.com/favicon.ico" alt="Google" />
            Continue with Google (Buyer)
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerLogin;