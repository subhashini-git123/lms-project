import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Toggle.css";

const Toggle = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="toggle-layout">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      {isSidebarOpen && <Sidebar onClose={toggleSidebar} showClose />}

      <div className="toggle-content">{children}</div>
    </div>
  );
};
export default Toggle;






















// // import React, { useState } from "react";
// // import Sidebar from "./Sidebar";
// // import "./Toggle.css";

// // const Toggle = ({ children }) => {
// //   const [isSidebarOpen, setSidebarOpen] = useState(false);

// //   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

// //   return (
// //     <div className="toggle-layout">
// //       <button className="hamburger" onClick={toggleSidebar}>
// //         ☰
// //       </button>

// //       {isSidebarOpen && <Sidebar onClose={toggleSidebar} showClose={true} className="open" />}

// //       <div className="toggle-content">{children}</div>
// //     </div>
// //   );
// // };

// // export default Toggle;
