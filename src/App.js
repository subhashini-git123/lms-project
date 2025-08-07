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
import { CourseProvider } from "./pages/CourseContext";
import LeadAssigning from "./pages/LeadAssigning";
import Setting from "./pages/Setting";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Schedule from "./pages/Schedule";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Upload from "./pages/Upload";
import Chat from "./pages/Chat";
import TaskTracker from "./pages/TaskTracker";
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
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/card" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lead-assigning" element={<LeadAssigning />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/upload" element={<Upload />} />
          <Route path="/Forum-chat" element={<Chat />} />
          <Route path="/task-tracker" element={<TaskTracker />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
}

export default App;
