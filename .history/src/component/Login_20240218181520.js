// Login.js
import './Login.css'
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import gtrpic from "../assets/gtr.jpg"

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    console.log("Logged In")
    navigate('/dashboard');
  };

  return (

    <div style={{marginTop: "10%", display: "flex"}}>
      <div></div>
      <img src={gtrpic} alt={"gtr"} style={{maxHeight: "700px", width: "50%"}} />
    <Authenticator>
      {handleAuthSuccess}
    </Authenticator>
    </div>
  );
};

export default Login;
