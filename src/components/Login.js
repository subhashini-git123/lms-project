import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
    return regex.test(password);
  };

  const handleLogin = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 6 characters and include a capital letter, number, and symbol"
      );
      valid = false;
    }

    if (valid) {
      alert("Login successful!");
    }
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p className="error-text">{emailError}</p>}

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && <p className="error-text">{passwordError}</p>}

      <div className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      <p>
        Don’t have an account?{" "}
        <Link to="/register" className="register-link">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
