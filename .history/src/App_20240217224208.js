// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Registration from './component/Registration';

const App = () => {
  return (
    <Router>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
    </Router>
  );
};

export default App;
