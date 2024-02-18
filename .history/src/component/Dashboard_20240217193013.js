import React from "react";
import { signOut } from "@aws-amplify/auth";

function Dashboard() {
  // Function to handle signout
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      // Redirect to the login page after signout
      window.location.reload(); // Optional: force reload to clear any cached data
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Get the current authenticated user
  const currentUser = Auth.currentAuthenticatedUser();

  return (
    <div>
      <div style={{ textAlign: 'right', padding: '10px' }}>
        {/* Display the username */}
        {currentUser && <span style={{ marginRight: '10px' }}>Welcome, {currentUser.username}</span>}
        {/* Signout button */}
        <button onClick={handleSignOut}>Sign out</button>
      </div>
      <h1>This is Dashboard</h1>
    </div>
  );
}

export default Dashboard;
