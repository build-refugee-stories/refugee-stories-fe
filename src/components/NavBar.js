import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import whiteHamburger from '../assets/white-hamburger-menu.png';
import { tsPropertySignature } from '@babel/types';

function NavBar() {
  
  const [isActive, setIsActive] = useState(false);

  function handleMenuClick() {
    setIsActive(true);
  }

  function handleCloseClick() {
    setIsActive(false);
  }


  // function logout(event) {
  //   localStorage.removeItem("token");
  //   props.history.push("/");
  // }
  

  return (
    <div className="navbarcontainer">
      <div className="topnav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <a className="nav-item" href="#">
          About
        </a>
        <NavLink to="/contribute" className="nav-item">
          Contribute
        </NavLink>
        <NavLink to="/login" className="nav-item">
          Admin
        </NavLink>
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
          <NavLink to="/" className="dropdown-link">
            Home
          </NavLink>
          <a className="dropdown-link" href="#">
            About
          </a>
          <NavLink to="/contribute" className="dropdown-link">
            Contribute
          </NavLink>
          <NavLink to="/login" className="dropdown-link">
            Admin
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
