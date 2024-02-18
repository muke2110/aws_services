import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Dashboard = ({ user, signOut }) => (
  <div className="dashboard">
    <h1>Hello {user.username}</h1>
    <button onClick={signOut}>Sign out</button>
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState();

  const handleStateChange = (newState) => {
    if (newState === 'signedIn') {
      setAuthState(newState);
    } else {
      setAuthState(null);
    }
  };

  return (
    <div className="login-container">
      <Authenticator
        usernameAttributes="email"
        onStateChange={handleStateChange}
      />
      <main>
      {authState === 'signedIn' && (
        <Dashboard />
      )}</main>
    </div>
  );
};

export default Login;
