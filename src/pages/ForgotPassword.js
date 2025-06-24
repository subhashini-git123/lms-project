import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './ForgetPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSendMail = () => {
    navigate('/check-email');
  };

  return (
    <div className="fp-container">
      <h2>Forgot Password</h2>

      <label className="fp-label">Enter your email</label>
      <input type="email" placeholder="Enter your email" className="fp-input" />

      <label className="fp-label">Password</label>
      <input type="password" placeholder="Enter new password" className="fp-input" />

      <button className="fp-send-mail-button" onClick={handleSendMail}>Send Mail</button>

      <div className="fp-navigation-links">
        <Link to="/" className="fp-back-link"> {'\u2190'} Back to Login</Link>
      </div>

      <div className="fp-navigation-links">
        <Link to="/set-password" className="fp-set-password-link">Go to Set Password</Link>
      </div>
    </div>
    
  );
}
 
export default ForgotPassword;
