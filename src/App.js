import React from 'react';



import { Route } from 'react-router-dom';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';
import StoryConfirmation from './components/confirmations/StoryConfirmation.js';
//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';

import SignupForm from './components/Signup';
import StoryForm from './components/StoryForm';

import HomeView from './components/HomeView';



function App() {
  return (
    <div className="App">


      <SignupForm />
      <StoryForm />
      {/*<LoginForm />
      <PrivateRoute path="/dashboard" component={Dashboard} />*/}

      <AdminConfirmation />

      <LoginForm />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <HomeView />

    </div>
  );
}

export default App;
