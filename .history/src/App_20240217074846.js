// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Auth } from '@aws-amplify';

import awsconfig from './aws-exports';
import Login from './component/Login';
import Dashboard from './component/Dashboard'; // Import the Dashboard component

Amplify.configure(awsconfig);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  async function checkAuthStatus() {
    try {
      Amplify.currentAuthenticatedUser()
      .then(user => console.log("currentAuthenticatedUser", user))
      .catch((err) => console.log('currentAuthenticatedUser err: ', err));
    } catch (error) {
      setIsAuthenticated(false);
    }
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
