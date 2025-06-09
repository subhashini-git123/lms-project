import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import '../App.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    // Simple dummy validation
    if (email === 'test@example.com' && password === '123456') {
      alert('Login successful!');
      setErrorMessage('');
      navigate('/'); // redirect after login
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div>
      <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleLogin={handleLogin}
      />
    </div>
  );
}