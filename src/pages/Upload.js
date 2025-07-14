import React, { useState } from "react";
import "./Upload.css";
import Sidebar from "../components/Sidebar";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="upload-sidebar-container">
      <Sidebar />
      <div className="upload-container">
        <h2>Course Upload</h2>

        <div className="form-section">
          <div className="left-column">
            <label>Course Title</label>
            <input type="text" placeholder="Enter title" />

            <label>Course Description</label>
            <textarea placeholder="Enter description"></textarea>

            <label>Domain</label>
            <select>
              <option>Select domain</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>ML/Datascience</option>
              <option>Mobile Development</option>
            </select>

            <label>Skill Type</label>
            <select>
              <option>Select skill type</option>
              <option>Soft Skills</option>
              <option>Hard Skills</option>
            </select>

            <label>Content Type</label>
            <select>
              <option>Select content type</option>
              <option>Article</option>
              <option>URL/External link</option>
              <option>Video</option>
              <option>Document</option>
            </select>
          </div>

          <div className="right-column">
            <label>Course Duration (in Hrs)</label>
            <input type="text" placeholder="e.g., 10" />

            <label>File Upload (PDF, Docs)</label>
            <div className="file-upload-wrapper">
              <input
                type="text"
                className="file-display"
                value={selectedFile ? selectedFile.name : ""}
                placeholder="No file selected"
                readOnly
              />
              <button
                type="button"
                className="choose-file-btn"
                onClick={triggerFileInput}
              >
                Choose File
              </button>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
              />
            </div>

            <label>Article or PDF Link / External Link</label>
            <input type="text" placeholder="URL:" />

            <label>Course Curriculum</label>
            <div className="curriculum-box">
              <input type="text" placeholder="Section Title" />
              <input type="text" placeholder="Section Duration" />
              <input type="text" placeholder="Section course" />
            
            </div>
              <button className="add-button">Add Section</button>
          </div>
        </div>

        <button className="upload-button">Upload Course</button>
      </div>
    </div>
  );
};

export default Upload;
