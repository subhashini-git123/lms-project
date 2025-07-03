import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCourses } from "./CourseContext";
import "./CourseDetail.css";
import { FaPlay } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { RxClock } from "react-icons/rx";
import { BsWatch } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import Toggle from '../components/Toggle'
const CourseDetail = () => {
  const { id } = useParams();
  const { suggestedCourses } = useCourses();
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const course = suggestedCourses[id];
  if (!course)
    return <div className="course-detail-container">Course not found.</div>;

  return (
    <div className="course-detail-container">
       
      <div className="course-header">
        <Toggle/>
        <h2>{course.title}</h2>
        <p className="subtitle">
          Master {course.title} to create Web Applications & go from basic to
          advanced
        </p>
        <p className="updated-date">Last Update January 24, 2025</p>
      </div>

      <div className="course-body">
        <div className="course-tabs">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </div>
            <div
              className={`tab ${activeTab === "curriculum" ? "active" : ""}`}
              onClick={() => setActiveTab("curriculum")}
            >
              Curriculum
            </div>
            <div
              className={`tab ${activeTab === "instructor" ? "active" : ""}`}
              onClick={() => setActiveTab("instructor")}
            >
              Instructor
            </div>
            <div
              className={`tab ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </div>
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <div>
                <h4>Description</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            )}
            {activeTab === "curriculum" && (
              <div>
                <h4>Curriculum</h4>
                <p>Detailed breakdown of the syllabus goes here.</p>
              </div>
            )}
            {activeTab === "instructor" && (
              <div>
                <h4>Instructor</h4>
                <p>Information about the course instructor.</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h4>Reviews</h4>
                <p>User reviews and ratings will be shown here.</p>
              </div>
            )}
          </div>
        </div>

        <div className="course-sidebar">
          <div className="thumbnail">
            <div className="play-button">
              <FaPlay />
            </div>
          </div>

          <button
            className="start-button"
            onClick={() => navigate(`/course/${id}/start`)}
          >
            Start now
          </button>
          <ul className="course-info-list">
            <li>
              <GoBook /> <strong>Duration</strong>{" "}
              <span>{course.duration}</span>
            </li>
            <li>
              <RxClock /> <strong>Lectures</strong>{" "}
              <span>{course.lessons}</span>
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
