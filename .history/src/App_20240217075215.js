// App.js
import '.'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';
import Login from './component/Login';
import Dashboard from './component/Dashboard'; // Import the Dashboard component

Amplify.configure(awsconfig);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to update authentication state
  const updateAuthStatus = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login updateAuthStatus={updateAuthStatus} />} />
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
