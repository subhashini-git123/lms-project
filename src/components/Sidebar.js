import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = ({ onClose, showClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

 
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      {showClose && (
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      )}

      <img src={logo} alt="Logo" className="sidebar-logo" />
      <h3>Learning Management System</h3>

      <ul>
        <li className={isActive("/dashboard") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
        </li>
        <li className={isActive("/lead-assigning") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/lead-assigning")}>
            Lead Assigning
          </button>
        </li>
        <li className={isActive("/schedule") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/schedule")}>
            Schedule
          </button>
        </li>
        <li className={isActive("/courses") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/courses")}>
            Courses
          </button>
        </li>
        <li className={isActive("/task-tracker") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/task-tracker")}>
            Task Tracker
          </button>
        </li>
        <li className={isActive("/forum-chat") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/forum-chat")}>
            Forum / Chat
          </button>
        </li>
        <li className={isActive("/upload") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/upload")}>
            Upload
          </button>
        </li>
        <li className="bottom">
          <button
            className={`sidebar-heading ${isActive("/settings") ? "active-settings-text" : ""}`}
            onClick={() => navigate("/settings")}
          >
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
