import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../pages/CourseContext";
import "./TaskTracker.css";
import { IoPersonSharp } from "react-icons/io5";
import Card from "../components/Card";
import Toggle from "../components/Toggle";
const TaskTracker = () => {
  const { continueCourses, suggestedCourses } = useCourses(); 
  const [activeTab, setActiveTab] = useState("completed","inprogress");   

  return (
    <div className="task-tracker">
 
      {/* Trainee Info */}
      <div className="trainee-card">
       <Toggle/>
        <div>
          <IoPersonSharp className="trainee-photo" />
        </div>
        <div className="trainee-info">
          <h2>Trainee Name</h2>
          <p>Employee Id</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="layout-border">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </div>
        <div
          className={`tab ${activeTab === "inprogress" ? "active" : ""}`}
          onClick={() => setActiveTab("inprogress")}
        >
          In Progress
        </div>
      </div>

      {/* Conditional Rendering Based on Active Tab */}
    {activeTab === "completed" && (
        <div className="tracker-container">
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
                  hideFooter={true} 
              />

            </Link>
          ))}
        </div>
      )}

      {activeTab === "inprogress" && (
        <div className="tracker-container">
          {continueCourses.map((course, index) => (
            <Link
              to={`/courses/${index}`}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                tag={course.tag}
                courseTitle={course.title}
                progress={course.progress}
                  hideFooter={true} 
              />
            </Link>
          ))}
        </div>
      )}

  </div>
    </div>
  );
};

export default TaskTracker;
