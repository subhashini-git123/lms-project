import React from "react";
import "./Card.css";
import { IoPlayOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
const Card = ({
  courseTitle,
  tag,
  timeLeft,
  progress,
  onPlay,
  title,
  duration,
  category,
  lessons,
   hideFooter = false, 
}) => {
  const isLearningCard = courseTitle !== undefined;
  const isFeaturedCard = category !== undefined;
  const isSuggestedCourse = !isLearningCard && !isFeaturedCard;

  return (
    <div className="card">
      <div className="card-banner" />

      {/* Continue Learning Cards */}
      {isLearningCard && (
        <>
          <div className="card-tag">{tag}</div>
          <h3 className="card-title">{courseTitle}</h3>
          {progress !== undefined && (
            <div className="card-progress-bar">
              <div className="card-progress" style={{ width: `${progress}%` }}></div>
            </div>
          )}
 {!hideFooter && (
          <div className="card-footer">

<span className="card-time">
<FiClock style={{ marginRight: '6px' }} />
  {timeLeft} left
</span>
<button className="card-play-btn" onClick={onPlay}>
<IoPlayOutline className="playbutton" />
</button>
</div>
 )}
        </>
      )}

      {/* Suggested/Popular Courses */}
      {isSuggestedCourse && (
        <>
          <div className="card-tag">{tag}</div>
          <h3 className="card-title">{title}</h3>
          <div className="card-footer space-between">
            <span>{lessons} Lessons</span>
            <span>{duration}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;