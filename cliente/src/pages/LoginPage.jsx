import '../styles/LoginPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/loginApi';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser(username, password);
      navigate('/add-monstruo');  
    } catch (error) {
      console.error('Error logging in: ', error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;
