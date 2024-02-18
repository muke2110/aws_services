import React from 'react';
import { getCurrentUser, signOut } from "aws-amplify/auth";

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

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect or perform other actions after signout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

const Dashboard = () => (
  <div className="dashboard">
    <h1>Hello {}</h1>
    <button onClick={currentAuthenticatedUser} className="sign-out-btn">Sign out</button>
  </div>
);

export default Dashboard;


