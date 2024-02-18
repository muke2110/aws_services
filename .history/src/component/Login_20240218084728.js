import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();

  const handleStateChange = () => {
      navigate('/dashboard');
  };

  return (
    <Authenticator>
          {({ signOut, user }) => (
            navigate()
            <main>
              
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
  );
};

export default Login;
