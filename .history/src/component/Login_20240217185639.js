import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  const navigate = useNavigate();

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      {/* <Authenticator
        usernameAttributes="email"
        onStateChange={handleStateChange}
      /> */}
       <Authenticator>
      {({ signOut, user, Dashboard }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
          {user && <Dashboard/>}
        </main>
      )}
    </Authenticator>
    </div>
  );
};

export default Login;
