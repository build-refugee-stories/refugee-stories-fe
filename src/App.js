import React from 'react';

import Login from './components/Login';
import StoryForm from './components/StoryForm.js';
import { Route } from 'react-router-dom';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';
import StoryConfirmation from './components/confirmations/StoryConfirmation.js';
//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
