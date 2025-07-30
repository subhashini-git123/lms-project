import React from "react";
import "./SearchBar.css";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ value, onChange }) => {
  return (
    // <div className="search-bar-wrapper">
    //   <IoSearchSharp className="search-icon" />
    //   <input
    //     type="text"
    //     placeholder="Search courses by title..."
    //     value={value}
    //     onChange={(e) => onChange(e.target.value)}
    //     className="search-input"
    //   />
    // </div>
    <div className="search-wrapper">
  <input
    type="text"
    className="search-input"
    placeholder="Search..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
  <span className="search-icon">
    <IoSearchSharp />
  </span>
</div>

  );
};

export default SearchBar;
