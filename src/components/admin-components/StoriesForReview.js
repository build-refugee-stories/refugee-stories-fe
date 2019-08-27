import React, { useState } from 'react';

import Story from './StoryForReview';

const StoriesForReview = ({stories}) => {
    console.log(stories);
    return (
       <div className='container'>
           <h2>Stories For Your Review:</h2>
           <div className='stories-display'>
            {stories && stories.map(story => (
                <Story key={story.id} title={story.title} image={story.imageUrl} author={story.author} country={story.country} year={story.year} text={story.story}/>
            ))}
           </div>
       </div> 
    )
}

export default StoriesForReview;