import React from 'react';

const Story = (props) => {
    return (
        <div className='story-view'>
            <h3>{props.title}</h3>
            <img src={props.image}/>
            <h4>Author: {props.author}</h4>
            <p>Country: {props.country}</p>
            <p>Year: {props.year}</p>
            <p>{props.text}</p>
            <button>Reject Story</button>
            <button>Accept Story</button>
        </div>
    )
}

export default Story;