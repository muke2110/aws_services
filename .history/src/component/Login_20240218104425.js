// Login.js
import React, { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false); // Setting loading to false once component is mounted
  }, []);

  const handleAuthSuccess = () => {
    navigate('/dashboard');
  };

  const handleAuthError = (err) => {
    setError(err.message || 'An error occurred during authentication.');
    setLoading(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <Authenticator
        onAuthUIStateChange={(authState, data) => {
          if (authState === 'signedin') {
            console.log()
            handleAuthSuccess();
          }
        }}
        errorMessage={error}
      />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Login;
