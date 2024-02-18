import React from "react";

function Dashboard(){
    return(
        <div>
            <h1>This is Dashboard</h1>
            {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signO}>Sign out</button>
        </main>
      )}
        </div>
    )
}

export default Dashboard;