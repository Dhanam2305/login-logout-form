// src/Login.js
import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login validation (in a real app, authenticate against a backend)
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <i className='fa fa-user' ></i>
        <label htmlFor="username">username</label>
          
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required placeholder='Enter the username'
          />
        </div>
        
        <div className="form-group">
        <i className='fa fa-lock'></i>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required placeholder='Enter the password'
          />
        </div>
        <div className='forget'>
          <label htmlFor='remember'>
            <input type='checkbox'id='remember'/>
            <p>Remember me</p>
          </label>
         <a href='#'>Forgot password?</a>   
          
            
        
        </div>
        <button type="submit">Login</button>
        <div className='register'>
          <p>Don't have an account?   <a href='#'>Register</a>

          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
