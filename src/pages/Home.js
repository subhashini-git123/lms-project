import React from 'react';
import './Home.css';
import Card from '../components/Card';

const Home = () => {
  const continueCourses = [
    {
      title: 'HTML and CSS Basics to Advanced Complete Course',
      tag: 'FrontEnd',
      duration: '2hrs',
      progress: 80,
    },
    {
      title: 'Node.js Basics to Advanced Complete Course',
      tag: 'Backend',
      duration: '2h48min',
      progress: 45,
    },
    {
      title: 'Node.js Basics to Advanced Complete Course',
      tag: 'Backend',
      duration: '2h48min',
      progress: 20,
    },
  ];

  const suggestedCourses = [
    { title: 'React Fundamentals', tag: 'Frontend', duration: '3hrs', lessons: 24 },
    { title: 'JavaScript Masterclass', tag: 'Frontend', duration: '4h30min', lessons: 36 },
        { title: 'Node.js Masterclass', tag: 'Backend', duration: '4h10min', lessons: 32 }
  ];

  const handlePlay = (courseTitle) => {
    alert(`Continuing the course: ${courseTitle}`);
  };

  return (
    <div className="home-container">
    
      {/* Continue Learning */}
      <h2>Continue Learning</h2>
      <div className="card-grid">
        {continueCourses.map((course, idx) => (
          <Card
            key={idx}
            courseTitle={course.title}
            tag={course.tag}
            timeLeft={course.duration}
            progress={course.progress}
            onPlay={() => handlePlay(course.title)}
          />
        ))}
      </div>

      {/* Suggested Courses */}
      <h2 className="section-title">Popular Courses / Suggested Courses</h2>
      <div className="card-grid">
        {suggestedCourses.map((course, idx) => (
          <Card
            key={idx}
            title={course.title}
            tag={course.tag}
            duration={course.duration}
            lessons={course.lessons}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;