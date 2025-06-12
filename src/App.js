import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

const Login = () => (
  <div className="login-container">
    <h2>Login Page (Placeholder)</h2>
    <p>This is where your login form would go.</p>
    <a href="/register">Go to Register</a>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Register
        </Link>
        <Link to="/set-password" style={{ marginRight: "10px" }}>
          Set Password
        </Link>
        <Link to="/reset-password" style={{ marginRight: "10px" }}>
          Reset Password
        </Link>
        <Link to="/login" style={{ marginRight: "10px" }}>
          Login
        </Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
