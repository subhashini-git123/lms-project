import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import profile from "../assets/profile.png";

import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { useCourses } from "../pages/CourseContext";
import "./Dashboard.css";

const Dashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const continueRef = useRef(null);
  const suggestedRef = useRef(null);

  const { continueCourses, suggestedCourses } = useCourses();

  const handleProfile = () => {
    navigate("/profile");
  };
  const handleLogout = () => {
      navigate("/");
  }

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const normalizedQuery = searchQuery.toLowerCase();

  const filteredContinue = continueCourses.filter((course) =>
    course.title?.toLowerCase().includes(normalizedQuery)
  );

  const filteredSuggested = suggestedCourses.filter((course) =>
    course.title.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <img
          src={profile}
          alt="profile"
          className="profile-icon"
          onClick={() => setShowProfile(true)}
        />
        {showProfile && (
          <div className="profile-slideout open">
            <button className="close-btn" onClick={() => setShowProfile(false)}>
              &times;
            </button>
            <div className="slideout-content">
              <img src={profile} alt="profile" className="profile-logo" />
              <p className="profile-name">John Doe</p>
              <p>Junior</p>
              <p>Software Developer</p>
              <button className="profile-btn" onClick={handleProfile}>
                Edit Profile
              </button>
              <button className="profile-btn logout" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}

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

        <div className="section-header">
          <h2>Continue Learning</h2>
          <div className="scroll-buttons">
            <button onClick={() => scroll(continueRef, "left")}>
              <IoArrowBackCircleOutline />
            </button>
            <button onClick={() => scroll(continueRef, "right")}>
              <IoArrowForwardCircleOutline />
            </button>
          </div>
        </div>

        <div className="card-carousel" ref={continueRef}>
          {filteredContinue.length > 0 ? (
            filteredContinue.map((course) => (
              <Card
                key={course.id}
                courseId={course.id} 
                courseTitle={course.title}
                tag={course.tag}
                timeLeft={course.duration}
                progress={course.progress}
              />
            ))
          ) : (
            <p className="no-results">No matching courses found.</p>
          )}
        </div>

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
          {filteredSuggested.length > 0 ? (
            filteredSuggested.map((course) => (
              <Card
                key={course.id}
                courseId={course.id}
                title={course.title}
                tag={course.tag}
                duration={course.duration}
                lessons={course.lessons}
              />
            ))
          ) : (
            <p className="no-results">No matching courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
