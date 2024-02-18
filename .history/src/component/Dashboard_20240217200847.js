import React from 'react';
import { getCurrentUser } from "aws-amplify/auth";

async function currentAuthenticatedUser() {
    try {
      const { username } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
    } catch (err) {
      console.log(err);
    }
  }

const Dashboard = () => (
  <div className="dashboard">
    <h1>Hello {}</h1>
    <button onClick={currentAuthenticatedUser} className="sign-out-btn">Sign out</button>
  </div>
);

export default Dashboard;


// const handleSignOut = async () => {
//     try {
//       await Auth.signOut();
//       // Redirect or perform other actions after signout
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };