import React from 'react';
import { getCurrentUser } from "aws-amplify/auth";



const Dashboard = () => (
  <div className="dashboard">
    <h1>Hello {}</h1>
    <button onClick={currentAuthenticatedUser} className="sign-out-btn">Sign out</button>
  </div>
);

export default Dashboard;
