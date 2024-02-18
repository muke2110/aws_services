import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { signOut: authSignOut, context: { route } } = useAuthenticator();

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("User Signed Out");
      authSignOut(); // Clears authentication state
      navigate('/'); // Redirect to sign-in page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (route !== 'authenticated') {
    return null; // Render nothing if not authenticated
  }

  return (
    <div className="dashboard">
      <h1>Hello {route === 'authenticated' && route}</h1>
      <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
    </div>
  );
};

export default Dashboard;
