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
      <div  style={{maxHeight: "100%", width: "100%"}}>
      <img src={gtrpic} alt={"gtr"} />
      </div>
    <Authenticator>
      {handleAuthSuccess}
    </Authenticator>
    </div>
  );
};

export default Login;