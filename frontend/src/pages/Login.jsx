// src/pages/Login.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login functionality with your API
    console.log({ email, password });
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
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
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export default Login;
