import React, { useState } from 'react';
import './LeadAssigning.css';
import Sidebar from '../components/Sidebar';


const LeadAssigning = () => {
  const [formData, setFormData] = useState({
    Trainee: '',
    Department: '',
    Manager: '',
    Trainer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Assigned Data:', formData);
  };

  return (
    <div className="lead-container">
      <Sidebar />
      <div className="lead-main-content">
        <div className="lead-form-container">
          <h3 className="lead-heading">Manager / Lead Assigning</h3>
          <form onSubmit={handleSubmit}>
            <div className="lead-row">
              <div className="lead-field">
                <label>Trainee</label>
                <select name="Trainee" value={formData.Trainee} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Trainee1">Trainee 1</option>
                  <option value="Trainee2">Trainee 2</option>
                </select>
              </div>
              <div className="lead-field">
                <label>Department</label>
                <select name="Department" value={formData.Department} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Development">Development</option>
                  <option value="HR">HR</option>
                </select>
              </div>
            </div>
            <div className="lead-row">
              <div className="lead-field">
                <label>Manager / Lead</label>
                <select name="Manager" value={formData.Manager} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Manager1">Manager 1</option>
                  <option value="Manager2">Manager 2</option>
                </select>
              </div>
              <div className="lead-field">
                <label>Trainer</label>
                <select name="Trainer" value={formData.Trainer} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Trainer1">Trainer 1</option>
                  <option value="Trainer2">Trainer 2</option>
                </select>
              </div>
            </div>
            <div className="lead-button">
              <button type="submit">Assign</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadAssigning;
