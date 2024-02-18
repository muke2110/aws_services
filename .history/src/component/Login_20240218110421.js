// Login.js
import React, { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();



  const handleAuthSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div>

      <h1>Login</h1>
      <Authenticator 
        onAuthUIStateChange={(nextAuthState, authData) => {
          console.log("Logged In") 
        }}
        
      />
    </div>
  );
};

export default Login;