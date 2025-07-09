import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";
import logo from '../assets/logo.png';

const Sidebar = () => {
  const location = useLocation(); 

  return (
    <div className="sidebar">
    <img src={logo} alt="Logo" className="sidebar-logo" />
      <h3>Learning Management System</h3>
      <ul>
        <li className={location.pathname === "/dashboard" ? "active-li" : ""}>
          <NavLink to="/dashboard" className="sidebar-heading">
            Dashboard
          </NavLink>
        </li>
        <li className={location.pathname === "/lead-assigning" ? "active-li" : ""}>
          <NavLink to="/lead-assigning" className="sidebar-heading">
            Lead Assigning
          </NavLink>
        </li>
        <li className={location.pathname === "/schedule" ? "active-li" : ""}>
          <NavLink to="/schedule" className="sidebar-heading">
            Schedule
          </NavLink>
        </li>
        <li className={location.pathname === "/courses" ? "active-li" : ""}>
          <NavLink to="/courses" className="sidebar-heading">
            Courses
          </NavLink>
        </li>
        <li className={location.pathname === "/task-tracker" ? "active-li" : ""}>
          <NavLink to="/task-tracker" className="sidebar-heading">
            Task Tracker
          </NavLink>
        </li>
        <li className={location.pathname === "/forum-chat" ? "active-li" : ""}>
          <NavLink to="/forum-chat" className="sidebar-heading">
            Forum / Chat
          </NavLink>
        </li>
        <li className={location.pathname === "/upload" ? "active-li" : ""}>
          <NavLink to="/upload" className="sidebar-heading">
            Upload
          </NavLink>
        </li>
       <li className="bottom">
  <NavLink
    to="/settings"
    className={`sidebar-heading ${
      location.pathname === "/settings" ? "active-settings-text" : ""
    }`}
  >
    Settings
  </NavLink>
</li>
      </ul>
    </div>
  );
};

export default Sidebar;
