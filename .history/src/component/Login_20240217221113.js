// Login.js
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);
// Login.js



const Login = () => {
  const navigate = useNavigate();

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <Authenticator onStateChange={handleStateChange} />
    </div>
  );
};

export default Login;
