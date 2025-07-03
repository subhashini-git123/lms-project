// import React, { useState } from "react";
// import { useCourses } from "./CourseContext";
// import "./TaskTracker.css";
// import { BsPersonSquare } from "react-icons/bs";
// const TaskTracker = () => {
//   const { continueCourses } = useCourses();
//   const [activeTab, setActiveTab] = useState("Completed");

//   return (
//     <div className="task-tracker">
//       <div className="trainee-card">
// <div ><BsPersonSquare />   </div>
//         <div className="trainee-info">
//           <h2>Trainee Name</h2>
//           <p>Employee Id</p>
//         </div>
//       </div>

//       <div className="tabs">
//         <button
//           className={activeTab === "Completed" ? "active" : ""}
//           onClick={() => setActiveTab("Completed")}
//         >
//           Completed
//         </button>
//         <button
//           className={activeTab === "InProgress" ? "active" : ""}
//           onClick={() => setActiveTab("InProgress")}
//         >
//           InProgress
//         </button>
//       </div>

//       <div className="course-grid">
//         {continueCourses.map((course, index) => (
//           <div key={index} className="course-card">
//             <div className="thumbnail" />
//             <div className="course-info">
//               <h4>{course.title}</h4>
//               <p>{course.lessons || "43 lessons"} &nbsp; | &nbsp; {course.duration}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TaskTracker;

/****************************************** */


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCourses } from "./CourseContext";
// import "./TaskTracker.css";
// import { IoPersonSharp } from "react-icons/io5";
// import Card from "../components/Card";
// const TaskTracker = () => {
//   const { continueCourses } = useCourses();
//   const [activeTab, setActiveTab] = useState("Completed","inprogress");
//  const suggestedCourses = [
//   { title: "React Basics", tag: "Frontend", lessons: 10, duration: "2h" },
//   { title: "Advanced CSS",  tag: "Frontend", lessons: 8, duration: "1.5h" },
//   { title: "Node.js Masterclass", tag: "Backend", lessons: 32, duration: "4h10min"},
//     { title: "Node.js Masterclass", tag: "Backend", lessons: 32, duration: "4h10min"},
//       { title: "Node.js Masterclass", tag: "Backend", lessons: 32, duration: "4h10min"},
// ];


//   return (
//     <div className="task-tracker">
//       <div className="trainee-card">
//         <div>
//           <IoPersonSharp  className="trainee-photo" /> {/* updated icon */}
//         </div>
//         <div className="trainee-info">
//           <h2>Trainee Name</h2>
//           <p>Employee Id</p>
//         </div>
//       </div>

//        <div className="tabs">
//             <div
//               className={`tab ${activeTab === "completed" ? "active" : ""}`}
//               onClick={() => setActiveTab("completed")}
//             >
//               Completed
//             </div>
//             <div
//               className={`tab ${activeTab === "inprogress" ? "active" : ""}`}
//               onClick={() => setActiveTab("inprogress")}
//             >
//               InProgress
//             </div>
         
//           </div>

//  <div className="courses-container">
//           {suggestedCourses.map((course, index) => (
//             <Link
//               to={`/courses/${index}`}
//               key={index}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <Card
//                 tag={course.tag}
//                 title={course.title}
//                 duration={course.duration}
//                 lessons={course.lessons}
//               />
//             </Link>
//           ))}
//         </div>

//            <div className="courses-container">
//           {continueCourses.map((course, index) => (
//             <Link
//               to={`/courses/${index}`}
//               key={index}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <Card
//                 tag={course.tag}
//                 title={course.title}
//                 duration={course.duration}
//                 progress={course.progress}
//               />
//             </Link>
//           ))}
//         </div>


      
//     </div>
//   );
// };

// export default TaskTracker;

/****************************************** */


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../pages/CourseContext";
import "./TaskTracker.css";
import { IoPersonSharp } from "react-icons/io5";
import Card from "../components/Card";

const TaskTracker = () => {
  const { continueCourses, suggestedCourses } = useCourses(); 
  const [activeTab, setActiveTab] = useState("completed","inprogress");   

  return (
    <div className="task-tracker">
      {/* Trainee Info */}
      <div className="trainee-card">
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
