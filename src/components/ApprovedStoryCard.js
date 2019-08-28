import React from 'react';

const ApprovedStoryCard = (props) => {
    return (
        <div className='story-card'>
            <h4>{props.title}</h4>
            <img width="300px" src={props.image}/>
            <button>Learn More</button>
        </div>
    )
}

export default ApprovedStoryCard;