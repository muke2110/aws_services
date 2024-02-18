import React from "react";

function Dashboard(){
    return(
        <div>
            <h1>This is Dashboard</h1>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )
}

export default Dashboard;