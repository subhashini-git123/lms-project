import React, { createContext, useContext } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const continueCourses = [
    {
        title: "HTML and CSS Basics to Advanced Complete Course",
      tag: "Frontend",
      duration: "2hrs",
      progress: 45,
    },
    {
      title: "Node.js Basics to Advanced Complete Course",
      tag: "Backend",
      duration: "2h48min",
      progress: 45,
    },
    {
      title: "Node.js Basics to Advanced Complete Course",
      tag: "Backend",
      duration: "2h48min",
      progress: 20,
    },
    {
      title: "HTML and CSS Basics to Advanced Complete Course",
      tag: "Frontend",
      duration: "2h48min",
      progress: 20,
    },
  ];

  const suggestedCourses = [
    {
      title: "React Fundamentals",
      tag: "Frontend",
      duration: "3hrs",
      lessons: 24,
    },
    {
      title: "JavaScript Masterclass",
      tag: "Frontend",
      duration: "4h30min",
      lessons: 36,
    },
    {
      title: "Node.js Masterclass",
      tag: "Backend",
      duration: "4h10min",
      lessons: 32,
    },
    {
      title: "Node.js Masterclass",
      tag: "Backend",
      duration: "4h10min",
      lessons: 32,
    },
    {
      title: "Node.js Masterclass",
      tag: "Backend",
      duration: "4h10min",
      lessons: 32,
    },
    {
      title: "Node.js Masterclass",
      tag: "Backend",
      duration: "4h10min",
      lessons: 32,
    },
  ];

  return (
    <CourseContext.Provider value={{ continueCourses, suggestedCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
