import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Route } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      <Route path="/dashboard" element={<Dashboard />} />
    }
  };

  const handleLogin = () => {
    // Perform login logic here and retrieve username
    const username = 'exampleUsername';

    // Navigate to Dashboard and pass username as state
    navigate('/dashboard', { state: { username } });
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
