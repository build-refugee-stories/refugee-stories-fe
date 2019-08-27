import React from 'react';

import logo from '../assets/pink-logo.png';

import NavBar from './NavBar.js';

function Header() {
  return (
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
  );
}

export default Header;
