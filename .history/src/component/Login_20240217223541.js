import React, { useEffect } from 'react';
import { Authenticator, useAuthUI } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate(); // Using useNavigate hook from React Router
  const { authState } = useAuthUI();

  useEffect(() => {
    if (authState === 'signedin') {
      navigate('/dashboard'); // Navigate to dashboard when signed in
    }
  }, [authState, navigate]);

  return (
    <div className="login-container">
      <Authenticator />
    </div>
  );
};

export default Login;
