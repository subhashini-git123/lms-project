import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ForgotPassword = ({
  email,
  setEmail,
  newPassword,
  setNewPassword,
  message,
  onSendMail
}) => (
  <div className="forgot-password-container">
    <form onSubmit={onSendMail} className="forgot-password-form">
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
        required
      />

      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="login-input"
        required
      />

      {message && <div className="message">{message}</div>}

      <button type="submit" className="login-button">
        Send Mail
      </button>

      <div className="back-to-login">
        <Link to="/">Go back to Login</Link>
      </div>
    </form>
  </div>
);

export default ForgotPassword;
