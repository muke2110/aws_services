import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        if (!user) {
          navigate('/'); // Redirect to sign-in page if not authenticated
        } else {
          setUsername(user.username);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCurrentUser();
  }, [navigate]);

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
      <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
    </div>
  );
};

export default Dashboard;
