// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Registration from './component/Registration';

import { Amplify } from 'aws-amplify';

import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;
