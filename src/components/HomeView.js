import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Stories from './Stories';
import Header from './Header';
import Footer from './Footer';
import heroImage from '../assets/story-2.jpg';
import logo from '../assets/white-logo.png';
import hamburger from '../assets/white-hamburger-menu.png';
import { Route } from 'react-router-dom';

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

  return (
    // <div className="home-container">
    //   <img src={heroImage} className="hero-image" />
    //   <img src={logo} className="white-logo" />
    //   <img src={hamburger} className="home-white-hamburger" />
    // {/* <div className="hero-text">
    //   <h1 className="hero-title">Refugee Stories</h1>
    //   <p className="hero-p">
    //     “The world will not be destroyed by those who do evil, but by those
    //     who watch them without doing anything.” — Albert Einstein
    //   </p>
    // </div> */}
    <div className="home-container">
      <Header />
      <Stories stories={storyList} />
      <Footer />
    </div>
  );
};

export default Homeview;
