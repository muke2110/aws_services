// Login.js
import './Login.css'
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

const Login = () => {
  return (
    <div className="login-container">
      <Authenticator />
    </div>
  );
};

export default Login;
