import React, { useEffect } from 'react';
import { Authenticator, Hub } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

const Login = () => {
  const navigate = useNavigate(); // Using useNavigate hook from React Router

  useEffect(() => {
    const handleAuthStateChange = async (authState) => {
      if (authState === 'signedIn') {
        navigate('/dashboard'); // Navigate to dashboard when signed in
      }
    };

    Hub.listen('auth', handleAuthStateChange);

    return () => {
      Hub.remove('auth', handleAuthStateChange);
    };
  }, [navigate]);

  return (
    <div className="login-container">
      <Authenticator />
    </div>
  );
};

export default Login;
