// Login.js
import './Login.css'
import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate hook and Link component
import Registration from './Registration'; // Import the Registration component

const Login = ({ updateAuthStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!username.trim() || !password.trim()) {
        throw new Error('Username and password are required.');
      }
      const user = await signIn({ username, password });
      console.log('Successfully logged in:', user);
      updateAuthStatus(true); // Update authentication status
      navigate('/dashboard'); // Redirect to dashboard upon successful login

    } catch (error) {
      alert("User Not Found");
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Registration< </p>
    </div>
  );
};

export default Login;
