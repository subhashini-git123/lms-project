
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Card.css";
// import { IoPlayOutline } from "react-icons/io5";
// import { FiClock } from "react-icons/fi";

// const Card = ({
//   courseTitle,
//   tag,
//   timeLeft,
//   progress,
//   title,
//   duration,
//   lessons,
//   courseId,
//   hideFooter = false,
// }) => {
//   const isLearningCard = courseTitle !== undefined;
//   const coursePath = courseId ? `/courses/${courseId}` : "#";

//   return (
//     <Link to={coursePath} className="card-link" style={{ textDecoration: "none" }}>
//       <div className="card">
//         <div className="card-banner" />
//         <div className="card-tag">{tag}</div>

//         {isLearningCard ? (
//           <>
//             <h3 className="card-title">{courseTitle}</h3>
//             {progress !== undefined && (
//               <div className="card-progress-bar">
//                 <div className="card-progress" style={{ width: `${progress}%` }}></div>
//               </div>
//             )}
//             {!hideFooter && (
//               <div className="card-footer">
//                 <span className="card-time">
//                   <FiClock style={{ marginRight: "6px" }} />
//                   {timeLeft} left
//                 </span>
//                 <button className="card-play-btn">
//                   <IoPlayOutline className="playbutton" />
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <>
//             <h3 className="card-title">{title}</h3>
//             <div className="card-footer space-between">
//               <span>{lessons} Lessons</span>
//               <span>{duration}</span>
//             </div>
//           </>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default Card;
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { IoPlayOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { PiBookOpenTextLight } from "react-icons/pi";

const Card = ({
  courseTitle,
  tag,
  timeLeft,
  progress,
  title,
  duration,
  lessons,
  courseId,
  hideFooter = false,
}) => {
  const isLearningCard = courseTitle !== undefined;
  const isSuggestedCourse = !isLearningCard;
  const coursePath = courseId ? `/courses/${courseId}` : "#";

  return (
    <Link to={coursePath} className="card-link" style={{ textDecoration: "none", color:"gray" }}>
      <div className="card">
        <div className="card-banner" />

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
                  <FiClock style={{ marginRight: "6px" }} />
                  {timeLeft} left
                </span>
                <button className="card-play-btn">
                  <IoPlayOutline className="playbutton" />
                </button>
              </div>
            )}
          </>
        )}

       {isSuggestedCourse && (
  <>
    <div className="card-tag">{tag}</div>
    <h3 className="card-title">{title}</h3>
    <div className="card-footer space-between">
      <span>
        <PiBookOpenTextLight style={{ marginRight: "6px", verticalAlign: "middle" }} />
        {lessons} Lessons
      </span>
      <span>
        <FiClock style={{ marginRight: "6px", verticalAlign: "middle" }} />
        {duration}
      </span>
    </div>
  </>
)}

      </div>
    </Link>
  );
};

export default Card;
