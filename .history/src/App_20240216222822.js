import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify'; // Import Amplify
import awsmobile from './aws-exports'; // Import AWS configuration
import Login from './component/Login';

// Configure Amplify with AWS settings
Amplify.configure(awsmobile);

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
