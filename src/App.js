
import React, {useState} from 'react';

import { Route } from 'react-router-dom';


//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';

import SignupForm from './components/Signup';
import StoryForm from './components/StoryForm';

import HomeView from './components/HomeView';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';
import StoryConfirmation from './components/confirmations/StoryConfirmation.js';
import StoryView from './components/StoryView.js';
import AdminStoryView from './components/admin-components/AdminStoryView.js';

//contexts
import StoriesContext from './contexts/StoriesContext';
import { gray } from 'ansi-colors';


function App() {
  return (
    <div className="App">

        <Route exact path="/" component={HomeView} />

        <Route
          path="/contribute"
          render={props => <StoryForm {...props} />}
        />
        <Route path="/story-confirmation" component={StoryConfirmation} />

        <Route
          path="/signup"
          render={props => <SignupForm {...props} />}
        />
        <Route path="/signup-confirmation" component={AdminConfirmation} />
        <Route
          path="/login"
          render={props => <LoginForm {...props} />}
        />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route
          exact path="/dashboard/story/:id"
          component={AdminStoryView}
        />
        <Route path="/story/:id" component={StoryView} />
    </div>
  );
}

export default App;
