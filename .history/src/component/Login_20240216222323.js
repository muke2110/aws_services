import "./Login.css";
import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
//import { useNavigate } from 'react-router-dom'; // Import useHistory hook from react-router-dom

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//  const navigate = useNavigate(); // Access the useHistory hook to navigate programmatically

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!username.trim() || !password.trim()) {
        throw new Error('Username and password are required.');
      }
      const user = await signIn({ username, password });
      console.log('Successfully logged in:', user);
      // If login is successful, navigate to the dashboard page
  //    navigate('./Dashboard')
    } catch (error) {
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
    </div>
  );
};

export default Login;
