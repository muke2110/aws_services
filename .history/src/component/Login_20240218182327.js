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

    <div style={{
      marginTop: "10%",
      display: "flex",
      backgroundImage: `url(${gtrpic})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "300px", // Adjust the height accordingly
      width: "100%" // Adjust the width accordingly
    }}>
      <div style={{ flex: 1 }}>
        <Authenticator>
          {handleAuthSuccess}
        </Authenticator>
      </div>
    </div>
    
  );
};

export default Login;