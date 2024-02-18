// // App.js
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
