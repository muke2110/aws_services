import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

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
        hideSignUp components={L}
      />
    </div>
  );
};

export default Login;
