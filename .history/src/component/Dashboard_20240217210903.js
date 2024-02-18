import React, { useEffect, useState } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { username } = await getCurrentUser();
        setUsername(username);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("User Sign")
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Hello {username}</h1>
      <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
    </div>
  );
};

export default Dashboard;
