import React, { useState, useEffect } from 'react';
import { getCurrentUser, signOut } from "aws-amplify/auth";

const Dashboard = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { username } = await getCurrentUser();
        setUsername(username);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <div className="dashboard">
      <h1>Hello {username}</h1>
      <button onClick={signOut} className="sign-out-btn">Sign out</button>
    </div>
  );
};

export default Dashboard;
