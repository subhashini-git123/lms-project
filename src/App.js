import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";
import CheckEmail from "./pages/CheckEmail";
import Register from "./pages/Register";
import SetPassword from "./pages/SetPassword";
import PasswordReset from "./pages/PasswordReset";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Card from "./components/Card";
import Home from "./pages/Home";
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
            <Route path="/card" element={<Home />} />
               <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
