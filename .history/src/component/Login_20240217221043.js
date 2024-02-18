// Login.js
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


const Login = () => {
  return (
    <div className="login-container">
      <Authenticator />
    </div>
  );
};

export default Login;
