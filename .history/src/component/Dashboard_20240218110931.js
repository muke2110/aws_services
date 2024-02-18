import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';

const Dashboard = async() => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  try {
    const user = await getCurrentUser();
    if (user) {
      setUsername(user.username);
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate('/'); // Redirect to sign-in page if not authenticated
    }
  } catch (err) {
    console.log(err);
  }
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
    <Authenticator>
      <div className="dashboard">
        <h1>Hello , {username}</h1>
        <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
      </div>
    </Authenticator>
  );
};

export default Dashboard;
