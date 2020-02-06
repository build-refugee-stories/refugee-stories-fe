import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import whiteHamburger from "../assets/white-hamburger-menu.png";
import { tsPropertySignature } from "@babel/types";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function handleMenuClick() {
    setIsActive(true);
  }

  function handleCloseClick() {
    setIsActive(false);
  }

  function logout(event) {
    localStorage.removeItem("token");
  }

  //Placeholder admin check
  let isAdmin = false;
  const adminCheck = () => {
    if (localStorage.getItem("token") !== null) {
      isAdmin = true;
    }
    return isAdmin;
  };
  adminCheck();
  console.log(isAdmin);

  return (
    <div className="navbarcontainer">
      <div className="topnav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        {/* <a className="nav-item" href="https://build-refugee-stories.github.io/david_ui/about-us.html">
          About
        </a> */}
        <NavLink to="/contribute" className="nav-item">
          Contribute
        </NavLink>
        {isAdmin ? (
          <NavLink to="/dashboard" className="home-nav-item">
            Dashboard
          </NavLink>
        ) : (
          <NavLink to="/login" className="home-nav-item">
            Admin
          </NavLink>
        )}
        {isAdmin ? (
          <Link
            to="/"
            onClick={event => logout(event)}
            className="home-nav-item"
          >
            Logout
          </Link>
        ) : (
          ""
          // <NavLink to="/signup" className="home-nav-item">
          //   Admin Signup
          // </NavLink>
        )}
      </div>
      <div className="dropdown">
        {/* <img
          onClick={handleMenuClick}
          className="white-hamburger"
          alt="hamburger menu"
          src={whiteHamburger}
        /> */}
        <div className={isActive ? "dropdown-content" : "dropdown-off"}>
          <div onClick={handleCloseClick} className="close-button">
            x
          </div>
          <NavLink to="/" className="dropdown-link">
            Home
          </NavLink>
          {/* <a className="dropdown-link" href="#">
            About
          </a> */}
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
