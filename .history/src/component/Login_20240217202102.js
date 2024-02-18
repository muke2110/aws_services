import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleStateChange = (authState) => {
    console.log('Auth State Changed:', authState); // Debugging
    if (authState === 'signedIn') {
      console.log('Redirecting to /dashboard'); // Debugging
      navigate('/dashboard');
    }
  };

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
