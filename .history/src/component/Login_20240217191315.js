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
        onStateChange={authState => {
          if (authState === 'signedIn') {
            const { from } = this.props.location.state || {
              from: {
                pathname: '/',
                search: ''
              }
            };
            this.props.history.replace(from.pathname + from.search);
          }
        }}
      />
    </div>
  );
};

export default Login;
