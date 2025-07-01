import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import "./Courses.css";
import Card from "../components/Card";
import { useCourses } from "../pages/CourseContext";

const Courses = () => {
  const { suggestedCourses } = useCourses();

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <SearchBar />
        <div className="courses-container">
          {suggestedCourses.map((course, index) => (
            <Link
              to={`/courses/${index}`}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                tag={course.tag}
                title={course.title}
                duration={course.duration}
                lessons={course.lessons}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
