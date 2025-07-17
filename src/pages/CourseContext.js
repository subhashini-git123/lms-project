import React, { createContext, useContext } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const continueCourses = [
    {
      id: "HTML and CSS Basics to Advanced Complete Course",
      title: "HTML and CSS Basics to Advanced Complete Course",
      tag: "Frontend",
      duration: "3h20min",
      progress: 70,
    },
    {
      id: "python-beginners",
      title: "Python for Beginners",
      tag: "Backend",
      duration: "3h20min",
      progress: 25,
    },
    {
      id: "advanced-js",
      title: "Advanced JavaScript Techniques",
      tag: "Frontend",
      duration: "4h10min",
      progress: 55,
    },
    {
      id: "fullstack-dev",
      title: "Fullstack Development",
      tag: "Backend",
      duration: "5h15min",
      progress: 20,
    },
    {
      id: "typescript-intro",
      title: "Introduction to TypeScript",
      tag: "Frontend",
      duration: "2h45min",
      progress: 20,
    },
  ];

  const suggestedCourses = [
    {
      id: "HTML and CSS Basics to Advanced Complete Course",
      title: "HTML and CSS Basics to Advanced Complete Course",
      tag: "Frontend",
      duration: "3hrs",
      lessons: 24,
    },
    {
      id: "js-masterclass",
      title: "JavaScript Masterclass",
      tag: "Frontend",
      duration: "4h30min",
      lessons: 36,
    },
    {
      id: "node-masterclass",
      title: "Node.js Masterclass",
      tag: "Backend",
      duration: "4h10min",
      lessons: 32,
    },
    {
      id: "go-crash-course",
      title: "Go Language Crash Course",
      tag: "Backend",
      duration: "3h40min",
      lessons: 28,
    },
    {
      id: "swift-ios",
      title: "Swift Programming for iOS",
      tag: "Mobile",
      duration: "4h00min",
      lessons: 30,
    },
    {
      id: "kotlin-android",
      title: "Kotlin for Android Development",
      tag: "Mobile",
      duration: "3h50min",
      lessons: 26,
    },
  ];

  return (
    <CourseContext.Provider value={{ continueCourses, suggestedCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
