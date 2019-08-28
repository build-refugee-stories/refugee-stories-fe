
import React from 'react';




import React, {useState} from 'react';

import { Route } from 'react-router-dom';

//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';

import SignupForm from './components/Signup';
import StoryForm from './components/StoryForm';

import HomeView from './components/HomeView';
import StoryForm from './components/StoryForm.js';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';
import StoryConfirmation from './components/confirmations/StoryConfirmation.js';

//contexts
import StoriesContext from './contexts/StoriesContext';


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
      <Route exact path="/" component={HomeView} />
      <Route path="/contribute" component={StoryForm} />
      <Route path="/login" component={LoginForm} />

    </div>
  );
}

export default App;
