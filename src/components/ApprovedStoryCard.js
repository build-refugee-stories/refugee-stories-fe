import React from 'react';
import {Link} from 'react-router-dom';

const ApprovedStoryCard = (props) => {
    return (
        <div className='story-card'>
            <h4>{props.title}</h4>
            <img width="300px" src={props.image}/>
            <Link to={`/stories/${props.storyId}`}>
                <button>Learn More</button>
            </Link>
            
        </div>
    )
}

export default ApprovedStoryCard;