import React, { useState } from 'react';
import './Login.css';
import { COGNITO } from '../UserPool';
import Auth

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    COGNITO.signin(username, password,[] ,null, (err,data)=>{
        if(err){
            console.log(err);
        } 
        console.log(data);
        
    })
    console.log('Logging in with:', username, password);
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
