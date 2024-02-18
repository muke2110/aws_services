import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator, SignOut } from '@aws-amplify/ui-react';
import Dashboard from './component/Dashboard';

Amplify.configure(awsconfig);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to update authentication state
  const updateAuthStatus = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login updateAuthStatus={updateAuthStatus} />} />
      </Routes>
    </Router>
  );
};

const Login = ({ updateAuthStatus }) => {
  const handleStateChange = (authState) => {
    if (authState === 'signedIn') {
      updateAuthStatus(true);
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

export default App;
