import React from "react";
import { SignOut } from "@aws-amplify/ui-react/dist/types/components/Authenticator/Authenticator";

function Dashboard(){
    return(
        <div>
            <h1>This is Dashboard</h1>
            {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
        </div>
    )
}

export default Dashboard;