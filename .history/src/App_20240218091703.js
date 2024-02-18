// App.js or your main routing component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { getCurrentUser } from 'aws-amplify/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <Route
      {...rest}
      render={props => authenticated ? <Component {...props} /> : <Login />}
    />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  );
};

export default App;
