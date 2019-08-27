import React from 'react';
import NavBar from './NavBar.js';
import logo from '../assets/pink-logo.png';
import whiteHamburger from '../assets/white-hamburger-menu.png';

function Header() {
  return (
    <div className="header">
      <img
        className="white-hamburger"
        alt="logo"
        src={whiteHamburger}
        width="50"
        height="39"
      />
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
