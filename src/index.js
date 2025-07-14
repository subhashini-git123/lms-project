import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // This is already your app component
import { CourseProvider } from "./pages/CourseContext"; // path might vary

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CourseProvider>
      <App />
    </CourseProvider>
  </React.StrictMode>
);
