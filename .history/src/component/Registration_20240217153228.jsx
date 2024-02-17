import React, { useState } from 'react';
import { signUp } from '@aws-amplify/auth';


 async function Registration () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await signUp({
        username,
        password,
        attributes: {
          email
        }
      });
      console.log('User successfully registered');
      // Redirect to login page or display success message
    } catch (error) {
      console.error('Error registering user:', error);
      // Display error message to user
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
