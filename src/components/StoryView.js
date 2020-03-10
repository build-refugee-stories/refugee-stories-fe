
import React, { useState, useEffect, useContext } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

//contexts
import AdminContext from '../contexts/AdminContext';

const StoryView = props => {  

  //const { isAdmin } = useContext(AdminContext);

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

  //Placeholder admin check
  let isAdmin = false;
  const adminCheck = () => {
    if (localStorage.getItem('token') !== null) {
      isAdmin = true;
    }
    return isAdmin;
  };
  adminCheck();
  console.log(isAdmin);
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

        <p className="p">
          {story.title === 'Motherhood in a Ugandan refugee camp' ? (
            <a href="https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed">
              source
            </a>
          ) : (
            ''
          )}
          {story.title ===
          'My little daughter died and my children and I were injured' ? (
            <a href="https://www.islamic-relief.org/six-syrian-refugees-share-their-stories/">
              source
            </a>
          ) : (
            ''
          )}
          {story.title === 'Why are we blacker than everyone else?' ? (
            <a href="https://www.dss.gov.au/settlement-services/meet-isaac">
              source
            </a>
          ) : (
            ''
          )}
          {story.title === 'They would come without warning' ? (
            <a href="https://www.dss.gov.au/settlement-and-multicultural-affairs/evelyns-story">
              source
            </a>
          ) : (
            ''
          )}
          {story.title === 'Waiting to go home' ? (
            <a href="https://www.islamic-relief.org/six-syrian-refugees-share-their-stories/">
              source
            </a>
          ) : (
            ''
          )}
          {story.title ===
          "15 year veteran teacher can't find a teaching job after relocating" ? (
            <a href="https://www.islamic-relief.org/six-syrian-refugees-share-their-stories/">
              source
            </a>
          ) : (
            ''
          )}
          {story.title === 'Alia Fled her home in Alepo' ? (
            <a href="https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed">
              source
            </a>
          ) : (
            ''
          )}
          {story.title === 'Two-year-old escapes Burundi genocide' ? (
            <a href="https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed">
              source
            </a>
          ) : (
            ''
          )}
          {story.title === 'Family split up by conflict' ? (
            <a href="https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed">
              source
            </a>
          ) : (
            ''
          )}
          {story.title === 'Trying to start a new chapter' ? (
            <a href="https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed">
              source
            </a>
          ) : (
            ''
          )}
        </p>
        <p className="p story-text">{story.story}</p>

        {isAdmin ? (
          <button className="submit-button" onClick={() => deleteStory(id)}>
            Remove Story
          </button>
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
