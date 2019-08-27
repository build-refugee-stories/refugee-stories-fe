import React from 'react';

const StoryView = ({stories}) => {
    return (
    <div className = "story-view">
        <h1>{stories.title}</h1>
        <img src={stories.image}/>
        <h3>Author: {stories.author}</h3>
        <h4>Country: {stories.country}</h4>
        <h4>Year: {stories.year}</h4>
        <p>{stories.text}</p>
    </div>
    );
};

export default StoryView;
