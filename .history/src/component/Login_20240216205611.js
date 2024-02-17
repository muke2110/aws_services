import React, { useState } from 'react';
import { Amplify } from 'aws-amplify'; // Import Amplify
import awsconfig from "../aws-exports" ; // Import AWS Amplify configuration

// Configure Amplify with your AWS Amplify configuration
Amplify.configure(awsconfig);

const Login = () => {
  const [username, setUsername] = useState("mukesh");
  const [password, setPassword] = useState("Muke@2110");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      console.log('Successfully logged in:', user);
      // Handle successful login, such as redirecting the user or updating UI
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle login error, such as displaying an error message to the user
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
