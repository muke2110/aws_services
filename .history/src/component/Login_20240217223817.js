// Login.js
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { redirect, useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate(); // Using useNavigate hook

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      navigate('/dashboard'); // Navigate to dashboard when signed in
    }
  };

  return (
    <div className="login-container">
      <Authenticator  onStateChange={handleStateChange} {navigate('/dashboard')}/>
    </div>
  );
};

export default Login;
