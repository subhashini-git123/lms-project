import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSendMail = () => {
    navigate('/check-email');
  };

  return (
    <div className="login-container">
      <h2>Forgot Password</h2>

      <label>Enter your email</label>
      <input type="email" placeholder="Enter your email" />

      <label>Password</label>
      <input type="password" placeholder="Enter new password" />

      <button className="login-button" onClick={handleSendMail}>Send Mail</button>

      <div className="back-link">
        <Link to="/">← Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;

