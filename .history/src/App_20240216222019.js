import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify'; // Import Amplify
import awsconfig from './awS // Import AWS configuration
import Login from './component/Login';

// Configure Amplify with AWS settings
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
