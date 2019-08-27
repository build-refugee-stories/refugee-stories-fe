import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import whiteHamburger from '../assets/white-hamburger-menu.png';

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
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
          onClick={handleClick}
          className="white-hamburger"
          alt="hamburger menu"
          src={whiteHamburger}
        />
        <div className={isActive ? 'dropdown-content' : 'dropdown-off'}>
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
