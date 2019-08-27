import React from 'react';

import Login from './components/Login';

import { Route } from 'react-router-dom';

//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';

function App() {
  return (
    <div className="App">
      <AdminConfirmation />

      {/*<LoginForm />
      <PrivateRoute path="/dashboard" component={Dashboard} />*/}
    </div>
  );
}

export default App;
