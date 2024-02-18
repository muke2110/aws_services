import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
     <Das
    }
  };

  return (
    <div className="login-container">
    <Authenticator
      usernameAttributes="email"
      onStateChange={handleStateChange}
    />
    {authState === 'signedIn' && <Dashboard />}
  </div>

  );
};

export default Login;
