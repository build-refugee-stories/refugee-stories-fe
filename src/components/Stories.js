import React, { useState } from 'react';
import ApprovedStoryCard from './ApprovedStoryCard';

import { Link } from 'react-router-dom';

const Stories = ({ stories }) => {
  console.log(stories);

  return (
    <div className="container">
      <h2>All Refugee Stories</h2>
      <div className="stories-display">
        {stories.map(story => (
          <h2 key={story.id}>
            <Link to={`/story/${story.id}`} className="list-style">
              {story.id}
            </Link>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Stories;

/* when click story, use clickHandler to grab the id out of props. 
builds a new url to that story and then redirects*/
