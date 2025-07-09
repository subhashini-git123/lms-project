// import React from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import SearchBar from "../components/SearchBar";
// import "./Courses.css";
// import Card from "../components/Card";
// import { useCourses } from "../pages/CourseContext";

// const Courses = () => {
//   const { suggestedCourses } = useCourses();
//  const { continueCourses } = useCourses(); 

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <SearchBar />
//         <div className="courses-container">
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
//                 lessons={course.lessons}
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import "./Courses.css";
import Card from "../components/Card";
import { useCourses } from "../pages/CourseContext";

const Courses = () => {
  const { suggestedCourses, continueCourses } = useCourses();
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.toLowerCase();

  const filteredSuggested = suggestedCourses.filter((course) =>
    course.title.toLowerCase().includes(normalizedQuery)
  );

  const filteredContinue = continueCourses.filter((course) =>
    course.title?.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <div className="courses-container">
          {filteredSuggested.map((course, index) => (
            <Link
              to={`/courses/${index}`}
              key={`suggested-${index}`}
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

          {filteredContinue.map((course, index) => (
            <Link
              to={`/courses/${index}`}
              key={`continue-${index}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                tag={course.tag}
                courseTitle={course.title}
                duration={course.duration}
                progress={course.progress}
              />
            </Link>
          ))}

          {filteredSuggested.length === 0 && filteredContinue.length === 0 && (
            <p style={{ marginTop: "20px" }}>No matching courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
