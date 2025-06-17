import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";
import CheckEmail from "./components/CheckEmail";
import Register from "./components/Register";
import SetPassword from "./components/SetPassword";
import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/reset-password" element={<PasswordReset />} />
         <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/check-email" element={<CheckEmail/>} />
              <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </Router>
  );
}

export default App;
