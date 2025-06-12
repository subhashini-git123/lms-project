import React from "react";
import { Link } from "react-router-dom";




function ForgotPassword() {
  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
 
      <label>Enter your email</label>
      <input type="email" placeholder="Enter your email" />
 
      <label>Password</label>
      <input type="password" placeholder="Enter new password" />
 
      <button className="login-button">Send Mail</button>
 
      <div className="back-link">
        <Link to="/">← Back to Login</Link>
       
      </div>
      <div> <Link to="/set-password">Go to Set Password</Link></div>
    </div>
  );
}
 
export default ForgotPassword;
