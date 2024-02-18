import React from 'react';
import { getCurrentUser } from "aws-amplify/auth";

async function currentAuthenticatedUser() {
    try {
      const { username } = await getCurrentUser();
      console.log(`The username: ${username}`);
    } catch (err) {
      console.log(err);
    }
  }

const Dashboard = () => (
    const handleSignOut = async () => {
        try {
          await Auth.signOut();
          // Redirect or perform other actions after signout
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };
  <div className="dashboard">
    <h1>Hello {}</h1>
    <button onClick={currentAuthenticatedUser} className="sign-out-btn">Sign out</button>
  </div>
);

export default Dashboard;


