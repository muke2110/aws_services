// App.js
import React from 'react';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Registration from './component/Registration';

const App = () => {
  return (
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
  );
};

export default App;
