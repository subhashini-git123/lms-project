import React, { useState } from "react";
import "./Setting.css";
import Sidebar from "../components/Sidebar";

const Setting = () => {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setMessage("");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, currentPassword, newPassword, confirmPassword } = formData;

    if (!email || !currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    // Success
    setMessage("Password updated successfully!");
    setError("");
    console.log("Password update form submitted:", formData);
    // Optionally reset form
    setFormData({
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="settings-container">
        <Sidebar/>
    <div className="settings-page-div">
      <h2 className="settings-title">Settings</h2>
      <form className="change-password-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Change Password</h3>

        {error && <p className="error-text">{error}</p>}
        {message && <p className="success-text">{message}</p>}

        <div className="form-group">
          <div className="form-left">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-right">
            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
    </div>
  );
};

export default Setting;
