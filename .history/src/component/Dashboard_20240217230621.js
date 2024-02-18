import React, { useEffect, useState } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { username } = await getCurrentUser();
        setUsername(username);
        console.log()
      } catch (err) {
        console.log(err);
      }
    };

    fetchCurrentUser();
  }, []);

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
      <h1>Hello {username}</h1>
      <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
    </div>
  );
};

export default Dashboard;
