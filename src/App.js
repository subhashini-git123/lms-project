import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";
import CheckEmail from "./components/CheckEmail";
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
             <Route path="/check-email" element={<CheckEmail/>} />
      </Routes>
    </Router>
  );
}
 
export default App;