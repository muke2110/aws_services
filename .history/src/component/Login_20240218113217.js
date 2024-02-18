// Login.js
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();
  
  const handleAuthSuccess = () => {
    console.log("Logged In")
    navigate('/dashboard');
  };

  return (
    
    <Authenticator>
      {handleAuthSuccess}
    </Authenticator>

  );
};

export default Login;
