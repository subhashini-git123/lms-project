import React, { useState } from "react";
import Register from "../components/Register";
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';

const Home = () => {
    // Login states
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Forgot password states
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (pwd) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(pwd);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const roles = ["Admin / HR", "Manager", "Trainee/ Learner"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "password") setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password || !form.role) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(form.password)) {
      setPasswordError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    alert(
      `Registered successfully!\nUsername: ${form.username}\nEmail: ${form.email}\nRole: ${form.role}`
    );
    console.log("Form data:", form);

    setForm({ username: "", email: "", password: "", role: "" });
    setPasswordError("");
    if (!validateEmail(loginEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        'Password must be at least 8 characters, include an uppercase letter, a number, and a special character.'
      );
      return;
    }

    setErrorMessage('');
    alert('Login successful!');
    navigate('/');
  };

  const handleSendMail = (e) => {
    e.preventDefault();

    if (!validateEmail(forgotEmail)) {
      setForgotMessage('Please enter a valid email.');
      return;
    }

    if (!newPassword) {
      setForgotMessage('Please enter your new password.');
      return;
    }

    setForgotMessage(``);
    setForgotEmail('');
    setNewPassword('');
  };
 
  return (
    // <Register
    //   form={form}
    //   passwordError={passwordError}
    //   roles={roles}
    //   handleChange={handleChange}
    //   handleSubmit={handleSubmit}
    // />
    <Routes>
      <Route
        path="/"
        element={
          <Login
            email={loginEmail}
            setEmail={setLoginEmail}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
            onLogin={handleLogin}
          />
        }
      />
      <Route
        path="/forgot-password"
        element={
          <ForgotPassword
            email={forgotEmail}
            setEmail={setForgotEmail}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            message={forgotMessage}
            onSendMail={handleSendMail}
          />
        }
      />
    </Routes>
  );

};
  

export default Home;
