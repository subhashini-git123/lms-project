import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import SetPassword from "./components/SetPassword";
import PasswordReset from "./components/PasswordReset";

function App() {
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
        <Route path="/" element={<Register />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route
          path="/login"
          element={
            <div>
              <h2>Login Page</h2>
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <h2>Dashboard Page</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
