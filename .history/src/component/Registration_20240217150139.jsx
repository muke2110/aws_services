// Registration.jsx
import React, { useState } from 'react';
import { signUp } from '@aws-amplify/auth';// Assuming you're using AWS Amplify for authentication
import { useNavigate } from 'react-router-dom';

const Registration = ({ updateAuthStatus }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      if (!username.trim() || !password.trim() || !email.trim() || !phoneNumber.trim() || !name.trim()) {
        throw new Error('All fields are required.');
      }
      // You can include other attributes in the signUp call as needed
      await signUp({
        username,
        password,
        email
      });
      console.log('User successfully registered');
      alert("User successfully registered");
      
    } catch (error) {
      console.error('Error registering user:', error);
      alert("Error registering user");
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegistration}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
