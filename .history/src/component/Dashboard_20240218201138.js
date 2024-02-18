import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        console.log('Attempting to fetch current user...');
        const user = await getCurrentUser();
        console.log('Current user:', user);
        set
        
        if (!user) {
          console.log('User not found. Redirecting to sign-in page.');
          navigate('/');
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCurrentUser();
  }, [navigate]); // Include navigate in the dependency array

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("User Signed Out");
      navigate('/'); // Redirect to sign-in page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Hello, {username}</h1>
      <h3>This is Dashboard</h3>
      <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
    </div>
  );
};

export default Dashboard;
