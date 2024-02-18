import React, { useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform navigation when component mounts
    navigate('/dashboard');
  }, [navigate]);

  return (
    <Authenticator />
  );
};

export default Login;
