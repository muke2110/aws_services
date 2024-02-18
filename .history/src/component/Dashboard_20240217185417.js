// Dashboard.js
import React from 'react';

const Dashboard = ({ username, signOut }) => {
  return (
    <div className="dashboard">
      <div className="username">Hello {username}</div>
      <button className="signout-button" onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
