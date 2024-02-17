import React, { useState } from 'react';
import { signUp } from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone_number: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const { user } = awaitsignUp({
        username: formData.username,
        password: formData.password,
        attributes: {
          email: formData.email,
          phone_number: formData.phone_number
        }
      });
      console.log('User successfully registered:', user);
      // Optionally, you can navigate to another page or display a success message
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle registration error, display error message, etc.
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
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
