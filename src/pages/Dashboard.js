import React, { useState, useRef } from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp, IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import Card from "../components/Card";
import { useCourses } from "../pages/CourseContext";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const continueRef = useRef(null);
  const suggestedRef = useRef(null);

  const { continueCourses, suggestedCourses } = useCourses();

  const handleProfile = () => {
    navigate("/profile");
  };

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handlePlay = (title) => {
    alert(`Continuing the course: ${title}`);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-circle"></div>
        <h3>Learning Management System</h3>
        <ul>
          <li >
            <Link to="/dashboard" className="sidebar-heading">Dashboard</Link>
          </li>
          <li >
            <Link to="/lead-assigning" className="sidebar-heading">Lead Assigning</Link>
          </li>
          <li>
            <Link to="/schedule " className="sidebar-heading">Schedule</Link>
          </li>
          <li >
            <Link to="/courses" className="sidebar-heading">Courses</Link>
          </li>
          <li>
            <Link to="/task-tracker" className="sidebar-heading">Task Tracker</Link>
          </li>
          <li>
            <Link to="/forum-chat" className="sidebar-heading">Forum / Chat</Link>
          </li>
          <li className="bottom">
            <Link to="/settings" className="sidebar-heading">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Top Header */}
        <div className="header">
          <input type="text" placeholder="Search Courses" />
          <IoSearchSharp className="search-icon" />
          <div className="profile-circle" onClick={() => setShowSidebar(true)}></div>
        </div>

        {/* Slideout Sidebar */}
        <div className={`profile-slideout ${showSidebar ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setShowSidebar(false)}>
            &times;
          </button>
          <div className="slideout-content">
            <div className="profile-circle large"></div>
            <p className="profile-name">John Doe</p>
            <p>Junior</p>
            <p>Software Developer</p>
            <button className="profile-btn" onClick={handleProfile}>
              Edit Profile
            </button>
            <button className="profile-btn logout">Logout</button>
          </div>
        </div>

        {/* Stats Section */}
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

        {/* Continue Learning Section */}

        <div className="section-header">
  <h2>Continue Learning</h2>
  <div className="scroll-buttons">
    <button onClick={() => scroll(continueRef, 'left')}>
      <IoArrowBackCircleOutline />
    </button>
    <button onClick={() => scroll(continueRef, 'right')}>
      <IoArrowForwardCircleOutline />
    </button>
  </div>
</div>

        <div className="card-carousel" ref={continueRef}>
          {continueCourses.map((course, idx) => (
            <Card
              key={idx}
              courseTitle={course.title}
              tag={course.tag}
              timeLeft={course.duration}
              progress={course.progress}
              onPlay={() => handlePlay(course.title)}
            />
          ))}
        </div>

        {/* Suggested Courses Section */}
        <div className="section-header">
          <h2>Popular / Suggested Courses</h2>
          <div className="scroll-buttons">
            <button onClick={() => scroll(suggestedRef, "left")}>
              <IoArrowBackCircleOutline />
            </button>
            <button onClick={() => scroll(suggestedRef, "right")}>
              <IoArrowForwardCircleOutline />
            </button>
          </div>
        </div>
        <div className="card-carousel" ref={suggestedRef}>
          {suggestedCourses.map((course, idx) => (
            <Card
              key={idx}
              title={course.title}
              tag={course.tag}
              duration={course.duration}
              lessons={course.lessons}
            />
          ))}
        </div>
      </div>
    </div>  
  );
  
};

export default Dashboard;