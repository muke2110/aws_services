import React from "react";
import { useState, useEffect } from "react";



function Dashboard(){
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            const user = await Auth.currentAuthenticatedUser();
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
        </div>
    )
}

export default Dashboard;