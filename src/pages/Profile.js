import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    department1: "",
    designation: "",
    department2: "",
  });
  const handleProfileCloseBtn = () => {
    navigate("/dashboard");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-title">Profile</h2>
        <button className="close-btn-profile" onClick={handleProfileCloseBtn}>
          {" "}
          &times;
        </button>
      </div>

      <div className="image-upload">
        <div className="profile-pic">
          {profilePic ? (
            <img src={profilePic} alt="Profile" />
          ) : (
            <div className="placeholder" />
          )}
        </div>
        <label htmlFor="upload" className="upload-btn">
          Upload Profile Photo
        </label>
        <input
          id="upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
    <form className="profile-form" onSubmit={handleSubmit}>
  <div className="form-columns">
    {/* Left Column */}
    <div className="form-column">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Designation/Role</label>
      <input
        type="text"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
      />
    </div>

    {/* Right Column */}
    <div className="form-column">
      <label>Department</label>
      <input
        type="text"
        name="department1"
        value={formData.department1}
        onChange={handleChange}
      />

      <label>Department</label>
      <input
        type="text"
        name="department2"
        value={formData.department2}
        onChange={handleChange}
      />
    </div>
  </div>

  <button type="submit" className="submit-btn">
    Submit
  </button>
</form>


    </div>
  );
};

export default Profile;
