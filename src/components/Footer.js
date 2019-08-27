import React from 'react';
import logo from '../assets/pink-blue-logo.png';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <p className="p footer-text">
        “The shortest distance between truth and a human being is a story.” -
        Anthony de Mello
      </p>
      <img
        className="blue-pink-logo"
        alt="logo"
        src={logo}
        width="210"
        height="281"
      />
      <div className="bottomnav">
        <NavLink className="nav-item nav-bottom-item">Home</NavLink>
        <NavLink className="nav-item nav-bottom-item" href="#">
          About
        </NavLink>
        <NavLink className="nav-item nav-bottom-item">Contribute</NavLink>
        <NavLink className="nav-item nav-bottom-item">Admin</NavLink>
      </div>
    </div>
  );
}

export default Footer;
