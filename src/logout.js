// src/Logout.js
import React from 'react';
import './logout.css';

const Logout = ({ username, onLogout }) => {
  return (
    <div className="logout-container">
      <h2>Welcome, {username}</h2>
      <button onClick={onLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Logout;
