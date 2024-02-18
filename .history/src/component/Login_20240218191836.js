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

    // <div style={{
    //   height: "100vh",
    //   width: "100vw",
    //   overflow: "hidden",
    //   backgroundImage: `url(${gtrpic})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center",
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center"
    // }}>
      <div className='Login-view' >
        <Authenticator>
          {handleAuthSuccess}
        </Authenticator>
      </div>
    </div>
    
  );
};

export default Login;
