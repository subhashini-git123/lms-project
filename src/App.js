import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";
import CheckEmail from "./pages/CheckEmail";
import PasswordReset from "./pages/PasswordReset";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import SetPassword from "./pages/SetPassword";
import Profile from "./pages/Profile";

import { CourseProvider } from './pages/CourseContext';


function App() {
  return (
        <CourseProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/reset-password" element={<PasswordReset />} />
         <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/check-email" element={<CheckEmail/>} />
            <Route path="/card" element={<Dashboard/>} />
               <Route path="/profile" element={<Profile />} />

            

               

      </Routes>
    </Router>
    </CourseProvider>
  );
}

export default App;
