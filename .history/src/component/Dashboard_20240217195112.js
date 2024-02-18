import React from "react";

function Dashboard(){
    const Dashboard = ({ user, signOut }) => (
        <div className="dashboard">
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      );
    return(
        <div>
            <h1>This is Dashboard</h1>
        </div>
    )
}

export default Dashboard;