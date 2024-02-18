import React, { useState } from 'react';
import { Authenticator, useAuthState } from '@aws-amplify/ui-react';
import { useNavigate, useLocation, useHistory } from 'react-router-dom';
import Dashboard from './Dashboard';

const Login = () => {
  const navigate = useNavigate();
  const { authState } = useAuthState();
  const location = useLocation();
  const history = useHistory();

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      const { from } = location.state || { from: { pathname: '/dashboard' } };
      history.replace(from.pathname);
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
