import React, { useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to '/dashboard' if the user is already authenticated
    const checkAuthStatus = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
      }
    };

    checkAuthStatus();
  }, [navigate]);

  return (
    <Authenticator />
  );
};

export default Login;
