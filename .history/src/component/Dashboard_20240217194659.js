import React from "react";
import { useState, useEffect } from "react";



function Dashboard(){
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            const user = await signIncurrentAuthenticatedUser();
            setUsername(user.username);
          } catch (error) {
            console.error('Error fetching user information:', error);
          }
        };
      
        fetchUserInfo();
      }, []);
      
    return(
        <div>
            <h1>This is Dashboard</h1>
            <h1>Welcome, {username}!</h1>
        </div>
    )
}

export default Dashboard;