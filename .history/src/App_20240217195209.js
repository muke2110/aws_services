// // App.js
// import './App.css'
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';
import Login from './component/Login';
import Dashboard from './component/Dashboard'; // Import the Dashboard component



// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Function to update authentication state
//   const updateAuthStatus = (status) => {
//     setIsAuthenticated(status);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Login updateAuthStatus={updateAuthStatus} />} />
//           <Route
//             path="/dashboard"
//             element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

