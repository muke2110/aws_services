// Login.js
import './Login.css'
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { ReactComponent as Pic } from "./"

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    console.log("Logged In")
    navigate('/dashboard');
  };

  return (

    <div style={{paddingTop: "10%"}}>

    <Authenticator>
      {handleAuthSuccess}
    </Authenticator>
    </div>
  );
};

export default Login;
