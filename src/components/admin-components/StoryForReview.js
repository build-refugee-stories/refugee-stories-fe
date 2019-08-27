import React from 'react';

const StoryCard = (props) => {
    return (
        <div className='story-card'>
            <h3>{props.title}</h3>
            <img src={props.image}/>
            {/* <h4>by {props.author}</h4> */}
            <button>Review Story</button>
        </div>
    )
}

export default StoryCard;