import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import HomeView from './HomeView.js';
import StoryForm from './StoryForm.js';
import Login from './Login.js';

const NavBar = () => (
  <div className="topnav">
    <NavLink className="nav-item" to={HomeView}>
      Home
    </NavLink>
    <NavLink className="nav-item" href="#">
      About
    </NavLink>
    <NavLink className="nav-item" to={StoryForm}>
      Contribute
    </NavLink>
    <NavLink className="nav-item" to={Login}>
      Admin
    </NavLink>
  </div>
);

export default NavBar;
