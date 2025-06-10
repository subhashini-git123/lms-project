import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Login = ({ email, setEmail, password, setPassword, errorMessage, onLogin }) => (
  <div className="login-container">
    <form onSubmit={onLogin} className="login-form">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
        required
      />

      {errorMessage && <div className="login-error">{errorMessage}</div>}

      <div className="forgot-password">
        <Link to="/forgot-password">Forgot password?</Link>
      </div>

      <button type="submit" className="login-button">
        Login
      </button>

      <div className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </form>
  </div>
);

export default Login;
