// App.js
import React, { useState } from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import Login from './component/Login';
import Dashboard from './component/Dashboard'; // Import the Dashboard component

Amplify.configure(awsconfig);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication status

  // Function to set authentication status
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      {isAuthenticated ? ( // Render Dashboard if authenticated
        <Dashboard />
      ) : (
        <Login onAuthentication={handleAuthentication} /> // Pass the handler to Login
      )}
    </div>
  );
}

export default App;
