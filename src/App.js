import React from 'react';

import Login from './components/Login';

import { Route } from 'react-router-dom';

//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';

function App() {
  return (
    <div className="App">
      <Login />

      {/*<LoginForm />
      <PrivateRoute path="/dashboard" component={Dashboard} />*/}
    </div>
  );
}

export default App;
