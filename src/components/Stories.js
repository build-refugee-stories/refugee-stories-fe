import React, { useState } from 'react';
import ApprovedStoryCard from './ApprovedStoryCard';
// import {Route} from 'react-router-dom';

const Stories = ({stories}) => {
    console.log(stories);
    
    return (
       <div className='container'>
           <h2>All Refugee Stories</h2>
           <div className='stories-display'>
            {stories.map(story => (
                <ApprovedStoryCard key={story.id} storyId={story.id} title={story.title} image={story.imageUrl}/>))
            }
           </div>
       </div> 
    )
}

export default Stories;

/* when click story, use clickHandler to grab the id out of props. 
builds a new url to that story and then redirects*/