// Dashboard.js
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setUsername(user.username);
      } catch (err) {
        console.log(err);
        navigate('/'); // Redirect to login if user is not signed in
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <div className="dashboard">
      <h1>Hello {username}</h1>
    </div>
  );
};

export default Dashboard;
