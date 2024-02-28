import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, signOut} from 'aws-amplify/auth';
import { up } from 'aws-amplify/storage'
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        
        setUsername(user.username);
      } catch (err) {
        console.log('User is not authenticated. Redirecting to sign-in page.');
        handleSignOut();
      } finally {
        setLoading(false);
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
    return <div className="loader">Loading...</div>; // Apply CSS class for loader
  }

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {username}</h1>
        <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
      </header>
      <div className="content">
        <h2>Dashboard</h2>
        <p>This is your dashboard. You can add more content and features here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
