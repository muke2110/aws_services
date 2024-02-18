import React, { useEffect, useState } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import 

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setUsername(user.username);
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
          navigate('/'); // Redirect to sign-in page if not authenticated
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCurrentUser();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("User Signed Out");
      setAuthenticated(false);
      navigate('/'); // Redirect to sign-in page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!authenticated) {
    return null; // Render nothing if not authenticated
  }

  return (
    <div className="dashboard">
      
      <h1>Hello {username}</h1>
      <button onClick={handleSignOut} className="sign-out-btn">Sign out</button>
    </div>
  );
};

export default Dashboard;
