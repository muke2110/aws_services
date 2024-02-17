import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify'; // Import Amplify
import awsconfig from "amazon-cognito-identity-js" // Import AWS configuration
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
