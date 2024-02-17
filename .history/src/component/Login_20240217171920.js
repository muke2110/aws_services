import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import RegistrationForm from './Registration'; // Assuming you have a RegistrationForm component

const Login = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState(null);

  const handleLogin = async ({ username, password }) => {
    try {
      const user = await signIn(username, password);
      console.log('Successfully logged in:', user);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      alert("User Not Found");
      console.error('Error signing in:', error);
    }
  };

  const handleStateChange = (state) => {
    setAuthState(state);
    if (state === 'signedUp') {
      navigate('/login'); // Redirect to login page after registration
    }
  };

  return (
    <div className="login-container">
      <Authenticator
        amplifyConfig={{
          ssr: true,
        }}
        usernameAttributes="email"
        onStateChange={handleStateChange}
        hideDefault={true} // Hide default UI to handle navigation manually
        // Render custom sign-in form
        // This form will be displayed when the authentication state is 'signIn'
        // Implement your custom sign-in form logic here
        // The onSubmit prop receives the username and password entered by the user
        // You can then call the handleLogin function to authenticate the user
        // Example:
        // <AmplifySignIn
        //   headerText="Login"
        //   onSubmit={handleLogin}
        // />
      />
      {authState === 'signUp' && (
        <RegistrationForm />
      )}
    </div>
  );
};

export default Login;
