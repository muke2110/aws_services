import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticator, SignOut } from '@aws-amplify/ui-react';
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
    <div className="dashboard">
      <h1>Hello</h1>
      <SignOut onClick={navigate('/')} />
    </div>
  );
};

const CustomAuthenticator = () => (
  <Authenticator>
    <Dashboard />
  </Authenticator>
);

export default CustomAuthenticator;
