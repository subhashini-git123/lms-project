// import React from "react";
// import "./SearchBar.css";
// import { IoSearchSharp } from "react-icons/io5";

// const SearchBar = () => {
//   return (
//     <div className="search-container">
//       <IoSearchSharp className="search-icon" />
//       <input type="text" placeholder="Search Courses" />
//     </div>
//   );
// };

// export default SearchBar;

import React from "react";
import "./SearchBar.css";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-wrapper">
      <IoSearchSharp className="search-icon" />
      <input
        type="text"
        placeholder="Search courses by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
