
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

//contexts
import StoriesContext from './contexts/StoriesContext';
import ApprovedStoryCard from './components/ApprovedStoryCard';


function App() {
  return (
    <div className="App">

      <SignupForm />
      <StoryForm />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={HomeView} />
      <Route path="/contribute" component={StoryForm} />
      <Route path="/login" component={LoginForm} />

      {/* 
      <PrivateRoute
        path="/dashboard/story/:id"
        render={props => <StoryView {...props} isAdmin={true} />}
      /> */}

      <Route path="/story/:id" component={ApprovedStoryCard} />

    </div>
  );
}

export default App;
