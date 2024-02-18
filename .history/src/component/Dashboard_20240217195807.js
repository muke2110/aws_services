import React from 'react';
import { getCurrentUser } from 
const Dashboard = ({ username, signOut }) => (
  <div className="dashboard">
    <h1>Hello {username}</h1>
    <button onClick={signOut} className="sign-out-btn">Sign out</button>
  </div>
);

export default Dashboard;
