import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar.js';
import logo from '../../assets/white-logo.png';

function AdminConfirmation() {
  return (
    <div className="thankyou-wrapper">
      <div className="header">
        <NavBar />
        <img
          className="pink-logo"
          alt="logo"
          src={logo}
          width="149"
          height="149"
        />
      </div>
      <div className="thankyou-text-container">
        <h1 className="h1">Thank you!</h1>
        <p className="p">
          Our admins will review your application shortly. For any questions or
          concerns, please contact us at refugeestories@example.com
        </p>
      </div>
      <div>
        <div className="bottomnav">
          <NavLink className="nav-item nav-bottom-item">Home</NavLink>
          <NavLink className="nav-item nav-bottom-item" href="#">
            About
          </NavLink>
          <NavLink className="nav-item nav-bottom-item">Contribute</NavLink>
          <NavLink className="nav-item nav-bottom-item">Admin</NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminConfirmation;
