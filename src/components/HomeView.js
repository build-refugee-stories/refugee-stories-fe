import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Stories from './Stories';
import Header from './Header';
import Footer from './Footer';
import heroImage from '../assets/story-2.jpg';
import logo from '../assets/white-logo.png';
import pinkLogo from '../assets/pink-blue-logo.png';
import hamburger from '../assets/white-hamburger-menu.png';
import Carousel from './Carousel';
import HomeNavBar from './HomeNavBar.js';
import { NavLink } from 'react-router-dom';

const Homeview = () => {
  const [storyList, setStoryList] = useState([]);

  const getStories = () => {
    axiosWithAuth()
      .get('https://refugee-stories-api-082019.herokuapp.com/api/public')
      .then(res => {
        console.log(res.data);
        setStoryList(res.data);
      })
      .catch(error => console.log(error.response));
  };

  useEffect(() => {
    getStories();
  }, []);
  if (storyList.length === 0) {
    return <div>Loading... </div>;
  }
  return (
    <div className="home-container">
      <HomeNavBar />
      <img src={heroImage} className="hero-image" />
      <img src={logo} className="white-logo" />

      <div className="hero-text">
        <h1 className="hero-title car-headline">Refugee Stories</h1>
        <p className="hero-p">
          “The world will not be destroyed by those who do evil, but by those
          who watch them without doing anything.” — Albert Einstein
        </p>
      </div>
      <button type="submit" className="home-submit-button">
        Share Your Story
      </button>
      <div className="home-container">
        <div className="main-home">
          <Carousel key={storyList.id} stories={storyList} />

          <Stories stories={storyList} />
        </div>
        <div className="footer">
          <p className="p home-footer-text">
            “Storytelling is the most powerful way to put ideas into the world.”
            - Robert McKee
          </p>
          <img
            className="blue-pink-logo"
            alt="logo"
            src={pinkLogo}
            width="210"
            height="281"
          />
          <div className="bottomnav">
            <NavLink to="/" className="nav-item nav-bottom-item">
              Home
            </NavLink>
            <a className="nav-item nav-bottom-item" href="#">
              About
            </a>
            <NavLink to="/contribute" className="nav-item nav-bottom-item">
              Contribute
            </NavLink>
            <NavLink to="/login" className="nav-item nav-bottom-item">
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeview;
