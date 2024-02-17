import React, { useState } from 'react';
import { Auth } from 'aws-amplify'; // Import Auth from aws-amplify

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      console.log('Successfully signed in:', user);
      // Handle successful sign-in, such as redirecting the user or updating UI
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle sign-in error, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
