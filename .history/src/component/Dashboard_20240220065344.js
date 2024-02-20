import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        console.log(user);
        setUsername(user.username);
      } catch (err) {
        console.log('User is not authenticated. Redirecting to sign-in page.');
        handleSignOut();
      } finally {
        setLoading(false); /
      }
    };
  
    fetchCurrentUser();
  });
  
  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("User Signed Out");
      navigate('/'); // Redirect to sign-in page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  return (
    <div className="dashboard">
      <h1>Hello, {username}</h1>
      <h3>This is Dashboard</h3>
      <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
    </div>
  );
};

export default Dashboard;