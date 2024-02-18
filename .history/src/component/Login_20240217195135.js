import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user, signOut }) => (
  <div className="dashboard">
    <h1>Hello {user.username}</h1>
    <button onClick={signOut}>Sign out</button>
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <Authenticator
        usernameAttributes="email"
        onStateChange={handleStateChange}
      />
    </div>
  );
};

export default Login;
