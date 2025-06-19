import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-circle"></div>
        <h3>Learning Management System</h3>
        <ul>
            <li className="sidebar-heading">
            <Link to="/dashboard" className="sidebar-heading">Dashboard</Link>
          </li>
          <li className="sidebar-heading">
            <Link to="/lead-assigning" className="sidebar-heading">Lead Assigning</Link>
          </li>
          <li className="sidebar-heading">
            <Link to="/schedule" className="sidebar-heading">Schedule</Link>
          </li>
          <li className="sidebar-heading">
            <Link to="/courses" className="sidebar-heading">Courses</Link>
          </li>
          <li className="sidebar-heading">
            <Link to="/task-tracker" className="sidebar-heading">Task Tracker</Link>
          </li>
          <li className="sidebar-heading">
            <Link to="/forum-chat" className="sidebar-heading">Forum / Chat</Link>
          </li>
          <li className="bottom">
            <Link to="/settings" className="sidebar-heading">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="header">
          <input type="text" placeholder="Search Courses" />
          <IoSearchSharp className="search-icon" />
          <div
            className="profile-circle"
            onClick={() => setShowSidebar(true)}
          ></div>
        </div>

        {/* Sliding Profile Sidebar */}
        <div className={`profile-slideout ${showSidebar ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setShowSidebar(false)}>
            &times;
          </button>
          <div className="slideout-content">
            <div className="profile-circle large"></div>
            <p className="profile-name">John Doe</p>
            <button className="profile-btn">Edit Profile</button>
            <button className="profile-btn logout">Logout</button>
          </div>
        </div>

        {/* Dashboard Stats  */}
        <div className="stats-container">
          <div className="stat-box">
            <h6 className="stat-heading">Total Hours Spent</h6>
            <p className="stat-container-p">100hrs</p>
          </div>
          <div className="stat-box">
            <h6 className="stat-heading">Ongoing Courses</h6>
            <p className="stat-container-p">3</p>
          </div>
          <div className="stat-box">
            <h6 className="stat-heading">Upcoming Courses</h6>
            <p className="stat-container-p">50</p>
          </div>
          <div className="stat-box">
            <h6 className="stat-heading">Completed Courses</h6>
            <p className="stat-container-p">10</p>
          </div>
          <div className="stat-box">
            <h6 className="stat-heading">Learning Progress</h6>
            <p className="stat-container-p">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
