import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import "./Login.css"
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  const handleSignOut = () => {
    // Perform sign out actions here
    setUser(false);
    navigate('/');
  };

  return (
    <div className="login-container">
      {user ? (
        <DashboardComponent username={user.username} signOut={handleSignOut} />
      ) : (
        <Authenticator onStateChange={handleStateChange} />
      )}
    </div>
  );
};

export default Login;
