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

  const handleAuthSuccess = () => {
    console.log("Logged In")
    navigate('/dashboard');
  };

  return (
    <>
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('https://i.ytimg.com/vi/TSGnWlGmSds/maxresdefault.jpg')`,
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
      </>
  );
  
};

export default Login;
