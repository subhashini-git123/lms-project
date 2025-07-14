import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCourses } from "./CourseContext";
import "./CourseDetail.css";
import { FaPlay } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { RxClock } from "react-icons/rx";
import { BsWatch, BsSliders } from "react-icons/bs";
import Toggle from "../components/Toggle";

const CourseDetail = () => {
  const { id } = useParams();
  const { suggestedCourses } = useCourses();
  const [activeTab, setActiveTab] = useState("overview");

  const course = suggestedCourses[id];
  if (!course)
    return <div className="course-detail-container">Course not found.</div>;

  const handleVideoRedirect = () => {
    window.open("https://www.youtube.com/watch?v=bMknfKXIFA8", "_blank");
  };

  return (
    <div className="course-detail-container">
      <div className="course-header">
        <Toggle />
        <h2>{course.title}</h2>
        <p className="subtitle">
          Master {course.title} to create Web Applications & go from basic to advanced
        </p>
        <p className="updated-date">Last Update January 24, 2025</p>
      </div>

      <div className="course-body">
        <div className="course-tabs">
          <div className="tabs">
            {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <div>
                <h4>Course Overview</h4>
                <p>
                  This course provides a comprehensive introduction to {course.title}, 
                  covering fundamental concepts and practical applications. You will learn how 
                  to build modern web applications using industry-standard tools and techniques. 
                  By the end of this course, you'll have a solid understanding of core principles and best practices.
                </p>
                <p>
                  Whether you’re a beginner or looking to refresh your skills, this course is designed 
                  to guide you step-by-step through the learning process with real-world examples and projects.
                </p>
              </div>
            )}
            {activeTab === "curriculum" && (
              <div>
                <h4>Curriculum</h4>
                <ul>
                  <li>Introduction and Setup</li>
                  <li>Core Concepts and Syntax</li>
                  <li>Building Components</li>
                  <li>State Management and Hooks</li>
                  <li>Routing and Navigation</li>
                  <li>Working with APIs</li>
                  <li>Testing and Debugging</li>
                  <li>Deployment and Best Practices</li>
                </ul>
              </div>
            )}
            {activeTab === "instructor" && (
              <div>
                <h4>Instructor</h4>
                <p>
                  Jane Doe is a senior software engineer with over 10 years of experience in web development.
                  She specializes in React and JavaScript and has a passion for teaching and mentoring aspiring developers.
                </p>
                <p>
                  Jane has worked with several top tech companies and has contributed to open source projects, 
                  making her an expert in modern frontend development.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h4>Student Reviews</h4>
                <p><strong>John S.</strong> - "This course was exactly what I needed to get started with React. Clear explanations and great examples!"</p>
                <p><strong>Maria K.</strong> - "Highly recommend! The curriculum is well structured and the instructor is very knowledgeable."</p>
                <p><strong>Alex P.</strong> - "I appreciated the hands-on projects and practical approach. Helped me build confidence."</p>
              </div>
            )}
          </div>
        </div>

        <div className="course-sidebar">
          <div className="thumbnail" onClick={handleVideoRedirect}>
            <div className="play-button">
              <FaPlay />
            </div>
          </div>

          <button className="start-button" onClick={handleVideoRedirect}>
            Start now
          </button>

          <ul className="course-info-list">
            <li>
              <GoBook /> <strong>Duration</strong> <span>{course.duration}</span>
            </li>
            <li>
              <RxClock /> <strong>Lectures</strong> <span>{course.lessons}</span>
            </li>
            <li>
              <BsWatch /> <strong>Skill Level</strong> <span>Beginner</span>
            </li>
            <li>
              <BsSliders /> <strong>Deadline</strong> <span>4 March 2025</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
