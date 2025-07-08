import React from "react";
import "./SearchBar.css";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="search-container">
      <IoSearchSharp className="search-icon" />
      <input type="text" placeholder="Search Courses" />
    </div>
  );
};

export default SearchBar;
