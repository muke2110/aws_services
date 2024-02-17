// import './Login.css';
// import React, { useState } from 'react';
// import { signIn } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
// import Registration from './Registration';
// import { Authenticator } from '@aws-amplify/ui-react';

// const Login = ({ updateAuthStatus }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const [showRegistration, setShowRegistration] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       if (!username.trim() || !password.trim()) {
//         throw new Error('Username and password are required.');
//       }
//       const user = await signIn({ username, password });
//       console.log('Successfully logged in:', user);
//       updateAuthStatus(true);
//       navigate('/dashboard');
//     } catch (error) {
//       alert("User Not Found");
//       console.error('Error signing in:', error);
//     }
//   };

//   const handleRegistration = (formData) => {
//     // Handle the registration data received from the Registration component
//     console.log('Received registration data:', formData);
//     // Optionally, you can perform additional actions, such as displaying a success message or navigating to another page
//   };

//   const handleRegistrationLinkClick = () => {
//     setShowRegistration(true);
//   };

//   return (
//     <div className="login-container">
//       <Authenticator/>
//       {/* <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>
//           Email:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <span onClick={handleRegistrationLinkClick} className="signup-link">SignUp</span> </p>
//       {showRegistration && <Registration onRegister={handleRegistration} />} */}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';

const Login = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const user = await signIn(username, password);
      console.log('Successfully logged in:', user);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      alert("User Not Found");
      console.error('Error signing in:', error);
    }
  };

  const handleStateChange = (state) => {
    setAuthState(state);
    if (state === 'signedUp') {
      navigate('/login'); // Redirect to login page after registration
    }
  };

  return (
    <div className="login-container">
      <Authenticator
        amplifyConfig={{
          ssr: true,
        }}
        usernameAttributes="email"
        onStateChange={handleStateChange}
        hideDefault={true} // Hide default UI to handle navigation manually
      />
    </div>
  );
};

export default Login;

