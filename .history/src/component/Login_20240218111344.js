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
    
    <Authenticator>
      conso
    </Authenticator>


    // <div>

    //   <h1>Login</h1>
    //   <Authenticator/>
    // </div>
  );
};

export default Login;
