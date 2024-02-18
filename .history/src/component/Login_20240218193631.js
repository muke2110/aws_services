// Login.js
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import gtrpic from "../assets/gtr.jpg";

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    console.log("Logged In");
    navigate('/dashboard');
  };

  return (
    <div style={{
      height: "100vh",  // Ensure the container covers the entire viewport height
      width: "100vw",
      overflow: "hidden",  // Hide any overflowing content
      position: "relative",
    }}>
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${gtrpic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div style={{ 
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div >
          <Authenticator>
            {handleAuthSuccess}
          </Authenticator>
        </div>
      </div>
    </div>
  );
};

export default Login;
