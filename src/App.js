import React from 'react';
import { Route } from 'react-router-dom';

//components
import LoginForm from './components/Login';
import PrivateRoute from './components/admin-components/PrivateRoute';
import Dashboard from './components/admin-components/Dashboard';
import SignupForm from './components/Signup';
import StoryForm from './components/StoryForm';


function App() {
  return (
    <div className="App">
      <SignupForm />
      <StoryForm />
      {/*<LoginForm />
      <PrivateRoute path="/dashboard" component={Dashboard} />*/}
    </div>
  );
}

export default App;
