import React from 'react';
<<<<<<< HEAD
=======

import Login from './components/Login';
import StoryForm from './components/StoryForm.js';
>>>>>>> 60138df32c9be328ce5bb5adcf865e548985bd85
import { Route } from 'react-router-dom';
import AdminConfirmation from './components/confirmations/AdminConfirmation.js';
import StoryConfirmation from './components/confirmations/StoryConfirmation.js';
//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';
import SignupForm from './components/Signup';
import StoryForm from './components/StoryForm';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <SignupForm />
      <StoryForm />
      {/*<LoginForm />
      <PrivateRoute path="/dashboard" component={Dashboard} />*/}
=======
      <Login />
>>>>>>> 60138df32c9be328ce5bb5adcf865e548985bd85
    </div>
  );
}

export default App;
