import React from 'react';

import Login from './components/Login';

import { Route } from 'react-router-dom';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';
//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';

function App() {
  return (
    <div className="App">
      <AdminConfirmation />
    </div>
  );
}

export default App;
