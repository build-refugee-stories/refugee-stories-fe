import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import whiteHamburger from '../assets/white-hamburger-menu.png';

function HomeNavBar() {
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
      <div className="home-topnav">
        <NavLink to="/" className="home-nav-item">
          Home
        </NavLink>
        <a className="home-nav-item" href="#">
          About
        </a>
        <NavLink to="/contribute" className="home-nav-item">
          Contribute
        </NavLink>
        <NavLink to="/login" className="home-nav-item">
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
          <NavLink to="/" className="home-dropdown-link">
            Home
          </NavLink>
          <a className="home-dropdown-link" href="#">
            About
          </a>
          <NavLink to="/contribute" className="home-dropdown-link">
            Contribute
          </NavLink>
          <NavLink to="/login" className="home-dropdown-link">
            Admin
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomeNavBar;
