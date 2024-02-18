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
      <img src={gtrpic} alt={"gtr"} style={{maxHeight: "300px", maxWidth: "100px"}}/>
      <div className="login-img">
    <Authenticator>
      {handleAuthSuccess}
    </Authenticator>
    </div>
    </div>
  );
};

export default Login;
