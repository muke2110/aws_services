import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify'; // Import Amplify
import awsconfig from "./aws-exports" // Import AWS configuration
import Login from './component/Login';



function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
