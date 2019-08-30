import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

const StoryView = props => {
  const [story, setStory] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://refugee-stories-api-082019.herokuapp.com/api/public/${id}`)
      .then(res => {
        console.log(res, 'res');
        setStory(res.data);
      })
      .catch(error => console.log(error.response));
  }, []);

  const deleteStory = id => {
    axiosWithAuth()
      .delete(
        `https://refugee-stories-api-082019.herokuapp.com/api/stories/${id}`
      )
      .then(res => {
        console.log('DELETE', res);
        props.history.push('/');
      })
      .catch(error => console.log(error.response));
  };

  let isAdmin = false;
  const adminCheck = () => {
    if (localStorage.getItem('token') !== null) {
      isAdmin = true;
    }
    return isAdmin;
  };
  adminCheck();
  //console.log(isAdmin);
  //Note: the above solution is not secure because a spoof token could be provided. This is a short-term hack to make this feature functional.

  return (
    <div>
      <Header />
      <div className="story-card">
        <h4>{story.title}</h4>
        <img
          className="story-image"
          width="300px"
          alt="Photo of author"
          src={
            story.imageUrl === ''
              ? 'http://via.placeholder.com/350x233'
              : story.imageUrl
          }
        />
        <p className="p">by {story.author}</p>
        <p className="p story-text">{story.story}</p>
        {isAdmin ? (
          <button onClick={() => deleteStory(id)}>Remove Story</button>
        ) : (
          <button onClick={() => props.history.push('/')}>
            Back To All Stories
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StoryView;
