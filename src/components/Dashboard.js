import React from "react";
import "./Dashboard.css";
import { IoSearchSharp } from "react-icons/io5";

 
const Dashboard = () => {

 
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">☰</div>
        <h3>Learning Management System</h3>
        <ul>
          <li>Dashboard</li>
          <li>Lead Assigning</li>
          <li>Schedule</li>
          <li>Courses</li>
          <li>Task Tracker</li>
          <li>Forum / Chat</li>
          <li className="bottom">Settings</li>
        </ul>
      </div>
 
      {/* Main content */}
      <div className="main">
        {/* Header */}
        <div className="header">
          <input type="text" placeholder="Search Courses"  />
            <IoSearchSharp />
  
          {/* <div className="profile-circle"></div> */}
        </div>
 
        {/* Dashboard Stats */}
     <div className="stats-container">
  <div className="stat-box">
    <h4>Total Hours Spent</h4>
    <p>100hrs</p>
  </div>

  <div className="stat-box">
    <h4>Ongoing Courses</h4>
    <p>3</p>
  </div>

  <div className="stat-box">
    <h4>Upcoming Courses</h4>
    <p>50</p>
  </div>

  <div className="stat-box">
    <h4>Completed Courses</h4>
    <p>10</p>
  </div>

  <div className="stat-box">
    <h4>Learning Progress</h4>
    <p>75%</p>
  </div>
</div>

      </div>
    </div>
  );
};
 
export default Dashboard;
