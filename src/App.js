import React from 'react';


import SignupForm from './components/Signup';

import { Route } from 'react-router-dom';

//components
import LoginForm from "./components/Login";
import PrivateRoute from "./components/admin-components/PrivateRoute";
import Dashboard from './components/admin-components/Dashboard';


function App() {
  return (
    <div className="App">

      <SignupForm/>

      <h1>WORK IN PROGRESS</h1>
      <LoginForm />
      <PrivateRoute path="/dashboard" component={Dashboard}/>
      

    </div>
  );
}

export default App;

