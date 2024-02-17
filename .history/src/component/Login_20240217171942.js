import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';

const Login = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const user = await signIn(username, password);
      console.log('Successfully logged in:', user);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      alert("User Not Found");
      console.error('Error signing in:', error);
    }
  };

  const handleStateChange = (state) => {
    setAuthState(state);
    if (state === 'signedUp') {
      navigate('/login'); // Redirect to login page after registration
    }
  };

  return (
    <div className="login-container">
      <Authenticator
        amplifyConfig={{
          ssr: true,
        }}
        usernameAttributes="email"
        onStateChange={handleStateChange}
        hideDefault={true} // Hide default UI to handle navigation manually
      />
    </div>
  );
};

export default Login;
