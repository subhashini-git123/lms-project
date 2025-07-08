import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckEmail.css";

const CheckEmail = () => {
  const navigate = useNavigate();

  const handleEmail = () => {
    navigate("/set-password");
  };

  return (
    <div className="check-email-container">
      <div className="email-icon"></div>
      <h2 className="email-title">Check your email</h2>
      <p className="email-subtitle">
        We sent a password reset link to <br />
        <span className="email-address">lucida@gmail.com</span>
      </p>
      <button className="open-app-button" onClick={handleEmail}>
        Open Email
      </button>
      <p className="resend-text">
        Didn't receive the email?{" "}
        <span className="click-link">Click to resend</span>
      </p>
      <p className="back-to-login" onClick={() => navigate("/")}>
        {"\u2190"}Back to Login
      </p>
    </div>
  );
};

export default CheckEmail;
