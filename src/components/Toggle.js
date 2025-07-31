import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Toggle.css";

const Toggle = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="toggle-layout">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      {isSidebarOpen && (
        <div className="sidebar-wrapper">
          <Sidebar onClose={closeSidebar} showClose />
          <button className="close-button" onClick={closeSidebar}>
            ×
          </button>
        </div>
      )}

      <div className="toggle-content">{children}</div>
    </div>
  );
};

export default Toggle;
