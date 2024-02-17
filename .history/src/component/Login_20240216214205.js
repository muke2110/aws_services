import "./Login.css"
import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth'; // Import Auth from aws-amplify

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Check if username and password are not empty
      if (!username.trim() || !password.trim()) {
        throw new Error('Username and password are required.');
      }
      const user = await signIn(username, password); // Use signIn function directly from Auth
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
          onChange={(e) => setUsername(e.target.value)} // Update username state in onChange event handler
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
