// Registration.jsx
import React, { useState } from 'react';
import { signUp } from '@aws-amplify/auth'; // Assuming you're using AWS Amplify for authentication
import { useNavigate } from 'react-router-dom';

async function handleSignUp({ username, password, email, phone_number }) {
  try {
    const { user } = await signUp({
      username,
      password,
      attributes: {
        email,
        phone_number // Ensure phone_number is in E.164 format
      },
      autoSignIn: true // Optional auto sign-in
    });

    console.log('User successfully registered:', user);
    // Optionally, you can navigate to another page or display a success message
  } catch (error) {
    console.error('Error signing up:', error);
    // Handle registration error, display error message, etc.
  }
}
