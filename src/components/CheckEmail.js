import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
 
const CheckEmail = () => {
  const navigate = useNavigate();
 
  return (
    <div className="container">
      <div className="circle"></div>
      <h2 className="title">Check your email</h2>
      <p className="subtitle">
        We sent a password reset link to<br />
       Email
      </p>
      <button className="btn">Open Email App</button>
      <p className="resend-text">
        Didn't receive the email? <span className="click-link">Click to resend</span>
      </p>
      <p className="back-link" onClick={() => navigate('/')}>
        ← Back to Login
      </p>
    </div>
  );
};
 
export default CheckEmail;