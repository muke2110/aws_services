// Login.js
import './Login.css'
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();
  c
  const handleAuthSuccess = () => {
    console.log("Logged In")
    navigate('/dashboard');
  };

  return (
      <div className='main-block'>
        <div className='login-container'>
        <Authenticator>
          {handleAuthSuccess}
        </Authenticator>
        </div>
      </div>
  );
  
};

export default Login;