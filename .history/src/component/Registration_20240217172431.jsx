import React, { useState } from 'react';
import { signUp } from 'aws-amplify/auth';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp({
        username: formData.username,
      password: formData.password,
      attributes: {
        phone_number: formData.phone_number,
        email: formData.email,
        name: formData.name
        
      });
      console.log('Registration successful');
      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error, show error message to the user, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Phone Number:
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
