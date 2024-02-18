import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState(null);

  const handleStateChange = (newState, authData) => {
    if (newState === 'signedIn') {
      setAuthState(newState);
      setUser(authData);
    } else {
      setAuthState(null);
      setUser(null);
    }
  };

  const handleSignOut = () => {
    // Your sign-out logic here
    navigate('/'); // Redirect to the login page after sign-out
  };

  return (
    <div className="login-container">
      <Authenticator
        usernameAttributes="email"
        onStateChange={handleStateChange}
      />
      {authState === 'signedIn' && user && (
        <Dashboard username={user.attributes.email} signOut={handleSignOut} />
      )}
    </div>
  );
};

export default Login;
