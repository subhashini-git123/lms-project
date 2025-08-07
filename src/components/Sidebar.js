import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import "./Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {isMobile && !isSidebarOpen && (
        <div
          className="hamburger-toggle"
          onClick={() => setIsSidebarOpen(true)}
        >
          <IoMenu size={28} />
        </div>
      )}

      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        {isMobile && (
          <button
            className="close-sidebar-btn"
            onClick={() => setIsSidebarOpen(false)}
          >
            ×
          </button>
        )}

        <img src={logo} alt="Logo" className="sidebar-logo" />
        <h3>Learning Management System</h3>

        <ul>
          <li className={isActive("/dashboard") ? "active-li" : ""}>
            <button
              className="sidebar-heading"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li className={isActive("/lead-assigning") ? "active-li" : ""}>
            <button
              className="sidebar-heading"
              onClick={() => navigate("/lead-assigning")}
            >
              Lead Assigning
            </button>
          </li>
          <li className={isActive("/schedule") ? "active-li" : ""}>
            <button
              className="sidebar-heading"
              onClick={() => navigate("/schedule")}
            >
              Schedule
            </button>
          </li>
          <li className={isActive("/courses") ? "active-li" : ""}>
            <button
              className="sidebar-heading"
              onClick={() => navigate("/courses")}
            >
              Courses
            </button>
          </li>
          <li className={isActive("/task-tracker") ? "active-li" : ""}>
            <button
              className="sidebar-heading"
              onClick={() => navigate("/task-tracker")}
            >
              Task Tracker
            </button>
          </li>
          <li className={isActive("/forum-chat") ? "active-li" : ""}>
            <button
              className="sidebar-heading"
              onClick={() => navigate("/forum-chat")}
            >
              Forum / Chat
            </button>
          </li>
          <li className={isActive("/upload") ? "active-li" : ""}>
            <button
              className="sidebar-heading"
              onClick={() => navigate("/upload")}
            >
              Upload
            </button>
          </li>
          <li className="bottom">
            <button
              className={`sidebar-heading ${
                isActive("/settings") ? "active-settings-text" : ""
              }`}
              onClick={() => navigate("/settings")}
            >
              Settings
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
