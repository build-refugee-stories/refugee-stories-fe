import React from 'react';

import Login from './components/Login';

import { Route } from 'react-router-dom';

//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';
import HomeView from './components/HomeView';


function App() {
  return (
    <div className="App">
      <AdminConfirmation />

      <LoginForm />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <HomeView />
    </div>
  );
}

export default App;
