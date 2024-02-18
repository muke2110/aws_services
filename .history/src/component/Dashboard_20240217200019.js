import React from 'react';
import { getCurrentUser } from "aws-amplify/auth";



const Dashboard = () => (
    async function currentAuthenticatedUser() {
        try {
          const { username, userId, signInDetails } = await getCurrentUser();
          console.log(`The username: ${username}`);
          console.log(`The userId: ${userId}`);
          console.log(`The signInDetails: ${signInDetails}`);
        } catch (err) {
          console.log(err);
        }
      }
  <div className="dashboard">
    <h1>Hello {}</h1>
    <button onClick={currentAuthenticatedUser} className="sign-out-btn">Sign out</button>
  </div>
);

export default Dashboard;
