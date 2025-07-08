import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-circle"></div>
      <h3>Learning Management System</h3>
      <ul>
        <li>
          <Link to="/dashboard" className="sidebar-heading">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/lead-assigning" className="sidebar-heading">
            Lead Assigning
          </Link>
        </li>
        <li>
          <Link to="/schedule" className="sidebar-heading">
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/courses" className="sidebar-heading">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/task-tracker" className="sidebar-heading">
            Task Tracker
          </Link>
        </li>
        <li>
          <Link to="/forum-chat" className="sidebar-heading">
            Forum / Chat
          </Link>
        </li>
        <li>
          <Link to="/upload" className="sidebar-heading">
            Upload
          </Link>
        </li>
        <li className="bottom">
          <Link to="/settings" className="sidebar-heading">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
