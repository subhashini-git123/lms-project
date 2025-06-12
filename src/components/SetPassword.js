import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      navigate("/reset-password"); 
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <div className="circle" />
        <h2>Set new password</h2>
        <p className="instruction">
          Your new password must be different from previously used passwords.
        </p>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Must be at least 8 characters"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleReset}>Reset Password</button>
        <a href="/" className="back-link">
          ← Back to login
        </a>
      </div>
    </div>
  );
};

export default SetPassword;