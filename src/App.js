import React from 'react';

import StoryForm from './components/StoryForm.js';
import { Route } from 'react-router-dom';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';
import StoryConfirmation from './components/confirmations/StoryConfirmation.js';
//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';
import HomeView from './components/HomeView';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomeView} />
      <Route path="/contribute" component={StoryForm} />
      <Route path="/login" component={LoginForm} />
    </div>
  );
}

export default App;
