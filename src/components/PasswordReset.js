import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import "./PasswordReset.css"
function PasswordReset() {
  const navigate = useNavigate();

  const handleContinue = () => {
    alert("Logged in!");
    navigate("/dashboard");
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-card">
        <div className="success-circle" />
        <h2>Password reset</h2>
        <p>
          your password has been successfully reset.
          <br />
          Click below to log in magically
        </p>
        <button onClick={handleContinue} className="continue-button">
          Continue
        </button>
        <div className="back-login" onClick={() => navigate("/login")}>
          &larr; Back to Login
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;