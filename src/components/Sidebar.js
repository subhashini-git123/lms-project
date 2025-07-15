// // import React from "react";
// // import { NavLink, useLocation } from "react-router-dom";
// // import "./Sidebar.css";
// // import logo from '../assets/logo.png';

// // const Sidebar = () => {
// //   const location = useLocation(); 

// //   return (
// //     <div className="sidebar">
// //     <img src={logo} alt="Logo" className="sidebar-logo" />
// //       <h3>Learning Management System</h3>
// //       <ul>
// //         <li className={location.pathname === "/dashboard" ? "active-li" : ""}>
// //           <NavLink to="/dashboard" className="sidebar-heading">
// //             Dashboard
// //           </NavLink>
// //         </li>
// //         <li className={location.pathname === "/lead-assigning" ? "active-li" : ""}>
// //           <NavLink to="/lead-assigning" className="sidebar-heading">
// //             Lead Assigning
// //           </NavLink>
// //         </li>
// //         <li className={location.pathname === "/schedule" ? "active-li" : ""}>
// //           <NavLink to="/schedule" className="sidebar-heading">
// //             Schedule
// //           </NavLink>
// //         </li>
// //         <li className={location.pathname === "/courses" ? "active-li" : ""}>
// //           <NavLink to="/courses" className="sidebar-heading">
// //             Courses
// //           </NavLink>
// //         </li>
// //         <li className={location.pathname === "/task-tracker" ? "active-li" : ""}>
// //           <NavLink to="/task-tracker" className="sidebar-heading">
// //             Task Tracker
// //           </NavLink>
// //         </li>
// //         <li className={location.pathname === "/forum-chat" ? "active-li" : ""}>
// //           <NavLink to="/forum-chat" className="sidebar-heading">
// //             Forum / Chat
// //           </NavLink>
// //         </li>
// //         <li className={location.pathname === "/upload" ? "active-li" : ""}>
// //           <NavLink to="/upload" className="sidebar-heading">
// //             Upload
// //           </NavLink>
// //         </li>
// //        <li className="bottom">
// //   <NavLink
// //     to="/settings"
// //     className={`sidebar-heading ${
// //       location.pathname === "/settings" ? "active-settings-text" : ""
// //     }`}
// //   >
// //     Settings
// //   </NavLink>
// // </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// // Sidebar.js
// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import "./Sidebar.css";
// import logo from "../assets/logo.png";

// const Sidebar = ({ onClose, showClose }) => {
//   const location = useLocation();

//   return (
//     <div className="sidebar">
//       {showClose && (
//         <button className="close-button" onClick={onClose}>
//           ×
//         </button>
//       )}

//       <img src={logo} alt="Logo" className="sidebar-logo" />
//       <h3>Learning Management System</h3>

//       <ul>
//         <li className={location.pathname === "/dashboard" ? "active-li" : ""}>
//           <NavLink to="/dashboard" className="sidebar-heading">
//             Dashboard
//           </NavLink>
//         </li>
//         <li className={location.pathname === "/lead-assigning" ? "active-li" : ""}>
//           <NavLink to="/lead-assigning" className="sidebar-heading">
//             Lead Assigning
//           </NavLink>
//         </li>
//         <li className={location.pathname === "/schedule" ? "active-li" : ""}>
//           <NavLink to="/schedule" className="sidebar-heading">
//             Schedule
//           </NavLink>
//         </li>
//         <li className={location.pathname === "/courses" ? "active-li" : ""}>
//           <NavLink to="/courses" className="sidebar-heading">
//             Courses
//           </NavLink>
//         </li>
//         <li className={location.pathname === "/task-tracker" ? "active-li" : ""}>
//           <NavLink to="/task-tracker" className="sidebar-heading">
//             Task Tracker
//           </NavLink>
//         </li>
//         <li className={location.pathname === "/forum-chat" ? "active-li" : ""}>
//           <NavLink to="/forum-chat" className="sidebar-heading">
//             Forum / Chat
//           </NavLink>
//         </li>
//         <li className={location.pathname === "/upload" ? "active-li" : ""}>
//           <NavLink to="/upload" className="sidebar-heading">
//             Upload
//           </NavLink>
//         </li>
//         <li className="bottom">
//           <NavLink
//             to="/settings"
//             className={`sidebar-heading ${
//               location.pathname === "/settings" ? "active-settings-text" : ""
//             }`}
//           >
//             Settings
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = ({ onClose, showClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to check active path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      {showClose && (
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      )}

      <img src={logo} alt="Logo" className="sidebar-logo" />
      <h3>Learning Management System</h3>

      <ul>
        <li className={isActive("/dashboard") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
        </li>
        <li className={isActive("/lead-assigning") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/lead-assigning")}>
            Lead Assigning
          </button>
        </li>
        <li className={isActive("/schedule") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/schedule")}>
            Schedule
          </button>
        </li>
        <li className={isActive("/courses") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/courses")}>
            Courses
          </button>
        </li>
        <li className={isActive("/task-tracker") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/task-tracker")}>
            Task Tracker
          </button>
        </li>
        <li className={isActive("/forum-chat") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/forum-chat")}>
            Forum / Chat
          </button>
        </li>
        <li className={isActive("/upload") ? "active-li" : ""}>
          <button className="sidebar-heading" onClick={() => navigate("/upload")}>
            Upload
          </button>
        </li>
        <li className="bottom">
          <button
            className={`sidebar-heading ${isActive("/settings") ? "active-settings-text" : ""}`}
            onClick={() => navigate("/settings")}
          >
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
