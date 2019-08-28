import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

const ApprovedStoryCard = props => {
  const [story, setStory] = useState({});

  const getStory = () => {
    axios
      .get(
        `https://refugee-stories-api-082019.herokuapp.com/api/public/${props.match.params.id}`
      )
      .then(res => {
        console.log(res, 'res');
        setStory(res.data);
      })
      .catch(error => console.log(error.response));
  };

  useEffect(() => {
    getStory();
  }, []);

  return (
    <div>
      <Header />
      <div className="story-card">
        <h4>{story.title}</h4>
        <img
          className="story-image"
          width="300px"
          alt="author"
          src={story.imageUrl}
        />
        <p className="p">by {story.author}</p>
        <p className="p story-text">{story.story}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ApprovedStoryCard;
