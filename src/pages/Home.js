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

  const handleLogin = (e) => {
    e.preventDefault();

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
