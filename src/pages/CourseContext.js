import React, { createContext, useContext } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const continueCourses = [
      {
      title: "ReactJs for Beginners",
      tag: "Frontend",
      duration: "3h20min",
      progress: 70,
        title: "HTML and CSS Basics to Advanced Complete Course",
      tag: "Frontend",
      duration: "2hrs",
      progress: 45,
    },
    {
      title: "Python for Beginners",
      tag: "Backend",
      duration: "3h20min",
      progress: 25,
    },
    {
      title: "Advanced JavaScript Techniques",
      tag: "Frontend",
      duration: "4h10min",
      progress: 55,
    },
    {
      title: "Fullstack Development",
      tag: "Backend",
      duration: "5h15min",
      progress: 20,
    },
    {
      title: "Introduction to TypeScript",
      tag: "Frontend",
      duration: "2h45min",
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
      title: "Go Language Crash Course",
      tag: "Backend",
      duration: "3h40min",
      lessons: 28,
    },
    {
      title: "Swift Programming for iOS",
      tag: "Mobile",
      duration: "4h00min",
      lessons: 30,
    },
    {
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
