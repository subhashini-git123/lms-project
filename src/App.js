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
      <Routes>
        <Route path="/register" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
