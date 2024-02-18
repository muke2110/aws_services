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
    }
  };

  return (
    <Authenticator onStateChange={handleStateChange} />
  );
};

export default Login;
