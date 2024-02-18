// App.js or your main routing component
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { getCurrentUser } from 'aws-amplify/auth';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <Route
      {...rest}
      element={authenticated ? <Element /> : <Navigate to="/" replace />}
    />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
