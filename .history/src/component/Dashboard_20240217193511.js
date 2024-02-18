import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from 'aws-amplify/auth';

function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Fetch current authenticated user on component mount
    getCurrentUser();
  }, []);

  // Function to fetch current authenticated user
  const getCurrentUser = async () => {
    try {
      const user = await getCurrentUser.currentAuthenticatedUser();
      setCurrentUser(user);
    } catch (error) {
      console.error('Error fetching current user:', error);
      // Handle error (e.g., redirect to login page)
      navigate('/login');
    }
  };

  // Function to handle signout
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      // Redirect to the login page after signout
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <div style={{ textAlign: 'right', padding: '10px' }}>
        {/* Display the username if available */}
        {currentUser && <span style={{ marginRight: '10px' }}>Welcome, {currentUser.username}</span>}
        {/* Signout button */}
        <button onClick={handleSignOut}>Sign out</button>
      </div>
      <h1>This is Dashboard</h1>
    </div>
  );
}

export default Dashboard;
