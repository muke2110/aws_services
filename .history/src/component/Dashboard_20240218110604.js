import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';

const Dashboard = () => {
  const navigate = useNavigate();

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
        <h1>Hello , {username</h1>
        <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
      </div>
    </Authenticator>
  );
};

export default Dashboard;
