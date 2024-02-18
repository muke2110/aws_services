import React, { useState } from 'react';
import { Authenticator, useAuthState } from '@aws-amplify/ui-react';
import { useNavigate, useLocation, } from 'react-router-dom';
import Dashboard from './Dashboard';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      const { from } = location.state || { from: { pathname: '/dashboard' } };
      navigate(from.pathname);
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
