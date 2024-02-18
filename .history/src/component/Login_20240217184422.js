import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <Authenticator
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      />
    </div>
  );
};

export default Login;
