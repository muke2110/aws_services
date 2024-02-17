import React, { useState } from 'react';
import { SignUp } from '@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp'; // Import Auth from AWS Amplify
import { Authenticator} from '@aws-amplify/ui-react';}

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
        username: formData.email, // Use email as username
        password: formData.password,
        attributes: {
          email: formData.email
        }
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
        Email (Username):
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
