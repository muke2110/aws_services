import React, { useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleStateChange = (authState) => {
      if (authState === 'signedIn') {
        navigate('/dashboard');
      }
    };

    return () => {
      // Clean up any subscriptions or listeners
    };
  }, [navigate]);

  return (
    <div className="login-container">
      <Authenticator
        usernameAttributes="email"
        onStateChange={handleStateChange}
      />
    </div>
  );
};

export default Login;
