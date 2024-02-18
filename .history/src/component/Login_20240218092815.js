// Login.js
import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleAuthError = (err) => {
    setError(err.message || 'An error occurred during authentication.');
    setLoading(false);
  };

  return (
    <Authenticator
      onAuthStateChange={(state) => {
          navigate('/dashboard')
      }}
      onError={(err) => handleAuthError(err)}
    >
      {() => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error}</p>;
        return null;
      }}
    </Authenticator>
  );
};

export default Login;
