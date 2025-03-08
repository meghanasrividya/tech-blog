// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    try {
      const response = await axios.post('https://your-api.com/register', {
        name,
        email,
        password,
      });

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <RegisterContainer>
      <h2>Create an Account</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </RegisterContainer>
  );
};

// Styled components for styling
const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 8px;
  }
  input {
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  button {
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
  }
  button:hover {
    background-color: #0056b3;
  }
  p {
    text-align: center;
    margin-top: 10px;
  }
  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

export default Register;
