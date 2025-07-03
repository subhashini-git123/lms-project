import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import Sidebar from "../components/Sidebar";
import "./Schedule.css";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const Navigate = useNavigate();


  const handleScheduleStartButton = () =>{
    Navigate('/courses/0')
  }

 
  const scheduleData = {
    "01/07/2025": [
      { title: "Frontend Course", duration: "2h 30m", due: "01/07/2025" },
      { title: "React Deep Dive", duration: "2h 40m", due: "01/07/2025" },
      { title: "UI Workshop", duration: "2h 45m", due: "01/07/2025" },
    ],
  };


  const handleDotClick = (formattedDate, e) => {
    e.stopPropagation();
    setSelectedDate(formattedDate);
  };


  const dateTemplate = (date) => {
    const formatted =
      date.day.toString().padStart(2, "0") +
      "/" +
      (date.month + 1).toString().padStart(2, "0") +
      "/" +
      date.year;

    const isScheduled = scheduleData[formatted];

    return (
      <div className="custom-date-cell">
        {date.day}
        {isScheduled && (
          <div
            className="red-dot"
            title="Click to view"
            onClick={(e) => handleDotClick(formatted, e)}
          ></div>
        )}
      </div>
    );
  };

  return (
    <div className="schedule-container">
      <Sidebar />
      <div className="calendar-container">

      <div className="calendar-panel">
        <Calendar inline dateTemplate={dateTemplate} showWeek={false} />
      </div>

     
      {selectedDate && (
        <div className="details-panel">
          <div className="panel-header">
            <h4>{selectedDate}</h4>
            <button className="close-btn" onClick={() => setSelectedDate(null)}>
              ✕
            </button>
          </div>

          {scheduleData[selectedDate].map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-top">
                <strong>{course.title}</strong>
                <button className="start-btn" onClick={handleScheduleStartButton}>Start</button>
              </div>
              <div className="course-bottom">
                <span>{course.duration}</span>
                <span className="due-date">Due: {course.due}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Schedule;
