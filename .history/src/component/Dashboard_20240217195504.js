import React from 'react';

const Dashboard = ({ username, signOut }) => (
  <div className="dashboard">
    <h1>Hello {username}</h1>
    <button onClick={signOut} className="sign-out-btn">Signzxvbsfv out</button>
  </div>
);

export default Dashboard;
