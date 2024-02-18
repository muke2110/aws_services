import React from 'react';
import { getCurrentUser, signOut } from "aws-amplify/auth";

async function currentAuthenticatedUser() {
    try {
      const { username } = await getCurrentUser();
      console.log(`The username: ${username}`);
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
    <button onClick={Curr} className="sign-out-btn">Sign out</button>
  </div>
);

export default Dashboard;


