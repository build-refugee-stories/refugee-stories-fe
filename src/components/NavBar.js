import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import whiteHamburger from '../assets/white-hamburger-menu.png';

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function handleMenuClick() {
    setIsActive(true);
  }

  function handleCloseClick() {
    setIsActive(false);
  }
  return (
    <div className="navbarcontainer">
      <div className="topnav">
        <NavLink className="nav-item">Home</NavLink>
        <NavLink className="nav-item" href="#">
          About
        </NavLink>
        <NavLink className="nav-item">Contribute</NavLink>
        <NavLink className="nav-item">Admin</NavLink>
      </div>
      <div className="dropdown">
        <img
          onClick={handleMenuClick}
          className="white-hamburger"
          alt="hamburger menu"
          src={whiteHamburger}
        />
        <div className={isActive ? 'dropdown-content' : 'dropdown-off'}>
          <div onClick={handleCloseClick} className="close-button">
            x
          </div>
          <NavLink className="dropdown-link" target="_blank">
            Home
          </NavLink>
          <NavLink className="dropdown-link" target="_blank">
            About
          </NavLink>
          <NavLink className="dropdown-link" target="_blank">
            Contribute
          </NavLink>
          <NavLink className="dropdown-link" target="_blank">
            Admin
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
