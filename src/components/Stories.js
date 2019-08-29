import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Stories = ({ stories }) => {
  console.log(stories);

  return (
    <div className="stories-container">
      <h1 className="h1">All Refugee Stories</h1>
      <div className="stories-display">
        {stories.map(story => (
          <div className="list-of-stories-home" key={story.id}>
            <Link to={`/story/${story.id}`}>
              <h3 className="story-title">{story.title}</h3>
            </Link>
            <Link to={`/story/${story.id}`}>
              <img src={story.imageUrl} className="story-image" alt="author" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;

/* when click story, use clickHandler to grab the id out of props. 
builds a new url to that story and then redirects*/
